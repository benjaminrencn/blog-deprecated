---
lang: zh-CN
description: 发布构成、优化 webpack 打包结果。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,构建发布,发布工具
---

# 发布工具

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#构建发布#
\#发布工具#

发布构成、优化 webpack 打包结果。

## 发布过程

* 预编译
* 合并
* 混淆

## 优化

* [Code Splitting](https://webpack.js.org/guides/code-splitting/)
* 减少 bundle 大小
* [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
  * 基于 ES Modules
* 优化 Babel 代码转换
  * `babel-plugin-transform-imports`
* 优化三方依赖项
  * 减少无用 lodash  
    `babel-plugin-lodash`
* 作用域提升

```js
// webpack.config.js (for webpack 4)
module.exports = {
  optimization: {
    concatenateModules: true,
  },
};
```




