<template>
  <div>mixin</div>
</template>

<script>
export default {
  created() {
    console.log('[3.5 mixin] component created')
    
    this.conflicting()
  },
  methods: {
    conflicting() {
      console.log('[3.5 mixin] component conflicting')
    },
  },
}
</script>
