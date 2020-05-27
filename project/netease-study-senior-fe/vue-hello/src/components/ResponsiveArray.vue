<template>
  <div>
    <button id="responsive-array-add" >add</button>
    <p id="responsive-array"></p>
  </div>
</template>

<script>
// 响应式数组操作
// push pop shift unshift splice sort reverse
export default {
  mounted() {
    const button = document.getElementById('responsive-array-add')
    const container = document.querySelector('#responsive-array')

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
    /* eslint-disable */
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
    /* eslint-disable */
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
    /* eslint-disable */
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

    let x = set([], 0, 0)
    let str = ''
    watchEffect(() => {
      str = `x[0]: ${x[0]}, x: ${x.join(', ')}`
      console.log(`[watchEffect] ${str}`, x)
      container.innerText = str
    })
    button.addEventListener('click', () => {
      x[0]++
      x.push(x.length)
    })
  },
}
</script>
