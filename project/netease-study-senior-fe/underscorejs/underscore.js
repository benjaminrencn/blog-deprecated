(function (root) {
  /**
   * 构造方法
   * @param {*} obj 数据源
   */
  let _ = function (obj) {
    // 共享原型
    // this 不是 _ 实例对象
    if (!(this instanceof _)) {
      return new _(obj)
    }
    // 数据源
    this._wrapped = obj
  }
  /**
   * 混入
   * 将静态方法挂载到原型上
   * 实现函数风格、面向对象风格写法
   * @param {Object} 扩展对象
   */
  function mixin(obj) {
    Object.keys(obj).forEach((key) => {
      _[key] = obj[key]
      // 语法风格参数数据源不同 不能直接赋值引用
      _.prototype[key] = function (...args) {
        let res = _[key].apply(_, [this._wrapped, ...args])
        if (this._chain) { // 链式调用
          return Object.assign(this, { _wrapped: res })
        } else {
          return res
        }
      }
    })
  }
  /**
   * 链式语法
   * @param {*} obj 数据源
   */
  function chain(obj) {
    return Object.assign(_(obj), { _chain: true })
  }
  /**
   * 获取链式语法的值
   */
  _.prototype.value = function () {
    return this._wrapped
  }
  /**
   * 数组去重
   * @param {Array} arr 数组
   * @param {undefined|Function} resolver 处理器
   */
  function unique(arr, resolver) {
    let res = [], // 结果
        target = null // 处理结果
    for (let i in arr) {
      target = resolver ? resolver(arr[i]) : arr[i]
      if (!res.includes(target)) {
        res.push(target)
      }
    }
    return res
  }

  mixin({
    mixin: mixin,
    chain: chain,
    unique: unique,
  })
  // 扩展属性
  root._ = _
})(this)