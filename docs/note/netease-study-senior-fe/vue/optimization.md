---
lang: zh-CN
description: Vue 掘金 Top 10 列表页实践 Keep Alive（实践、实现）、无限加载列表实现。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,vue 生态及实践,优化实践,JavaScript,js,vue.js
---

# 优化实践

\#网易云课堂#
\#高级前端开发工程师#
\#Vue# 
\#vue 生态及实践#
\#优化实践#
\#JavaScript#
\#js#
\#vue.js#

Vue 掘金 Top 10 列表页实践 Keep Alive（实践、实现）、无限加载列表实现。

## Keep Alive 实践

```html {7,9}
<!-- /project/netease-study-senior-fe/juejin-demo/src/App.vue -->
<template>
  <div>
    ...

    <div class="m-content">
      <keep-alive max="2">
         <router-view></router-view>
      </keep-alive>
    </div>
    
    ...
  </div>
</template>

...
```

```html {5,11,12,13,14,15}
<!-- /project/netease-study-senior-fe/juejin-demo/src/views/UAbout.vue -->
<template>
  <div class="about">
    about me !!!
    <input type="text" v-model="input" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
}
</script>

...
```

```js {11}
// /project/netease-study-senior-fe/juejin-demo/src/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import { store as topic } from './module/topic/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      role: 'CEO',
    },
  },
  modules: {
    topic,
  }
})
```

```shell
# /project/netease-study-senior-fe/juejin-demo
npm install
npm run dev
# http://localhost:3000/
```

## Keep Alive 实现

```html
<!-- /project/netease-study-senior-fe/juejin-demo/src/components/UKeepAlive.vue -->
<script>
import { getFirstComponentChild, remove } from './../util/vue'

export default {
  name: 'u-keep-alive',
  props: {
    max: [Number, String],
  },
  created() {
    this.cache = Object.create(null)
    this.keys = []
  },
  render() {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions

    if (componentOptions) {
      const { cache, keys } = this
      const key = !!vnode.key 
        ? vnode.key
        : `${componentOptions.Ctor.cid}::${componentOptions.tag || ''}`
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        if (this.max && keys.length > +this.max) {
          const removeKey = keys.shift()
          const cached = cache[removeKey]
          if (cached && (!this._vnode || this._vnode.tag !== cached.tag)) {
            cached.componentInstance.$destory()
          }
          delete cache[removeKey]
        }
      }
      vnode.data.keepAlive = true
    }

    return vnode
  },
}
</script>
```

```html {7,9,17,22,23,24}
<!-- /project/netease-study-senior-fe/juejin-demo/src/App.vue -->
<template>
  <div>
   ...

    <div class="m-content">
      <u-keep-alive max="2">
         <router-view></router-view>
      </u-keep-alive>
    </div>
    
    ...
  </div>
</template>

<script>
import UKeepAlive from './components/UKeepAlive.vue'

...

export default {
  components: {
    UKeepAlive,
  },

  ...
}
</script>
```

```shell
# /project/netease-study-senior-fe/juejin-demo
npm install
npm run dev
# http://localhost:3000/
```

## 无限加载列表实现

```html
<!-- /project/netease-study-senior-fe/juejin-demo/src/module/topic/views/UTopic.vue -->
<template>
  <div>
    
    <u-infinite-list :items="items" :item-height="80" #default="{ sliceItems }">
      <u-list :items="sliceItems"></u-list>
    </u-infinite-list>
    <div class="x-bottom" v-intersect="{ handler: fetchNext }"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('topic')
import UInfiniteList from './../../../components/UInfiniteList.vue'
import UList from './../components/UList.vue'

export default {
  name: 'u-top',
  components: {
    UInfiniteList,
    UList, 
  },

  ...
}
</script>

...
```

```html
<!-- /project/netease-study-senior-fe/juejin-demo/src/components/UInfiniteList.vue -->
<template>
  <div :style="{ padding: padding }">
    {{ items.length }}
    <slot :sliceItems="sliceItems"></slot>
  </div>
</template>

<script>
import { throttle } from './../util/throttle'

export default {
  name: 'u-infinite-list',
  props: {
    items: { required: true },
    itemHeight: { required: true },
  },
  data() {
    return {
      buffer: 5, 
      scrollTop: 0,
      viewportHeight: 0,
    }
  },
  computed: {
    over() {
      return Math.max(
        this.scrollTop / this.itemHeight - this.buffer,
        0)
    },
    down() {
      return Math.min(
        Math.ceil((this.scrollTop + this.viewportHeight) / this.itemHeight + this.buffer),
        this.items.length)
    },
    sliceItems() {
      return this.items.slice(this.over, this.down)
    },
    padding() {
      return `${this.over * this.itemHeight}px 0 ${Math.max(
        (this.items.length - this.down) * this.itemHeight,
        0)}`
    },
  },
  created() {
    this.scrollTop = this.getScrollTop()
    this.viewportHeight = window.innerHeight
    document.addEventListener('scroll', this.onScroll, { passive: true })
  },
  destroyed() {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: throttle(function () {
      this.scrollTop = this.getScrollTop()
      this.viewportHeight = window.innerHeight
    }),
    getScrollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop;
    },
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/juejin-demo
npm install
npm run dev
# http://localhost:3000/
```

```shell
# 源码
# /project/netease-study-senior-fe/juejin-demo.zip
npm install
# yarn
npm run dev
# yarn dev
# http://localhost:3000/
```
