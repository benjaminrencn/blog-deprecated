---
lang: zh-CN
description: Vue.js 自定义指令创建（钩子函数、钩子函数参数）、场景、实例。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,探索 vue 的组件世界,自定义指令,JavaScript,js,vue.js
---

# 自定义指令

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#探索 vue 的组件世界#
\#自定义指令#
\#JavaScript#
\#js#
\#vue.js#

Vue.js 自定义指令创建（钩子函数、钩子函数参数）、场景、实例。

## 创建

* [`Vue.directive`](https://cn.vuejs.org/v2/api/index.html#Vue-directive) 全局注册
* [Options.`directives`](https://cn.vuejs.org/v2/api/index.html#directives) 局部注册
* `v-xxx` 调用

### 钩子函数

* `bind`
  * 指令第一次绑定元素时调用
  * 只调用一次
  * 用于初始化设置
  * `el.parentNode` 为 `null`
* `inserted`
  * 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）
  * 可以通过 `el.parentNode` 访问当前节点的父节点
* `update`
  * 所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**
  * 指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值（`vnode`、`oldVnode`）来忽略不必要的模板更新
* `componentUpdate`
  * 指令所在组件的 VNode **及其子 VNode** 全部更新后调用
* `unbind`
  * 指令与元素解绑时调用
  * 只调用一次

### 钩子函数参数

* `el`
  * 指令绑定的 元素
  * 用于操作 DOM
* `binding`
  * 对象
  * `name`  
    指令名，不包括 `v-` 前缀
  * `value`  
    绑定值
  * `oldValue`  
    绑定的前一个值  
    仅在 `update`、`componentUpdate` 钩子中可用
  * `expression`  
    指令表达式字符串  
    如 `v-my-directive="1 + 1"` 的 `'1 + 1'`
  * `arg`  
    参数  
    如 `v-my-directive:foo` 的 `'foo'`
  * `modifiers`  
    修饰符  
    如 `v-my-directive.foo.bar` 的 `{ foo: true, bar: true }`
* `vnode`  
  虚拟节点
* `oldVnode`  
  上一个虚拟节点  
  仅在 `update`、`componentUpdate` 钩子中可用
* 除了 `el`，其他参数应该是只读的，切勿进行修改
* 通过 `el`、`dataset` 进行钩子间的数据共享

### 实例

```js
Vue.directive('demo', {
  bind: function (el, binding, vnode) {},
  inserted: function (el, binding, vnode) {},
  update: function (el, binding, vnode, oldVnode) {},
  componentUpdate: (el, binding, vnode, oldVnode) {},
  unbind: function (el, binding, vnode) {},
});
```

## 场景

* 目的
  * 数据驱动
  * 保证 methods 方法做纯粹的业务逻辑，与 DOM 操作解耦
  * 易于测试
* 作用
  * 抽象 methods 方法中 DOM 操作逻辑

## 实例

1. `v-resize` 监听浏览器窗口大小  
   `onResize` 函数相应事件  
   `<div v-resize="onResize">window height is: {{ length }}</div>`
2. 可通过参数 `direction`，控制监听页面高度 或者 宽度的变化  
   `<div v-resize:[direction]="onResize">window height/width is： {{ length }}</div>`
3. 可通过修饰符 `.quiet` 来控制是否在指令初始化的时候响应 `onResize` 函数
   `<div v-resize:quiet="onResize">window height is: {{ length }}</div>`

```js
// /project/netease-study-senior-fe/vue-hello/src/directives/resize.js
/**
 * 监听浏览器窗口尺寸
 * v-resize="func" 回调函数 返回尺寸
 * v-resize:direction 方向 'vertical' 垂直获得高度，默认，'horizontal' 水平获得宽度
 * v-resize.quiet 静默 初始化时候调用回调函数
 */
export default {
  name: 'resize',
  inserted(el, binding) {
    const direction = binding.arg || 'vertical' // 方向
    let result = () => direction === 'vertical' ? window.innerHeight : window.innerWidth // 结果
    const cb = binding.value // 回调函数
    window.addEventListener('resize', () => cb(result())) // 添加监听
    el._onResize = cb
    // 静默
    binding.modifiers.quiet || cb(result())
  },
  unbind(el) {
    if (!el._onResize) { return }
    // 移除监听
    window.removeEventListener('resize', el._onResize)
    delete el._onResize
  }
}
```

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/Directive.vue -->
<template>
  <div>
    <p>v-resize</p>
    <div v-resize="onHeight">window height is: {{ height }}</div>
    <p>:horizontal</p>
    <div v-resize:horizontal="onWidth">window width is: {{ width }}</div>
    <p>.quiet</p>
    <div v-resize:horizontal.quiet="onQuietWidth">window width is: {{ quietWidth }}</div>
  </div>
</template>

<script>
import resize from '@/directives/resize'

export default {
  directives: {
    resize,
  },
  data() {
    return {
      height: 0,
      width: 0,
      quietWidth: 0,
    }
  },
  computed: {
  },
  methods: {
    onHeight(height) {
      this.height = height
    },
    onWidth(width) {
      this.width = width
    },
    onQuietWidth(width) {
      this.quietWidth = width
    },
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 3.1 自定义指令
```
