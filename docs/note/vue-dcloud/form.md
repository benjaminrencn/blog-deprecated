---
lang: zh-CN
description: Vue.js 基础用法（文本、多行文本、复选框、单选框）。
meta:
  - name: keywords
    content: Vue.js 教程,DCloud,表单输入绑定
---

# 表单输入绑定

\#Vue.js 教程#
\#DCloud#
\#表单输入绑定#

Vue.js 基础用法（文本、多行文本、复选框、单选框）。

## 基础用法

* 使用 `v-model` 在 `<input>`、`<textarea>`、`<select>` 进行双向数据绑定  
  监听用户输入时间以更新数据，处理极端场景
* `v-model` 为不同的元素使用不同的属性抛出不同的事件
  * `text`、`<textarea>` 使用 `value` 属性和 `input` 事件
  * `checkbox`、`radio` 使用 `checked` 属性和 `change` 事件
  * `select` 将 `value` 作为 prop ，将 `change` 作为事件

::: danger
`v-model` 在输入法场景下，可能会在输入法组合文字中得到更新。  
需要使用 `input` 事件
:::

### 文本

```html
<div>
  <input placeholder="text" v-model="text" />
  <p>text: {{text}}</p>
</div>
```

```js
// Vue options
data: {
  text: '',
},
```

### 多行文本

```html
<div>
  <textarea placeholder="multiline text" v-model="multilineText"></textarea>
  <p>multiline text: {{multilineText}}</p>
</div>
```

```js
// Vue options
data: {
  multilineText: '',
},
```

### 复选框

```html
<div>
  <label for="jack">
    Jack
    <input type="checkbox" id="jack" value="jack" v-model="names" />
  </label>
  <label for="john">
    John
    <input type="checkbox" id="john" value="john" v-model="names" />
  </label>
  <label for="mike">
    Mike
    <input type="checkbox" id="mike" value="mike" v-model="names" />
  </label>
  <p>names: {{names}}</p>
</div>
```

```js
// Vue options
data: {
  names: [],
},
```

### 单选框

```html
<div>
  <label for="one">
    One
    <input type="radio" id="one" value="one" v-model="radio" />
  </label>
  <br />
  <label for="two">
    Two
    <input type="radio" id="two" value="two" v-model="radio" />
  </label>
  <p>radio: {{radio}}</p>
</div>
```

```js
// Vue options
data: {
  radio: '',
},
```

## 案例

```shell
# /project/vue-dcloud/vue-demo
# index.html
```

```html
<div id="app11">
  <div>
    <input placeholder="text" v-model="text" />
    <p>text: {{text}}</p>
  </div>
  <div>
    <textarea placeholder="multiline text" v-model="multilineText"></textarea>
    <p>multiline text: {{multilineText}}</p>
  </div>
  <div>
    <label for="jack">
      Jack
      <input type="checkbox" id="jack" value="jack" v-model="names" />
    </label>
    <label for="john">
      John
      <input type="checkbox" id="john" value="john" v-model="names" />
    </label>
    <label for="mike">
      Mike
      <input type="checkbox" id="mike" value="mike" v-model="names" />
    </label>
    <p>names: {{names}}</p>
  </div>
  <div>
    <label for="one">
      One
      <input type="radio" id="one" value="one" v-model="radio" />
    </label>
    <br />
    <label for="two">
      Two
      <input type="radio" id="two" value="two" v-model="radio" />
    </label>
    <p>radio: {{radio}}</p>
  </div>
  <button type="button" @click="submit()">submit</button>
</div>
```

```js
let vm11 = new Vue({
  el: '#app11',
  data: {
    text: '',
    multilineText: '',
    names: [],
    radio: '',
  },
  methods: {
    submit: function () {
      console.log({
        text: this.text,
        multilineText: this.multilineText,
        names: this.names,
        radio: this.radio,
      });
    },
  },
});
```