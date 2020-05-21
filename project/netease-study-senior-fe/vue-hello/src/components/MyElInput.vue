<template>
  <div>
    <!-- 传统写法 -->
    <!-- <el-input
      v-model="value"
      @input="$emit('input', $event)"
      @blur="$emit('blur')"
    ></el-input> -->
    <!-- $attrs、$listeners 透传 -->
    <el-input v-bind="$attrs" v-on="$listeners"></el-input>
  </div>
</template>

<!-- 传统写法 -->
<!-- <script>
export default {
  model: {
    prop: 'input',
    event: 'input',
  },
  props: ['input'],
  data() {
    return {
      value: this.input
    }
  },
}
</script> -->

<style lang="stylus" scoped>
.el-input /deep/ .el-input__inner
  border-width: 0 0 1px 0
</style>
