<template>
  <div>
    <div class="title">八皇后问题</div>

    <div class="grid">
      <div
        class="row"
        v-for="(row, rIndex) in grids"
        :key="rIndex"
      >
        <div
          class="col"
          :class="{ 'col--disabled': !col.selected && col.disabled }"
          v-for="(col, cIndex) in row"
          :key="col.key"
          @click="select(rIndex, cIndex)"
        >
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
      selected: false, // 选中
      disabled: 0, // 失效计数
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
      // 未选择且失效
      if (!this.grids[row][col].selected && this.grids[row][col].disabled) {
        return alert('当前位置不能摆放皇后')
      }
      this.grids[row][col].selected = !this.grids[row][col].selected
      this.getRelatedGrid(row, col, (grid) => {
        this.grids[row][col].selected ? grid.disabled++ : grid.disabled--
      })
    },
    /**
     * 获取相关网格 调用回调函数
     * @param {number} row 行索引
     * @param {number} col 列索引
     * @param {Function} cb 回调函数 cb(grid, row, col)
     */
    getRelatedGrid(row, col, cb) {
      // →
      for (let i = 0; i < this.grids[row].length; i++) {
        cb(grids[row][i], row, i)
      }
      // ↓
      for (let i = 0; i < this.grids.length; i++) {
        cb(grids[i][col], i, col)
      }
      // ↘
      for (let y = 0; y < this.grids.length; y++) {
        // y - x === row - col
        let x = y - row + col
        if (x >= 0 && x < this.grids[y].length) { cb(grids[y][x], y, x) }
        
      }
      // ↗
      for (let y = 0; y < this.grids.length; y++) {
        // y + x === row + col
        let x = row + col - y
        if (x >= 0 && x < this.grids[y].length) { cb(grids[y][x], y, x) }
      }
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
  box-sizing: border-box
  width: 50px
  height: 50px
  line-height: 50px
  background: #999
  &:nth-child(2n)
    background: #efefef
  &--disabled:after
    content: 'x'
    display block
    position display
    color: #f00
</style>