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
