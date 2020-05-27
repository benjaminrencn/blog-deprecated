<template>
  <div>
    <vuex-count-child></vuex-count-child>
    {{ count }}|{{ countAlias }}|{{ doubleCount }}
  </div>
</template>

<script>
import VuexCountChild from './VuexCountChild'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    VuexCountChild,
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    ...mapState({
      count: (state) => state.count,
      countAlias: 'count',
    }),
    // doubleCount() {
    //   return this.$store.getters.doubleCount
    // },
    ...mapGetters(['doubleCount']),
  },
}
</script>
