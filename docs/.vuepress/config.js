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
    /** {@link https://vuepress.github.io/zh/plugins/mathjax/} */
    ['vuepress-plugin-mathjax', true],
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
              ['./netease-study-senior-fe/javascript/exercise-sort', '习题 1 冒泡排序、插入排序'],
            ],
          }, {
            title: '异步编程',
            children: [
              ['./netease-study-senior-fe/javascript/asynchronous', '理解异步'],
              ['./netease-study-senior-fe/javascript/event-loop', 'Event Loop 机制'],
              ['./netease-study-senior-fe/javascript/publish-subscribe', '发布/订阅'],
              ['./netease-study-senior-fe/javascript/promise', '深入理解 promise'],
              ['./netease-study-senior-fe/javascript/generator', 'generator 函数及其异步应用'],
              ['./netease-study-senior-fe/javascript/async-await', '深入理解 async/await'],
            ],
          }, {
            title: 'Underscore.js 源码',
            children: [
              ['./netease-study-senior-fe/javascript/underscorejs', 'Underscore.js 源码'],
            ],
          }],
        }, {
          title: 'Vue',
          children: [{
            title: '课程导学',
            children: [
              ['./netease-study-senior-fe/vue/guide', 'vue 专题导学'],
            ],
          }, {
            title: '初识 vue',
            children: [
              ['./netease-study-senior-fe/vue/hello', 'Hello Vue'],
              ['./netease-study-senior-fe/vue/template', '模块'],
              ['./netease-study-senior-fe/vue/data', '数据'],
              ['./netease-study-senior-fe/vue/event-style', '事件 & 样式'],
              ['./netease-study-senior-fe/vue/component', '组件'],
            ],
          }, {
            title: '探索 vue 的组件世界',
            children: [
              ['./netease-study-senior-fe/vue/directive', '自定义指令'],
              ['./netease-study-senior-fe/vue/two-way-binding', '双向绑定'],
              ['./netease-study-senior-fe/vue/component-design', '组件设计'],
              ['./netease-study-senior-fe/vue/component-communication', '组件通信'],
              ['./netease-study-senior-fe/vue/plugin', '插件'],
              ['./netease-study-senior-fe/vue/component-reuse', '组件复用'],
            ],
          }, {
            title: '深入 vue 源码设计',
            children: [
              ['./netease-study-senior-fe/vue/responsive', '响应式'],
              ['./netease-study-senior-fe/vue/next-tick', '异步更新队列（nextTick）源码分析'],
              ['./netease-study-senior-fe/vue/diff-patch', 'diff patch'],
              ['./netease-study-senior-fe/vue/computed-watch-watch-effect-proxy', 'computed & watch & watchEffect & Proxy'],
              ['./netease-study-senior-fe/vue/composition', 'vue 3 composition api'],
            ],
          }, {
            title: 'vue 生态及实践',
            children: [
              ['./netease-study-senior-fe/vue/vuex1', 'vuex 上'],
              ['./netease-study-senior-fe/vue/vuex2', 'vuex 下'],
              ['./netease-study-senior-fe/vue/vue-router1', 'vue router 上'],
              ['./netease-study-senior-fe/vue/vue-router2', 'vue router 下'],
              ['./netease-study-senior-fe/vue/practice', '掘金 Top 10 列表页实践'],
              ['./netease-study-senior-fe/vue/config', '配置中心'],
              ['./netease-study-senior-fe/vue/optimization', '优化实践'],
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
      title: '微信小程序',
      children: [{
        title: '小程序开发指南 - 微信小程序团队',
        path: '/note/mp-dev-guide',
        children: [{
          title: '小程序介绍与开发环境',
          children: [
            ['./mp-dev-guide/introduction/hello-world', 'Hello World'],
            ['./mp-dev-guide/introduction/introduction', '介绍'],
            ['./mp-dev-guide/introduction/feature', '特色'],
            ['./mp-dev-guide/introduction/preparation', '开发准备'],
          ],
        }, {
          title: '小程序代码组成',
          children: [
            ['./mp-dev-guide/composition/json', 'JSON 配置'],
            ['./mp-dev-guide/composition/wxml', 'WXML 模板'],
            ['./mp-dev-guide/composition/wxss', 'WXSS 样式'],
            ['./mp-dev-guide/composition/js', 'JavaScript 脚本'],
          ],
        }, {
          title: '理解小程序宿主环境',
          children: [
            ['./mp-dev-guide/environment/render-logic', '渲染层、逻辑层'],
            ['./mp-dev-guide/environment/program-view', '程序、页面'],
            ['./mp-dev-guide/environment/component', '组件'],
          ],
        }],
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