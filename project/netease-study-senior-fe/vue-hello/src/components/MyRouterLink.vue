<template>
  <a @click="jump">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'MyRouterLink',
  props: {
    to: {
      type: String,
      required: true,
    }
  },
  methods: {
    jump() {
       const router = this._routerRoot._router
       router.push(this.to)
    },
  },
}
</script>
