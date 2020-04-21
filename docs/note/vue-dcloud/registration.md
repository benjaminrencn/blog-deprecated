---
lang: zh-CN
description: Vue.js 组件名、全局注册、局部注册、模块系统注册。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,组件注册
---

# 组件注册

\#Vue.js 教程#
\#DCloud#
\#组件注册#

Vue.js 组件名、全局注册、局部注册、模块系统注册。

## 组件名

* kebab-case（短横线分隔命名）  
  `Vue.component('my-component-name', { /* ... */ })`  
  `<my-component-name>`
* PascalCase (首字母大写命名)   
  `Vue.component('MyComponentName', { /* ... */ })`  
  `<my-component-name>`、`<MyComponentName>`
* [W3C 规范](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
* [Vue 规范](https://cn.vuejs.org/v2/style-guide/#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%90%8D-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

## 全局注册

* `Vue.component`

## 局部注册

### JavaScript 对象

```js
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }

// ...

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```

### ES2015 模块

```js
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}
```

## 模块系统

### 局部注册

```js
// ComponentB.vue
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}
```

可以在 `ComponentB` 的模板中使用 `ComponentA`、`ComponentC` 了

### 全局注册

```js
// src/main.js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
```