---
lang: zh-CN
description: 微信小程序 设备能力 扫码、获取网络状态。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,应用场景,设备能力,微信小程序
---

# 设备能力

\#小程序开发指南#
\#微信小程序团队#
\#应用场景#
\#设备能力#
\#微信小程序#

微信小程序 设备能力 扫码、获取网络状态。

* 小程序宿主环境提供操作设备能力
  * 扫码
  * 蓝牙
  * 获取设备网络状态
  * 调整屏幕亮度

## 扫码

* [`wx.scanCode`](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html)

```js
// page.js

Page({
  // 点击“扫码订餐”的按钮，触发 tapScan 回调
  tapScan: function() {
    // 调用 wx.login 取微信登录凭证
    wx.scanCode({
      success: function(res) {
        var num = res.result // 获取到的 num 就是餐桌的编号
      },
    })
  },
})
```

## 获取网络状态

* [`wx.getNetworkType`](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html)

```js
// page.js

Page({
  // 点击“预览文档”的按钮，触发 tap 回调
  tap: function() {
    wx.getNetworkType({
      success: function(res) {
        // networkType字段的有效值：
        // wifi/2g/3g/4g/unknown(Android 下不常见的网络类型)/none(无网络)
        if (res.networkType == 'wifi') {
          // 从网络上下载pdf文档
          wx.downloadFile({
            url:'http://test.com/somefile.pdf',
            success: function (res) {
              // 下载成功之后进行预览文档
              wx.openDocument({
                filePath: res.tempFilePath,
              })
            },
          })
        } else {
          wx.showToast({ title: '当前为非Wifi环境' })
        }
      }
    })
  },
})
```

* [`wx.onNetworkStatusChange`](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html) 监听网络状态变化事件
