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