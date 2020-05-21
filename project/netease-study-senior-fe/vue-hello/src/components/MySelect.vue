<template>
  <div>
    <div class="select" @click="optionShow = !optionShow">{{ selected.name }}</div>
    <div class="options" v-show="optionShow">
      <div v-for="item in list" :key="item.value" @click="select(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: ['selected', 'list'],
  data() {
    return {
      optionShow: false,
    }
  },
  methods: {
    select(item) {
      this.$emit('change', item)
      this.optionShow = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.select
  border: 1px solid #999
  padding: 2px
.options
  position: relative
  top: -1px
  border: 1px solid #999
</style>
