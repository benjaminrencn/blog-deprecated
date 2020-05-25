<template>
  <div>
    <p id="next-tick"></p>
  </div>
</template>

<script>
export default {
  mounted() {
    let x, y, z
    const container = document.querySelector('#next-tick')

    let active
    class Dependence {
      constructor() {
        this.deps = new Set()
      }
      depend() {
        active && this.deps.add(active)
      }
      notify() {
        this.deps.forEach((dep) => addQueue(dep))
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
    const watch = (cb) => {
      active = cb
      active()
      active = null
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

    x = ref(1)
    y = ref(2)
    z = ref(3)
    watch(() => {
      let str = `x: ${x.value}, y: ${y.value}, z: ${z.value}`
      console.log(`[next tick] ${str}`)
      container.innerText = `${container.innerText} | ${str}`
    })
    x.value = 4
    y.value = 5
    z.value = 6
  },
}
</script>
