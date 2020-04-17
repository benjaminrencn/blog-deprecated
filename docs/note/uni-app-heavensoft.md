---
lang: zh-CN
description: uni-app、html、vue、小程序区别。作者：DCloud_heavensoft。原文：https://ask.dcloud.net.cn/article/id-35657
meta:
  - name: keywords
    content: uni-app,uni-app、html、vue、小程序区别,heavensoft
---

# 白话 uni-app - heavensoft

\#uni-app#
\#uni-app、html、vue、小程序区别#
\#heavensoft#

uni-app、html、vue、小程序区别。作者：[DCloud_heavensoft](https://ask.dcloud.net.cn/people/DCloud_heavensoft)。[原文](https://ask.dcloud.net.cn/article/id-35657)。

* 适合人群
  * 已通过[官网](https://uniapp.dcloud.io/)了解 uni-app
  * 熟悉 h5，但对[小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)、[vue](https://cn.vuejs.org/) 不了解

## 网络模型的变化

* b/s  
  服务端代码混合在页面里  
  ↓
* c/s  
  前后端分离  
  通过 js api 获取 json 数据  
  把数据绑定在页面上渲染

## 文件类型的变化

* .html  
  ↓
* .vue

## 文件内代码架构的变化

* `<html />` 根节点里面有 `<style/>`、`<script />`

  ```html
  <!DOCTYPE html>  
  <html>  
      <head>  
          <meta charset="utf-8" />  
          <title></title>  
          <script type="text/javascript">  

          </script>  
          <style type="text/css">  

          </style>  
      </head>  
      <body>  

      </body>  
  </html>
  ```

  ↓

* [Vue 单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)  
  `<template />`、`<script />`、`<style />` 并列一级节点

  ```html
  <template>
    <p>{{ greeting }} World!</p>
  </template>

  <script>
  module.export = {
    data: function () {
      return {
        greeting: 'Hello',
      };
    },
  };
  </script>

  <style scoped>
  p {
    font-size: 2em;
  }
  </style>
  ```

## 外部文件引用方式发生变化

* `<script src=""></script>` 引用 js  
  `<link href="" />` 引用 css  
  ↓
* `import`、`require` 引用 js、组件  
  `@import` 引用 css

## 标签、组件的变化

* html 标签  
  ↓
* 小程序组件
  * `div` 改成 [`view`](https://uniapp.dcloud.io/component/view)
  * `span`、`font` 改成 [`text`](https://uniapp.dcloud.io/component/text)
  * `a` 改成 [`navigator`](https://uniapp.dcloud.io/component/navigator)
  * `img` 改成 [`image`](https://uniapp.dcloud.io/component/image)
  * [`form`](https://uniapp.dcloud.io/component/form)、[`input`](https://uniapp.dcloud.io/component/input)、[`button`](https://uniapp.dcloud.io/component/button)、[`checkbox`](https://uniapp.dcloud.io/component/checkbox)、[`radio`](https://uniapp.dcloud.io/component/radio)、[`label`](https://uniapp.dcloud.io/component/label)、[`textarea`](https://uniapp.dcloud.io/component/textarea)、[`canvas`](https://uniapp.dcloud.io/component/canvas)、[`video`](https://uniapp.dcloud.io/component/video) 还在。
  * `select` 改成 [`picker`](https://uniapp.dcloud.io/component/picker)
  * `iframe` 改成 [`web-view`](https://uniapp.dcloud.io/component/web-view)
  * `ul`、`li` 没有了，都用 [`view`](https://uniapp.dcloud.io/component/view)替代
  * `audio` 改成 api 方式，[背景音频api文档](https://uniapp.dcloud.io/api/media/background-audio-manager)
* uni-app 编译器会把老标签转成新标签  
  但不推荐使用老标签，调试 H5 端容易混乱
* 新组件
  * [`scroll-view`](https://uniapp.dcloud.io/component/scroll-view) 可区域滚动视图容器
  * [`swiper`](https://uniapp.dcloud.io/component/swiper) 可滑动区域视图容器
  * [`icon`](https://uniapp.dcloud.io/component/icon) 图标
  * [`rich-text`](https://uniapp.dcloud.io/component/rich-text) 富文本（不可执行js，但可渲染各种文字格式和图片）
  * [`progress`](https://uniapp.dcloud.io/component/progress) 进度条
  * [`slider`](https://uniapp.dcloud.io/component/slider) 滑块指示器
  * [`switch`](https://uniapp.dcloud.io/component/switch) 开关选择器
  * [`camera`](https://uniapp.dcloud.io/component/camera) 相机
  * [`live-player`](https://uniapp.dcloud.io/component/live-player) 直播
  * [`map`](https://uniapp.dcloud.io/component/map) 地图
  * [`cover-view`](https://uniapp.dcloud.io/component/cover-view?id=cover-view) 可覆盖原生组件的视图容器
* [插件市场](https://ext.dcloud.net.cn/)

## js 的变化

* 运行环境浏览器 -> v8 引擎
  * 浏览器专用的 `window`、`document`、`navigator`、`location`、`cookie`、`sessionStorage`、`localStorage` 等  
    app、小程序不支持（`web-view` 组件内支持）
* dom 操作 -> vue 的 MVVM 模式
  * 使用 vue 的数据绑定方式  
    不支持小程序的数据绑定方式 `setData`
* api 的变化
  * `alert`、`confirm` 改成 [`uni.showModal`](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
  * `ajax` 改成 [`uni.request`](https://uniapp.dcloud.io/api/request/request)
  * `cookie`、`sessionStorage`、`localStorage` 改成 [`uni.setStorage`](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)
  * 支持小程序 [api](https://uniapp.dcloud.io/api/README)，wx.xxx 改成 uni.xxx
  * 不同端支持[条件编译](https://uniapp.dcloud.io/platform)

## css 的变化

* 基本支持标准 css
* `*` 选择器不支持
* `body` 改成 `page`
* 尺寸单位推荐 `rpx`
* 推荐 flex 布局
* 图片、字体文件大于 40k，需放服务端或 base64 引用

## 工程结构和页面管理

```
┌─components            uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                存放本地网页的目录，[详见](https://uniapp.dcloud.io/component/web-view)
├─platforms             存放各平台专用页面的目录，[详见](https://uniapp.dcloud.io/platform?id=%E6%95%B4%E4%BD%93%E7%9B%AE%E5%BD%95%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─wxcomponents          存放小程序组件的目录，[详见](https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 [应用生命周期](https://uniapp.dcloud.io/frame?id=%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，[详见](https://uniapp.dcloud.io/collocation/manifest)
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，[详见](https://uniapp.dcloud.io/collocation/pages)
```