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

    <p><a name="component-design" href="#component-design">3.3 组件设计</a></p>
    <p><a name="component-design-slot" href="#component-design-slot">插槽</a></p>
    <slot-demo></slot-demo>

    <p><a name="component-communication" href="#component-communication">3.4 组件通信</a></p>
    <p><a name="component-communication-compose" href="#component-communication-compose">组件封装</a></p>
    <compose></compose>

    <p><a name="plugin" href="#plugin">3.5 插件</a></p>
    <!-- 注释其他组件方便观察 console -->
    <p><a name="plugin-mixin" href="#plugin-mixin">mixin</a></p>
    <mixin></mixin>

    <p><a name="component-reuse" href="#component-reuse">3.6 组件复用</a></p>
    <p><a name="component-reuse-mixin" href="#component-reuse-mixin">Renderless 组件</a></p>
    <slot-container></slot-container>

    <p><a name="responsive" href="#responsive">4.1 响应式</a></p>
    <responsive></responsive>

    <p><a name="next-tick" href="#next-tick">4.2 异步更新队列（nextTick）源码分析</a></p>
    <p><a name="next-tick-multi-responsive" href="#next-tick-multi-responsive">多组数据响应式</a></p>
    <multi-responsive></multi-responsive>

    <p><a name="next-tick-next-tick" href="#next-tick-next-tick">异步更新队列</a></p>
    <next-tick></next-tick>

    <p><a name="diff-patch" href="#diff-patch">4.3 diff patch</a></p>

    <p><a name="computed-watch-watch-effect-proxy" href="#computed-watch-watch-effect-proxy">4.4 computed & watch & watchEffect & Proxy</a></p>
    <p><a name="computed-watch-watch-effect-proxy-watch-effect" href="#computed-watch-watch-effect-proxy-watch-effect">computed、watch、watchEffect 实现</a></p>
    <computed-watch-watch-effect></computed-watch-watch-effect>

    <p><a name="computed-watch-watch-effect-proxy-proxy" href="#computed-watch-watch-effect-proxy-proxy">Proxy</a></p>
    <proxy></proxy>

    <p><a name="computed-watch-watch-effect-proxy-responsive-array" href="#computed-watch-watch-effect-responsive-array">响应式数组操作</a></p>
    <responsive-array></responsive-array>

    <p><a name="computed-watch-watch-effect-proxy" href="#computed-watch-watch-effect-proxy">4.5 vue 3 composition api</a></p>

    <h3>vue 生态及实践</h3>

    <p><a name="vuex1" href="#vuex1">5.1 vuex 上</a></p>
    <vuex-count></vuex-count>

    <p><a name="vuex2" href="#vuex2">5.2 vuex 下</a></p>
    <my-vuex></my-vuex>

    <div style="height: 600px"></div>
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
import SlotDemo from '@/components/SlotDemo'
import Compose from '@/components/Compose'
import Mixin from '@/components/Mixin'
import SlotContainer from '@/components/SlotContainer'
import Responsive from '@/components/Responsive'
import MultiResponsive from '@/components/MultiResponsive'
import NextTick from '@/components/NextTick'
import ComputedWatchWatchEffect from '@/components/ComputedWatchWatchEffect'
import Proxy from '@/components/Proxy'
import ResponsiveArray from '@/components/ResponsiveArray'
import VuexCount from '@/components/VuexCount'
import MyVuex from '@/components/MyVuex'

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
    SlotDemo,
    Compose,
    Mixin,
    SlotContainer,
    Responsive,
    MultiResponsive,
    NextTick,
    ComputedWatchWatchEffect,
    Proxy,
    ResponsiveArray,
    VuexCount,
    MyVuex,
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
