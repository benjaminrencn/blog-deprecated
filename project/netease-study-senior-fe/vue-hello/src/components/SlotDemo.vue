<template>
  <div>
    <slot-load url="http://xxx.com/api" #default="{ data }">
      <div>load finish {{ data.name }} </div>
    </slot-load>
  </div>
</template>

<script>
import SlotLoad from './SlotLoad'
export default {
  components: {
    SlotLoad,
  },
}
</script>
