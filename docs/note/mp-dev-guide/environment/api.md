---
lang: zh-CN
description: 微信小程序 API。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,宿主环境,API,微信小程序
---

# API

\#小程序开发指南#
\#微信小程序团队#
\#宿主环境#
\#API#
\#微信小程序#

微信小程序 API。

* 小程序 API 几乎挂载在 全局对象 `wx` 下  
  除了 `Page`/`App` 等特殊构造函数
* API 类型
  * 网络
  * 媒体
  * 文件
  * 数据缓存
  * 位置
  * 设备
  * 界面
  * 界面节点信息
  * 特殊的开放接口
* 一般调用约定
    1. `wx.on*` 开头 API 监听某个事件，接收 Callback 函数为参数，事件触发调用
    2. 多数 API 为一部接口，接收 `Object` 为参数
    3. `Object` 参数，一般由 `success`、`fail`、`complete` 函数接收调用结果
    4. `wx.get*` 开头 API 获取宿主环境数据
    5. `wx.set*` 开头 API 写入数据到宿主环境
* 接口回调

| 参数名字    | 类型        | 必填 | 描述                                      |
| ---------- | ---------- | ---- | ---------------------------------------- |
| `success`  | `Function` | 否   | 接口调用成功的回调函数                       |
| `fail`     | `Function` | 否   | 接口调用失败的回调函数                       |
| `complete` | `Function` | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

* 部分 API 会拉起微信原生界面，触发 `Page` 的 `onHide` 方法，返回小程序页面时，触发 `Page` 的 `onShow` 方法

## 延伸

* [小程序 API - 微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/api/)