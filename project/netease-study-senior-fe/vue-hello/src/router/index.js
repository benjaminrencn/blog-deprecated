import Vue from 'vue'
// import Router from 'vue-router'
import Router from '@/utils/router'
import Bar from '@/pages/Bar'
import Foo from '@/pages/Foo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/bar', components: { vueRouterDemo: Bar } },
    { path: '/foo', components: { vueRouterDemo: Foo } },
  ],
})
