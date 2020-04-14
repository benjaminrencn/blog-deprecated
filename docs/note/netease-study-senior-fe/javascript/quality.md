---
lang: zh-CN
description: 单元测试概念、编写、使用 Jest。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,函数,如何保证你的代码质量,JavaScript,js,Jest
---

# 如何保证你的代码质量

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#函数#
\#如何保证你的代码质量#
\#JavaScript#
\#js#
\#Jest#

单元测试概念、编写、使用 Jest。

## 单元测试

### 概念

* 测试是验证代码时候可以按预期工作的方法
* 单元测试是对最小可测试单元进行验证

## 意义

* 检测出潜在 bug
* 快速反馈功能输出、验证代码是否能达到预期
* 保证代码重构安全性
* 方便协作开发

## 单元测试代码

### 被测试对象

* 代码中最小组成单元  
  如函数、module、类等

  ```js
  // 被测试对象
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;
  ```

* 案例

  ```js
  let add = (a, b) => a + b;
  let res = add(1, 2);
  let expect = 5;
  if (res !== expect) {
    throw new Error(`1 + 2应该等于${expect}，但是结果却是${res}`);
  }
  // Uncaught Error: 1 + 2应该等于5，但是结果却是3
  //   at <anonymous>:5:11
  ```

### 测试代码

* 测试代码  
  比较结果值、预期值

  ```js
  // 测试代码
  let expect = (res) => {
    return {
      toBe: (_expect) => {
        if (res !== _expect) {
          throw new Error(`预期值${_expect}与实际值${res}不符`);
        }
      },
    };
  };
  ```

* 案例

  ```js
  let expect = (res) => {
    return {
      toBe: (_expect) => {
        if (res !== _expect) {
          throw new Error(`预期值${_expect}与实际值${res}不符`);
        }
      },
    };
  };
  let test = (desc, fn) => {
    try {
      fn();
    } catch (e) {
      console.error(`${desc}没有通过\n`, e)
    }
  };
  let add = (a, b) => a + b;
  test('加法测试', () => {
    expect(add(1, 2)).toBe(5);
  });

  // 加法测试没有通过
  // Error: 预期值5与实际值3不符
  //   at Object.toBe (<anonymous>:5:17)
  //   at <anonymous>:19:23
  //   at test (<anonymous>:12:7)
  //   at <anonymous>:18:3
  ```

## [Jest](https://jestjs.io/)

### 安装

```shell
npm i -D jest
# yarn add -D jest

npm ls jest
# yarn list --pattern jest
```

### 案例

```shell
# /project/netease-study-senior-fe/jest
npm install
# yarn install
npm run test
# yarn test
```