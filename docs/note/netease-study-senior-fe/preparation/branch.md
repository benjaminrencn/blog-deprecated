---
lang: zh-CN
description: 分支模型概念、Git 工作流。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,分支模型
---

# 分支模型

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#分支模型#

分支模型概念、Git 工作流。

## 概念

* 分支
  * 从目标仓库获得项目拷贝，每条拷贝有和原仓库工功能一样的开发线
* 分支模型（branching model）/工作流（workflow）
  * 项目工作流程（开发、部署、测试等）的分支操作（创建、合并等）规范集合
* 产品级分支模型
  * 常驻分支
    * master（production） 默认分支
    * development 开发分支  
      从 master 创建
  * 活动分支
    * feature 特性分支  
      从 development 创建
    * hotfix 修复分支  
      从 master 创建
    * release 发布分支  
      从 development 分支创建

## 延伸

* [Git 工作流程 - [阮一峰]](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
* [Git 在团队中的最佳实践--如何正确使用Git Flow - [wish123]](https://www.cnblogs.com/wish123/p/9785101.html)