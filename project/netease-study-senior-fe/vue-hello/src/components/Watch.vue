<template>
  <div>
    {{ count }}
    <button @click="count++">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  watch: {
    count() {
      console.log(this.count)
    }
  }
}
</script>
