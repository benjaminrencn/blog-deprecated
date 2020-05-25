<template>
  <div>
    <p id="multi-responsive"></p>
  </div>
</template>

<script>
export default {
  mounted() {
    let x, y, z
    const container = document.querySelector('#multi-responsive')

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
    y = ref(2)
    z = ref(3)
    onXChange(() => {
      let str = `x: ${x.value}, y: ${y.value}, z: ${z.value}`
      console.log(str)
      container.innerText = `${container.innerText} | ${str}`
    })
    x.value = 4
    y.value = 5
    z.value = 6
  },
}
</script>
