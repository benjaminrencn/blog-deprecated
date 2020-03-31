---
lang: zh-CN
description: 重要性、常见规范、示例、如何定制规范。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,工程规范,工程化规范概述
---

# 工程化规范概述

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#工程规范#
\#工程化规范概述#

重要性、常见规范、示例、如何定制规范。

## 重要性

* 降低沟通成本
* 提升工作效率
* 自动化工具
* 传承

## 规范

* 编码规范
* 工程结构规范
* 前后端写作规范

## 示例

### [Html5 Boilerplate](https://html5boilerplate.com)

```
.
├─ css  // 样式
│  ├─ main.css      // 页面样式
│  └─ normalize.css // reset css
├─ img        // 图片
├─ index.html // 入口文件
└─ js
   ├─ main.js     // 页面逻辑代码
   ├─ plugins.js  // 插件代码 工具 
   └─ vendor      // 库文件
      ├─ jquery-1.10.2.min.js
      └─ modernizr-2.6.2.min.js
```

### [Web Starter Kit](https://github.com/google/web-starter-kit)

```
.
└─ app
   ├─ images  // 图片
   │  └─ hamburger.svg 
   ├─ index.html  // 入口文件
   ├─ script
   │  └─ main.js  // 页面逻辑代码
   └─ styles
      └─ main.css // 页面样式

```

## 如何定制规范

* 参考业界规范
* 民主讨论
* 结果导向
* 不断完善

## 延伸

* [Modernizr](https://modernizr.com/)