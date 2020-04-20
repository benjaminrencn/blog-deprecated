---
lang: zh-CN
description: Vue.js 模板语法 指令。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,模板语法 - 指令
---

# 模板语法 - 指令

\#Vue.js 教程#
\#DCloud#
\#模板语法 - 指令#

Vue.js 模板语法 指令。

## 指令

* 指令（Directive）是带有 `v-` 的特殊属性。
* 指令的值预期是**单个 JavaScript 表达式**（除 `v-for`）
* 指令的职责是当表达式的值改变时响应式的作用与 DOM

  ```html
  <p v-if="show">show</p>
  <p v-if="hide">hide</p>
  ```

* 参数  
  `:attributeName`

  ```html
  <p><a v-bind:href="url" target="_blank" rel="noopener noreferrer">Vue</a></p>
  ```

* 动态参数  
  `:[attributeName]`
  * 约束  
    字符串、`null`  
    `null` 可被显性的用于移除绑定  
    其他非字符串值将触发警告  
    避免使用 HTML attribute 无效字符，如空格、引号  
    避免使用大写字母，浏览器会强制转换成小写

  ```html
  <a><a v-bind:[attributename]="url" target="_blank" rel="noopener noreferrer">Vue</a></p>
  ```

* 修饰符（modifier）  
  `.modifier`
  
  ```html
  <div v-on:click="click1"><p v-on:click.stop="click2">click</p></div>
  ```

* 缩写
  * `v-bind` -> `:`

    ```html
    <<p><a :href="url" target="_blank" rel="noopener noreferrer">Vue</a></<p>
    ```

  * `v-on` -> `@`

    ```html
    <div @click="click1"><p @click="click2">click</p></div>
    ```

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app6">
  <p v-if="show">show</p>
  <p v-if="hide">hide</p>
  <p><a v-bind:href="url" target="_blank" rel="noopener noreferrer">Vue</a></p>
  <a><a v-bind:[attributename]="url" target="_blank" rel="noopener noreferrer">Vue</a></p>
  <div v-on:click="click1"><p v-on:click.stop="click2">click</p></div>
  <p><a :href="url" target="_blank" rel="noopener noreferrer">Vue</a></p>
  <div @click="click1"><p @click="click2">click</p></div>
</div>
```

```js
let vm6 = new Vue({
  el: '#app6',
  data: {
    show: true,
    hide: false,
    url: 'https://cn.vuejs.org/',
    attributename: 'href',
  },
  methods: {
    click1: function () {
      console.log('click1');
    },
    click2: function () {
      console.log('click2');
    },
  },
});
```