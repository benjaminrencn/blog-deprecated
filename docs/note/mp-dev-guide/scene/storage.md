---
lang: zh-CN
description: 微信小程序 本地数据缓存 读写本地数据缓存、缓存限制和隔离、利用本地缓存提前渲染界面。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,应用场景,本地数据缓存,微信小程序
---

# 本地数据缓存

\#小程序开发指南#
\#微信小程序团队#
\#应用场景#
\#本地数据缓存#
\#微信小程序#

微信小程序 本地数据缓存 读写本地数据缓存、缓存限制和隔离、利用本地缓存提前渲染界面。

* 小程序存储在当前设备硬盘上的数据

## 读写本地数据缓存

* [`wx.getStorage`](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html)
* [`wx.getStorageSync`](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html)
  * 从本地缓存中获取指定 key 的内容

```js
// page.js
wx.getStorage({
  key: 'key1',
  success: function(res) {
    // 异步接口在 success 回调才能拿到返回值
    var value1 = res.data
  },
  fail: function() {
    console.log('读取key1发生错误')
  },
})

try {
  // 同步接口立即返回值
  var value2 = wx.getStorageSync('key2')
} catch (e) {
  console.log('读取key2发生错误')
}
```

* `wx.getStorage`/`wx.getStorageSync` 参数

| 参数名      | 类型        | 必填 | 描述                                                        |
| ---------- | ---------- | ---- | ---------------------------------------------------------- |
| `key`      | `String`   | 是   | 本地缓存中指定的 `key`                                        |
| `success`  | `Function` | 否   | 异步接口调用成功的回调函数，回调参数格式: `{ data: key对应的内容 }` |
| `fail`     | `Function` | 否   | 异步接口调用失败的回调函数                                      |
| `complete` | `Function` | 否   | 异步接口调用结束的回调函数（调用成功、失败都会执行）                |

* [`wx.setStorage`](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)
* [`wx.setStorageSync`](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
  * 将数据存储在本地缓存中指定的 key 中
  * 会覆盖掉原来该 key 对应的内容
  * 除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用
  * 单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB

```js
// 异步接口在 success / fail 回调才知道写入成功与否
wx.setStorage({
  key:'key',
  data:'value1'
  success: function() {
    console.log('写入value1成功')
  },
  fail: function() {
    console.log('写入value1发生错误')
  }
})

try{
  // 同步接口立即写入
  wx.setStorageSync('key', 'value2')
  console.log('写入value2成功')
}catch (e) {
  console.log('写入value2发生错误')
}
```

* `wx.setStorage`/`wx.setStorageSync` 参数

| 参数名      | 类型               | 必填 | 描述                                        |
| ---------- | ----------------- | ---- | ------------------------------------------ |
| `key`      | `String`          | 是   | 本地缓存中指定的 `key`                        |
| `data`     | `Object`/`String` | 是   | 需要存储的内容                                |
| `success`  | `Function`        | 否   | 异步接口调用成功的回调函数                      |
| `fail`     | `Function`        | 否   | 异步接口调用失败的回调函数                      |
| `complete` | `Function`        | 否   | 异步接口调用结束的回调函数（调用成功、失败都会执行） |

## 缓存限制和隔离

* 小程序宿主环境管理不同的小程序、用户的数据缓存进行隔离
* 小程序本地缓存空间是分开的
* 每个上限为 10MB，超过写入触发 `fail` 回调

## 利用本地缓存提前渲染界面

### 发送请求

```js
// page.js
Page({
  onLoad: function() {
    var that = this
    wx.request({
      url: 'https://test.com/getproductlist',
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({
            list: res.data.list,
          })
        }
      },
    })
  },
})
```

### 使用本地缓存

```js
// page.js
Page({
  onLoad: function() {
    var that = this
    var list = wx.getStorageSync('list')
    if (list) { // 本地如果有缓存列表，提前渲染
      that.setData({
        list: list,
      })
    }
    wx.request({
      url: 'https://test.com/getproductlist',
      success: function (res) {
        if (res.statusCode === 200) {
          list = res.data.list
          that.setData({ // 再次渲染列表
            list: list,
          })
          wx.setStorageSync('list', list) // 覆盖缓存数据
        }
      }
    })
  },
})
```

### 缓存用户登录态 SessionId

* 持久化存储 SessionId，使用户在没有主动退出登录前保持登录状态，无需输入账号密码
* 持久化存储 SessionId

```js
// page.js
var app = getApp()

Page({
  onLoad: function() {
    // 调用 wx.login 获取微信登录凭证
    wx.login({
      success: function(res) {
        // 拿到微信登录凭证之后去自己服务器换取自己的登录凭证
        wx.request({
          url: 'https://test.com/login',
          data: { code: res.code },
          success: function(res) {
            var data = res.data
            // 把 SessionId 和过期时间放在内存中的全局对象和本地缓存里边
            app.globalData.sessionId = data.sessionId
            wx.setStorageSync('SESSIONID', data.sessionId)
            // 假设登录态保持1天
            var expiredTime = +new Date() + 1 * 24 * 60 * 60 * 1000
            app.globalData.expiredTime = expiredTime
            wx.setStorageSync('EXPIREDTIME', expiredTime)
          },
        })
      },
    })
  },
})
```

* 本地缓存恢复 SessionId

```js
// app.js
App({
  onLaunch: function(options) {
    var sessionId = wx.getStorageSync('SESSIONID')
    var expiredTime = wx.getStorageSync('EXPIREDTIME')
    var now = +new Date()
    if (now - expiredTime <= 1 * 24 * 60 * 60 * 1000) {
      this.globalData.sessionId = sessionId
      this.globalData.expiredTime = expiredTime
    }
  },
  globalData: {
    sessionId: null,
    expiredTime: 0
  }
})
```
