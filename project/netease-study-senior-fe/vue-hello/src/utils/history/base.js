import { runQueue } from '@/utils/async'

export default class BaseHistory {
  constructor(router) {
    this.router = router
    this.routerTable = router.routerTable
  }
  listen(hook) {
    this.hook = hook
  }
  transitionTo(target) {
    const route = this.routerTable.match(target)
    this.confirmTransition(route, () => this.updateRoute(route))
  }
  confirmTransition(route, onComplete, onAbort) {
    if (route === this.current) { return }

    const iterator = (hook, next) => {
      hook(route, this.current, (to) => {
        if (to === false) { return onAbort && onAbort(to) }
        next(to)
      })
    }
    runQueue([
      ...this.router.beforeHooks,
      route.beforeEnter,
      // TODO route components 逻辑
      route.components.vueRouterDemo && route.components.vueRouterDemo.beforeRouteEnter.bind(route.instance),
      ...this.router.resolveHooks,
    ], iterator, () => onComplete())
  }
  updateRoute(route) {
    const from = this.current
    this.current = route
    this.hook(this.current)
    this.router.afterHooks.forEach((hook) => hook && hook(this.current, from))
  }
}
