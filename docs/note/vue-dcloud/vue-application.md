---
lang: zh-CN
description: 创建第一个 vue 应用。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,创建第一个 vue 应用
---

# 创建第一个 vue 应用

\#Vue.js 教程#
\#DCloud#
\#创建第一个 vue 应用#

创建第一个 vue 应用。

## 案例

Vue.js 的核心是一个允许采用简洁的模板语法声明式的数据渲染到页面的系统

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app2">{{ message }} {{ name }}</div>
```

```js
let app2 = new Vue({
  el: '#app2',
  data: {
    message: 'Hello world',
    name: 'Vue',
  },
});
```