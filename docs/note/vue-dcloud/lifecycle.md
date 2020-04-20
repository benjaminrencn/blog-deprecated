---
lang: zh-CN
description: Vue.js 生命周期。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,生命周期
---

# 生命周期

\#Vue.js 教程#
\#DCloud#
\#生命周期#

Vue.js 生命周期。

## 生命周期

* Vue 实例被创建后经历不同的生命周期阶段，如：设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。  
  同时执行[**生命周期钩子**](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)，给用户添加自己的代码。

::: danger
不要在选项属性、回调上使用 `=>` 钩子函数  
如 `created: () => {}`、`vm.$watch('a', () => this.myMethod() )`  
经常导致 `Uncaught TypeError: Cannot read property of undefined`、`Uncaught TypeError: this.myMethod is not a function` 错误
:::

* `beforeCreate`  
  在实例初始化之后，数据观测（data observer）和 event/watcher 事件配置之前被调用。
* `created`  
  在实例创建完成后被调用。  
  此时，实力已经完成以下配置：数据观测（data observer）、属性和方法的运算、watch/event 事件回调。  
  挂载阶段未开始，`$el` 属性尚不可用。
* `beforeMount`  
  在挂载开始前被调用，相关 `render` 首次被调用。  
  **该钩子在服务器端渲染期间不被调用**
* `mounted`  
  在实例挂载完成后被调用。
  此时，`el` 被 `$el` 替换。
  `mounted` 不保证所有子元素被挂载。可以使用 [`vm.$nextTick`])(https://cn.vuejs.org/v2/api/#vm-nextTick) 等到整个视图渲染完毕。
  **该钩子在服务器端渲染期间不被调用**
* `beforeUpdate`  
  在数据更新前被调用，在虚拟 DOM 打补丁之前。  
  适合在更新前访问 DOM，如手动移除事件监听器。  
  **该钩子在服务器端渲染期间不被调用**
* `updated`  
  在数据更新导致虚拟 DOM 重新渲染和打补丁后被调用。  
  此时，大多数情况下避免在此期间更改状态。如要更改状态，使用[计算属性](https://cn.vuejs.org/v2/api/#computed)、[watcher](https://cn.vuejs.org/v2/api/#watch)。
  不保证所有子元素被重绘。可以使用 [`vm.$nextTick`])(https://cn.vuejs.org/v2/api/#vm-nextTick) 等到整个视图重绘完毕。  
  **该钩子在服务器端渲染期间不被调用**
* `activated`  
  在 [`keep-alive`](https://cn.vuejs.org/v2/api/#keep-alive) 缓存的组件激活时被调用。  
  **该钩子在服务器端渲染期间不被调用**
* `deactivated`
  在 [`keep-alive`](https://cn.vuejs.org/v2/api/#keep-alive) 缓存的组件停用时被调用。  
  **该钩子在服务器端渲染期间不被调用**
* `beforeDestroy`  
  在实例销毁之前被调用。
  **该钩子在服务器端渲染期间不被调用**
* `destroyed`  
  在市里销毁之后被调用。  
  Vue 实例所有指令被解绑，事件监听被移除，子实例也被销毁。  
  **该钩子在服务器端渲染期间不被调用**
* `errorCaptured`  
  在捕获子孙组件错误时被调用。

## 图示

![生命周期](./image/lifecycle.png)

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app4">{{ a }}</div>
```

```js
let vm4 = new Vue({
  el: '#app4',
  data: {
    a: 1,
  },
  beforeCreate: function () {
    console.log('beforeCreate');
  },
  created: function () {
    console.log('created');
  },
  beforeMount: function () {
    console.log('beforeMount');
  },
  mounted: function () {
    console.log('mounted');
  },
  beforeUpdate: function () {
    console.log('beforeUpdate');
  },
  updated: function () {
    console.log('updated');
  },
  beforeDestroy: function () {
    console.log('beforeDestroy');
  },
  destroyed: function () {
    console.log('destroyed');
  },
});
setTimeout(function () {
  vm4.a = 2;
}, 2000);
```