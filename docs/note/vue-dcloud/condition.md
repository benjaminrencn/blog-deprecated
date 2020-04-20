---
lang: zh-CN
description: Vue.js v-if、v-show、区别。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,条件渲染
---

# 条件渲染

\#Vue.js 教程#
\#DCloud#
\#条件渲染#

Vue.js `v-if`、`v-show`、区别。

## `v-if`、`v-else`、`v-else-if` <Badge text="2.1.0+"/>

* 根据条件进行与渲染

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div><!-- Not A/B/C -->
```

```js
// Vue options
data: {
  type: '',
},
```

## `v-show`

* 根据条件渲染 css 属性 `display`

```html
<div v-show="isShow">show</div><!-- display: none; -->
```

```js
// Vue options
data: {
  isShow: false,
},
```

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app8">
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div><!-- Not A/B/C -->
  <div v-show="isShow">show</div><!-- display: none; -->
</div>
```

```js
let vm8 = new Vue({
  el: '#app8',
  data: {
    type: '',
    isShow: false,
  },
});
```

## `v-if` vs `v-show`

* `v-if`
  * ”真正“的条件渲染  
    确保切换过程中条件块内的事件监听器和子组件适当被销毁和重建
  * **惰性的**  
    初始渲染条件为 falsy 不渲染，直到第一次变为 truthy
  * 切换开销高  
    适合条件改变少的场景
* `v-show`
  * 会渲染，基于 css 属性 `display` 的切换
  * 初始渲染开销高  
    适合条件改变多的场景