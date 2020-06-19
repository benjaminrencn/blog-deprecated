---
lang: zh-CN
description: 微信小程序 程序（程序构造器 App()、生命周期、打开场景、全局数据）、页面（文件构成、路径、页面构造器 Page()、生命周期、页面数据、页面的用户行为、页面跳转和路由）。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,宿主环境,程序、页面,微信小程序
---

# 程序、页面

\#小程序开发指南#
\#微信小程序团队#
\#宿主环境#
\#程序、页面#
\#微信小程序#

微信小程序 程序（程序构造器 `App()`、生命周期、打开场景、全局数据）、页面（文件构成、路径、页面构造器 `Page()`、生命周期、页面数据、页面的用户行为、页面跳转和路由）。

## 程序

* 小程序指产品层面的程序
* 程序指代码层面的程序实例（App）

### 程序构造器 `App()`

* 宿主环境提供 `App()` 构造器注册程序 App
* 写在项目根目录 `app.js` 里
* App 实例是单例对象
* 通过 `getApp()` 获取程序实例
* 参数

```js
App({
  onLaunch: function (options) {},
  onShow: function (options) {},
  onHide: function () {},
  onError: function () {},
  globalData: 'I am global data',
})
```

| 参数属性    | 类型        | 描述                                                                 |
| ---------- | ---------- | -------------------------------------------------------------------- |
| `onLaunch` | `Function` | 当小程序初始化完成时，会触发 `onLaunch`（全局只触发一次）                    |
| `onShow`   | `Function` | 当小程序启动，或从后台进入前台显示，会触发 `onShow`                         |
| `onHide`   | `Function` | 当小程序从前台进入后台，会触发 `onHide`                                   |
| `onError`  | `Function` | 当小程序发生脚本错误，或者 API 调用失败时，会触发 `onError` 并带上错误信息     |
| 其他字段    | 任意        | 可以添加任意的函数或数据到 `Object` 参数中，在 App 实例回调用 `this` 可以访问 |

### 生命周期

* 初次进入小程序  
  微信客户端初始化宿主环境，从网络下载或从本地缓存获得小程序代码包，注入宿主环境  
  初始化完毕，调用 `onLaunch` 方法
* 进入小程序后  
  点击右上角关闭或手机设备的 Home 键离开小程序，进入后台状态，未被直接销毁  
  调用 `onHide` 方法
* 再次回到微信或再次打开小程序，进入前台状态  
  调用 `onShow` 方法

### 打开场景

* 群聊会话
* 小程序列表
* 微信扫一扫
* 另外一个小程序
* 参数

```js
App({
  onLaunch: function (options) {},
  onShow: function (options) {},
})
```

| 字段                      | 类型     | 描述                                              |
| ------------------------ | -------- | ------------------------------------------------ |
| `path`                   | `String` | 打开小程序的页面路径                                |
| `query`                  | `Object` | 打开小程序的页面参数 `query`                        |
| `scene`                  | `Number` | 打开小程序的场景值                                  |
| `shareTicket`            | `String` |                                                  |
| `referrerInfo`           | `Object` | 当场景为由从另一个小程序或公众号或 App 打开时，返回此字段 |
| `referrerInfo.appId`     | `String` | 来源小程序或公众号或 App 的 appId                    |
| `referrerInfo.extraData` | `Object` | 来源小程序传过来的数据，scene=1037或1038时支持         |

* 返回 `referrerInfo.appId` 的场景

| 场景值  | 场景             | appId信息含义                     |
| ------ | --------------- | -------------------------------- |
| 1020   | 公众号 profile   | 页相关小程序列表 返回来源公众号 appId |
| 1035   | 公众号自定义菜单   | 返回来源公众号 appId               |
| 1036   | App 分享消息卡片  | 返回来源应用 appId                 |
| 1037   | 小程序打开小程序   | 返回来源小程序 appId               |
| 1038   | 从另一个小程序返回 | 返回来源小程序 appId               |
| 1043   | 公众号模板消息     | 返回来源公众号 appId               |

### 全局数据

* 逻辑层 JS 脚本运行在同一个 JsCore 线程中，App 实例是单例的可以作为全局属性
* `setTimeout`、`setInterval` 定时器需要只在页面离开时清理

## 页面

### 文件构成、路径

* 页面
  * 界面
    * WXML 必须
    * WXSS 可选
  * 配置
    * JSON 可选
  * 逻辑
    * JS 必须
* 页面路径
  * 在更目录 `app.json` 的 `pages` 声明，才能注册到宿主环境
  * `pages` 第一个页面路径为小程序的首页

### 页面构造器 `Page()`

* 宿主环境提供 `Page()` 构造器注册小程序页面
* 写在页面脚本里面
* 参数

```js
Page({
  data: { text: "This is page data." },
  onLoad: function(options) { },
  onReady: function() { },
  onShow: function() { },
  onHide: function() { },
  onUnload: function() { },
  onPullDownRefresh: function() { },
  onReachBottom: function() { },
  onShareAppMessage: function () { },
  onPageScroll: function() { }
})
```

