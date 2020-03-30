---
lang: zh-CN
description: 常用 css、js 构建工具。在 webpack 中配置常用构建工具。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,构建工具
---

# 构建工具

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#构建工具#

常用 css、js 构建工具。在 webpack 中配置常用构建工具。

## 发布工具

* [grunt](https://gruntjs.com/)
* [gulp](https://gulpjs.com/)
* [webpack](https://webpack.js.org/)
* [rollup](https://rollupjs.org/)
* [parcel](https://parceljs.org/)
* [fis3](https://fis.baidu.com/)

## [Sass](https://sass-lang.com/)

* [Ruby](https://www.typescriptlang.org/)版本
  * 安装  
    `gem install sass`
  * 编译  
    `sass --watch --scss src:output -t compressed`
* node 版本
  * 安装  
    `npm install -D sass-loader node-sass`

    ```
    // .npmrc 以解决 node-sass 下载问题
    sass_binary_site = https://npm.taobao.org/mirrors/node-sass/
    ```
* webpack

```js
// webpack.config.js
module.exports = {
  ...
  modules: {
    roles: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader', // 将 js 字符串生产为 style 节点
      }, {
        loader: 'css-loader', // 将 CSS 转换成 CommonJS 模块
      }, {
        loader: 'sass-loader', // 将 Sass 编译成 CSS
      }],
    }],
  },
};
```

## [PostCSS](https://postcss.org/)

* PostCSS
  * 把 CSS 解析成 JavaScript 可以操作的 AST
  * 调用插件处理 AST 获得结果
    * Autoprefixer  
      CSS 属性前缀
    * cssnext  
      编译高版本 CSS 属性
* 安装  
  `npm install -D postcss-loader`
* webpack

```js
// webpack.config.js
module.exports = {
  ...
  modules: {
    roles: [{
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
      ],
    }],
  },
};
```

## [Babel](https://babeljs.io/)

* Babel
  * 编译高版本 js 语法
* 安装  
  `npm install babel-loader babel-core babel-preset-env`

```js
// webpack.config.js
module.exports = {
  ...
  modules: {
    roles: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugin: [require('@babel/plugin-transform-object-rest-spread')]
        },
      },
    }],
  },
};
```
