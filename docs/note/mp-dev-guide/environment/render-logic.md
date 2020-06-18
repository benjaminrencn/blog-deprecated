---
lang: zh-CN
description: 微信小程序 渲染层、逻辑层（渲染 Hello World 页面、通信模型、数据驱动）。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,宿主环境,渲染层、逻辑层,微信小程序
---

# 渲染层、逻辑层

\#小程序开发指南#
\#微信小程序团队#
\#宿主环境#
\#渲染层、逻辑层#
\#微信小程序#

微信小程序 渲染层、逻辑层（渲染 Hello World 页面、通信模型、数据驱动）。

* 小程序运行环境
  * 渲染层
    * WXML 模板、WXSS 样式
  * 逻辑层
    * JS 脚本

## 渲染 Hello World 页面

* WXML 模板绑定变量

```html
<view>{{msg}}</view>
```

* JS 脚本设置变量

```js
Page({
  onload: function () {
    this.setData({ msg: 'Hello World' })
  },
})
```

1. 渲染层与数据有关
1. 逻辑层产生、处理数据
1. 逻辑层通过 `Page` 实例的 `setData` 方法传递数据到渲染层

## 通信模型

* 渲染层、逻辑层由2个线程管理
* 渲染层
  * 由 WebView 渲染
  * 多个界面存在多个 WebView 线程
* 逻辑层
  * 由 JsScore 线程运行
* 两个线程的通信经由 Native（微信客户端）中转
* 逻辑层发送网络请求 Native 转发

## 数据驱动

* 绑定状态和视图
* WXML 结构转 JS 对象再转 DOM 树
* `setData` 改变数据，产生的 JS 对象对应节点发生变化，比较差异并应用到 DOM 树上已更新视图

