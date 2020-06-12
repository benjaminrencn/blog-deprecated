---
lang: zh-CN
description: 微信小程序 Hello World 安装微信开发者工具、新建项目、开发。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,介绍与开发环境,Hello World,微信小程序
---

# Hello World

\#小程序开发指南#
\#微信小程序团队#
\#介绍与开发环境#
\#Hello World#
\#微信小程序#

微信小程序 Hello World 安装微信开发者工具、新建项目、开发。

## 安装[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)

## 新建项目

* 微信开发者工具
* 小程序项目 / 小程序
* 新建
  * 项目名称
  * 目录  
    空目录
  * AppID 使用测试号  
    或输入注册的 AppID，后端服务选择不使用云服务
* 清除快速启动模板文件

## 开发

```json
// /project/mp-dev-guide/hello/app.json
{
  "pages": [
    "pages/index/index"
  ]
}
```

微信开发者工具会自动创建页面的 `json`、`wxml`、`wxss`、`js`  
可以删除 `json`、`wxss` 文件

```html
<!-- /project/mp-dev-guide/hello/pages/index/index.wxml -->
<text>Hello World</text>
```

```js
// /project/mp-dev-guide/hello/pages/index/index.js
Page({})
```

* 案例  
  `/project/mp-dev-guide/hello`
