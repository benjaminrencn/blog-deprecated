---
lang: zh-CN
description: Vue.js 模板语法（插值、指令、条件渲染、列表渲染、ref）、JSX、实现八皇后棋盘。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,初识 vue,模板,JavaScript,js,vue.js
---

# 模板

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#初识 vue#
\#模板#
\#JavaScript#
\#js#
\#vue.js#

Vue.js 模板语法（插值、指令、条件渲染、列表渲染、ref）、JSX、实现八皇后棋盘。

## 模板语法

* Vue.js 使用基于 HTML 的模板语法

### 插值

####  文本

* Mustache 语法 `{{}}`
* 一次性插值 `v-once` 指令  
  会影响该节点上其他数据绑定

```html
<p>{{ msg }}</p>
<p v-once>{{ msg }}</p>
```

#### 原始 HTML

* `v-html` 指令  
  易导致 XSS 攻击，绝对不要对 UGC 使用

```html
<div v-html="rawHtml"></div>
```

#### JavaScript 表达式

### 指令

* 指令（Directive）
  * 是带有 `v-` 前缀的特殊属性
  * 作用：当值改变时响应式得作用于标记的 DOM 节点

#### 参数

* `v-bind:` `:` 绑定属性
* `v-on:` `@` 绑定事件

```html
<a v-bind:href="https://cn.vuejs.org/index.html"></a>
<a :href="https://cn.vuejs.org/index.html"></a>
<a v-on:click="do"></a>
<a @click="do"></a>
```

### 条件渲染

* `v-if` `v-else-if` `v-else`
  * **真正**的条件渲染，切换过程中条件块内的组件、事件监听器会被适当的销毁、重建
  * **惰性**的，直到第一次为真时才会开始渲染
* `v-show`
  * 切换 css 属性 `display`

```html
<div v-if="male">super man</div>
<div v-else-if="female">super woman</div>
<div v-else>human</div>
<div v-show="isShow">is show</div>
```

### 列表渲染

* `v-for`

```html
<ul>
  <li v-for="(item, index) in list" :key="item.key">
    {{ `${index}.${item.name}` }}
  </li>
</ul>
```

#### 注意

* 不推荐在同一元素上使用 `v-if` 和 `v-for`
* `v-for` 优先级高于 `v-if`

### `ref`

* js 操作子组件、DOM 元素

```html
<base-input ref="myInput"></base-input>
```

```js
// 渲染后
this.$ref.myInput.focus()
```

## JSX

```html
<script>
export default {
  render() {
    return <div class="hello">template</div>
  },
}
</script>
```

```js
// 条件渲染
<script>
export default {
  data() {
    return {
      user: {
        age: 19,
        name: 'Li Lei',
      },
    }
  },
  render() {
    if (this.user.age > 18) {
      return <div>Welcome, {this.user.name}</div>
    }
    return <div>No Log</div>
  }
}
</script>
```

```js
// 列表渲染
<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: 'Han Meimei' },
        { id: 2, name: 'Li Lei' },
        { id: 3, name: 'Lily' },
      ],
    }
  },
  render() {
    return (
      <ul>
        {this.list.map((item, index) => (
          <div key={item.id}>{`${index}.${item.name}`}</div>
        ))}
      </ul>
    )
  }
}
</script>
```

## 实现棋盘

```html
<!-- /src/App.vue -->
<template>
  <div id="app">
    <eight-queens />
  </div>
</template>

<script>
import EightQueens from '@/components/EightQueens'

export default {
  name: 'App',
  components: {
    EightQueens,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

```html
<!-- /src/components/EightQueens.vue -->
<template>
  <div>
    <div class="title">八皇后问题</div>

    <div class="grid">
      <div class="row" v-for="(row, rIndex) in grids" :key="rIndex">
        <div class="col" v-for="col in row" :key="col.key">
          <div v-show="col.ok">Q</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const grids = new Array(8).fill(0).map((v, r) => {
  return new Array(8).fill(0).map((v, c) => {
    return {
      key: `key-${r * 8 + c}`,
      ok: false,
    }
  })
})

export default {
  data() {
    return {
      grids,
    }
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/eight-queens
npm install
npm run serve
```