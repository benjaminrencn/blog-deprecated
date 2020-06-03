<template>
  <div>Bar</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('[Bar.beforeRouteEnter]', to, from)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('[Bar.beforeRouteUpdate]', to, from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('[Bar.beforeRouteLeave]', to, from)
    next()
  },
}
</script>
