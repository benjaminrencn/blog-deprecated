// index.js
console.log('pages/index/index')
Page({
  /**
   * 跳转页面
   * @param {Event} event 事件
   */
  to(event) {
    wx.navigateTo({
      url: event.target.dataset.url,
    })
  }
})
