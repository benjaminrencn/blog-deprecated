<script>
export default {
  name: 'MyRouterView',
  props: ['name'],
  render() {
    const route = this._routerRoot._route
    if (!route) {
      return
    }
    let component = {}
    if (route.component) {
      component = route.component
    }
    if (this.name && route.components && route.components[this.name]) {
      component = route.components[this.name]
    }
    const hook = {
      init(vnode) {
        route.instance = vnode.componentInstance
        console.log('[MyRouterView] vnode: ', vnode)
        console.log('[MyRouterView] route.instance: ', route.instance)
      }
    }
    return <component hook={hook} />
  },
}
</script>
