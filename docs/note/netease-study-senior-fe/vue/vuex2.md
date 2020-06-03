---
lang: zh-CN
description: Vuex 响应式原理、模块化（modules、命名空间、跨模块访问）。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,vue 生态及实践,vuex 下,JavaScript,js,vue.js
---

# vuex 下

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#vue 生态及实践#
\#vuex 下#
\#JavaScript#
\#js#
\#vue.js#

Vuex 响应式原理、模块化（`modules`、命名空间、跨模块访问）。

## 响应式原理

```js
// /project/netease-study-senior-fe/vue-hello/src/utils/responsive.js
let active
class Dependence {
  constructor() {
    this.deps = new Set()
  }
  depend() {
    active
      && this.deps.add(active)
      && active.deps.push(this.deps)
  }
  notify() {
    this.deps.forEach((dep) => {
      addQueue(dep)
      dep.options && dep.options.schedular && dep.options.schedular()
    })
  }
}
let queue = []
const addQueue = (task) => {
  if (!queue.includes(task)) {
    queue.push(task)
    nextTick(executeQueue)
  }
}
const executeQueue = () => {
  let task
  while (queue.length > 0) {
    task = queue.shift()
    task && task()
  }
}
const nextTick = (cb) => Promise.resolve().then(cb)
const createReactive = (target, property, value) => {
  let dep = new Dependence()

  // Object.defineProperty
  return Object.defineProperty(target, property, {
    get() {
      dep.depend()
      return value
    },
    set(newValue) {
      value = newValue
      dep.notify()
    },
  })
  // Proxy
  // return new Proxy(target, {
  //   get(target, property) {
  //     dep.depend()
  //     return Reflect.get(target, property)
  //   },
  //   set(target, property, value) {
  //     dep.notify()
  //     return Reflect.set(target, property, value)
  //   },
  // })
}
export const reactive = (obj) => {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    createReactive(obj, key, value)
  })
  return obj
}
const effect = (fn, options = {}) => {
  let effect = (...args) => {
    try {
      active = effect
      return fn(...args)
    } finally {
      active = null
    }
  }
  effect.deps = []
  effect.options = options
  return effect
}
export const watch = (source, cb, options = {})  => {
  const { immediate } = options
  const getter = () => source()
  let oldVal
  const runner = effect(getter, {
    schedular: () => applyCb(),
  })
  const applyCb = () => {
    let newVal = runner()
    oldVal !== newVal && cb(newVal, oldVal)
    oldVal = newVal
  }
  if (immediate) {
    applyCb()
  } else {
    oldVal = runner()
  }
}
export const watchEffect = (cb) => {
  const runner = effect(cb)
  runner()

  return () => {
    cleanEffect(runner)
  }
}
const cleanEffect = (effect) => {
  const { deps } = effect
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect)
    }
  }
}
```

```js
// /project/netease-study-senior-fe/vue-hello/src/utils/vuex.js
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
```

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/MyVuex.vue -->
<template>
  <div>
    <button id="my-vuex-add">add 3</button>
    <p id="my-vuex"></p>
  </div>
</template>

<script>
import { Store } from '@/utils/vuex'
import { watchEffect } from '@/utils/responsive'

export default {
  mounted() {
    const store = new Store({
      state: {
        count: 0,
      },
      mutations: {
        addCount(state, payload = 1) {
          state.count += payload
        }
      },
      plugins: [
        (store) => store.subscribe((mutation) => console.log('[my vuex] mutaion: ', mutation)),
      ],
    })

    const button = document.getElementById('my-vuex-add')
    button.addEventListener('click', function () {
        store.commit('addCount', 3)
    })
    const container = document.getElementById('my-vuex')
    watchEffect(() => {
      container.innerText = `count: ${store.state.count}`
    })

  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 5.2 vuex 下
```

## 模块化 [Module](https://vuex.vuejs.org/zh/guide/modules.html)

### modules

* Vuex.Store 构造器选项
  * [`modules`](https://vuex.vuejs.org/zh/api/#modules)
* 模块中的状态是局部状态

### 命名空间

* 默认情况下，模块内部的 getters、mutation、action 注册在**全局命名空间**的
* `namespaced: true` 使模块带有命名空间  
  使 getters、mutation、action 注册在该命名空间如：`moduleA/getterA`

### 跨模块访问

* `rootState`、`rootGetters`、`commit()`、`dispatch()` options 中的 `{ root: true }` 访问根模块