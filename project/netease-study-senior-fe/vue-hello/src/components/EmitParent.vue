<template>
  <div>
    {{ msg }}
    <emit-child
      :msg="msg"
      @update:msg="msg = $event"
    ></emit-child>
    <emit-child
      :msg.sync="msg"
    ></emit-child>
  </div>
</template>

<script>
import EmitChild from './EmitChild'

export default {
  components: {
    EmitChild,
  },
  data() {
    return {
      msg: 'parent',
    }
  },
}
</script>
