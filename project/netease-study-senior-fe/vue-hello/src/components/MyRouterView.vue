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
    return <component />
  },
}
</script>
