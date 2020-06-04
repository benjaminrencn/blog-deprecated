import Vue from 'vue'
import intersect from './directive/intersect'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.directive('intersect', intersect)

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
