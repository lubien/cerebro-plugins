<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bulma/css/bulma.css'
  import 'nprogress/nprogress.css'
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nprogress .bar {
  background-color: #3273DC;
}

#nprogress .spinner {
  display: none;
}
</style>
