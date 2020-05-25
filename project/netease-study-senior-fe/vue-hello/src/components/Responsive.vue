<template>
  <div>
    <p id="responsive"></p>
  </div>
</template>

<script>
export default {
  mounted() {
    let x, y
    const fn = (n) => n * 100 + 100
    const container = document.querySelector('#responsive')

    let active
    class Dependence {
      constructor() {
        this.deps = new Set()
      }
      depend() {
        active && this.deps.add(active)
      }
      notify() {
        this.deps.forEach((dep) => dep())
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
    const onXChange = (cb) => {
      active = cb
      active()
      active = null
    }

    x = ref(1)
    onXChange(() => {
      y = fn(x.value)
      console.log(y)
      container.innerText = `${container.innerText}, y: ${y}`
    })
    x.value = 2
    x.value = 3
  },
}
</script>
