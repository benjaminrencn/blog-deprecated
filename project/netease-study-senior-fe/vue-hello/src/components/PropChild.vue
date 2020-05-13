<template>
  <div>father {{ parentName }}</div>
</template>

<script>
export default {
  // Array<Object>
  // props: ['parentName'],
  // Object
  props: {
    parentName: {
      type: String,
      required: true,
      default: 'banjino',
      validator(value) {
        const nameEnums = ['banjino', 'sam']
        return nameEnums.includes(value)
      },
    }
  },
  mounted() {
    // [Vue warn] 不建议直接修改 props
    // Vue.js 是单向数据流的
    // this.parentName = 'a' 
  },
}
</script>
