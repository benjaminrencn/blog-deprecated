---
lang: zh-CN
description: Vue.js Vue 3.0 Proxy、Reactivity APIs、Vue 2.0 `computed`、`watch`、computed、watch、watchEffect、Proxy、数组操作实现。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,深入 vue 源码设计,computed & watch & watchEffect & Proxy,JavaScript,js,vue.js
---

# computed & watch & watchEffect & Proxy

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#深入 vue 源码设计#
\#computed & watch & watchEffect & Proxy#
\#JavaScript#
\#js#
\#vue.js#

Vue.js Vue 3.0 Proxy、Reactivity APIs、Vue 2.0 `computed`、`watch`、computed、watch、watchEffect、Proxy、数组操作实现。

## Vue 3.0

* [`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) => [`Proxy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  * 其中一个原因 `Object.defineProperty()` 不能监听对象属性添加、删除的变化，需要使用 [`Vue.set`](https://cn.vuejs.org/v2/api/#Vue-set)、[`vm.$set`](https://cn.vuejs.org/v2/api/#vm-set)
  * Vue.js 不会对数组的每一项进行响应式监听，处于性能考虑
  * `Object.defineProperty()` 不能监听数组操作
* [Composition API](https://composition-api.vuejs.org/zh/)
  * [Reactivity APIs](https://composition-api.vuejs.org/api.html#reactivity-apis)
    * `reactive`  
      接收一个普通对象然后返回普通对象的响应式代理
    * `ref`  
      接收一个参数值返回响应式且可改变的 ref 对象，`.value` 属性指向内部值
    * `readonly`  
      传入对象（普通、响应式、ref）返回原始对象的只读代理
    * `computed`  
      传入 getter 函数返回默认不可手动修改的 ref 对象  
      传入有 `get`、`set` 函数的对象返回可手动修改的计算属性
    * `watchEffect`  
      返回停止侦听函数，立即执行传入的函数，并响应式追踪其依赖，变化时重新运行该函数
    * `watch`  
      侦听特定数据源，在回调函数中执行副作用

## Vue 2.0

### [`computed`](https://cn.vuejs.org/v2/api/#computed)

* 计算属性
* 基于内部响应式依赖进行缓存
* 只在相关响应式依赖改变时重新求值
* 可将模板中使用的常量放在计算属性中

### [`watch`](https://cn.vuejs.org/v2/api/#watch)

* 监听数据变化，回调函数中返回数据变化前后两个值
* 用于在数据变化后执行异步操作或开销较大的操作

## computed、watch、watchEffect 实现

```html
<template>
  <div>
    <button @click="add">add</button>
    <p id="computed-watch-watch-effect"></p>
  </div>
</template>

<script>
// 1. const n = computed(() => x.value + 3)
// 2. watch(() => x.value, (newVal, oldVal) => {}, { deep, immediate })
// 3. const stop = watchEffect(() => x.value)
let x
export default {
  mounted() {
    const container = document.querySelector('#computed-watch-watch-effect')

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
    const ref = (initValue) => {
      let value = initValue
      let dep = new Dependence()
      return Object.defineProperty({}, 'value', {
        get() {
          dep.depend()
          return value
        },
        set(newValue) {
          value = newValue
          dep.notify()
        },
      })
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
    const computed = (fn) => {
      let value,
        dirty = true,
        runner = effect(fn, {
          schedular() {
            dirty || (dirty = true)
          },
        })
      return {
        get value() {
          if (dirty) {
            dirty = false
            value = runner()
          }
          return value
        }
      }
    }
    const watch = (source, cb, options = {})  => {
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
    const watchEffect = (cb) => {
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

    x = ref(1)
    let computedValue = computed(() => x.value + 3)
    watch(() => x.value, (newVal, oldVal) => {
      console.log(`[watch] newVal: ${newVal }, oldVal: ${oldVal}`)
    }, { immediate: true })
    let str = ''
    /* eslint-disable */
    const stop = watchEffect(() => {
      str = `x: ${x.value}, computedValue: ${computedValue.value}`
      console.log(`[watchEffect] ${str}`)
      container.innerText = str
    })
    setTimeout(() => {
      stop()
    }, 3000)
  },
  methods: {
    add() {
      x.value++
    },
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 4.4 computed & watch & watchEffect & Proxy computed、watch、watchEffect 实现
```

## Proxy 实现

```html
<template>
  <div>
    <button id="proxy-add" @click="add">add</button>
    <p id="proxy"></p>
  </div>
</template>

<script>
// Object.defineProperty => Proxy
export default {
  mounted() {
    const button = document.getElementById('proxy-add')
    const container = document.querySelector('#proxy')

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
    /* eslint-disable */
    const createReactive = (target, property, value) => {
      let dep = new Dependence()

      // Object.defineProperty
      // return Object.defineProperty(target, property, {
      //   get() {
      //     dep.depend()
      //     return value
      //   },
      //   set(newValue) {
      //     value = newValue
      //     dep.notify()
      //   },
      // })
      // Proxy
      return new Proxy(target, {
        get(target, property) {
          dep.depend()
          return Reflect.get(target, property)
        },
        set(target, property, value) {
          dep.notify()
          return Reflect.set(target, property, value)
        },
      })
    }
    const ref = (value) => createReactive({ value }, 'value', value)
    const set = (target, property, value) => createReactive(target, property, value)
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
    const computed = (fn) => {
      let value,
        dirty = true,
        runner = effect(fn, {
          schedular() {
            dirty || (dirty = true)
          },
        })
      return {
        get value() {
          if (dirty) {
            dirty = false
            value = runner()
          }
          return value
        }
      }
    }
    const watch = (source, cb, options = {})  => {
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
    const watchEffect = (cb) => {
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

    let x = ref(1)
    let computedValue = computed(() => x.value + 3)
    watch(() => x.value, (newVal, oldVal) => {
      console.log(`[watch] newVal: ${newVal }, oldVal: ${oldVal}`)
    }, { immediate: true })
    let str = ''
    // Proxy
    watchEffect(() => {
      str = `x.value: ${x.value}, x.v: ${x.v}, x.w: ${x.w}, computedValue: ${computedValue.value}`
      console.log(`[watchEffect] ${str}`)
      container.innerText = str
    })
    button.addEventListener('click', () => {
      x.value++
      x.v = ++x.v || 1
      // Object.defineProperty
      // if (!x.w) {
      //   set(x, 'w', 2)
      //   watchEffect(() => {
      //     str = `x.value: ${x.value}, x.v: ${x.v}, x.w: ${x.w}, computedValue: ${computedValue.value}`
      //     console.log(`[watchEffect] ${str}`)
      //     container.innerText = str
      //   })
      // }
      x.w++
    })
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 4.4 computed & watch & watchEffect & Proxy Proxy
```

## 数组操作

::: danger 失败
`Object.defineProperty` 数组操作 `push` 能够响应式
:::

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 4.4 computed & watch & watchEffect & Proxy 响应式数组操作
```
