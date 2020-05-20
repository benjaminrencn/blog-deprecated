<template>
  <div>
    <p>v-resize</p>
    <div v-resize="onHeight">window height is: {{ height }}</div>
    <p>:horizontal</p>
    <div v-resize:horizontal="onWidth">window width is: {{ width }}</div>
    <p>.quiet</p>
    <div v-resize:horizontal.quiet="onQuietWidth">window width is: {{ quietWidth }}</div>
  </div>
</template>

<script>
import resize from '@/directives/resize'

export default {
  directives: {
    resize,
  },
  data() {
    return {
      height: 0,
      width: 0,
      quietWidth: 0,
    }
  },
  computed: {
  },
  methods: {
    onHeight(height) {
      this.height = height
    },
    onWidth(width) {
      this.width = width
    },
    onQuietWidth(width) {
      this.quietWidth = width
    },
  },
}
</script>
