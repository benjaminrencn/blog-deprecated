---
date: 2020-1-26
tag: 
  - 网易云课堂
  - 高级前端开发工程师
  - 前端基础预习课
author: BR
location: 温州
summary: 通用、HTML、CSS、JS 业界普遍认可的编码规范。
---

# 规范范例

## 通用编码规范

### 空白符

* 空格
* 空行：小于等于2行
* 缩进：2、4空格
* 分组

### 多用括号

### 命名规范

* 顾名思义
* 长命名 优先考虑
  * 较少使用的变量
  * 全局变量
* 短命名
  * 局部变量
  * 循环变量
* 拼写正确
* 不使用拼音

### 注释

* 概述性和意图性
  * 复杂业务逻辑
  * 算法
* 避免增加阅读负担
  * 重复
  * 文不对题
  * 废话

## HTML 编码规范

### 基本结构

1. HTML5 标准 doctype `<!DOCTYPE html>`
1. UTF-8 编码 `<meta charset="utf-8">`
1. `title`、`keywords`、`description` 等必需标签
1. 标签、属性小写，属性值用 `"

### 结构顺序和视觉顺序基本一致

从上到下、从左到右

### 结构、表现、行为分离，避免内联

1. CSS 在 `<head>` 引入  
   JavaScript 在页面末尾引入
1. 引入 CSS、JavaScript 无须指明 `type`
1. 不使用内联 CSS

### 简洁的树结构

1. 块级元素另起一行  
   每层元素用 <kbd>Tab</kbd> 缩进
1. 大模块间可用空行间隔
1. 没有多余的空格、换行和无用的标签

### 语义化标签

常用语义化标签

| 标签            | 英语            | 说明     |
|-----------------|-----------------|---------|
| `<div>`         | division        | 部分     |
| `<b>`           | bold            | 加粗     |
| `<a>`           | anchor          | 超链接   |
| `<ul>`          | unordered list  | 无序列表 |
| `<ol>`          | ordered list    | 有序列表 |
| `<p>`           | paragraph       | 段落     |
| `<em>`          | emphasize       | 强调     |
| `<h1>` - `<h6>` | headline        | 标题     |
| `<hr>`          | horizontal rule | 水平线   |

:::tip
* [网易 NEC HTML 规范](http://nec.netease.com/standard/html-structure.html)
* [百度 HTML 规范](http://github.com/ecomfe/spec/blob/master/html-style-guide.md)
* [HTML 标签对应英语](http://gzool.com/html/2014/03/13/html-taglist/)
:::

## CSS 编码规范

### 文件分类

* 按公共型样式、特殊型样式等，并以此顺序引用

### 防止样式冲突

* 限定模块，全局样式规则除外

### 命名规范

* [NEC](http://nec.netease.com/standard/css-name.html)
  * 6类
    * `.g-` grid 布局， `.m-` module 模块， `.u-` unit 元件， `.f-` function 功能，`.s-` skin 皮肤，`.z-` 状态
  * `-`
    * 不是连字符
    * 是分类前缀分隔符、扩展分隔符
  * 后代标签
    * 非单字母 + `-` 为前缀  
      长度大于等于2
    * 语义化标签
* [BEM](http://getbem.com)
  * Block + `__`Element + `--`Modifier
  * Block
    * 独立模块
    * 可嵌套
  * Element
    * Block 的部分 独立元素
  * Modifier
    * Block，Element 扩展
  * 平级
* 通用规范
  1. 不使用 id 选择器
  1. 小写
  1. 用 `-` 连接
  1. 注释 css hack
  1. 嵌套不宜过多
  1. 能用 CSS 就不用 JavaScript

:::tip
* [网易 NEC CSS 规范](http://nec.netease.com/standard/css-sort.html)
* [百度 CSS 规范](https://github.com/ecomfe/spec/blob/master/css-style-guide.md)
* [Airbnb CSS 规范](https://github.com/airbnb/css)
:::

## JavaScript 编码规范

### 浏览器端使用立即执行函数

* 隔离代码
* 注意不要创建全局变量

### 命名规范

* CamelCase 驼峰命名法
  * 第一个单词首字母小写其后单词首字母大写
  * 变量、方法
* PascalCase 帕斯卡命名法
  * 单词首字母大写
  * 构造函数、类、枚举
* 常量
  * 大写 `_` 分隔

### 分号问题

* 推荐加 `;`
  * 不加导致多个立即执行函数容易出错

### 对象末尾加逗号

* 推荐加 `,`
  * 不加导致代码合并容易出错

### 不保持 this 的引用

* bind()
* 箭头函数

### 注释说明对象参数

:::tip
* [jsdoc](http://usejsdoc.org/)
:::

### 推荐中文写注释、提交记录、文档等资料

### 文件加 @author 注释

### 永不向函数传 null

### 删除无用代码

### 始终保持一致性

1. 运行环境支持 ES6 就全面使用 ES6 语法
1. 使用某工具库 就全面使用该工具库提供的方法
1. 指定编码规范达到代码风格一致

:::tip
* [Airbnb JavaScript 规范](https://github.com/airbnb/javascript)
* [百度 JavaScript 规范](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md)
:::

## 延伸

* 《代码大全（第2版）》 - [电子工业出版社]
* [CSS-BEM 命名规范](https://bemcss.com/)
* [史上最全的CSS hack方式一览 - [TANG-csdn]](https://blog.csdn.net/qq_42354773/article/details/80926040)
