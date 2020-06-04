<template>
  <div>
    <div class="m-top">
      <router-link class="m-link" v-for="nav in navs" :key="nav.path" :to="nav.path">{{ nav.name }}</router-link>
    </div>
    <div class="m-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { TYPES } from './module/topic/store'

export default {
  computed: {
    navs() {
      return [
        { name: '热门', path: TYPES.HOT },
        { name: '最新', path: TYPES.NEW },
        { name: '热榜', path: TYPES.TOP },
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
</style>