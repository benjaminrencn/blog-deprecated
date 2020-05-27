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
