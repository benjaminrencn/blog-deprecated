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
