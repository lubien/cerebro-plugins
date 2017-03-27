import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'vue-nprogress'
import VueResource from 'vue-resource'

Vue.use(NProgress)
Vue.use(VueResource)

const nprogress = new NProgress()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  nprogress,
  render: h => h(App)
})
