---
lang: zh-CN
description: Vue.js 模板语法 插值。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,模板语法 - 插值
---

# 模板语法 - 插值

\#Vue.js 教程#
\#DCloud#
\#模板语法 - 插值#

Vue.js 模板语法 插值。

## 模板语法

* Vue 使用了基于 HTML 的模板语法  
  允许声明式地将 DOM 绑定至底层 Vue 实例的数据

## 插值

### 文本

* Mustache 语法（双大括号）

  ```html
  <span>Msg: {{ msg }}</span>
  ```

* 指令 [`v-once`](https://cn.vuejs.org/v2/api/#v-once)  
  只渲染元素、组件一次

  ``html
  <span v-once>Msg: {{ msg }}</span>
  ```

### HTML

* 指令 [`v-html`](https://cn.vuejs.org/v2/api/#v-html)  
  更新 `innerHTML`

  ```html
  <div v-html="html"></div>
  ```

### 属性

* 指令 [`v-bind`](https://cn.vuejs.org/v2/api/#v-bind)  
  动态绑定属性、组件 prop。

  ```html
  <img v-bind:src="imageSrc">
  <!-- 缩写 -->
  <img :src="imageSrc">
  ```

### JavaScript 表达式

* 单个表达式

  ```html
  {{ number + 1 }}
  {{ ok ? 'YES' : 'NO' }}
  {{ message.split('').reverse().join('') }}
  ```

## 案例

```html
<div id="app5">
  <p>{{ a }}</p>
  <p v-once>{{ a }}</p>
  <p>{{rawHTML}}</p>
  <p v-html="rawHTML"></p>
  <div v-bind:class=""></div>
  <p v-bind:class="red">red</p>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
  <p>{{ message.split('').reverse().join('') }}</p>
</div>
```

```js
let vm5 = new Vue({
  el: '#app5',
  data: {
    a: 'hello vue',
    rawHTML: '<span style="color: red">red</span>',
    red: 'red',
    number: 1,
    ok: false,
    message: 'hello world',
  },
});
setTimeout(function () {
  vm5.$data.a = 'change';
}, 2000);
```

```css
.red {
  color: red;
}
```

```shell
# /project/vue-dcloud/vue-demo
# index.html
```
