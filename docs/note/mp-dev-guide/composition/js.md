---
lang: zh-CN
description: 微信小程序 JavaScript 脚本（ECMAScript、小程序执行环境、模块化、脚本执行顺序）。
meta:
  - name: keywords
    content: 小程序开发指南,微信小程序团队,代码组成,JavaScript 脚本,微信小程序
---

# JavaScript 脚本

\#小程序开发指南#
\#微信小程序团队#
\#代码组成#
\#JavaScript 脚本#
\#微信小程序#

微信小程序 JavaScript 脚本（ECMAScript、小程序执行环境、模块化、脚本执行顺序）。

## ECMAScript

* ECMAScript 是一种由 ECMA 国际通过 ECMA-262 标准化的脚本程序设计语言
* JavaScript 是 ECMAScript 的一种实现
* ECMA-262 规定了 ECMAScript
    1. 语法
    1. 类型
    1. 语句
    1. 关键字
    1. 操作符
    1. 对象
* 浏览器中的 JavaScript 构成
  * ECMAScript
  * DOM（文档对象模型）
  * BOM（浏览器对象模型）
* NodeJS 中的 JavaScript 构成
  * ECMAScript
  * NPM
  * Native
* 小程序 中的 JavaScript 构成
  * ECMAScript
  * 小程序框架
  * 小程序 API
  * 没有 BOM、DOM，无法运行 jQuery、Zepto 这类库
  * 没有 Native、NPM，无法加载原生库，无法直接使用大部分 NPM 包

## 小程序执行环境

* 三大平台
  * iOS（iOS9、iOS10、iOS11）
  * Android
  * 微信开发者工具
* 三大平台实现的 ECMAScript 的标准不同
  * iOS9、iOS10 未完全兼容 ECMAScript 6 标准
    1. 箭头函数
    2. let const
    3. 模板字符串
    4. ...
  * 微信开发者工具将 ES6 转换为 ES5  
    详情 -> 本地设置 -> ES6 转 ES5

## 模块化

* 小程序可以将任意 JavaScript 文件作为一个模块，通过 `module.exports`、`exports` 对外暴露，使用 `require(path)` 引入

## 脚本执行顺序

* 浏览器中脚本严格按照加载的顺序执行
* 小程序执行的入口文件是 app.js，根据 `require` 的模块顺序决定文件的执行顺序  
* app.js 执行结束，按照 app.json `pages` 顺序执行

```js
// /project/mp-dev-guide/hello/js/a.js
console.log('a.js');
```

```js
// /project/mp-dev-guide/hello/js/b.js
console.log('b.js')
```

```js
// /project/mp-dev-guide/hello/app.js
const a = require('./js/a')
console.log('app.js')
const b = require('./js/b')
App({})
```

```json
// /project/mp-dev-guide/hello/app.json
{
  "pages":[
    "pages/index/index",
    "pages/log/log",
    "pages/result/result"
  ],
  
  ...
}
```

```js
// /project/mp-dev-guide/hello/pages/index/index.js
console.log('pages/index/index')

...
```

```js
// /project/mp-dev-guide/hello/pages/log/log.js
console.log('pages/log/log')
Page({})
```

```js
// /project/mp-dev-guide/hello/pages/result/result.js
console.log('pages/result/result')
Page({})
```

```js
/* 输出
a.js
app.js
b.js
pages/log/log
pages/result/result
pages/index/index
*/
```

:x: 练习失败，执行顺序有误

## 作用域

* 小程序作用域
  * 与浏览器中不同  
    与 NodeJS 类似
  * 声明的变量、函数在该文件中有效  
  * 不同文件可以声明相同名字的变量、函数
* 局部变量

```js
// /project/mp-dev-guide/hello/js/scope-a.js
let localValue = 'a'
```

```js
// /project/mp-dev-guide/hello/js/scope-b.js
console.log(localValue) // ReferenceError: localValue is not defined
```

```js
// /project/mp-dev-guide/hello/app.js
const scopeA = require('./js/scope-a')
const scopeB = require('./js/scope-b')
```

* 全局变量
  * `getApp()` 获得全局实例

```js
// /project/mp-dev-guide/hello/js/scope-a.js
const global = getApp()
global.globalValue = 'globalValue'
```

```js
// /project/mp-dev-guide/hello/js/scope-b.js
const global = getApp()
console.log(global.globalValue)
/* 输出
globalValue
*/
```

* 全局数据
  * 保证全局的数据在任何文件中安全的被使用

```js
// /project/mp-dev-guide/hello/app.js
App({
  globalData: {
    a: 1,
  },
})
```

```js
// /project/mp-dev-guide/hello/js/scope-a.js
const global = getApp()
global.globalData.a++
```

```js
// /project/mp-dev-guide/hello/js/scope-b.js
const global = getApp()
console.log(global.globalData.a)
/* 输出
2
*/
```

## 实例

```shell
# /project/mp-dev-guide/hello
```