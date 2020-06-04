import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as topic } from './module/topic/router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    ...topic,
    { path: '/', redirect: '/hot' }
  ],
})
