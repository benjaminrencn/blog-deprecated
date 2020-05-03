---
lang: zh-CN
description: Underscore.js 源码组织结构。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,Underscore.js 源码,JavaScript,js
---

# [Underscore.js](https://underscorejs.net/) 源码

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#Underscore.js 源码#
\#JavaScript#
\#js#

Underscore.js 源码组织结构。

* Underscore.js 是 JavaScript 使用库，提供函数式编程的实用功能，未扩展 JavaScript 内置对象

## 安装

```shell
npm install --save underscore
# yarn add underscore
# node_modules/underscore/underscore.js
```

## 语法风格

* `_.fn()` 函数风格  
  对象的静态方法
* [`_(obj)`](https://underscorejs.net/#oop) 面向对象风格  
  构造函数 无 new 化得创建的实例的方法

## 结构

* `(function () {})()` [立即执行函数](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F)
* [`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
* [构造方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)
* 混入
* 链式语法

```js
// /underscore.js
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

  mixin({
    mixin: mixin,
    chain: chain,
  })
  // 扩展属性
  root._ = _
})(this)
```


## 案例

```shell
# /project/netease-study-senior-fe/underscorejs
# 安装依赖以查看 underscore 源码
npm install
# yarn install
# /underscore.js
```