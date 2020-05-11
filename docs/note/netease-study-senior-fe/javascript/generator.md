---
lang: zh-CN
description: Generate 函数、Thunk 函数。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,异步编程,generator 函数及其异步应用,JavaScript,js
---

# generator 函数及其异步应用

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#异步编程#
\#generator 函数及其异步应用#
\#JavaScript#
\#js#

Generate 函数、Thunk 函数。

## Generator 函数

### 迭代器

* 可迭代协议
  * [Symbol.iterator]属性
  * 内置可迭代对象
    * String Array Map Set 等
* 迭代器协议
  * `next` 方法
    * `done`
    * `value`

### Generator 函数（生成器）

* ES6 异步编程解决方案
* 声明  
  `function *`
* 返回值  
  符合可迭代协议、迭代器协议的生成器对象
  * `next(param)`
  * `return(param)`
  * `throw(param)`
* 能在执行时暂停  
  能从暂停处继续执行

### `yield`

* 只用在 Generator 函数
* 以暂停和恢复生成器函数
* 实例

  ```js
  function* createIterator() {
    let first = yield 1
    let second = yield first + 2
    yield second + 3
  }
  let iterator = createIterator()
  iterator.next() // { value: 1, done: false }
  iterator.next(4) // { value: 6, done: false }
  iterator.next(5) // { value: 8, done: false }
  iterator.next() // { value: undefined, done: true }
  ```

### `yield*` 生成器函数/可迭代函数

* 委托给其他可迭代函数
* 复用生成器
* 实例

  ```js
  function* generator1() {
    yield 1
    yield 2
  }
  function* generator2() {
    yield 100
    yield* generator1()
    yield 200
  }
  let g2 = generator2()
  g2.next() // { value: 100, done: false }
  g2.next() // { value: 1, done: false }
  g2.next() // { value: 2, done: false }
  g2.next() // { value: 200, done: false }
  g2.next() // { value: undefined, done: true }
  ```

### `next(param)`

* `next(param)` 执行
  * 遇 `yield` 暂停  
    将紧跟 `yield` 表达式的值作为返回对象的 `value`
  * 没有 `yield` 一直执行到 `return`
    将 `return` 的值作为返回对象的 `value`
  * 没有 `return` 将 `undefined` 作为返回对象的 `value`
* `next(param)` 参数
  * 作为上一个 `yield` 表达式的值
* `next(param)`
  * 给定 `param` 终结迭代器
  * `param` 可缺省 `undefined`
  * 实例

    ```js
    function* createIterator() {
      yield 1
      yield 2
      yield 3
    } 
    let iterator = createIterator()
    iterator.next() // { value: 1, done: false }
    iterator.return() // { value: undefined, done: true }
    iterator.next() // { value: undefined, done: true }
    ```

### `throw(param)`

* 让生成器对象内部抛出错误
* 实例

  ```js
  function* createIterator() {
    let first = yield 1
    let second
    try {
      second = yield first + 2
    } catch (e) {
      second = 6
    }
    yield second + 3
  }
  let iterator = createIterator()
  iterator.next() // { value: 1, done: false }
  iterator.next(10) // { value: 12, done: false }
  iterator.throw(new Error('error')) // { value: 9, done: false }
  iterator.next() // { value: undefined, done: true }
  ```

### 实现原理

* 协程
  * 一个线程存在多个协程  
    同时只能执行一个
  * Generator 函数是协程在 ES6 的实现
  * `yield` 挂起协程（交给其他协程）  
    `next` 唤醒协程
  * 有自己的寄存器、调用栈

### 应用

```js
function* readFileGenerator() {
  const fs = require('')
  const files = ['./a.json', './b.json', './c.json']
  let fileStr = ''
  function readFile(filename) {
    fs.readFile(filename, function (error, data) {
      console.log(data.toString())
      f.next(data.toString())
    })
  }
  yield readFile(files[0])
  yield readFile(files[1])
  yield readFile(files[2])
}
const g = readFileGenerator()
f.next()
```

## Thunk 函数

* 求职策略
  * 传值调用
  * 传名调用
* Thunk 函数是传名调用
* 可以实现自动执行 Generator 函数
* 实例

  ```js
  const fs = require('fs')
  const thunk = function (fn) {
    return function (...args) {
      return function (cb) {
        return fn.call(this, ...args, cb)
      }
    }
  }
  const readFileThunk = thunk(fs.readFile)
  function run(fn) {
    var gen = fn()
    function next(error, data) {
      var res = gen.next(data)
      if (res.done) { return }
      result.value(next)
    }
    next()
  }
  const g = function* () {
    const s1 = yield readFileThunk('./a.json')
    console.log(s1.toString())
    const s2 = yield readFileThunk('./b.json')
    console.log(s2.toString())
    const s3 = yield readFileThunk('./c.json')
    console.log(s3.toString())
  }
  run(g)
  ```

## 延伸

* [迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE)
* [协程](https://cnodejs.org/topic/58ddd7a303d476b42d34c911)
* [co 源码](https://github.com/tj/co)