<template>
  <div>
    <prop-child parent-name="banjino"></prop-child>
  </div>
</template>

<script>
import PropChild from './PropChild'

export default {
  components: {
    PropChild,
  },
}
</script>
