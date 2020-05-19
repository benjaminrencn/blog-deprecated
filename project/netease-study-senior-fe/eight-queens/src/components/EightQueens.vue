<template>
  <div>
    <div class="title">八皇后问题</div>

    <div class="grid">
      <div class="row" v-for="(row, rIndex) in grids" :key="rIndex">
        <div class="col" v-for="(col, cIndex) in row" :key="col.key" @click="select(rIndex, cIndex)">
          <div v-show="col.selected">Q</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const grids = new Array(8).fill(0).map((v, r) => {
  return new Array(8).fill(0).map((v, c) => {
    return {
      key: `key-${r * 8 + c}`,
      selected: false,
    }
  })
})

export default {
  data() {
    return {
      grids,
    }
  },
  methods: {
    /**
     * 选择
     * @param {number} row 行索引
     * @param {number} col 列索引
     */
    select(row, col) {
      grids[row][col].selected = !grids[row][col].selected
    },
  },
}
</script>

<style lang="stylus" scoped>
.grid
  margin-top: 20px
.row
  display: flex
  margin: 0 auto
  width: 400px
  height: 50px
  cursor: pointer
  &:nth-child(2n)
    .col
      &:nth-child(2n - 1)
        background: #efefef
      &:nth-child(2n)
        background: #999
.col
  flex: 1 1 50px
  text-align: center
  width: 50px
  height: 50px
  line-height: 50px
  background: #999
  &:nth-child(2n)
    background: #efefef
</style>