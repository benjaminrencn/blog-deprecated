---
lang: zh-CN
description: 微信小程序 WXSS 样式（介绍、文件组成、尺寸单位、引用、内联样式、选择器、优先级权重、官方样式库）。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,代码组成,WXSS 样式,微信小程序
---

# WXSS 样式

\#小程序开发指南#
\#微信小程序团队#
\#代码组成#
\#WXSS 样式#
\#微信小程序#

微信小程序 WXSS 样式（介绍、文件组成、尺寸单位、引用、内联样式、选择器、优先级权重、官方样式库）。

## 介绍

* WXSS（WeiXin Style Sheet）
* 小程序的样式语言，描述 WXML 样式
* 后缀名 `.wxss`
* 类似 CSS

## 文件组成

* 项目公共样式  
  根目录 app.wxss
* 页面样式   
  与 app.json 注册过的页面同名且位置同级的 WXSS 文件
* 其他样式  
  可以被项目公共样式、页面样式引用

## 尺寸单位

* `rpx`（responsive pixel）
  * 适配不同宽度的屏幕
  * 换算以375个物理像素为基准
  * 1rpx = 375 / 物理像素

## 引用

```css
@import './x.wxss';
```

## 内联样式

* 字符串

```html
<!-- /Users/br/Code/blog/project/mp-dev-guide/hello/pages/wxss/index.wxml -->
<view style="color: red; font-size: 48rpx;">red</view>
```

* 动态内联样式

```js
// /Users/br/Code/blog/project/mp-dev-guide/hello/pages/wxss/index.js
Page({
  data: {
    eleColor: 'red',
    eleFontSize: '48rpx',
  },
})
```

```html
<!-- /Users/br/Code/blog/project/mp-dev-guide/hello/pages/wxss/index.wxml -->
<view style="color: {{eleColor}}; font-size: {{eleFontSize}};">red</view>
```

## 选择器

| 类型        | 选择器     | 样例             | 样例描述                          |
| ---------- | ---------- | -------------- | --------------------------------- |
| 类选择器    | `.class`   | `.intro`        | 选择所有拥有 `class="intro"` 的组件 |
| id选择器    | `#id`      | `#firstname`    | 选择拥有 `id="firstname"` 的组件   |
| 元素选择器   | `element`  | `view`         | 选择所有文档的 `view` 组件          |
| 伪元素选择器 | `::after`  | `view::after`   | 在 `view` 组件后边插入内容          |
| 伪元素选择器 | `::before` | `view::before`  | 在 `view` 组件前边插入内容          |

:::warning
表格列举选择器不完整，以实际开发实践为准
:::

## 优先级权重

* 类似 CSS
* `! import` ∞
* `style=""` 1000
* `#id` 100
* `.class` 10
* `element` 1

## 官方样式库 [WeUI](https://github.com/Tencent/weui-wxss)

## 实例

```shell
# /project/mp-dev-guide/hello WXSS 样式
```
