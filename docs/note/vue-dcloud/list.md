---
lang: zh-CN
description: Vue.js 数组、对象形式、维护状态。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,列表渲染
---

# 列表渲染

\#Vue.js 教程#
\#DCloud#
\#列表渲染#

Vue.js 数组、对象形式、维护状态。

## 数组

* `v-for="item in/of items"`  
  `v-for="(item, index) in/of items"`
  * `items` 数组
  * `item` 元素
  * `index` 索引

```html
<ul>
  <li v-for="msg in msgs">{{msg.msg}}</li><!-- React, React, React -->
  <li v-for="(msg, index) of msgs">{{index}}-{{msg.msg}}</li><!-- 0-React, 1-React, 2-ßReact -->
</ul>
```

```js
// Vue options
data: {
  msgs: [
    { msg: 'React' },
    { msg: 'Vue' },
    { msg: 'Angular' },
  ],
},
```

## 对象

* `v-for="value in/of object"`  
  `v-for="(value, name, index) in/of object"`
  * `value` 值
  * `name` 键名
  * `index` 索引
* 按照 `Object.keys()` 遍历，**不能**保证结果在不同 JavaScript 引擎下一致

```html
<ul>
  <li v-for="value in object">{{value}}</li><!-- How to do lists in Vue, Jane Doe, 2016-04-10 -->
  <li v-for="(value, name, index) in object">{{index}}-{{name}}-{{value}}</li><!-- 0-title-How to do lists in Vue, 1-author-Jane Doe, 2-publishedAt-2016-04-10 -->
</ul>
```

```js
// Vue options
data: {
  object: {
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
  },
},
```

## 维护状态

* 提供唯一的基本类型值得 [`key`](https://cn.vuejs.org/v2/api/#key) 属性，以便 Vue 跟踪节点，从而重用、重新排序。

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app9">
  <ul>
    <li v-for="msg in msgs">{{msg.msg}}</li><!-- React, React, React -->
    <li v-for="(msg, index) of msgs" :key="index">{{index}}-{{msg.msg}}</li><!-- 0-React, 1-React, 2-ßReact -->
  </ul>
  <ul>
    <li v-for="value in object">{{value}}</li><!-- How to do lists in Vue, Jane Doe, 2016-04-10 -->
    <li v-for="(value, name, index) in object" :key="name">{{index}}-{{name}}-{{value}}</li><!-- 0-title-How to do lists in Vue, 1-author-Jane Doe, 2-publishedAt-2016-04-10 -->
  </ul>
</div>
```

```js
let vm9 = new Vue({
  el: '#app9',
  data: {
    msgs: [
      { msg: 'React' },
      { msg: 'React' },
      { msg: 'React' },
    ],
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },
  },
});
```