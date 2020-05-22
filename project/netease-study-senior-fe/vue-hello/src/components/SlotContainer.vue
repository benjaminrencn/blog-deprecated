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
