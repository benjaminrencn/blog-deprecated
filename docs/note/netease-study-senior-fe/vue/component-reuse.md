---
lang: zh-CN
description: Vue.js 。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,探索 vue 的组件世界,组件复用,JavaScript,js,vue.js
---

# 组件复用

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#探索 vue 的组件世界#
\#组件复用#
\#JavaScript#
\#js#
\#vue.js#

Vue.js Mixin 模式、HOC、Renderless 组件。

## 需求

表单验证

## Mixin 模式


* 通过原型继承，扩展对象，实现复用
* 同名钩子函数合并为数组，混入对象钩子在组件自身钩子之前调用
* `components`、`directives`、`methods`，合并为一个对象，组件对象覆盖混入对象
* 缺点
  * 打破组件的封装性
  * 增加组件复杂度
  * 有命名冲突问题
  * 仅对逻辑复用，模板不能复用

## HOC（High Order Component）高阶组件

* 函数接收一个组件作为参数，并返回一个新组件
  可复用的逻辑在函数中实现
* 比较 Mixin 优点
  * 模板复用
  * 不会出现命名冲突（本质上是一个 HOC 是套了一层父组件）
* 不足
  * 组件复杂度高、多层嵌套、调试麻烦

### 实例

```js
// Hoc.js
import Vue from 'vue'

const ValidateHoc = (Component) => Vue.component(`hoc-${Component.name}`, {
  data() {
    return {
      errMsg: '',
    }
  },
  methods: {
    validate() {
      console.log('validate')
      // ...
      return true
    },
  },
  render() {
    return (
      <div>
        <Component on-blur={ this.validate }></Component>
        { this.errMsg }
      </div>
    )
  },
})

export default ValidateHoc
```

```html
<!-- CustomInput.vue -->
<template>
  <input type="text" @blur="$emit('blur')" />
</template>
```

```js
// HocInput.js
import CustomInput from './CustomInput'
import ValidateHoc from './Hoc'

const ValidateInput = ValidateHoc(CustomInput)

export default {
  name: 'HocInput',
  render() {
    return <ValidateInput />
  },
}
```

## Renderless 组件

* 复用的逻辑沉淀在包含 slot 插槽的组件
* 接口由插槽 Prop 来暴露
* 优点
  * 模板可复用
  * 不会出现命名冲突
  * 符合依赖倒置原则
  * 复用接口来源清晰

### 实例

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/SlotValidate.vue -->
<template>
  <div>
    <slot :validate="validate"></slot>
    {{ errMsg }}
  </div>
</template>

<script>
export default {
  props: ['value', 'rules'],
  data() {
    return {
      errMsg: '',
    }
  },
  methods: {
    validate() {
      return this.rules.reduce((pre, cur) => {
        const res = pre && cur && cur.test && cur.test(this.value)
        this.errMsg = res ? '' : cur.message
        return pre && cur
      }, true)
    },
  },
}
</script>
```

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/SlotContainer.vue -->
<template>
  <div>
    <slot-validate #default="{ validate }" :value="input" :rules="inputRules">
      <input v-model="input" type="text" @blur="validate" />
    </slot-validate>
    <slot-validate #default="{ validate }" :value="text" :rules="textRules">
      <textarea v-model="text" @blur="validate"></textarea>
    </slot-validate>
  </div>
</template>

<script>
import SlotValidate from './SlotValidate'
export default {
  components: {
    SlotValidate,
  },
  data() {
    return {
      input: 'hi',
      inputRules: [{
        test(value) {
          return /^\d+$/.test(value)
        },
        message: '请输入数字',
      }],
      text: '',
      textRules: [{
        test(value) {
          return value
        },
        message: '请输入',
      }],
    }
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 3.6 组件复用 Renderless 组件
```
