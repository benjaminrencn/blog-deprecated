---
lang: zh-CN
description: 单元测试开发部署流程，常见框架封装方式。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,测试实战
---

# 测试实战

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#测试实战#

单元测试开发部署流程，常见框架封装方式。

## 部署

* 编写
* 执行
* 覆盖率

### 执行

* mocha
  * 适用于 node
  * 浏览器环境缺少流程管理机制

* [karma](http://karma-runner.github.io/4.0/index.html)
  * 管理、执行单元测试
  * 安装

  ```bash
  npm install --save-dev karma
  ```

  * 执行

  ```bash
  # npx karma
  # 生成配置项
  karma init
  # 启动
  karma start [config]
  ```

  * [配置项](http://karma-runner.github.io/4.0/config/configuration-file.html)
    * frameworks
      * 测试框架
      * mocha、jasmine 等
    * [files](http://karma-runner.github.io/4.0/config/files.html)
      * 浏览器中加载的文件
      * 支持正则
    * [preprocessors](http://karma-runner.github.io/4.0/config/preprocessors.html)
      * 预处理器
      * webpack、babel [等](https://www.npmjs.com/search?q=keywords:karma-preprocessor)
    * [plugins](http://karma-runner.github.io/4.0/config/plugins.html)
      * 插件
      * karma-webpack 等
    * [browsers](http://karma-runner.github.io/4.0/config/browsers.html)
      * 需要测试的浏览器，需要配置对应[插件](https://www.npmjs.com/search?q=keywords%3Akarma-launcher)

* 覆盖率
  * [Istanbul](https://github.com/istanbuljs/istanbuljs)
    * 配置 preprocessors
    * 配置 webpack Istanbul 插件

* 案例  
  :x: 练习失败 Babel 问题
  * Karma + Mocha + Cha + Istanbul

  ```
  # /project/netease-study-senior-fe/karma
  ```

## mocha + chai + sinon

* 封装目的
  * 专注于用例
* 封装思路
  * 从执行方法维度
    * 遍历执行 case
    
    ```js
    describe('approve amount', () => {
      for (let i = 0; i < cases.length - 1; i ++) {
        let case = cases[i];
        it(case.desc, () => {
          expect(approve({ amount: case.amount })).to.eql(case.result);
        });
      }
    });
    ```

  * 从类的维度
    * 执行实例化
    * 执行每个方法
  * 封装异步接口调用
    * 模拟输出正确数据
  * 封装属性校验
    * 校验属性
  * 封装数据 mock



## 延伸

* [PhantomJS](https://phantomjs.org/)