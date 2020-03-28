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
    nav: require('./config/nav'),
    sidebar: require('./config/sidebar'),
    sidebarDepth: 3,
    extraWatchFiles: [
      '.vuepress/config/nav.js',
      '.vuepress/config/sidebar.js',
    ],
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
