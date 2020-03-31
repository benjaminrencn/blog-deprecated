---
lang: zh-CN
description: 水平居中（5）、垂直居中（3）、居中（3）解决方案。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,页面架构,居中布局,CSS
---

# 居中布局

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#页面架构#
\#居中布局#
\#CSS#

水平居中（5）、垂直居中（3）、居中（3）解决方案。

## 水平居中

### inline-block + text-align

```html
<div class="parent">
  <div class="child">demo</div>
</div>
```

```css
.parent {
  text-align: center;
}
.child {
  display: inline-block;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="horizontal_demo inline-block_text-align parent">
    <div class="child">demo</div>
  </div>
</div>

### table + margin

```html
<div>
  <div class="child">demo</div>
</div>
```

```css
.child {
  display: table;
  margin: 0 auto;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="horizontal_demo table_margin parent">
    <div class="child">demo</div>
  </div>
</div>

### absolute + transform

```html
<div class="parent">
  <div class="child">demo</div>
</div>
```

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="horizontal_demo absolute_transform parent">
    <div class="child">demo</div>
  </div>
</div>

### flex + justify-content

```html
<div class="parent">
  <div>demo</div>
</div>
```

```css
.parent {
  display: flex;
  justify-content: center;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="horizontal_demo flex_justify-content parent">
    <div class="child">demo</div>
  </div>
</div>

### flex + margin

```html
<div class="parent">
  <div class="child">demo</div>
</div>
```

```css
.parent {
  display: flex;
}
.child {
  margin: 0 auto;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="horizontal_demo flex_margin parent">
    <div class="child">demo</div>
  </div>
</div>

## 垂直居中

### table-cell + vertical-align

```html
<div class="parent">
  <div>demo</div>
</div>
```

```css
.parent {
  display: table-cell;
  vertical-align: middle;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="vertical_demo">
    <div class="table-cell_vertical-align parent">
      <div class="child">demo</div>
    </div>
  </div>
</div>

### absolute + transform

```html
<div class="parent">
  <div class="child">demo</div>
</div>
```

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="vertical_demo">
    <div class="absolute_transform parent">
      <div class="child">demo</div>
    </div>
  </div>
</div>

### flex + align-items

```html
<div class="parent">
  <div>demo</div>
</div>
```

```css
.parent {
  display: flex;
  align-items: center;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="vertical_demo">
    <div class="flex_align-items parent">
      <div class="child">demo</div>
    </div>
  </div>
</div>

## 居中

### inline-block + text-align + table-cell + vertical-align

```html
<div class="parent">
  <div class="child">demo</div>
</div>
```

```css
.parent {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.child {
  display: inline-block;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="center_demo inline-block_text-align_table-cell_vertical-align parent">
    <div class="child">demo</div>
  </div>
</div>

::: danger 问题
父元素 width % 不生效 且值越小越宽 且与子元素宽度成正比
:::

### absolute + transform

```html
<div class="parent">
  <div class="child">demo</div>
</div>
```

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="center_demo absolute_transform parent">
    <div class="child">demo</div>
  </div>
</div>

### flex + justify-content + align-items

```html
<div class="parent">
  <div>demo</div>
</div>
```

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

<div class="netease_senior-fe_introductory_center-align">
  <div class="center_demo flex_justify-content_align-items parent">
    <div class="child">demo</div>
  </div>
</div>

## 延伸

* [CSS居中完整指南 - [南北]](https://www.w3cplus.com/css/centering-css-complete-guide.html)