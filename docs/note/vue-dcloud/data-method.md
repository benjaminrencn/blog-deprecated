---
lang: zh-CN
description: Vue.js 选项 数据 data、实例属性、方法。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,数据与方法
---

# 数据与方法

\#Vue.js 教程#
\#DCloud#
\#数据与方法#

Vue.js 选项 数据 data、实例属性、方法。

## 选项 数据 [`data`](https://cn.vuejs.org/v2/api/#data)

```js
var vm = new Vue({
  data: data,
});
```

* 实例属性、数据源属性会影响到原始数据
* 只有当实例创建时 data 中的属性才是响应式的
* Object.freeze() 阻止对象属性变化
* [实例属性](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)
  * [`vm.$data`](https://cn.vuejs.org/v2/api/#vm-data) 数据对象
  * [`vm.$el`](https://cn.vuejs.org/v2/api/#vm-el) 根 DOM 元素
* [实例方法](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E6%95%B0%E6%8D%AE)
  * [`vm.$watch`](https://cn.vuejs.org/v2/api/#vm-watch) 观察

## 案例

```html
<div id="app3">
    {{ a }} 
    | {{ b }} <!-- [Vue warn] -->
    | {{ c }} 
    | {{ d }}
  </div>
```

```js
let data = { 
  a: 1,
  c: 1,
  d: 1,
};
// Object.freeze(data); // TypeError
let vm = new Vue({
  el: '#app3',
  data: data,
});
console.log(data.a === vm.a); // true
// 设置实例属性、数据源属性会影响到原始数据
vm.a = 2;
console.log(data.a); // 2
data.a = 3;
console.log(vm.a); // 3

// 只有当实例创建时 data 中的属性才是响应式的
vm.b = 'vm.b'; // [Vue warn] vm.b
data.b = 'data.b'; // [Vue warn]
console.log(vm.b); // vm.b
console.log(data.b); // data.b

// Object.freeze() 阻止对象属性变化
// Object.freeze(data);
vm.c = 2;

// 实例属性、方法 前缀 $
// 数据
console.log(vm.$data === data); // true
// 元素
console.log(vm.$el === document.getElementById('app3')); // true
// 观察
vm.$watch('d', (newVal, oldVal) => {
  console.log(`$watch d, newVal: ${newVal}, oldVal: ${oldVal}`); // $watch d, newVal: 2, oldVal: 1
});
vm.$data.d = 2;
```

```shell
# /project/vue-dcloud/vue-demo
# index.html
```