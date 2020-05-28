import { reactive } from './responsive'

export  class Store {
  constructor(options = {}) {
    let { state, mutations, plugins } = options
    this._vm = reactive(state)
    this._mutations = mutations
    this._subscriptions = []
    plugins.forEach((plugin) => plugin(this) )
  }

  get state() {
    return this._vm
  }

  commit(type, payload) {
    const mutation = this._mutations[type]
    if (!mutation) { return; }
    mutation(this.state, payload)
    this._subscriptions.forEach((subscription) => subscription({ type, payload }, this.state ))
  }
  subscribe(fn) {
    this._subscriptions.includes(fn) || this._subscriptions.push(fn)
  }

}
