<template>
  <div>
    
    <u-infinite-list :items="items" :item-height="80" #default="{ sliceItems }">
      <u-list :items="sliceItems"></u-list>
    </u-infinite-list>
    <div class="x-bottom" v-intersect="{ handler: fetchNext }"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('topic')
import UInfiniteList from './../../../components/UInfiniteList.vue'
import UList from './../components/UList.vue'

export default {
  name: 'u-top',
  components: {
    UInfiniteList,
    UList, 
  },
  props: ['type'],
  computed: {
    ...mapState({
      items: (state) => state[state.activeType].items,
    }),
  },
  created() {
    this.fetchNext()
  },
  watch: {
    type() {
      this.fetchNext()
    },
  },
  methods: {
    ...mapActions({
      fetchItems: 'FETCH_ITEMS',
    }),
    fetchNext() {
      this.fetchItems({ type: this.type })
    },
  },
}
</script>

<style scoped>
.x-bottom {
  height: 40px;
  background: #333;
}
</style>
