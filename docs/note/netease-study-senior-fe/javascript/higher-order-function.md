---
lang: zh-CN
description: 高阶函数、map、reduce、filter、flat。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,函数,高阶函数,JavaScript,js
---

# 高阶函数

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#函数#
\#高阶函数#
\#JavaScript#
\#js#

高阶函数、map、reduce、filter、flat。

## 高阶函数

### 概念

* 高阶函数是对其他函数进行操作的函数，可以将其他函数作为参数或返回

### 意义

* 函数可以作为参数传递
* 函数可以作为返回值返回
* 对基本算法再度抽象，提高代码抽象度，实现最大程度的代码重用

## [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值。

* 语法

  ```js
  var new_array = arr.map(function callback(currentValue[, index[, array]]) {
  // Return element for new_array 
  }[, thisArg])
  ```

* 案例

  ```js
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.map((item, index, array) => {
    console.log(`item: ${item}, index: ${index}, array: ${array}`);
    return item * 2;
  })); // [2, 4, 6, 8, 10]
  console.log(arr); // [1, 2, 3, 4, 5]
  ```

## [reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

reduce() 方法对数组中的每个元素执行一个 reducer 函数(升序执行)参数，将其结果汇总为单个返回值。

* 语法

  ```js
  arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
  arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
  ```

* 案例

  ```js
  // 累加
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.reduce((accumulator, currentValue, index, array) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, array: ${array}`);
    return accumulator + currentValue;
  }, 0)); // 15
  console.log(arr.reduceRight((accumulator, currentValue, index, array) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, array: ${array}`);
    return accumulator + currentValue;
  }, 0)); // 15
  ```

  ```js
  // 去重
  let arr = [1, 1, 2, 3, 4, 5, 4];
  console.log(arr.reduce((accumulator, currentValue, index, array) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, array: ${array}`);
    !accumulator.includes(currentValue) && accumulator.push(currentValue);
    return accumulator;
  }, [])); // [1, 2, 3, 4, 5]
  console.log(arr.reduceRight((accumulator, currentValue, index, array) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, array: ${array}`);
    !accumulator.includes(currentValue) && accumulator.push(currentValue);
    return accumulator;
  }, [])); // [4, 5, 3, 2, 1]
  ```

## [filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

filter() 方法创建一个新数组, 其包含通过参数函数返回 truthy 的所有元素。

* 语法

  ```js
  var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
  ```

* 案例

  ```js
  let people = [
    { name: 'James', age: 20 },
    { name: 'Jason', age: 21 },
    { name: 'David', age: 20 },
    { name: 'Ethan', age: 22 }
  ];
  console.log(people.filter((person) => person.age >= 21));
  // [{"name":"Jason","age":21},{"name":"Ethan","age":22}]
  ```

## [flat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

flat() 方法对多维数组扁平化

* 语法

  ```js
  var newArray = arr.flat([depth])
  ```

* 案例

  ```js
  let arr = [1, 2, [3], [[4], [5]]];
  console.log(arr.flat()); // [1,2,3,[4],[5]]
  console.log(arr.flat(2)); // [1,2,3,4,5]
  console.log(arr.flat(Infinity)); // [1,2,3,4,5]
  ```

