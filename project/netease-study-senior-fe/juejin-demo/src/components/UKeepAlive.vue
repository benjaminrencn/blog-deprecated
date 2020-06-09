<script>
import { getFirstComponentChild, remove } from './../util/vue'

export default {
  name: 'u-keep-alive',
  props: {
    max: [Number, String],
  },
  created() {
    this.cache = Object.create(null)
    this.keys = []
  },
  render() {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions

    if (componentOptions) {
      const { cache, keys } = this
      const key = !!vnode.key 
        ? vnode.key
        : `${componentOptions.Ctor.cid}::${componentOptions.tag || ''}`
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        if (this.max && keys.length > +this.max) {
          const removeKey = keys.shift()
          const cached = cache[removeKey]
          if (cached && (!this._vnode || this._vnode.tag !== cached.tag)) {
            cached.componentInstance.$destory()
          }
          delete cache[removeKey]
        }
      }
      vnode.data.keepAlive = true
    }

    return vnode
  },
}
</script>