---
lang: zh-CN
description: Vue 掘金 Top 10 列表页实践 配置中心、皮肤、国际化、权限控制。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,vue 生态及实践,配置中心,JavaScript,js,vue.js
---

# 配置中心

\#网易云课堂#
\#高级前端开发工程师#
\#Vue# 
\#vue 生态及实践#
\#配置中心#
\#JavaScript#
\#js#
\#vue.js#

Vue 掘金 Top 10 列表页实践 配置中心、皮肤、国际化、权限控制。

## 实例

```js
// /project/netease-study-senior-fe/juejin-demo/src/config/config.js
class Config {
  constructor() {
    this._config = {}
  }
  register(type, value) {
    this._config[type] = value
  }
  get(type) {
    return this._config[type]
  }
}

export default new Config()
```

```js
// /project/netease-study-senior-fe/juejin-demo/src/config/locale.js
import config from './config'

export const init = () => {
  config.register('locale', {
    zh: {
      module: {
        hot: '热门',
        new: '最新',
        top: '热榜',
      },
    },
    en: {
      module: {
        hot: 'hot',
        new: 'new',
        top: 'top',
      },
    },
  })
}
```

```js
// /project/netease-study-senior-fe/juejin-demo/src/config/theme.js
import config from './config'

export const init = () => {
  config.register('theme', {
    blue: {
      primary: '#007fff',
      highlight: '#00a6ff',
    },
    red: {
      primary: '#a83733',
      highlight: '#c34b49',
    },
  })
}
```

```js {6,7,12,13}
// /project/netease-study-senior-fe/juejin-demo/src/app.js
import Vue from 'vue'
import intersect from './directive/intersect'
import store from './store'
import router from './router'
import { init as themeInit } from './config/theme'
import { init as localeInit } from './config/locale'
import App from './App.vue'

Vue.directive('intersect', intersect)

themeInit() 
localeInit()

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
```

```html
<!-- /project/netease-study-senior-fe/juejin-demo/src/App.vue -->
<template>
  <div>
    <div class="m-top" :style="{ background: theme.primary }">
      <router-link class="m-link"
        :style="{ background: $route.name === nav.path ? theme.highlight : theme.primary }"
        v-for="nav in navs" :key="nav.path" :to="nav.path">
        {{ module[nav.id] }}
      </router-link>
    </div>
    <div class="m-content">
      <router-view></router-view>
    </div>
    <div class="m-side">
      <div>
        <span>主题切换：</span>
        <button @click="themeType = 'blue'">蓝</button>
        <button @click="themeType = 'red'">红 </button>
      </div>
      <div>
        <span>语言：</span>
        <button @click="language = 'zh'">中</button>
        <button @click="language = 'en'">英 </button>
      </div>
    </div>
  </div>
</template>

<script>
import { TYPES } from './module/topic/store'
import config from './config/config'

export default {
  data() {
    return {
       themeType: 'blue',
       language: 'zh',
    }
  },
  computed: {
    theme() {
      return config.get('theme')[this.themeType]
    },
    module() {
      return config.get('locale')[this.language].module
    },
    navs() {
      return [
        { id: 'hot', path: TYPES.HOT },
        { id: 'new', path: TYPES.NEW },
        { id: 'top', path: TYPES.TOP },
      ]
    },
  },
}
</script>

...
```
