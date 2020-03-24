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
            ['./netease-study-senior-fe/preparation/css-reset', 'CSS Reset'],
            ['./netease-study-senior-fe/preparation/center-align', '居中布局'],
            ['./netease-study-senior-fe/preparation/layout', '多列布局'],
            ['./netease-study-senior-fe/preparation/module-component', '模块与组件'],
          ],
        }],
      }],
    }],
  }],
};