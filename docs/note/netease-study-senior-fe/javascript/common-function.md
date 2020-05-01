---
lang: zh-CN
description: memoization 函数、curry 函数、偏函数。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,函数,常用函数,JavaScript,js
---

# 常用函数

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#函数#
\#常用函数#
\#JavaScript#
\#js#

memoization 函数、curry 函数、偏函数。

## memoization 函数

* 概念
  * 缓存（memoization）函数是缓存计算结果，相同参数下次再调用时直接返回缓存的数据
  * 适合大量重复计算、或依赖之前计算结果的场景
* 案例

  ```js
  // 简易
  let memoize = function (fn) {
    let cache = {};
    return function (key) {
      if (!cache[key]) {
        cache[key] = fn.apply(this, arguments);
      } else {
        console.log('memoize cached');
      }
      return cache[key];
    };
  };
  let add = memoize((n) => n + 1);
  console.log(add(2)); // 3
  console.log(add(2)); // 3
  ```

  ```js
  // lodash
  function memoize(fn, resolver) {
    const memoized = function (...args) {
      const key = resolver ? resolver.apply(this, args) : args[0];
      const cache = memoized.cache;
      if (cache[key]) {
        console.log('memoize cached');
        return cache[key];
      }
      return cache[key] = fn.apply(this, args);
    };
    memoized.cache = {};
    return memoized;
  }
  let add = memoize((a, b) => a + b, (a, b) => `${a}-${b}`);
  console.log(add(1, 2)); // 3
  console.log(add(1, 2)); // 3
  ```

  ```js
  // 斐波那契（Fibonacci）
  let memoize = function (fn, resolver) {
    const memoized = function (...args) {
      const key = resolver ? resolver.apply(this, args) : args[0];
      const cache = memoized.cache;
      if (cache[key]) { return cache[key]; }
      return cache[key] = fn.apply(this, args);
    };
    memoized.cache = {};
    return memoized;
  }
  let count = 0, i = 0;
  let fibonacci = (n) => {
    count ++;
    return n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1);
  };
  for (i = 0, count = 0; i <= 10; i ++) {
    fibonacci(i);
  }
  console.log(count); // 453
  fibonacci = memoize(fibonacci);
  for (i = 0, count = 0; i <= 10; i ++) {
    fibonacci(i);
  }
  console.log(count); // 12
  ```

## curry 函数

* 概念
  * 将使用多个参数的一个函数转换成一系列使用一个参数的函数
  * 将将一个 n 元函数转换成 n 个一元函数
* 案例

  ```js
  let person = (name, age, gender) => `我叫${name}，今年${age}岁，性别${gender}`;
  console.log(person('张三', 30, '男')); // 我叫张三，今年30岁，性别男
  let _person = (name) => (age) => (gender) => `我叫${$name}，今年${age}岁，性别${gender}`;
  console.log(person('李四', 29, '男')); // 我叫李四，今年29岁，性别男
  ```

  ```js
  // 正则表达式匹配
  let test = (regex, str) => regex.test(str);
  console.log(test(/\s+/g, 'a b')); // true
  console.log(test(/\s+/g, 'abc')); // false
  ```


  ```js
  // 正则表达式匹配 柯里化
  let test = (regex) => (str) => regex.test(str);
  let hasSpace = test(/\s+/g);
  console.log(hasSpace('a b')); // true
  console.log(hasSpace('abc')); // false
  ```

  ```js
  // 获取属性值
  let people = [
    { name: 'James', age: 20 },
    { name: 'Jason', age: 21 },
    { name: 'David', age: 20 },
    { name: 'Ethan', age: 22 }
  ];
  console.log(people.map((person) => person.age));
  ```

  ```shell
  # lodash curry()
  # /project/netease-study-senior-fe/common-function
  npm install
  # yarn install
  node curry.js
  ```

## 偏函数

* 概念
  * 固定一个函数的一个或多个参数
  * 将一个 n 元函数转换成一个 n-x 元函数
  * 柯里化  
    fn(a, b, c) -> fn(a)(b)(c)
  * 偏函数  
    fn(a, b, c) -> fn(a, b)(c)
* 案例
  
  ```js
  // bind 实现
  let add = (a, b) => a + b;
  let _add = add.bind(null, 1);
  console.log(_add(2)); // 3
  ```

## 练习

```js
/**
 * Memoization
 *
 * Memoization 是一种将函数返回值缓存起来的方法，在 Lisp, Ruby, Perl, Python 等语言中使用非常广泛。
 * 随着 Ajax 的兴起，客户端对服务器的请求越来越密集（经典如 autocomplete），
 * 如果有一个良好的缓存机制，那么客户端 JavaScript 程序的效率的提升是显而易见的。
 *
 * 请实现一个memo函数，并使得memo.test.js中的单元测试通过
 *
 * @param {Function} func 需要执行的函数
 * @param {Function} hasher 散列函数
 */
export default function memo(func, hasher) {
  const memoed = function (...args) {
    const key = hasher ? hasher.apply(this, args) : args[0];
    const cache = memoed.cache;
    if (cache[key]) { return cache[key]; }
    return cache[key] = func.apply(this, args);
  };
  memoed.cache = {};
  return memoed;
}
```