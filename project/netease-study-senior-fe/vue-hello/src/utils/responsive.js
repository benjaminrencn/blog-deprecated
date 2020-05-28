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
