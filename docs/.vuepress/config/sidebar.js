// 侧边栏
module.exports = {
  '/note/': [{
    title: '前端',
    children: [{
      title: '网易云课堂 高级开发工程师',
      path: '/note/netease-study-senior-fe/',
      children: [{
        title: '前端基础预习课',
        children: [{
          title: '页面架构',
          children: [
            ['netease-study-senior-fe/preparation/i18n', '国际化'],
          ],
        }],
      }],
    }],
  }],
};