---
lang: zh-CN
description: 微信小程序 事件。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,宿主环境,事件,微信小程序
---

# 事件

\#小程序开发指南#
\#微信小程序团队#
\#宿主环境#
\#事件#
\#微信小程序#

微信小程序 事件、事件类型、事件对象、事件绑定、冒泡捕获。

## 事件

* 用户在渲染层的行为反馈、组建的部分状态反馈抽象为渲染层传递给逻辑层的事件

```html
<!-- page.wxml -->
<view id="tapTest" data-hi="WeChat" bindtap="tapName">Click me!</view>
```

```js
// page.js
Page({
  tapName(event) {
    console.log(event)
  }
})
```

* 事件通过 `bindtap` 绑定
* `Page` 构造函数中定义对应事件处理函数 `tapName`
* 点击达到触发条件生成事件 tap，事件处理函数被执行并收到事件对象 `event`

## 事件类型、事件对象

* 用户在渲染层的行为反馈事件
* [组件相关事件](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)
* 常用事件类型

| 类型                  | 触发条件                                                                   |
| -------------------- | ------------------------------------------------------------------------- |
| `touchstart`         | 手指触摸动作开始                                                            |
| `touchmove`          | 手指触摸后移动                                                              |
| `touchcancel`        | 手指触摸动作被打断，如来电提醒，弹窗                                            |
| `touchend`           | 手指触摸动作结束                                                             |
| `tap`                | 手指触摸后马上离开                                                           |
| `longpress`          | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 |
| `longtap`            | 手指触摸后，超过350ms再离开（推荐使用 `longpress` 事件代替）                     |
| `transitionend`      | 会在 WXSS `transition` 或 `wx.createAnimation` 动画结束后触发                |
| `animationstart`     | 会在一个 WXSS `animation` 动画开始时触发                                      |
| `animationiteration` | 会在一个 WXSS `animation` 一次迭代结束时触发                                   |
| `animationend`       | 会在一个 WXSS `animation` 动画完成时触发                                      |

* 事件对象  
  事件回调触发收到事件对象

| 属性              | 类型      | 说明                                  |
| ---------------- | --------- | ------------------------------------ |
| `type`           | `String`  | 事件类型                              |
| `timeStamp`      | `Integer` | 页面打开到触发事件所经过的毫秒数          |
| `target`         | `Object`  | 触发事件的源头组件的一些属性值集合         |
| `currentTarget`  | `Object`  | 当前事件绑定组件的一些属性值集合           |
| `detail`         | `Object`  | 额外的信息                             |
| `touches`        | `Array`   | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| `changedTouches` | `Array`   | 触摸事件，当前变化的触摸点信息的数组        |

```html
<!-- page.wxml -->
<view id="outer" catchtap="handleTap">
  <view id="inner">点击我</view>
</view>
```

```js
// page.js
Page({
  handleTap: function(evt) {
    // 当点击 inner 节点时
    // evt.target 是 inner view 组件
    // evt.currentTarget 是绑定了 handleTap 的 outer view 组件
    // evt.type == “tap”
    // evt.timeStamp == 1542
    // evt.detail == {x: 270, y: 63}
    // evt.touches == [{identifier: 0, pageX: 270, pageY: 63, clientX: 270, clientY: 63}]
    // evt.changedTouches == [{identifier: 0, pageX: 270, pageY: 63, clientX: 270, clientY: 63}]
  }
})
```

* `target`、`currentTarget` 对象属性

| 属性       | 类型     | 说明                                      |
| --------- | -------- | ---------------------------------------- |
| `id`      | `String` | 当前组件的 `id`                            |
| `tagName` | `String` | 当前组件的类型                              |
| `dataset` | `Object` | 当前组件上由 `data-` 开头的自定义属性组成的集合 |

* `touches`、`changedTouches` 对象属性

| 属性                  | 类型     | 说明                                                           |
| -------------------- | -------- | ------------------------------------------------------------- |
| `identifier`         | `Number` | 触摸点的标识符                                                  |
| `pageX`, `pageY`     | `Number` | 距离文档左上角的距离，文档的左上角为原点 ，横向为 X 轴，纵向为 Y 轴     |
| `clientX`, `clientY` | `Number` | 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴 |

## 事件绑定、冒泡捕获

* 绑定写法与属性写法一致，`key="value"`
* `key`
  * `bind`、`catch` 开头加事件类型
  * `bind` 不取消冒泡阶段
  * `catch` 取消冒泡阶段
  * `bind:`、`catch:` 开头加事件类型 <Badge text="1.5.0"/>
  * `bind`、`catch` 前加 `capture-` 表示捕获阶段，否则是冒泡阶段
  * `capture-catch` 取消冒泡阶段、中断捕获阶段
* `value`
  * 对应 `Page` 构造器中定义的同名函数
* 除事件类型举例的常用事件类型、无特殊声明都是非冒泡事件

```html
<!-- page.wxml -->
<view id="outer" bind:touchstart="handleTap1" capture-bind:touchstart="handleTap2">
  outer view
  <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
    inner view
  </view>
</view>
<!-- 先后调用 handleTap2、handleTap4、handleTap3、handleTap1 -->
```

```html
<!-- page.wxml -->
<view id="outer" bind:touchstart="handleTap1" capture-catch:touchstart="handleTap2">
  outer view
  <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
    inner view
  </view>
</view>
<!-- 只调用 handleTap2 -->
```


