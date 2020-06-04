---
lang: zh-CN
description: Vue.js 介绍背景、安装、创建项目。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,单文件组件
---

# 单文件组件

\#Vue.js 教程#
\#DCloud#
\#单文件组件#

Vue.js 介绍背景、安装、创建项目。

## 介绍

* 背景
  * 使用 `Vue.component`、`new Vue(options)` 缺点
    * 全局定义  
      组件命名不得重复
    * 字符串模板  
      取法语法高亮
    * 不支持 css
    * 没有构建步骤  
      只能使用 html、ES5  
      不能使用预处理器，如 Babel
* 文件扩展名为 `.vue` 的单文件组件（single-file components）解决以上问题
* 结构
  * `<template>` 模板
  * `<script>` 脚本
  * `<style>` 样式

## 安装

1. 安装 [Node.js](https://nodejs.org/zh-cn/download/)、npm

```shell
# 安装 Node.js、npm
node -v
npm -v
```

2. 安装 vue-cli

```shell
npm install -g @vue/cli
vue -V
```

3. 安装 webpack

```shell
npm install -g webpack webpack-cli
webpack -v
```

## 创建项目

* 创建项目

  ```shell
  # 在目标目录下
  # 使用图形化界面
  vue ui
  # 创建 -> 在此创建新项目 -> 输入项目名称 vue -> 选择包管理器 npm -> 下一步 -> 选择一条预设 默认 -> 创建项目
  # 创建完成后关闭命令行工具、图形化界面
  ```

* 目录结构

  ```
  /
  ├─ node_modules 依赖
  ├─ public       打包后要部署的目录
  ├─ src          开发目录
  |  ├─ assets      资源
  |  ├─ components  组件
  |  ├─ App.vue     入口文件
  |  └─ main.js
  ├─ .gitignore
  ├─ babel.config.js
  ├─ package-lock.json
  ├─ package.json
  └─ README.md
  ```

* 运行

  ```shell
  npm run serve
  ```

* 开发

```html
<!-- /src/components/Hello.vue -->
<template>
  <p>{{ greeting }} World</p>
</template>

<script>
export default {
  data: function () {
    return {
      greeting: 'hello',
    };
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

```html
<!-- /src/App.vue -->

<!-- ... -->
<Hello></Hello>

<!-- ... -->
import Hello from './components/Hello.vue'

<!-- ... -->
components: {
  Hello
}
```

## 案例

```shell
# /project/vue-dcloud/vue
npm install
npm run serve
```