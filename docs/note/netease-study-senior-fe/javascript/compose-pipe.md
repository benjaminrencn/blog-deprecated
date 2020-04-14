---
lang: zh-CN
description: compose 函数、 pipe 函数。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,函数,compose 函数和 pipe 函数,JavaScript,js
---

# compose 函数和 pipe 函数

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#函数#
\#compose 函数和 pipe 函数#
\#JavaScript#
\#js#

compose 函数、 pipe 函数。

## compose 函数

* 概念
  * 将需要嵌套执行的函数平铺
  * 嵌套执行  
    一个函数的返回值将作为另一个函数的参数
  * 数据流方向从右往左
* 作用
  * 实现函数式编程中的 Pointfree  
    专注于转换而不是数据
* 案例

  ```js
  let calculate = (n) => (n + 10) * 10;
  console.log(calculate(10)); // 200
  ```

  函数式编程

  ```js
  let add = (n) => n + 10;
  let multiply = (n) => n * 10;
  console.log(multiply(add(10))); // 200
  ```

  compose 函数

  * 函数由共同参数
  * 从右往左执行
  * 前面函数结果交由后面函数处理

  ```js
  let add = (n) => n + 10;
  let multiply = (n) => n * 10;
  let compose = (fn2, fn1) => {
    return (n) => fn2(fn1(n));
  };
  console.log(compose(multiply, add)(10)); // 200
  ```

  当前只能执行2个函数

  通用型 compose 函数

  ```js
  let add = (n) => n + 10;
  let multiply = (n) => n * 10;
  let compose = (...fns) => (n) => fns.reduceRight((res, cb) => cb(res), n);
  console.log(compose(multiply, add)(10)); // 200
  ```

## pipe 函数

* 概念
  * 概念与 compose 函数相似
  * 除了数据流方向从左往右
* 案例

  ```js
  let add = (n) => n + 10;
  let multiply = (n) => n * 10;
  let pipe = (...fns) => (n) => fns.reduce((res, cb) => cb(res), n);
  console.log(pipe(add, multiply)(10)); // 200
  ```

## 练习

```js
/**
 * Compose Function from right to left
 * compose(a,b,c) = (...args) => a(b(c(...args)));
 *
 * 在數學中，複合函數（英語：function composition）是指逐點地把一個函數作用於另一個函數的結果，
 * 所得到的第三個函數。例如，函數 f : X → Y 和 g : Y → Z 可以複合，得到從 X 中的 x 映射到 Z 中 g(f(x)) 的函數。
 * 直觀來說，如果 z 是 y 的函數，y 是 x 的函數，那麼 z 是 x 的函數。
 * 得到的複合函數記作 g ∘ f : X → Z，定義為對 X 中的所有 x，(g ∘ f )(x) = g(f(x))。[note 1] 直觀地說，
 * 複合兩個函數是把兩個函數連結在一起的過程，內函數的輸出就是外函數的輸入。 by: https://zh.wikipedia.org/wiki/复合函数
 *
 *
 * usage:
 *  - Redux,  compose(Middleware)
 *  - React const TodoList = compose(Container, List, R.map(ListItem), items);
 *
 * @param  {Array[Function]} funcs
 */
export default function Compose(...funcs) {
  return (n) => funcs.reduceRight((res, cb) => cb(res), n);
}
```

```js
/**
 * pipe Function from left to right
 * pipe(a,b,c) = (...args) => c(b(a(...args)));
 *
 * 代数计算, 符合阅读习惯, 从左到右.
 *
 * 请实现一个pipe函数，并且保证pipe.test.js通过
 *
 * @param  {Array[Function]} funcs
 */
export default function pipe(...funcs) {
  return (n) => funcs.reduce((res, cb) => cb(res), n);
}
```