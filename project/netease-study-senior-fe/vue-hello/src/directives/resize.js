/**
 * 监听浏览器窗口尺寸
 * v-resize="func" 回调函数 返回尺寸
 * v-resize:direction 方向 'vertical' 垂直获得高度，默认，'horizontal' 水平获得宽度
 * v-resize.quiet 静默 初始化时候调用回调函数
 */
export default {
  name: 'resize',
  inserted(el, binding) {
    const direction = binding.arg || 'vertical' // 方向
    let result = () => direction === 'vertical' ? window.innerHeight : window.innerWidth // 结果
    const cb = binding.value // 回调函数
    window.addEventListener('resize', () => cb(result())) // 添加监听
    el._onResize = cb
    // 静默
    binding.modifiers.quiet || cb(result())
  },
  unbind(el) {
    if (!el._onResize) { return }
    // 移除监听
    window.removeEventListener('resize', el._onResize)
    delete el._onResize
  }
}
