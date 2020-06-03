import Vue from 'vue'
// import Router from 'vue-router'
import Router from '@/utils/router'
import Bar from '@/pages/Bar'
import Foo from '@/pages/Foo'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/bar',
    components: { vueRouterDemo: Bar },
    beforeEnter(to, from, next) {
      console.log('[bar.beforeEnter]', to, from)
      next()
    },
  }, {
    path: '/foo',
    components: { vueRouterDemo: Foo },
    beforeEnter(to, from, next) {
      console.log('[foo.beforeEnter]', to, from)
      next()
    },
  }],
})

router.beforeEach((to, from, next) => {
  console.log('[router.beforeEach]', to, from)
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('[router.beforeResolve]', to, from)
  next()
})

router.afterEach((to, from) => {
  console.log('[router.afterEach]', to, from)
})

export default router
