<template>
  <div>Foo</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('[Foo.beforeRouteEnter]', to, from)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('[Foo.beforeRouteUpdate]', to, from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('[Foo.beforeRouteLeave]', to, from)
    next()
  },
}
</script>
