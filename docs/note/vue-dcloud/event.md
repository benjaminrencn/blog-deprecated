---
lang: zh-CN
description: Vue.js 绑定事件、事件修饰符。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,事件绑定
---

# 事件绑定

\#Vue.js 教程#
\#DCloud#
\#事件绑定#

Vue.js 绑定事件、事件修饰符。

## 绑定事件

- `v-on/@="javascript"`  
  `v-on/@="method"`  
  `v-on/@="method(args)"`

```html
<button @click="count ++">计数 {{count}}</button>
<button @click="greet($event)">greet</button>
```

```js
// Vue options
data: {
  count: 0,
},
methods: {
  greet: function (event) {
    console.log(`greet, count: ${this.count}, event:`, event);
  },
},
```

## [事件修饰符](https://cn.vuejs.org/v2/api/#v-on)

- `.modifier`
  - `.stop`
  - `.prevent`
  - `.capture`
  - `.self`
  - `.once` <Badge text="2.1.4+"/>
  - `.passive` <Badge text="2.3.0+"/>
- 能串联

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app10">
  <button @click="count ++">计数 {{count}}</button>
  <button @click="greet($event)">greet</button>
</div>
```

```js
let vm10 = new Vue({
  el: '#app10',
  data: {
    count: 0,
  },
  methods: {
    greet: function (event) {
      console.log(`greet, count: ${this.count}, event:`, event);
    },
  },
});
```
