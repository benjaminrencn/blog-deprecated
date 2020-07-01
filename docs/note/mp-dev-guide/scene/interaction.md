---
lang: zh-CN
description: 微信小程序 常见交互反馈、触摸反馈、Toast、模态对话框、界面滚动（下拉刷新、上拉触底、<scroll-view>）。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,应用场景,常见交互反馈,微信小程序
---

# 常见交互反馈

\#小程序开发指南#
\#微信小程序团队#
\#应用场景#
\#常见交互反馈#
\#微信小程序#

微信小程序 常见交互反馈、触摸反馈、Toast、模态对话框、界面滚动（下拉刷新、上拉触底、`<scroll-view>`）。

* 给予反馈以舒缓用户等待交互是较耗时的操作

## 触摸反馈

* `<view>`、`<button>` 的 `hover-class` 属性，触摸时往加上该 class 改变样式

```css
/* page.wxss */
.hover{
  background-color: gray;
}
```

```html
<!-- page.wxml -->
<button hover-class="hover">点击button</button>
<view hover-class="hover">点击view</view>
```

* `<button>` 的 `loading` 属性，按钮文字前出现 loading 图标

```html
<!-- page.wxml -->
<button loading="{{loading}}" bindtap="tap">操作</button>
```

```js
// page.js
Page({
  data: { loading: false },
  tap: function() {
    // 把按钮的loading状态显示出来
    this.setData({
      loading: true,
    })
    // 接着做耗时的操作
  },
})
```

## Toast、模态对话框

* 弹出 Toast，默认1.5秒后消失，提示用户操作结果并不打断用户接下来的操作

```js
// page.js
Page({
  onLoad: function() {
    wx.showToast({ // 显示Toast
      title: '已发送',
      icon: 'success',
      duration: 1500,
    })
    // wx.hideToast() // 隐藏Toast
  },
})
```

* 错误提示需要用户明确知晓操作状态结果，使用模态对话框

```js
// page.js
Page({
  onLoad: function() {
    wx.showModal({
      title: '标题',
      content: '告知当前状态，信息和解决方法',
      confirmText: '主操作',
      cancelText: '次要操作',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击主操作')
        } else if (res.cancel) {
          console.log('用户点击次要操作')
        }
      },
    })
  },
})
```

## 界面滚动

### 下拉刷新

```json
// page.json
{
  "enablePullDownRefresh": true
}
```

```js
// page.js
Page({
  onPullDownRefresh: function() {
    // 用户触发了下拉刷新操作
    // 拉取新数据重新渲染界面
    // wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。
  },
})
```

### 上拉触底

```json
// page.json
{
  // 界面的下方距离页面底部距离小于 onReachBottomDistance 像素时触发 onReachBottom 回调
  "onReachBottomDistance": 100
}
```

```js
// page.js
Page({
  onReachBottom: function() {
    // 当界面的下方距离页面底部距离小于100像素时触发回调
  }
})
```

### `<scroll-view>`

* 页面中区域滚动 `<scroll-view>`
