---
lang: zh-CN
description: 自适应布局（7）、等宽布局（3）、等高布局（3）。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,CSS,多列布局
---

# 多列布局

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#CSS#
\#多列布局#

自适应布局（7）、等宽布局（3）、等高布局（3）。

## 定宽 + 自适应

### float + margin

```html
<div>
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.left {
  float left
  width 100px
}
.right {
  margin-left 120px
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="fixed_width_demo float_margin parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

### float + overflow

```html
<div>
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.left {
  float: left;
  margin-right: 20px;
  width: 100px;
}
.right {
  overflow: hidden;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="fixed_width_demo float_overflow parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

:::tip
`overflow: hidden;` 与 BFC 原理有关

* [块格式化上下文 - [MDN]](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
* [[布局概念] 关于CSS-BFC深入理解 - [OBKoro1]](https://juejin.im/post/5909db2fda2f60005d2093db)
:::

### table

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.parent {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.left, .right {
  display: table-cell;
}
.left {
  width: 100px;
}
.right {
  padding-left: 20px;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="fixed_width_demo table parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

:::tip
`table-layout`

| 值      | 说明                          |
|---------|-------------------------------|
| `auto`  | 大多数浏览器采用 宽度取决于内容 |
| `fixed` | 宽度取决于 `width`             |
:::

### flex

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.parent {
  display: flex;
}
.left {
  width: 100px;
  margin-right: 20px;
}
.right {
  flex: 1;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="fixed_width_demo flex parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

## 不定宽 + 自适应

### float + overflow

```html
<div>
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.left {
  float: left;
  margin-left: 20px;
}
.right {
  overflow: hidden;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="changed_width_demo float_overflow parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

### table

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.parent {
  display: table;
  width: 100%;
}
.left,
.right {
  display: table-cell;
}
.left {
  width: 0.1%; // 极小值
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="changed_width_demo table parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

### flex

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.parent {
  display: flex
}
.left {
  margin-right: 20px;
}
.right {
  flex: 1;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="changed_width_demo flex parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

## 等宽

### float

```html
<div class="parent">
  <div class="column"><p>1</p></div>
  <div class="column"><p>2</p></div>
  <div class="column"><p>3</p></div>
  <div class="column"><p>4</p></div>
</div>
```

```css
.parent {
  margin-left: -20px;
}
.column {
  float: left;
  width: 25%;
  padding-left: 20px;
  box-sizing: border-box;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="equal_width_demo float parent">
    <div class="column"><p>1</p></div>
    <div class="column"><p>2</p></div>
    <div class="column"><p>3</p></div>
    <div class="column"><p>4</p></div>
  </div>
</div>

:::tip
`box-sizing`

| 值            | 说明                                       |
|---------------|--------------------------------------------|
| `content-box` | 默认值 `width` = 内容区宽度                 |
| `border-box`  | `width` = 内容区宽度 + `padding` + `border` |
:::

### table

```html
<div class="parent-fix">
  <div class="parent">
    <div class="column"><p>1</p></div>
    <div class="column"><p>2</p></div>
    <div class="column"><p>3</p></div>
    <div class="column"><p>4</p></div>
  </div>
</div>
```

```css
.parent-fix {
  margin-left: -20px;
}
.parent {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.column {
  display: table-cell;
  padding-left: 20px;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="equal_width_demo table parent-fix">
    <div class="parent">
      <div class="column"><p>1</p></div>
      <div class="column"><p>2</p></div>
      <div class="column"><p>3</p></div>
      <div class="column"><p>4</p></div>
    </div>
  </div>
</div>

:::danger
`.parent-fix` 作用弥补 `display: table;` margin 无效  
找出无需 `.parent-fix` 的解决方案
:::

### flex

```html
<div class="parent">
  <div class="column"><p>1</p></div>
  <div class="column"><p>2</p></div>
  <div class="column"><p>3</p></div>
  <div class="column"><p>4</p></div>
</div>
```

```css
.parent {
  display: flex;
}
.column {
  flex: 1;
}
.column+.column {
  margin-left: 20px;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="equal_width_demo flex parent">
    <div class="column"><p>1</p></div>
    <div class="column"><p>2</p></div>
    <div class="column"><p>3</p></div>
    <div class="column"><p>4</p></div>
  </div>
</div>

## 等高

### table

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.parent {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.left,
.right {
  display: table-cell;
}
.left {
  width: 100px;
  border-right: 20px solid transparent;
  background-clip: padding-box;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="equal_height_demo table parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

:::tip
`background-clip`

| 值            | 说明                           |
|---------------|-------------------------------|
| `border-box`  | 默认值 背景延伸到 `border`      |
| `padding-box` | 背景延伸到 `padding`           |
| `content-box` | 背景裁剪到内容区（content box）  |
| `text`        | 背景裁剪成文字的 `color`        |
:::

### flex

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.parent {
  display: flex;
}
.left {
  width: 100px;
  margin-right: 20px;
}
.right {
  flex: 1;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="equal_height_demo flex parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

### float 伪等高

```html
<div class="parent">
  <div class="left">
    <p>left</p>
  </div>
  <div class="right">
    <p>right</p>
    <p>right</p>
  </div>
</div>
```

```css
.parent {
  overflow: hidden;
}
.left,
.right {
  padding-bottom: 9999px; // 极大值
  margin-bottom: -9999px; // 极大值
}
.left {
  float: left;
  width: 100px;
  margin-right: 20px;
}
.right {
  overflow: hidden;
}
```

<div class="netease_senior-fe_introductory_layout">
  <div class="equal_height_demo float parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
</div>

## 延伸

* [CSS 布局 - [MDN]](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)
* [CSS 常见布局方式 - [sunshine小小倩]](https://juejin.im/post/599970f4518825243a78b9d5)