<template>
  <div>
    <button @click="addCount(3)">add 3</button>
    <button @click="asyncAddCount">async add</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    // addCount() {
    //   this.$store.commit('addCount', 3)
    // },
    ...mapMutations(['addCount']),
    // asyncAddCount() {
    //   this.$store.dispatch('asyncAddCount')
    // },
    ...mapActions(['asyncAddCount']),
  },
}
</script>
