---
lang: zh-CN
description: Vue.js 安装。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,安装与部署
---

# 安装与部署

\#Vue.js 教程#
\#DCloud#
\#安装与部署#

Vue.js 安装。

## 安装

### `<script>` 引入

* 初学者建议
* `<script>` 引入，`Vue` 被注册为全局变量。
* [开发版本](https://cn.vuejs.org/js/vue.js) 包含完整的警告和调试模式
* [生产版本](https://cn.vuejs.org/js/vue.min.js) 删除警告，33.30KB min + gzip

#### CDN

* 开发环境  
  使用最新版本

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

* 生产环境  
  建议链接到明确的版本号和构建文件

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
  ```

* ES Modules

  ```html
  <script type="module">
    import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
  </script>
  ```

* [cdn.jsdelivr.net/npm/vue](https://cdn.jsdelivr.net/npm/vue/) 浏览 NPM 包源码
* [unpkg](https://unpkg.com/vue@2.6.11/dist/vue.js) [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js)

### npm

```shell
npm install vue
```

### 命令行工具（[Vue CLI](https://github.com/vuejs/vue-cli)）

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```