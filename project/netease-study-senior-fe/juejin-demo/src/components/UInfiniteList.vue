<template>
  <div :style="{ padding: padding }">
    {{ items.length }}
    <slot :sliceItems="sliceItems"></slot>
  </div>
</template>

<script>
import { throttle } from './../util/throttle'

export default {
  name: 'u-infinite-list',
  props: {
    items: { required: true },
    itemHeight: { required: true },
  },
  data() {
    return {
      buffer: 5, 
      scrollTop: 0,
      viewportHeight: 0,
    }
  },
  computed: {
    over() {
      return Math.max(
        this.scrollTop / this.itemHeight - this.buffer,
        0)
    },
    down() {
      return Math.min(
        Math.ceil((this.scrollTop + this.viewportHeight) / this.itemHeight + this.buffer),
        this.items.length)
    },
    sliceItems() {
      return this.items.slice(this.over, this.down)
    },
    padding() {
      return `${this.over * this.itemHeight}px 0 ${Math.max(
        (this.items.length - this.down) * this.itemHeight,
        0)}`
    },
  },
  created() {
    this.scrollTop = this.getScrollTop()
    this.viewportHeight = window.innerHeight
    document.addEventListener('scroll', this.onScroll, { passive: true })
  },
  destroyed() {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: throttle(function () {
      this.scrollTop = this.getScrollTop()
      this.viewportHeight = window.innerHeight
    }),
    getScrollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop;
    },
  },
}
</script>
