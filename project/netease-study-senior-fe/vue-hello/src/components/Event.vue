<template>
  <div>
    {{ count }}
    <button @click="add(2, $event)">add 2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0, // 计数
    }
  },
  methods: {
    /**
     * 增加
     * @param {number}  number  数字
     * @param {Object}  event   事件
     */
    add(num, event) {
      this.count += num
      console.log('num: ', num)
      console.log('event: ', event)
      console.log('event instanceof MouseEvent: ', event instanceof MouseEvent)
    }
  },
}
</script>