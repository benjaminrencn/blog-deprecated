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

    <p><a name="event-style" href="#event-style">2.4 事件 & 样式</a></p>
    <p><a name="event-style-event" href="#event-style-event">事件</a></p>
    <event></event>

    <p><a name="event-style-emit" href="#event-style-emit">$emit</a></p>
    <emit-parent></emit-parent>

    <p><a name="component" href="#component">2.5 组件</a></p>
    <p><a name="component-life-cycle" href="#component-life-cycle">生命周期</a></p>
    <button @click="lifeCycle = !lifeCycle">切换声明周期</button>
    <life-cycle v-if="lifeCycle"></life-cycle>

    <p><a name="component-dynamic" href="#component-dynamic">动态组件</a></p>
    <button @click="dynamic = !dynamic">切换动态组件</button>
    <p>&lt;component&gt;</p>
    <component :is="component"></component>

    <button @click="keepAlive = !keepAlive">切换动态组件</button>
    <p>&lt;keep-alive&gt;</p>
    <keep-alive>
      <component :is="componentKeepAlive"></component>
    </keep-alive>

    <h3>探索 vue 的组件世界</h3>
    <p><a name="direcitve" href="#directive">3.1 自定义指令</a></p>
    <directive></directive>

    <p><a name="two-way-binding" href="#two-way-binding">3.2 双向绑定</a></p>
    <p><a name="two-way-binding-form-vmodel" href="#two-way-binding-form-vmodel">表单元素 v-model</a></p>
    <form-v-model></form-v-model>

    <p><a name="two-way-binding-component-vmodel" href="#two-way-binding-component-vmodel">自定义组件 v-model</a></p>
    <component-v-model></component-v-model>
  </div>
</template>

<script>
import PropParent from '@/components/PropParent'
import Computed from '@/components/Computed'
import Watch from '@/components/Watch'
import Array from '@/components/Array'
import Event from '@/components/Event'
import EmitParent from '@/components/EmitParent'
import LifeCycle from '@/components/LifeCycle'
import Dynamic from '@/components/Dynamic'
import Directive from '@/components/Directive'
import FormVModel from '@/components/FormVModel'
import ComponentVModel from '@/components/ComponentVModel'

export default {
  name: 'App',
  components: {
    PropParent,
    Computed,
    Watch,
    Array,
    Event,
    EmitParent,
    LifeCycle,
    Dynamic,
    Directive,
    FormVModel,
    ComponentVModel,
  },
  data() {
    return {
      lifeCycle: false, // 生命周期
      dynamic: true, // 动态组件
      keepAlive: true, // keep-alive 动态组件
    }
  },
  computed: {
    component() {
      return this.dynamic ? LifeCycle : Dynamic
    },
    componentKeepAlive() {
      return this.keepAlive ? LifeCycle : Dynamic
    },
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
