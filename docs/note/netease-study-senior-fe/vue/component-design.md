---
lang: zh-CN
description: Vue.js 组件设计（YAGNI 原则、DRY 原则）、插槽（<slot>、v-slot、插槽作用域、作用域插槽）。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,探索 vue 的组件世界,组件设计,JavaScript,js,vue.js
---

# 组件设计

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#探索 vue 的组件世界#
\#组件设计#
\#JavaScript#
\#js#
\#vue.js#

Vue.js 组件设计（YAGNI 原则、DRY 原则）、插槽（`<slot>`、`v-slot`、插槽作用域、作用域插槽）。

## 组件设计

![组件设计功能实例](./image/component-design-feature.png)

* IndexPage 主页
  * Nav 导航
  * IndexContext 主页正文
  * Footer 尾部
* HelpPage 帮助页
  * Nav 导航
  * HelpContext 帮助页正文
  * Footer 尾部

 ↓ 抽象 Nav、Footer

* Layout
  * Nav 导航
  * IndexContext 主页正文、HelpContext 帮助页正文
  * Footer 尾部

* YAGNI 原则（You Ain’t Gonna Need It）  
  适可而止。不做过度设计。只做必需功能，不做你认为可能需要的功能。
* DRY 原则（Don't Repeat Yourself）  
  不重复自身

## [插槽](https://cn.vuejs.org/v2/guide/components-slots.html)

* [`<slot>`](https://cn.vuejs.org/v2/api/#slot)
* [`v-slot`](https://cn.vuejs.org/v2/api/#v-slot)

```html
<template>
  <div>
    <s-index-layout>
      <template v-slot:header>
        头部
      </template>
      <template v-slot:default>
        内容
      </template>
      <template v-slot:footer>
        尾部
      </template>
    </s-index-layout>
  </div>
</template>
```

```html
<!-- SIndexLayout.vue -->
<template>
  <div>
    <header>
      <slot name="header">
        默认头部
      </slot>
    </header>
    <main>
      <slot name="default">
        默认正文
      </slot>
    </main>
    <footer>
      <slot name="footer">
        默认尾部
      </slot>
    </footer>
  </div>
</template>
```

* `<template v-slot:>` 未编写对应 `<slot>` 默认使用其子元素
* `<template>` 未填写 `v-slot`，`<slot>` 未填写 `name` 默认为 `default`
* 未填写 `<template>` 则为挂载的第一个元素
* `v-slot` 缩写 `#`

### 插槽作用域

```html
<template>
  <div>
    <slot-layout>
      <template v-slot:default>{{ content }}<template>
    <slot-layout>
  </div>
</template>
<script>
import SlotLayout from './SlotLayout'
export default {
  component: {
    SlotLayout,
  },
  data() {
    return {
      content: 'Hello Slot',
    }
  },
}
</script>
```

* 父级模板里的内容在父级作用域中编译
* 子级模板里的内容在子级作用域中编译

### [作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD) <Badge text="2.6.0+" />

```html
<template>
  <div>
    <slot-nav>
      <template v-slot:header="{ user }">{{ user.email }}</template>
    </slot-nav>
  </div>
</template>
<script>
import SlotNav from './SlotNav'
export default {
  components: {
    SlotNav,
  },
}
</script>
```

```html
<!-- SlotNav.vue -->
<template>
  <div>
    <header>
      <slot name="header" v-bind:user="user">
        <nav>
          <span>{{ user.name }}</span>
        </nav>
      </slot>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: 'Li Lei',
        email: 'lilei@email.com',
      },
    },
  },
}
</script>
```

## 实例

```html
<template>
  <div>
    <slot-load url="http://xxx.com/api" #default="{ data }">
      <div>load finish {{ data.name }} </div>
    </slot-load>
  </div>
</template>

<script>
import SlotLoad from './SlotLoad'
export default {
  components: {
    SlotLoad,
  },
}
</script>
```

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/SlotLoad.vue -->
<template>
  <div>
    <div v-if="loading">加载中...</div>
    <slot v-else :data="data"></slot>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      loading: true,
      data: {},
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
      this.data = { name: 'Li Lei' }
    }, 1000)
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 3.3 组件设计 插槽
```
