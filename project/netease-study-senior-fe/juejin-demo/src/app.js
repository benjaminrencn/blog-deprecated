import Vue from 'vue'
import intersect from './directive/intersect'
import store from './store'
import router from './router'
import { init as themeInit } from './config/theme'
import { init as localeInit } from './config/locale'
import { init as permissionInit } from './config/permission'
import App from './App.vue'

Vue.directive('intersect', intersect)

themeInit() 
localeInit()
permissionInit()

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
