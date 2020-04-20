---
lang: zh-CN
description: Vue.js 。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,class 与 style 绑定
---

# class 与 style 绑定

\#Vue.js 教程#
\#DCloud#
\#class 与 style 绑定#

Vue.js 。

## 绑定 class

* `v-bind:class`

### 对象语法

```html
<p :class="{ active: isActive }">class 绑定 对象语法1</p><!-- class="active" -->
<p :class="classObj">class 绑定 对象语法1</p><!-- class="active text-danger" -->
```

```js
// Vue options
data: {
  isActive: true,
  classObj: {
    active: true,
    'text-danger': true,
  },
},
```

### 数组语法

```html
<p :class="[ activeClass, errorClass ]">class 绑定 数组语法1</p><!-- class="active text-danger" -->
<p :class="[ { active: isActive }, errorClass ]">class 绑定 数组语法2</p><!-- class="active text-danger" -->
```

```js
// Vue options
data: {
  activeClass: 'active',
  errorClass: 'text-danger',
},
```

## 绑定 style

* `v-bind:style`

### 对象语法

* css 属性可以采用驼峰式 (camelCase) 或短横线分隔 (kebab-case) 

```html
<p :style="{ color: color, 'font-size': fontSize }">style 绑定 对象语法1</p><!--  color: rgb(255, 0, 0); font-size: 20px; -->
<p :style="styleObj">style 绑定 对象语法2</p><!-- color: rgb(255, 0, 0); font-size: 20px; -->
```

```js
data: {
  color: '#ff0000',
  fontSize: '20px',
  styleObj: {
    color: '#ff0000',
    'font-size': '20px',  
  },
},
```

### 数组语法

```html
<p :style="[ styleObj, baseStyle ]">style 绑定 数组语法</p><!-- color: rgb(255, 0, 0); font-size: 20px; font-style: italic; -->
```

```js
data: {
  styleObj: {
    color: '#ff0000',
    'font-size': '20px',  
  },
  baseStyle: {
    fontStyle: 'italic',
  },
},
```

### 自动添加[浏览器前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)

### 多重值 <Badge text="2.3.0+"/>

* 渲染数组中最后一个被浏览器支持的值

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">多重值</div><!-- display: flex; -->
```

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app7">
  <p :class="{ active: isActive }">class 绑定 对象语法1</p><!-- class="active" -->
  <p :class="classObj">class 绑定 对象语法1</p><!-- class="active text-danger" -->
  <p :class="[ activeClass, errorClass ]">class 绑定 数组语法1</p><!-- class="active text-danger" -->
  <p :class="[ { active: isActive }, errorClass ]">class 绑定 数组语法2</p><!-- class="active text-danger" -->
  <p :style="{ color: color, 'font-size': fontSize }">style 绑定 对象语法1</p><!--  color: rgb(255, 0, 0); font-size: 20px; -->
  <p :style="styleObj">style 绑定 对象语法2</p><!-- color: rgb(255, 0, 0); font-size: 20px; -->
  <p :style="[ styleObj, baseStyle ]">style 绑定 数组语法</p><!-- color: rgb(255, 0, 0); font-size: 20px; font-style: italic; -->
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">多重值</div><!-- display: flex; -->
</div>
```

```js
let vm7 = new Vue({
  el: '#app7',
  data: {
    isActive: true,
    classObj: {
      active: true,
      'text-danger': true,
    },
    activeClass: 'active',
    errorClass: 'text-danger',
    color: '#ff0000',
    fontSize: '20px',
    styleObj: {
      color: '#ff0000',
      'font-size': '20px',  
    },
    baseStyle: {
      fontStyle: 'italic',
    },
  },
});
```