| 参数属性             | 类型        | 描述                                                         |
| ------------------- | ---------- | ----------------------------------------------------------- |
| `data`              | `Object`   | 页面的初始数据                                                 |
| `onLoad`            | `Function` | 生命周期函数，监听页面加载，触发时机早于 `onShow` 和 `onReady`      |
| `onShow`            | `Function` | 生命周期函数，监听页面显示，触发事件早于 `onReady`                 |
| `onReady`           | `Function` | 生命周期函数，监听页面初次渲染完成                                |
| `onHide`            | `Function` | 生命周期函数，监听页面隐藏                                       |
| `onUnload`          | `Function` | 生命周期函数，监听页面卸载                                       |
| `onPullDownRefresh` | `Function` | 页面下拉动作事件的处理函数                                       |
| `onReachBottom`     | `Function` | 页面上拉触底事件的处理函数                                       |
| `onShareAppMessage` | `Function` | 用户点击右上角转发                                              |
| `onPageScroll`      | `Function` | 页面滚动触发事件的处理函数                                        |
| 其他                 | `Any`      | 可以添加任意的函数或数据，在 `Page`实例的其他函数中用 `this` 可以访问 |

### 生命周期

* 页面初次加载时，调用 `onLoad` 方法  
  在页面没有销毁之前只会触发1次  
  可以获取当前页面所调用的打开参数 `options`
* 页面显示后或从别的页面返回当前页面时，调用 `onShow` 方法
* 页面初次渲染完成，调用 `onReady` 方法  
  在页面没有销毁之前只会触发1次  
  可以进行逻辑层和视图层的交互了
* `wx.navigateTo` 切换其他页面、底部 tab 切换时页面不可见时，调用 `onHide` 方法
* `wx.redirectTo`、`wx.navigateBack` 返回其他页面时，调用 `onUnload` 方法  
  当前页面被销毁回收
* `Page` 生命周期由用户操作触发，不应该在其他代码主动调用
* 页面打开路径与网页 URL 类型，分 path、query

### 页面数据

* 页面 `Page()` 构造器 `data` 字段
* 页面第一次渲染时从逻辑层传递到渲染层
* `Page` 的 `this.setData` 把数据传递给渲染层  
  是异步的，第二个参数 `callback` 在页面渲染完毕后触发
* 只需要设置需要改变的最小单位数据  
  如 `this.setData({ 'd[1].text': 'Goodbye' })`
* 注意
    1. 直接修改 `this.data` 而不是 `this.setData()` 无法改变页面的状态
    1. 每次设置数据不应超过 1024KB
    1. 不要设置成 `undefined`

### 页面的用户行为

1. `onPullDownRefresh` 下拉刷新  
   需要在 `app.json` 的 `window` 或页面配置 `page.json` 设置 `enablePullDownRefresh` 为 `true`  
   `wx.stopPullDownRefresh` 停止下刷新
1. `onReachBottom` 上拉触底  
   在 `app.json` 的 `window` 或页面配置 `page.json` 设置 `onReachBottomDistance` 触发距离
1. `onPageScroll` 页面滚动  
   参数为 `Object` 包含 `scrollTop` 垂直方向已滚动的距离（px）
1. `onShareAppMessage` 用户转发  
   定义此函数，右上角菜单才会有转发按钮  
   需要返回 `Object` 包含 `title`、`path`

### 页面跳转和路由

* 页面栈  
  * 限制页面栈最大层级为 10
  * `wx.navigateTo()` 推入页面
  * `wx.navigateBack()` 推出页面
  * `wx.redirectTo()` 替换当前页面
  * `wx.switchTab()` 切换 Tabbar 页面  
    页面栈原来的页面被清空，编程当前的 Tabbar 页面  
    除了声明为 Tabbar 页面外都被销毁  
    `wx.switchTab()` 只能打开 Tabbar 页面，`wx.navigateTo()`、`wx.redirectTo()` 只能打开非 Tabbar 页面
  * `wx.reLaunch()` 重启小程序，打开参数页面，页面栈只有参数页面

#### 页面路由触发方式及页面生命周期触发方式

| 路由方式       | 触发时机                     | 路由前页面生命周期 | 路由后页面生命周期    |
| ------------- | -------------------------- | --------------- | ------------------ |
| 初始化         | 小程序打开的第一个页面         |                 | `onLoad`, `onShow` |
| 打开新页面     | API `wx.navigateTo`         | `onHide`        | `onLoad`, `onShow` |
| 页面重定向     | API `wx.redirectTo`         | `onUnload`      | `onLoad`, `onShow` |
| 页面返回       | API `wx.navigateBack`       | `onUnload`     | `onShow`            |
| Tab           | 切换 调用 API `wx.switchTab` |                 |                    |
| 重启动         | 调用 API `wx.reLaunch`      | `onUnload`      | `onLoad`, `onShow`  |

#### 页面路由、生命周期触发实例

* A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面

| 当前页面      | 路由后页面   | 触发的生命周期（按顺序）                                       |
| ------------ | ---------- | ---------------------------------------------------------- |
| A            | A          | 无                                                         |
| A            | B          | `A.onHide()`, `B.onLoad()`, `B.onShow()`                   |
| A            | B(再次打开) | `A.onHide()`, `B.onShow()`                                 |
| C            | A          | `C.onUnload()`, `A.onShow()`                               |
| C            | B          | `C.onUnload()`, `B.onLoad()`, `B.onShow()`                 |
| D            | B          | `D.onUnload()`, `C.onUnload()`, `B.onLoad()`, `B.onShow()` |
| D(从转发进入) | A           | `D.onUnload()`, `A.onLoad()`, `A.onShow()`                 |
| D(从转发进入) | B           | `D.onUnload()`, `B.onLoad()`, `B.onShow()`                 |
