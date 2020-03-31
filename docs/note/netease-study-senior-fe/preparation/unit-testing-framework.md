---
lang: zh-CN
description: 单元测试框架选型，学习 mocha + chai + sinon，编写单元测试。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,单元测试,单元测试框架
---

# 单元测试框架

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#单元测试#
\#单元测试框架#

单元测试框架选型，学习 mocha + chai + sinon，编写单元测试。

## 单元测试框架选型

测试框架 + 断言库 + mock 库 -> 编写测试用例

### 测试框架

* [jasmine](https://jasmine.github.io/)
  * BDD 风格
  * 功能全面，自带 assert、mock 功能
* [jest](https://jestjs.io/)
  * 基于 jasmine
  * 对于 react 友好
* [mocha](https://mochajs.org/)
  * TJ 出品
  * 可以运行在 node 端、浏览器端
  * 需要自己驾培断言库等
* [~~Qunit~~](https://qunitjs.com/)
  * 出自 jquery，后独立不依赖 jquery
  * 已被其他框架超越
* [intern](https://theintern.io/)
  * SitePen 出品
  * 功能齐全
  * 新兴小众

* jasmine、mocha 比较
  * jasmine
    * 开箱即用，自带断言、mock 等功能
    * 不易扩展
  * mocha
    * 灵活可扩展
    * 集成度低需要自己配置

### 断言库

* [chai](https://www.chaijs.com/)
  * 流行
  * 支持 BDD、TDD，全面
* [should](http://shouldjs.github.io/)
  * TJ 出品
  * API 语义好
  * 文档不足
* [expect](http://www.ezdev.org/view/expect-js/391)
  * should 子集
  * 没亮点
* [assert](https://nodejs.org/api/assert.html)
  * node 核心模块，node 环境可以使用
  * 语法弱

### mock 库

* [sinon](https://sinonjs.org/)
  * 功能强大

## mocha + chai + sinon

### mocha

* 安装

  ```bash
  yarn add -D mocha
  ```

* [语法](https://mochajs.org/)
  * `describe`
    * 对应测试的模块/函数
    * 参数1 描述
    * 参数2 执行方法
  * `it`
    * 对应测试用例（test case）
    * 参数1 描述
    * 参数2 执行方法
  
  ```js
  describe('approve when amount < 5', () => {
    it('should return right statement when amount < 5', () => {
      expect(approve({ amount: 3 })).to.eql('主任审批通过！');
    });
  });
  ```
  
* 异步代码测试
  * callback

  ```js
  it('user name should be 小明 after async invoke', () => {
    async.getUser((data) => {
      expect(data.user.name).to.eql('小明');
    });
  });
  ```

  * Promise

  ```js
  async.getUserAsync().then(res => {
    expect(res.user.name).to.eql('小明');
  });
  ```

  * `async`/`await`

  ```js
  it('user name should be 小明 after async invoke', async () => {
    let res = await async.getUserAwait();
    return expect(res.user.name).to.eql('小明');
  });
  ```
* hooks
  * `before`/`after`
  * `beforeEach`/`afterEach`
    * `describe` 下每个用例都会执行一遍

  ```js
    describe('test DOM', () => {
      before(() => {
        console.log('before');
      });
      after(() => {
        console.log('after');
      });
      beforeEach(() => {
        console.log('beforeEach');
      });
      afterEach(() => {
        console.log('afterEach');
      });
      it('content of div with id test should be test', () => {
        expect(ele.innerHTML).to.eql('test');
      });
    });
  ```

* `only`/`skip`
  * 只运行/忽略一个或一组用例

  ```js
  describe.only('something', () => {
    // 只会执行这里的用例
  });
  it.only('do', () => {
    // 只会执行这一个用例
  });
  ```

### chai

* 安装

  ```bash
  yarn add -D chai
  ```

* 语法
  * [BDD](https://www.chaijs.com/api/bdd/)
    * `expect`
    
    ```js
    expect(approve({ amount: 3 })).to.eql('主任审批通过');
    ```

    * `should`

    ```js
    approve({ amount: 3 }).should.eql('主任生审批通过');
    ```

  * TDD
    * [`assert`](https://www.chaijs.com/api/assert/)

    ```js
    assert.equal(approve({ amount: 3 }), '主任生审批通过');
    ```

### sinon

* 安装

```bash
yarn add -D sinon
```

* [语法](https://sinonjs.org/releases/v9.0.1/)
  * Spies
    * 提供函数调用信息，但不改变函数行为

  ```js
  let ajaxSpy = sinon.spy(jQuery, 'ajax');
  
  async.getUser((data) => {
    data.user.name.should.equal('小明');
  });
  console.log(ajaxSpy.callCount);

  ajaxSpy.restore();
  ```

  * Stubs
    * 替换掉指定的函数
  
  ```js
  let ajaxStub = sinon.stub(jQuery, 'ajax');
  ajaxStub.yields();

  let callback = sinon.spy(() => {
    console.log('mock 的回调');
  });
  async.getUserByPost(callback);

  console.log(ajaxStub.callCount);
  console.log(callback.callCount);

  ajaxStub.restore();
  ```

  * Mocks
    * Spies + Stubs
    * 能替换一个完整对象
  * Fake timers
    * 模拟时间
  * Fake XmlHttpRequest and server
    * 伪造 Ajax 请求与响应

## 案例

```bash
# /project/netease-study-senior-fe/unit-testing
npm run dev
# yarn dev
```

* 测试责任链代码  
  测试用例 审批链 审批方法 `response-chain#approve`
* 测试异步代码
  * callback
  * promise
  * `async`/`await`
* mock 接口
  * `spy` 获取接口调用信息
  * `stub` 替换接口调用方法

## 延伸

* [Jasmine vs Jest vs Mocha](https://stackshare.io/stackups/jasmine-vs-jest-vs-mocha)  
  可能 404 可在 [stackshare](https://stackshare.io/) 搜索 jasmine mocha