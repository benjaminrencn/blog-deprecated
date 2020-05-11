---
lang: zh-CN
description: async/await。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,异步编程,深入理解 async/await,JavaScript,js
---

# 深入理解 async/await

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#异步编程#
\#深入理解 async/await#
\#JavaScript#
\#js#

async/await。

## `async`/`await`

## `async` 函数

* `async`
  * 语法糖
  * 返回值 `Promise`
    * return resolved 的 value
    * throw rejected 的 reason
  * 实例

    ```js
    async function test() { return 1 }
    const t = test()
    console.log(t) // Promise {<resolved>: 1}
    t.then((data) => console.log(data)) // 1
    ```

    ```js
    async function test() { throw new Error('error') }
    const t = test()
    console.log(t) // Promise {<rejected>: Error}
    t.catch((data) => console.log(data)) // Error: error
    ```

* `await`
  * 只能用在 `async` 函数内、js 最外层
  * 等待 `Promise` 的值
  * `await` 的 `Promise` 的状态为 rejected，中断执行

![await 的值](./image/await-value.png)

  * 实例

    ```js
    // resolve
    async function async1() {
      console.log('async1 start')
      await async2()
      console.log('async1 end')
    }
    async function async2() {
      return Promise.resolve().then(() => { console.log('async2 promise') })
    }
    async1()
    // async1 start
    // async2 promise
    // async1 end
    ```

    ```js
    // reject
    async function f() {
      await Promise.reject('error')
      console.log(1)
      await 100
    }
    f() // Promise {<rejected>: "error"}
    ```

    ```js
    // catch
    async function f() {
      await Promise.reject('error').catch((error) => {})
      console.log(1)
      await 100
    }
    f() // 1
    ```

    ```js
    // try catch
    async function f() {
      try {
        await Promise.reject('error')
      } catch (e) {

      }
      console.log(1)
      await 100
    }
    f() // 1
    ```

## 实现原理

* Generator + 自动执行器

```js
function example(params) {

  return spawn(function* () { // Generator 函数执行器

  })
}
function spawn(genF) {
  return new Promise((resolve, reject) {
    const gen = genF()
    step(() => gen.next(undefined))
    function step(nextF) {
      let next
      try {
        next = nextF()
      } catch (e) {
        return reject(e)
      }
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then((v) => {
        step(() => gen.next(v))
      }, (e) => {
        step(() => gen.throw(e))
      })
    }
  })
}
```

## 应用

```js
async function readFileByAsync() {
  const fs = require('fs')
  const files = [
    './1.json',
    './2.json',
    './3.json'
  ]
  const readFile = function(src) {
    return new Promise((resolve, reject) => {
      fs.readFile(src, (error, data) => {
        if (error) { reject(error) }
        resolve(data)
      })
    })
  }
  const str0 = await readFile(files[0])
  const.log(str0.toString())
  const str1 = await readFile(files[1])
  const.log(str1.toString())
  const str2 = await readFile(files[2])
  const.log(str2.toString())
}
```