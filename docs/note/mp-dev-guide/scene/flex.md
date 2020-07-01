---
lang: zh-CN
description: 微信小程序 Flex 布局 概念、容器属性（display、flex-direction、flex-wrap、justify-content、align-items、align-content）、项目属性（order、flex-shrink、flex-grow、flex-basis、flex、align-self）。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,应用场景,Flex 布局,微信小程序
---

# Flex 布局

\#小程序开发指南#
\#微信小程序团队#
\#应用场景#
\#Flex 布局#
\#微信小程序#

微信小程序 Flex 布局 概念、容器属性（`display`、`flex-direction`、`flex-wrap`、`justify-content`、`align-items`、`align-content`）、项目属性（`order`、`flex-shrink`、`flex-grow`、`flex-basis`、`flex`、`align-self`）。

* 小程序要求兼容到 iOS 8 以下版本  
  详情 -> 本地设置 -> 上传代码时样式自动补全
* 本文约定术语
  * 容器 container
    * 采用 flex 布局的元素
  * 项目 item
    * 容器内的元素

## 概念

* flex 最早2009年被提出
* 目的是提供更灵活的布局模型  
  容器能通过改变里面的高宽、顺序。来对可用空间实现最佳的填充，方便适配不同大小的内容区域
* flex 属性集
  * 容器属性
    * `display: flex;`
    * `flex-direction: row（默认值） | row-reverse | column | column-reverse`
    * `flex-wrap: nowrap（默认值） | wrap | wrap-reverse`
    * `justify-content: flex-start（默认值） | flex-end | center |space-between | space-around | space-evenly`
    * `align-items: stretch（默认值） | center | flex-end | baseline | flex-start`
    * `align-content: stretch（默认值） | flex-start | center | flex-end | space-between | space-around | space-evenly`
  * 项目属性
    * `order: 0（默认值） | <integer>`
    * `flex-shrink: 1（默认值） | <number>`
    * `flex-grow: 0（默认值） | <number>`
    * `flex-basis: auto（默认值） | <length>`
    * `flex: none | auto | @flex-grow @flex-shrink @flex-basis`
    * `align-self: auto（默认值） | flex-start | flex-end |center | baseline | stretch`
* 坐标轴
  * 默认水平方向是主轴（main axis）、垂直方向是交叉轴（cross axis）
  * 交叉轴垂直于主轴，方向取决于主轴方向
  * 项目在主轴上排列，排满后在交叉轴方向换行

## 容器属性

### `flex-direction`

* 设置坐标轴方向
* `flex-direction: row（默认值） | row-reverse | column | column-reverse`
* `row`（默认值）：主轴横向从左往右
* `row-reverse`：主轴横向从右往左
* `column`：主轴纵向从上往下
* `column-reverse`：主轴纵向从下往上

### `flex-wrap`

* 设置是项目否允许多行排列及换行方向
* `flex-wrap: nowrap（默认值） | wrap | wrap-reverse`
* `nowrap`（默认值）：不换行，溢出容器
* `wrap`：换行排列
* `warp-reverse`：换行排列，方向为 `wrap` 反方向

### `justify-content`

* 设置项目在主轴上的对齐方式，及项目之间及其周围多余的空间
* `justify-content: flex-start（默认值） | flex-end | center | space-between | space-around | space-evenly`
* `flex-start`（默认值）：对齐主轴起点，项目间不留空隙
* `center`：居中排列，项目间不留空隙。第一个项目离主轴起点距离等于最后一个项目离主轴终点距离
* `flex-end`：对齐主轴终点，项目间不留空隙
* `space-between`：项目间间距相等。第一个项目离主轴起点、最后一个项目离主轴终点距离为0
* `space-around`：项目间间距相等。第一个项目离主轴起点、最后一个项目离主轴终点距离为中建项目间间距一半
* `space-evenly`：项目间间距、第一个项目离主轴起点、最后一个项目离主轴终点距离相等

### `align-items`

* 设置项目在行中的对齐方式
* `align-items: stretch（默认值） | center | flex-end | baseline | flex-start`
* `stretch`（默认值）：拉伸填满行高
* `flex-start`：顶部与行起点对齐
* `center`：行中居中对齐
* `flex-end`：底部与行终点对齐
* `base-line`：项目的第一行文字的基线对齐

### `align-content`

* 多行排列时，设置行在交叉轴上的对齐方式，及分配行之间及周围多余的空间
* `align-content: stretch（默认值） | flex-start | center | flex-end | space-between | space-around | space-evenly`
* `stretch`（默认值）：  
  当未设置尺寸，将各行中的项目拉伸填满交叉轴  
  当设置尺寸，项目尺寸不变，项目行拉伸填满交叉轴
* `flex-start`：首行在交叉轴起点开始排列，不留行间距
* `center`：行在交叉轴中点排列，不留行间距，首行离交叉轴起点、行尾离交叉轴终点距离相等
* `flex-end`：行尾在交叉轴终点开始排列，不留行间距
* `space-between`：行间距相等，首行离交叉轴起点、行尾离交叉轴终点距离为0
* `space-around`：行间距相等，首行离交叉轴起点、行尾离交叉轴终点距离为行间距一半
* `space-evenly`：行间距相等，首行离交叉轴起点、行尾离交叉轴终点距离为行间距相等

## 项目属性

### `order`

* 设置项目沿主轴方向上的排列顺序，数值越小，排列越靠前，属性值为整数
* `order: 0（默认值） | <integer>`

### `flex-shrink`

* 当项目在主轴方向上溢出时，设置项目收缩因子压缩项目适应容器，属性值为非负数
* `flex-shrink: 1（默认值） | <number>`

### `flex-grow`

* 当项目在主轴方向上还有剩余空间时，设置项目扩张因子分配剩余空间，属性值为非负数
* `flex-grow: 0（默认值） | <number>`

### `flex-basis`

* 与项目主轴方向尺寸有关，`flex-direction` 为 `row`、`row-reverse` 时是 `width`，`flex-direction` 为 `column`、`column-reverse` 时是 `height`  
  同时存在 `flex-basis` 优先级高于项目主轴方向尺寸，值非 `auto` 属性优先级更高

### `flex`

* `flex` 是 `flex-grow`、`flex-shrink`、`flex-basis` 的简写
* 值 `none` 等价于 `0 0 auto`
* 值 `auto` 等价于 `1 1 auto`

### `align-self`

* 设置项目在行中交叉轴方向上的对齐方式，覆盖容器的 `align-items`
* `align-self: auto（默认值） | flex-start | flex-end |center | baseline | stretch`
* 默认 `auto` 继承容器的 `align-items` 值
* 当容器没有设置 `align-items` 时，属性为 `stretch`