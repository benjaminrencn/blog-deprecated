<template>
  <div>
    <div v-for="(classmate, index) in classmates" :key="classmate.id">
      {{ index }}.{{ classmate.name }}:{{ classmate.count }}
      <button @click="add(index)">+</button>
      <button @click="subtract(index)">-</button>
    </div>
    <div>computed total: {{ cTotal }}</div>
    <div>method total: {{ mTotal() }}</div>
    <button @click="rerender">rerender {{ random }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 同学
      classmates: [
        { id: 1, name: 'Han Meimei', count: 0 }, // 编号 名称 计数
        { id: 2, name: 'Li Lei', count: 0 },
        { id: 3, name: 'Lily', count: 0 },
      ],
      random: 0, // 随机数
    }
  },
  computed: {
    /**
     * 计算属性总计数
     */
    cTotal() {
      console.log('cTotal')
      return this.classmates.reduce((acc, cur) => acc + cur.count, 0)
    },
  },
  methods: {
    /**
     * 加
     * @param {number} 索引
     */
    add(i) {
      this.classmates[i].count++
    },
    /**
     * 减
     * @param {number} 索引
     */
    subtract(i) {
      this.classmates[i].count--
    },
    /**
     * 方法总计数
     */
    mTotal() {
      console.log('mTotal')
      return this.classmates.reduce((acc, cur) => acc + cur.count, 0)
    },
    /**
     * 重新渲染
     */
    rerender() {
      this.random = (Math.random() * 100).toFixed(0)
    },
  }
}
</script>
