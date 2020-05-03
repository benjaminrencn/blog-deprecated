const { description } = require('../../package')

/** {@link https://vuepress.vuejs.org/zh/config/} */
module.exports = {
  base: '/blog/',
  title: 'BR\'s Blog',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  /** {@link https://vuepress.vuejs.org/zh/theme/default-theme-config.html} */
  themeConfig: {
    repo: 'https://github.com/benjaminrencn/blog',
    docsRepo: 'https://github.com/benjaminrencn/blog',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮忙完善',
    lastUpdated: '最后更新',
    smoothScroll: true,
    nav: getNav(),
    sidebar: getSidebar(),
    sidebarDepth: 3,
  },
  plugins: [
    /** {@link https://github.com/ntnyq/vuepress-plugin-svg-icons} */
    ['@goy/svg-icons', {
      svgsDir: './.vuepress/public/svg',
    }],
    /** {@link https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-back-to-top} */
    ['@vuepress/plugin-back-to-top', true],
    /** {@link https://github.com/QiShaoXuan/vuepress-plugin-cat} */
    ['vuepress-plugin-cat', true],
    /** {@link https://github.com/znicholasbrown/vuepress-plugin-code-copy} */
    ['vuepress-plugin-code-copy', {
      color: '#3eaf7c',
      successText: '已复制',
    }],
    /** {@link https://vuepress.github.io/zh/plugins/container} */
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: {
        '/': '提示',
      },
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: {
        '/': '注意',
      },
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: {
        '/': '警告',
      },
    }],
    /** {@link https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-medium-zoom} */
    ['@vuepress/plugin-medium-zoom', true],  
  ],  
}

/**
 * 获得导航栏
 */
function getNav() {
  return [
    { text: '笔记', link: '/note/' },
  ];
}
/**
 * 获得侧边栏
 */
function getSidebar() {
  return {
    '/note/': [{
      title: '前端',
      children: [{
        title: '网易云课堂 高级开发工程师',
        path: '/note/netease-study-senior-fe',
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
        }, {
          title: 'Javascript 进阶',
          children: [{
            title: '课程导学',
            children: [
              ['./netease-study-senior-fe/javascript/guide', 'JavaScript 进阶专题导学'],
            ],
          }, {
            title: '函数',
            children: [
              ['./netease-study-senior-fe/javascript/memory', 'JavaScript 中内存管理'],
              ['./netease-study-senior-fe/javascript/quality', '如何保证你的代码质量'],
              ['./netease-study-senior-fe/javascript/reliability', '提高代码可靠性'],
              ['./netease-study-senior-fe/javascript/compose-pipe', 'compose 函数和 pipe 函数'],
              ['./netease-study-senior-fe/javascript/higher-order-function', '高阶函数'],
              ['./netease-study-senior-fe/javascript/common-function', '常用函数'],
              ['./netease-study-senior-fe/javascript/debounce-throttle', '防抖和节流'],
              ['./netease-study-senior-fe/javascript/deep-shadow-copy', '深拷贝和浅拷贝'],
            ],
          }, {
            title: '异步编程',
            children: [
              ['./netease-study-senior-fe/javascript/asynchronous', '理解异步'],
            ],
          }, {
            title: 'Underscore.js 源码',
            children: [
              ['./netease-study-senior-fe/javascript/underscorejs', 'Underscore.js 源码'],
            ],
          }],
        }],
      }],
    }, {
      title: 'Vue.js',
      children: [{
        title: 'Vue.js 教程 - DCloud',
        path: '/note/vue-dcloud',
        children: [
          ['./vue-dcloud/introduction', 'Vue.js 介绍'],
          ['./vue-dcloud/install-deploy', '安装与部署'],
          ['./vue-dcloud/vue-application', '创建第一个 vue 应用'],
          ['./vue-dcloud/data-method', '数据与方法'],
          ['./vue-dcloud/lifecycle', '生命周期'],
          ['./vue-dcloud/interpolation', '模板语法 - 插值'],
          ['./vue-dcloud/directive', '模板语法 - 指令'],
          ['./vue-dcloud/class-style', 'class 与 style 绑定'],
          ['./vue-dcloud/condition', '条件渲染'],
          ['./vue-dcloud/list', '列表渲染'],
          ['./vue-dcloud/event', '事件绑定'],
          ['./vue-dcloud/form', '表单输入绑定'],
          ['./vue-dcloud/component', '组件基础'],
          ['./vue-dcloud/registration', '组件注册'],
          ['./vue-dcloud/sfc', '单文件组件'],
          ['./vue-dcloud/development', '免终端开发 vue 应用'],
        ],
      }],
    }, {
      title: 'uni-app',
      children: [{
        title: 'uni-app DCloud 官方教程',
        path: '/note/dcloud-uni-app',
        children: [{
          title: '产品介绍',
          children: [
            ['./dcloud-uni-app/feature', '熟悉产品主要特征'],
          ],
        }, {
          title: '开发规范',
          children: [
            ['./dcloud-uni-app/quick-start', '快速入门'],
          ],
        }, {
          title: '快速实战',
          children: [
            ['./dcloud-uni-app/practice', '简单项目实战'],
          ],
        }],
      }, {
        title: '白话 uni-app - heavensoft',
        path: '/note/uni-app-heavensoft',
      }],
    }],
  };
}