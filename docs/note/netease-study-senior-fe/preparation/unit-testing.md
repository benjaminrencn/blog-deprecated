---
lang: zh-CN
description: 单元测试概念、分类、目标、技术。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,单元测试,单元测试概述
---

# 单元测试概述

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#单元测试#
\#单元测试概述#

单元测试概念、分类、目标、技术。

* 概念
  * 测试  
    规定条件下对程序进行操作  
    以发现错误、衡量质量、评估是否满足要求
  * 单元测试  
    对**最小可测试单元**进行检查、验证
  * 维度
    * 粒度：API、函数
    * 功能、非功能测试
    * 静态、动态测试
    * 白盒、黑盒、灰盒测试
  * 开发方式
    * TDD（Test-Driven Development，测试驱动开发）  
      实现角度  
      需求分析 -> 编写单元测试 -> 编写代码使单元测试全部通过 -> 重构并重复测试
    * BDD（Behavior Driven Development，行为驱动开发）  
      基于行为
      从业务角度定义具体可衡量目标 -> 找到实现方法 -> 编写单元测试 -> 实现行为 -> 检验产品运行结果是否符合预期
  * 意义
    * 保证单元的质量
    * 驱动开发、指导设计
    * 隔离、定位错误
    * 自动化
    * 保证重构、升级
* 分类
  * 数据层
  * 逻辑层
  * 展示层
  * 工具类
* 覆盖率
  * 行覆盖率
  * 函数覆盖率
  * 分支覆盖率
  * 语句覆盖率
* 目标
  * 可靠性
    * 及时修改和维护
    * 避免逻辑过多
    * 只测试单一的点
    * code review
    * 独立运行
    * 充分考虑边界条件
    * 数据模拟贴近真实 
  * 可维护性
    * 测试共有方法
    * 移除重复代码
    * 保证 setup 方法可维护性
    * 测试隔离，不允许相互依赖
    * 避免过多断言
  * 可读性
    * 命名
    * 有意义的断言
    * 断言与操作分离
* 技术
  * 测试框架  
    被测试方法 -> 数据（mock）、外部依赖（stub） -> 执行方法 -> 检查结果（断言）
    * [Qunit](https://qunitjs.com/)
    * [jasmine](https://jasmine.github.io/)
    * [mocha](https://mochajs.org/)
    * [intern](https://theintern.io/)
    * [jest](https://jestjs.io/)
  * 断言库
    * [chai](https://www.chaijs.com/)
    * [should](http://shouldjs.github.io/)
    * [expect](http://www.ezdev.org/view/expect-js/391)
    * [assert](https://nodejs.org/api/assert.html)
  * mock 库
    * [sinon](https://sinonjs.org/)
  * test runner  
    提供测试环境、管理执行流程
    * [karma](http://karma-runner.github.io/4.0/index.html)
    * [buster.js](https://github.com/busterjs)
  * 覆盖率工具
    * [Istanbul](https://github.com/istanbuljs/istanbuljs)
  * 测试用例（）  
    一组输入、执行条件、预期结果，以测试是否满足某个需求

## 延伸

* 《软件测试》 - [[美] 罗恩·佩腾（Ron Patton） 著，张小松，王钰，曹跃 等 译]
* 《单元测试的艺术》 - [[以] Roy Osherove 著，金迎 译]
* 《修改代码的艺术》 - [[美] 费瑟（Michael Feath） 著]
* 《重构 改善既有代码的设计》 - [[美] 马丁·福勒（Martin Fowler） 著，熊节，林从羽 译]