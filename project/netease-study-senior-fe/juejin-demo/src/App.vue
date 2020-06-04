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
        { id: 'about', path: '/about' },
      ]
    },
  },
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  overflow-y: scroll;
}

a {
  text-decoration: none;
  color: #007fff;
}

.m-top {
  height: 60px;
  width: 100%;
  background: #007fff;
}

.m-link {
  display: inline-block;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  font-size: 19px;
  color: #fff;
}
  .m-link.router-link-active {
     background: #00a6ff;
  }

.m-content {
  width: 960px;
  border: 1px solid #eee;
  background: #fff;
  margin: 20px auto;
  padding: 0 20px;
}

.m-side {
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left: 520px;
  width: 200px;
}
</style>