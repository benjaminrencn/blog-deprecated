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
        }, {
          title: '工程规范',
          children: [
            ['./netease-study-senior-fe/preparation/engineering', '工程化规范概述'],
            ['./netease-study-senior-fe/preparation/specification', '规范范例'],
            ['./netease-study-senior-fe/preparation/lint', '代码检查工具'],
          ],
        }, {
          title: '版本管理',
          children: [
            ['./netease-study-senior-fe/preparation/version-control', '版本管理概述'],
            ['./netease-study-senior-fe/preparation/branch', '分支模型'],
            ['./netease-study-senior-fe/preparation/git', 'Git'],
          ],
        }, {
          title: '单元测试',
          children: [
            ['./netease-study-senior-fe/preparation/unit-testing', '单元测试概述'],
            ['./netease-study-senior-fe/preparation/unit-testing-framework', '测试框架'],
            ['./netease-study-senior-fe/preparation/unit-testing-demo', '测试实战'],
          ],
        }, {
          title: '构建发布',
          children: [
            ['./netease-study-senior-fe/preparation/build-publish', '构建发布概述'],
            ['./netease-study-senior-fe/preparation/build', '构建工具'],
            ['./netease-study-senior-fe/preparation/publish', '发布工具'],
          ],
        }],
      }],
    }],
  }],
};