
---
lang: zh-CN
description: Vue.js 组组件、监听子组件事件、插槽。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,组件基础
---

# 组件基础

\#Vue.js 教程#
\#DCloud#
\#组件基础#

Vue.js 组件、监听子组件事件、插槽。

## 组件

* 组件是可复用的 Vue 实例
* 使用 `Vue.component( id, [definition] )` 创建组件  
  * `id` 组件名称  
  * `definition` 定义，与 `new Vue(options)` 选项相同
    * [`props`](https://cn.vuejs.org/v2/api/#props)  
      接收父组件传的数据
    * [`template`](https://cn.vuejs.org/v2/api/#template)  
      模板  
      单个根节点

## 监听子组件事件

* [`vm.$emit( eventName, […args] )`](https://cn.vuejs.org/v2/api/#vm-emit)
  * `eventName` 事件名称
  * `args` 参数

## 插槽 [`<slot>`](https://cn.vuejs.org/v2/api/#slot)

* 通过插槽插入任意 html 内容

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app12">
  <button-counter name="counter1" @count="doClick"></button-counter>
  <button-counter name="counter2" @count="doClick"></button-counter>
</div>
```

```js
Vue.component('button-counter', {
  template: 
    `<div>,
      <button @click="doClick">{{name}} clicked {{count}} times</button>
      <h2>slot h2</h2>
    </div>`,
  props: ['name'],
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    doClick: function () {
      this.count ++;
      this.$emit('count', this.count);
    },
  },
});
let vm12 = new Vue({
  el: '#app12',
  data: {
    
  },
  methods: {
    doClick: function (count) {
      console.log(`sub component count: ${count}`);
    },
  },
});
```