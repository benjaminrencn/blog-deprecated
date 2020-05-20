<template>
  <div>
    dynamic
    <input
      type="text"
      v-model="text"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'A',
    }
  },
}
</script>