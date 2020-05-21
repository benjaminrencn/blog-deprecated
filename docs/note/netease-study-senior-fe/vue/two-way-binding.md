---
lang: zh-CN
description: Vue.js v-model、表单处理、自定义组件 v-model。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Vue,探索 vue 的组件世界,双向绑定,JavaScript,js,vue.js
---

# 双向绑定

\#网易云课堂#
\#高级前端开发工程师#
\#Vue#
\#探索 vue 的组件世界#
\#双向绑定#
\#JavaScript#
\#js#
\#vue.js#

Vue.js `v-model`、表单处理、自定义组件 `v-model`。

## [`v-model`](https://cn.vuejs.org/v2/api/#v-model)

* 用于表单元素 `<input>`、`<textarea>`、`<select>` 上创建双向数据绑定的语法糖
  * 如 `v-model` 是 `<input type="text" :value="text" @input="text = $event.target.value" />` 的“包装”并作了中文输入的合成事件等处理
* `<select>` 元素使用 `value` 属性、`change` 事件
* `<input>`、`<textarea>` 元素使用 `value` 属性、`input` 事件  
  `v-model.lazy` 使用 `change` 事件
* `<input type="radio" />`、`<input type="checkbox" />` 使用 `checked` 属性、`change` 事件

## 表单处理

* `v-model`
  * `.lazy` 监听 `change` 事件
  * `.trim` 过滤首尾空格
  * `.number` 字符串转换为数字

### 实例

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/FormVModel.vue -->
<template>
  <div>
    <p>text</p>
    {{ text }}
    <input type="text" v-model="text" placeholder="v-model" />
    <textarea v-model="text" placeholder="textarea"></textarea>
    <input type="text" v-model.lazy="text" placeholder="v-model.lazy" />
    <input type="text" v-model.trim="text" placeholder="v-model.trim" />
    <input type="text" :value="text" @input="text = $event.target.value" placeholder=":value @input" />
    <p>number</p>
    {{ number }} typeof {{typeof number}}
    <input type="number" v-model="number" placeholder="type=&quot;number&quot;" />
    <input type="text" v-model.number="number" placeholder="v-model.number" />
    <p>radio</p>
    {{ radio }}
    <label v-for="item in list" :key="`radio-${item.value}`">
      <input v-model="radio" type="radio" :value="item.value" />
      {{ item.name }}
    </label>
    <p>checkbox</p>
    {{ checkboxes.join(', ') }}
    <label v-for="item in list" :key="`checkbox-${item.value}`">
      <input v-model="checkboxes" type="checkbox" :value="item.value" />
      {{ item.name }}
    </label>
    <p>select</p>
    {{ select }}
    <select v-model="select">
      <option v-for="item in list" :key="`option-${item.value}`" :value="item.value">
        {{ item.name }}
      </option>
    </select>
    {{ selectMultiple.join(', ') }}
    <select v-model="selectMultiple" multiple>
      <option v-for="item in list" :key="`option-${item.value}`" :value="item.value">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      number: 0,
      list: [
        { name: '苹果', value: 'A' },
        { name: '香蕉', value: 'B' },
        { name: '橘子', value: 'O' },
      ],
      radio: '',
      checkboxes: [],
      select: '',
      selectMultiple: [],
    }
  },
}
</script>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 3.2 双向绑定 表单元素 v-model
```

## 自定义组件 `v-model` <Badge text="2.2.0+"/>

```html
<!-- /project/netease-study-senior-fe/vue-hello/src/components/ComponentVModel.vue -->
<template>
  <div>
    {{ selected }}
    <my-select
      v-model="selected"
      :list="list"
    ></my-select>
  </div>
</template>

<script>
import MySelect from '@/components/MySelect'

export default {
  components: {
    MySelect,
  },
  data() {
    return {
      selected: { name: '苹果', value: 'A' },
      list: [
        { name: '苹果', value: 'A' },
        { name: '香蕉', value: 'B' },
        { name: '橘子', value: 'O' },
      ],
    }
  },
}
</script>
```

```html
<template>
  <div>
    <div class="select" @click="optionShow = !optionShow">{{ selected.name }}</div>
    <div class="options" v-show="optionShow">
      <div v-for="item in list" :key="item.value" @click="select(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: ['selected', 'list'],
  data() {
    return {
      optionShow: false,
    }
  },
  methods: {
    select(item) {
      this.$emit('change', item)
      this.optionShow = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.select
  border: 1px solid #999
  padding: 2px
.options
  position: relative
  top: -1px
  border: 1px solid #999
</style>
```

```shell
# /project/netease-study-senior-fe/vue-hello
npm install
npm run serve
# 3.2 双向绑定 自定义组件 v-model
```
