---
lang: zh-CN
description: 函数式编程、纯函数、函数副作用、可变性、不可变性。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,函数,提高代码可靠性,JavaScript,js
---

# 提高代码可靠性

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#函数#
\#提高代码可靠性#
\#JavaScript#
\#js#

函数式编程、纯函数、函数副作用、可变性、不可变性。

## 函数式编程

* 函数式编程  
  将程序分解为更可重用、更可靠、更易于理解的部分，然后组合，形成更易推理的程序
* 命令式编程  
  详细得命令机器处理事务以达到预期结果
* 案例  
  数组每个元素+1
  * 命令式编程

    ```js
    let arr = [1, 2, 3, 4, 5];
    let newArr = [];
    for (let i = 0; i < arr.length; i ++) {
      newArr.push(arr[i] + 1);
    }
    console.log(newArr); // [2, 3, 4, 5, 6]
    ```

    ```js
    let arr = [1, 2, 3, 4, 5];
    let newArr = (arr) => {
      let res = [];
      for (let i = 0; i < arr.length; i ++) {
        res.push(arr[i] + 1);
      }
      return res;
    }
    console.log(newArr(arr)); // [2, 3, 4, 5, 6]
    ```

    无法复用代码
  
  * 函数式编程

    ```js
    let map = (arr, fn) => {
      let res = [];
      arr.forEach((item) => {
        res.push(fn(item));
      });
      return res;
    };
    let arr = [1, 2, 3, 4, 5];
    let add = (n) => n + 5;
    console.log(map(arr, add)); // [6, 7, 8, 9, 10]
    let multiple = (n) => n * 5;
    console.log(map(arr, multiple)); // [5, 10, 15, 20, 25]
    ```

## 纯函数

* 概念
  * 函数输入参数相同，则返回结果相同
  * 不依赖于程序执行期间函数外部任何状态、数据的变化，只依赖于输入参数
* 案例
  * 非纯函数

    ```js
    let discount = 0.8;
    let calculatePrice = (price) => price * discount;
    console.log(calculatePrice(100)); // 80
    ```

  * 纯函数

    ```js
    let calculatePrice = (price, discount) => price * discount;
    console.log(calculatePrice(100, 0.8)); // 80
    ```

## 函数副作用

* 当调用函数时，除了返回值。还对朱调用函数产生附加影响  
  如：修改全局变量（函数外的变量）、修改参数
* 有的副作用不可避免且至关重要
* 尽量减少函数副作用
* 函数入口使用参数运算，而不修改它
* 函数内不修改函数外的变量
* 运算结果通过函数返回外部
* 案例

  ```js
  let n = 5;
  let fn = () => n = n * 10;
  fn(); // 50
  console.log(n); // 50
  ```

  ```js
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.slice(1, 3)); // [2, 3] 纯函数
  console.log(arr); // [1, 2, 3, 4, 5]
  console.log(arr.splice(1, 3)); // [2, 3, 4] 非纯函数 修改了原数组
  console.log(arr); // [1, 5]
  console.log(arr.pop()); // 5 非纯函数 修改了原数组
  console.log(arr); // [1]
  ```

  ```js
  const fn = (str) => console.log(`${new Date().toISOString()}:${str}`); // 非纯函数 违背函数输入参数相同则返回结果相同的原则
  fn('hello'); // 2020-04-11T15:00:35.831Z:hello
  setTimeout(() => fn('hello'), 100); // 2020-04-11T15:00:35.932Z:hello
  ```

  ```js
  // 依赖注入
  const fn = (date, log, str) => log(`${date}:${str}`);
  const date = new Date().toISOString();
  const log = console.log.bind(console);
  const str = 'hello';
  fn(date, log, str); // 2020-04-11T15:04:09.788Z:hello
  setTimeout(() => fn(date, log, str), 100); // 2020-04-11T15:04:09.788Z:hello
  ```

## 可变性、不可变性

* 可变性  
  变量创建后可任意修改
* 不可变性  
  变量创建后不会改变  
  时函数式编程的核心概念
* 案例
  * 可变性

  ```js
  let data = { n: 1 };
  let fn = (data) => {
    data.n = 5;
  };
  console.log(data.n); // 1
  fn(data);
  console.log(data.n); // 5
  ```

  * 不可变性

  ```js
  let data = { n: 1 };
  let fn = (data) => {
    let _data = JSON.parse(JSON.stringify(data)); // 简单深拷贝
  };
  console.log(data.n); // 1
  fn(data);
  console.log(data.n); // 1
  ```