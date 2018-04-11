// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.styl'
import axios from 'axios'

import './assets/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    queryLists: []
  },
  mutations: {
    setQueryLists (state, data) {
      state.queryLists = data
    }
  }
})

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
