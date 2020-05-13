<template>
  <div id="app">
    <h2>Vue</h2>

    <h3>课程导学</h3>

    <p><a name="hello" href="#hello">1.1 Vue 专题导学</a></p>

    <h3>初识 vue</h3>

    <p><a name="hello" href="#hello">2.1 Hello Vue</a></p>

    <p><a name="template" href="#template">2.2 模板</a></p>

    <p><a name="data" href="#data">2.3 数据</a></p>
    <p><a name="data-prop" href="#data-prop">props</a></p>
    <prop-parent></prop-parent>

    <p><a name="data-computed" href="#data-computed">computed</a></p>
    <computed></computed>

    <p><a name="data-watch" href="#data-watch">watch</a></p>
    <watch></watch>

    <p><a name="data-array" href="#data-array">array</a></p>
    <array></array>
  </div>
</template>

<script>
import PropParent from '@/components/PropParent'
import Computed from '@/components/Computed'
import Watch from '@/components/Watch'
import Array from '@/components/Array'

export default {
  name: 'App',
  components: {
    PropParent,
    Computed,
    Watch,
    Array,
  }
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
