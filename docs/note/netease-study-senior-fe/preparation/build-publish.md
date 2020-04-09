---
lang: zh-CN
description: 为什么构建发布，及组成内容。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,构建发布,构建发布概述
---

# 构建发布概述

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#构建发布#
\#构建发布概述#

为什么构建发布，及组成内容。

## 为什么

* 加快 Browser Server 间交互
  * 减少传输内容  
    压缩 + 静态资源替换 + 合并精灵图  
    安全（保密）编译（wasm） -> 混淆

## 内容

预编译 -> 合并（减少请求） -> 混淆（安全性、减少体积）

### 预编译

* [Less](http://lesscss.org/)、[Sass](https://sass-lang.com/)、[Stylus](https://www.stylus.com/) -> CSS
* [TypeScript](https://www.typescriptlang.org/)、ES6 -> JavaScript

### 合并

* 首页、类目页、详情页 -> 全部
* 首页、类目页、详情页 -> 三方库、页面
* 首页、类目页、详情页 -> 公共、页面独有

### 混淆

* common.js = uglify -> common.min.js + common.js.map