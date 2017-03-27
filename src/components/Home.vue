<template>
  <div>
    <section class="hero is-primary is-small">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                Cerebro<b>Plugins</b>
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <router-link :to="{name: 'Home'}" class="nav-item is-active">
                Home
              </router-link>
              <span class="nav-item">
                <a
                  class="button is-primary is-inverted"
                  href="https://github.com/lubien/cerebro-plugins"
                  target="_blank"
                >
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Contribute</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div>
            <div class="field has-addons">
              <p class="control is-expanded">
                <input
                  v-model="query"
                  @keyup.esc="resetQuery"
                  class="input"
                  type="text"
                  placeholder="Find a plugins. Esc to clear this input."
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container search-container">
      <article v-for="plugin in plugins" class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a
                  :href="`https://www.npmjs.com/package/${plugin.name}`"
                  target="_blank"
                >
                  {{plugin.name}}
                </a>
              </strong>
              <small>
                <a
                  :href="`https://www.npmjs.com/~${plugin.author.username}`"
                  target="_blank">
                  @{{plugin.author.username}}
                </a>
              </small>
              <small>{{plugin.version}}</small>
              <br>
              {{plugin.description}}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a v-if="plugin.repo" :href="plugin.repo" target="_blank" class="level-item">
                <span class="icon"><i class="fa fa-github"></i></span> Repository
              </a>
              <a v-if="plugin.homepage" :href="plugin.homepage" target="_blank" class="level-item">
                <span class="icon"><i class="fa fa-globe"></i></span> Homepage
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  import {compareTwoStrings} from 'string-similarity'

  const API_BASE = 'https://registry.npmjs.com/-/v1/search'

  const pipe = (...fs) => y => fs.reduce((x, f) => f(x), y)

  const map = f => xs => xs.map(f)

  const sort = f => xs => xs.sort(f)

  const getIn = ([prop, ...props]) => obj =>
    props.length
      ? getIn(props)(obj[prop])
      : obj[prop]

  const sortBestMatch = query => (a, b) => {
    const matchA = compareTwoStrings(query, a.name)
    const matchB = compareTwoStrings(query, b.name)
    return matchB - matchA
  }

  const randSort = sort(() => Math.random() - Math.random())

  export default {
    name: 'Home',
    data () {
      return {
        query: '',
        packages: []
      }
    },
    computed: {
      plugins () {
        return sort(sortBestMatch(this.query))(this.packages)
      }
    },
    created () {
      const params = {
        from: 0,
        size: 500,
        text: `keywords:cerebro-plugin ${this.query}`
      }

      this.$http.get(API_BASE, {params})
        .then(pipe(
          getIn(['data', 'objects']),
          map(({package: pkg}) => ({
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
            homepage: pkg.links.homepage,
            repo: pkg.links.repository,
            author: pkg.author
          })),
          randSort,
          packages => {
            this.packages = packages
          }
        ))
    },
    methods: {
      resetQuery () {
        this.query = ''
      }
    }
  }
</script>

<style>
.search-container {
  padding-top: 25px;
}
</style>
