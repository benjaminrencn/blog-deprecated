<template>
  <div>
    <button id="proxy-add">add</button>
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
