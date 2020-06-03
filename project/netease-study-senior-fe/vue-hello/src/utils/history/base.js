export default class BaseHistory {
  constructor({ routerTable }) {
    this.routerTable = routerTable
  }
  listen(hook) {
    this.hook = hook
  }
  transitionTo(target) {
    const route = this.routerTable.match(target)
    this.current = route
    this.hook(this.current)
  }
}
