<template>
  <div>
    <button @click="$emit('update:msg', 'hi')">
      say {{ msg }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['msg'],
}
</script>
