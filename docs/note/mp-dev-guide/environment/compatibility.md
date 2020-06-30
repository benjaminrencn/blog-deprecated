---
lang: zh-CN
description: 微信小程序 兼容。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,宿主环境,兼容,微信小程序
---

# 兼容

\#小程序开发指南#
\#微信小程序团队#
\#宿主环境#
\#兼容#
\#微信小程序#

微信小程序 兼容。

* 小程序运行在不同版本的宿主环境下
* 针对不同手机平台
  * [`wx.getSystemInfo`](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html)、
[`wx.getSystemInfoSync`](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html)
 获取系统信息

```js
wx.getSystemInfoSync()
/*
  {
    brand: "iPhone",      // 手机品牌
    model: "iPhone 6",    // 手机型号
    platform: "ios",      // 客户端平台
    system: "iOS 9.3.4",  // 操作系统版本
    version: "6.5.23",    // 微信版本号
    SDKVersion: "1.7.0",  // 小程序基础库版本
    language: "zh_CN",    // 微信设置的语言
    pixelRatio: 2,        // 设备像素比
    screenWidth: 667,     // 屏幕宽度
    screenHeight: 375,    // 屏幕高度
    windowWidth: 667,     // 可使用窗口宽度
    windowHeight: 375,    // 可使用窗口高度
    fontSizeSetting: 16   // 用户字体大小设置
  }
*/
```

* 判断 API 是否存在做兼容

```js
if (wx.openBluetoothAdapter) {
  wx.openBluetoothAdapter()
} else {
  // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
  wx.showModal({
    title: '提示',
    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
  })
}
```

* `wx.canIUse`
  * 参数格式: `${API}.${method}.${param}.${options}` 或者 `${component}.${attribute}.${option}`
  * `${API}` 代表 API 名字
  * `${method}` 代表调用方式，有效值为 return, success, object, callback
  * `${param}` 代表参数或者返回值
  * `${options}` 代表参数的可选值
  * `${component}` 代表组件名字
  * `${attribute}` 代表组件属性
  * `${option}` 代表组件属性的可选值

```js
// 判断接口及其参数在宿主环境是否可用
wx.canIUse('openBluetoothAdapter')
wx.canIUse('getSystemInfoSync.return.screenWidth')
wx.canIUse('getSystemInfo.success.screenWidth')
wx.canIUse('showToast.object.image')
wx.canIUse('onCompassChange.callback.direction')
wx.canIUse('request.object.method.GET')

// 判断组件及其属性在宿主环境是否可用
wx.canIUse('contact-button')
wx.canIUse('text.selectable')
wx.canIUse('button.open-type.contact')
```

* 小程序管理后台设置“基础库最低版本设置”  
  低版本微信客户端会显示当前小程序不可用，并且提示用户应该去升级微信客户端。