import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as topic } from './module/topic/router'
import store from './store'
import { PERMISSIONS, getPermissionByRole } from './config/permission'

Vue.use(VueRouter)

const getPermission = (permission) => getPermissionByRole(store.state.user.role)[permission]

export default new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: () => import('./views/UAbout.vue'),
      beforeEnter(to, from, next) {
        getPermission(PERMISSIONS.ABOUT_PAGE) ? next() : next('/403')
      },
    },
    {
      name: '403',
      path: '/403',
      component: () => import('./views/403.vue')
    },
    ...topic,
    { path: '/', redirect: '/hot' }
  ],
})
