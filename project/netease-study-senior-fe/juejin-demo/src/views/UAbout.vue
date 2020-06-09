<template>
  <div class="about">
    about me !!!
    <input type="text" v-model="input" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
}
</script>

<style scoped>
.about {
  text-align: center;
  padding: 30px;
}
</style>
