---
lang: zh-CN
description: Vue CLI、.vue 单文件组件、命名规则。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,课程导学,Hello Vue,JavaScript,js,vue.js
---

# Hello Vue

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#课程导学#
\#Hello Vue#
\#JavaScript#
\#js#
\#vue.js#

Vue CLI、.vue 单文件组件、命名规则。

## [Vue CLI](https://cli.vuejs.org/zh/)

Vue.js 开发的标准工具

* 安装

  ```shell
  npm install -g @vue/cli
  # yarn global add @vue/cli
  ```

* 创建项目

  ```shell
  vue create my-project
  # vue ui
  ```

## 实例

```shell
# 全局安装
npm install -g @vue/cli
# 进入目标目录
# 创建项目
# Please pick a preset
# 选择 default 配置
vue create eight-queens
cd eight-queens
# 运行项目
yarn serve
```

## .vue 单文件组件

* 提供更好封装性
* 优雅的模板支持
* scoped css 支持
* 通过 vue-loader 可以配合预处理器进行构建

## 命名规则

* **camelCase**: myComponent
  * 函数、变量、Prop
* **PascalCase**: MyComponent
  * 类、构造函数、组件文件
* **kebab-case**: my-component
  * html

