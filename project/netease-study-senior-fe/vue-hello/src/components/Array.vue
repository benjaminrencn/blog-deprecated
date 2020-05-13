<template>
  <div>
    <div v-for="(classmate, index) in classmates" :key="classmate.id">
      {{ index }}.{{ classmate.name }}
      <button @click="add(index)">+</button>
      <button @click="subtract(index)">-</button>
    </div>
    <button @click="change">change</button><br />
    <button @click="add">add</button>
    <button @click="set">set</button>
    <button @click="remove">remove</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      // 同学
      classmates: [
        { id: 1, name: 'Han Meimei' }, // 编号 名称
        { id: 2, name: 'Li Lei' },
        { id: 3, name: 'Lily' },
      ],
    }
  },
  methods: {
    /**
     * 改变同学
     * 没有变化
     */
    change() {
      this.classmates[2] = { id: 4, name: 'Wang' }
      console.log(this.classmates)
    },
    /**
     * 添加同学
     */
    add() {
      // Vue.set(this.classmates, '3', { id: 4, name: 'Lucy' })
      this.classmates.push({ id: 4, name: 'Lucy' })
    },
    /**
     * 设置同学
     */
    set() {
      Vue.set(this.classmates, '3', { id: 4, name: 'Wang' })
    },
    /**
     * 删除同学
     */
    remove() {
      Vue.delete(this.classmates, '3')
    },
  }
}
</script>
