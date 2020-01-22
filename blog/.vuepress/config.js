/** {@link https://vuepress.vuejs.org/zh/config/} */
module.exports = {
  base: '/blog/',
  title: 'BR\'s Blog',
  description: 'BR 的 Web 前端 学习记录分享',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  /** {@link https://vuepress-theme-blog.ulivz.com/} */
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /** {@link https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions} */
    modifyBlogPluginOptions(blogPluginOptions) {
      /** {@link https://vuepress-plugin-blog.ulivz.com/config/#comment} */
      const comment = {
        service: 'vssue',
        /** {@link https://vssue.js.org/zh/options/e} */
        owner: 'benjaminrencn',
        repo: 'vssue',
        clientId: '6d25d7938fca289bd5ab',
        clientSecret: '904dfeef726c069bf035ea3b404ee432fba5d662',
      };

      return { ...blogPluginOptions, comment };
    },
    /** {@link https://vuepress-theme-blog.ulivz.com/#nav} */
    nav: [
      {
        text: '文章',
        link: '/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/benjaminrencn',
      },
    ],
    /** {@link https://vuepress-theme-blog.ulivz.com/#footer} */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/benjaminrencn',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2019 BR',
          link: 'https://github.com/benjaminrencn/blog',
        },
        {
          text: 'Powered by VuePress',
          link: 'https://vuepress.vuejs.org/zh/',
        },
      ],
    },
  },
  plugins: [
    /** {@link https://github.com/francoischalifour/medium-zoom} */
    ['@vuepress/medium-zoom', {
      selector: '.content__default img',
      options: {
        background: 'rgba(33, 37, 48, .9)',
      }
    }],
    /** {@link https://vuepress.github.io/zh/plugins/container} */
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: {
        '/': '提示',
      }
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: {
        '/': '注意',
      }
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: {
        '/': '警告',
      }
    }],
    /** {@link https://github.com/znicholasbrown/vuepress-plugin-code-copy} */
    'vuepress-plugin-code-copy',
    /** {@link https://github.com/tolking/vuepress-plugin-img-lazy} */
    'vuepress-plugin-img-lazy',
    /** {@link https://github.com/QiShaoXuan/vuepress-plugin-cat} */
    'vuepress-plugin-cat',
  ]
}
