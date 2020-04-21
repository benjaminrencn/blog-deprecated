---
lang: zh-CN
description: Vue.js cli、uni-app + HBuilderX。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,免终端开发 vue 应用
---

# 免终端开发 vue 应用

\#Vue.js 教程#
\#DCloud#
\#免终端开发 vue 应用#

Vue.js cli、uni-app + HBuilderX。

## cli

* 命令行
* 难点
  * 搭建项目环境
  * 运行和发布项目
  * 配置 less、sass、typescript、babel 等预编译器
  * 安装组件库

## uni-app + HBuilderX

* uni-app 框架
* HBuilderX IDE
* 使用
  * 文件 -> 新建 -> 项目 -> 选择 uni-app -> 输入项目名称 uni-app -> 选择位置 -> 选择默认模板 -> 创建
  * 目录结构

    ```
    /
    ├- pages          页面
    ├- static         静态资源
    ├- main.js        Vue 初始化入口文件
    ├- App.vue        应用配置（全局生命周期监听、全局样式）
    ├- manifest.json  配置应用信息（应用名称、appid、icon、版本）
    └- pages.json     记录页面路由、导航条、选项卡等页面信息
    ```

* 运行 -> 运行到浏览器
* 发行 -> 网站 H5 手机版
* 工具 -> 插件安装
* uni-app [组件](https://uniapp.dcloud.io/component/README)
* [插件市场](https://ext.dcloud.net.cn/)
* components 目录 -> 新建组件 -> 输入组件名称 -> 输入位置 -> 选择默认模板 -> 创建

## 案例

```shell
# HBuilderX
# /project/vue-dcloud/uni-app
```

