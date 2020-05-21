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
