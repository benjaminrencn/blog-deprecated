---
lang: zh-CN
description: 微信小程序 HTTPS 网络通信、wx.request、服务器接口、请求参数、收到回包、一般使用技巧（超时设置、请求前后的状态处理）、排查异常的方法。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,应用场景,HTTPS 网络通信,微信小程序
---

# HTTPS 网络通信

\#小程序开发指南#
\#微信小程序团队#
\#应用场景#
\#HTTPS 网络通信#
\#微信小程序#

微信小程序 HTTPS 网络通信、`wx.request`、服务器接口、请求参数、收到回包、一般使用技巧（超时设置、请求前后的状态处理）、排查异常的方法。

## [`wx.request`](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

* `wx.request` 参数

| 参数名      | 类型               | 必填 | 默认值  | 描述                                                                                              |
| ---------- | ----------------- | ---- | -----  | ------------------------------------------------------------------------------------------------ |
| `url`      | `String`          | 是   |        | 开发者服务器接口地址                                                                                 |
| `data`     | `Object`/`String` | 否   |        | 请求的参数                                                                                          |
| `header`   | `Object`          | 否   |        | 设置请求的 `header`，`header` 中不能设置 `Referer`，默认 `header['content-type'] = 'application/json'` |
| `method`   | `String`          | 否   | `GET`  | （需大写）有效值：`OPTIONS`, `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `TRACE`, `CONNECT`              |
| `dataType` | `String`          | 否   | `json` | 回包的内容格式，如果设为 `json`，会尝试对返回的数据做一次 JSON 解析                                        |
| `success`  | `Function`        | 否   |        | 收到开发者服务成功返回的回调函数，其参数是一个 Object                                                     |
| `fail`     | `Function`        | 否   |        | 接口调用失败的回调函数                                                                                |
| `complete` | `Function`        | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行）                                                          |

## 服务器接口

* `url` 请求的服务器接口地址
* 小程序宿主环境要求必须是 https 协议请求
* 请求域名需要在小程序管理平台配置
* 开发板、小程序体验版的默写情况下允许请求任意域名

## 请求参数

* 传递数据方法
  * url 参数
  * data 参数

```js
// page.js
// 通过url参数传递数据
wx.request({
  url:'https://test.com/getinfo?id=1&version=1.0.0',
  success: function(res) {
    console.log(res)// 服务器回包信息
  },
})

// 通过data参数传递数据
wx.request({
  url: 'https://test.com/getinfo',
  data: { id:1, version:'1.0.0' },
  success: function(res) {
    console.log(res)// 服务器回包信息
  },
})
```

* HTTP GET 请求
  * url 最大长度 1024 字节
  * 参数值需要 `urlEncode`
* HTTP POST 请求
  * 必须使用 data 参数

## 收到回包

* `wx.request` 的 `success` 返回参数

| 参数名        | 类型               | 描述                                 |
| ------------ | ----------------- | --------------------------------- -- |
| `data`       | `Object`/`String` | 开发者服务器返回的数据                  |
| `statusCode` | `Number`          | 开发者服务器返回的 HTTP 状态码           |
| `header`     | `Object`          | 开发者服务器返回的 HTTP Response Header |

## 一般使用技巧

### 超时设置

* 默认超时时间60秒

```json
// app.json
{
  "networkTimeout": {
    "request": 3000
  }
}
```

### 请求前后的状态处理

* 点击按钮，出现 Loading 界面  
  发送请求到后台  
  后台返回成功直接进入下一个业务逻辑处理  
  后台返回失败或网络异常等情况提示“系统错误” Toast  
  同时 Loading 界面消失

```js
// page.js

var hasClick = false // 防止连续触发

Page({
  tap: function() {
    if (hasClick) {
      return
    }
    hasClick = true
    wx.showLoading()
    wx.request({
      url: 'https://test.com/getinfo',
      method: 'POST',
      header: { 'content-type':'application/json' },
      data: { },
      success: function (res) {
        if (res.statusCode === 200) {
          console.log(res.data) // 服务器回包内容
        }
      },
      fail: function (res) {
        wx.showToast({ title: '系统错误' })
      },
      complete: function (res) {
        wx.hideLoading()
        hasClick = false
      }
    })
  },
})
```

## 排查异常的方法

* 无法发起请求、服务器无法收到请求

1. 检查手机网络状态、wifi 连接
1. 检查小程序是否为开发版或体验版，因为不会校验域名
1. 检查 HTTPS 证书是否有效，TLS 版本必须支持 1.2 及以上版本，console 面板中输入 `showRequestInfo()` 查看相关信息
1. 域名不要使用 IP 地址或 localhost 且不能带端口，域名需要经过 ICP 备案
1. 检查 app.json 配置的超时时间是否太短
2. 检查请求是否 302 到其他域名的接口，这种 302 情况视为请求别的域名接口导致无法发起请求