<template>
  <div>
    {{ input }}
    <my-el-input v-model="input" @blur="onBlur"></my-el-input>
  </div>
</template>

<script>
import MyElInput from './MyElInput'
export default {
  components: {
    MyElInput,
  },
  data() {
    return {
      input: '',
    }
  },
  methods: {
    onBlur() {
      console.log('my-el-input blur')
    }
  },
}
</script>
