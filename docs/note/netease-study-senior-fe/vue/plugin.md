---
lang: zh-CN
description: Vue.js Mixin 模式、插件。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,探索 vue 的组件世界,插件,JavaScript,js,vue.js
---

# 插件

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#探索 vue 的组件世界#
\#插件#
\#JavaScript#
\#js#
\#vue.js#

Vue.js Mixin 模式、插件。

## Mixin 模式

* Mixin
  * 通过原型继承，扩展对象，实现复用
* [`Vue.mixin`](https://cn.vuejs.org/v2/api/#Vue-mixin)
  * 全局注册混入
  * 会影响所有创建的 Vue 实例
* [`Options.mixin`](https://cn.vuejs.org/v2/api/#mixins)
  * 局部混入
* 同名钩子函数合并为数组，混入对象钩子在组件自身钩子之前调用
* `components`、`directives`、`methods`，合并为一个对象，组件对象覆盖混入对象

### 实例

```js
// /project/netease-study-senior-fe/vue-hello/src/mixins/mixin.js
export default {
  created() {
    console.log('[3.5 mixin] mixin created')
  },
  methods: {
    foo() {
      console.log('[3.5 mixin] mixin foo')
    },
    conflicting() {
      console.log('[3.5 mixin] mixin conflicting')
    },
  },
}
```

```js
// /project/netease-study-senior-fe/vue-hello/src/main.js
import mixin from '@/mixins/mixin'

Vue.mixin(mixin)
```

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/Mixin.vue -->
<template>
  <div>mixin</div>
</template>

<script>
export default {
  created() {
    console.log('[3.5 mixin] component created')
    
    this.conflicting()
  },
  methods: {
    conflicting() {
      console.log('[3.5 mixin] component conflicting')
    },
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 3.5 插件 mixin
```

## 插件

* [`Vue.use`](https://cn.vuejs.org/v2/api/#Vue-use)
  * 安装 Vue.js 插件
  * 接收一个函数或**提供 install**方法的对象作为参数

    ```js {12,14}
    // https://github.com/vuejs/vue/blob/dev/src/core/global-api/use.js
    export function initUse (Vue: GlobalAPI) {
      Vue.use = function (plugin: Function | Object) {
        const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
        if (installedPlugins.indexOf(plugin) > -1) {
          return this
        }

        // additional parameters
        const args = toArray(arguments, 1)
        args.unshift(this)
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args)
        } else if (typeof plugin === 'function') {
          plugin.apply(null, args)
        }
        installedPlugins.push(plugin)
        return this
      }
    }
    ```

  * 如 `Vue.use(Vuex)`

    ```js {7}
    // https://github.com/vuejs/vuex/blob/dev/src/index.js
    import { Store, install } from './store'
    import { mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers } from './helpers'

    export default {
      Store,
      install,
      version: '__VERSION__',
      mapState,
      mapMutations,
      mapGetters,
      mapActions,
      createNamespacedHelpers
    }
    ```

    ```js {6}
    // https://github.com/vuejs/vuex/blob/dev/src/mixin.js
    export default function (Vue) {
      const version = Number(Vue.version.split('.')[0])

      if (version >= 2) {
        Vue.mixin({ beforeCreate: vuexInit })
      } else {
        /* ... */
      }

      function vuexInit () {
        const options = this.$options
        // store injection
        if (options.store) {
          this.$store = typeof options.store === 'function'
            ? options.store()
            : options.store
        } else if (options.parent && options.parent.$store) {
          this.$store = options.parent.$store
        }
      }
    }
    ```