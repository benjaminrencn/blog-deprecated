---
lang: zh-CN
description: 代码检查工具：htmllint、stylelint、ESLint。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,代码检查工具
---

# 代码检查工具

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#代码检查工具#

代码检查工具：htmllint、stylelint、ESLint。

## 准备

1. [Node.js （npm）](https://nodejs.org/zh-cn/)

## HTML 代码检查工具

1. [bootlint](https://github.com/twbs/bootlint)（bootstrap）
1. [htmllint](https://github.com/htmllint/htmllint)
1. [HTMLHint](https://github.com/yaniswang/HTMLHint)

## htmllint

### 安装

```bash
# 进入目标文件夹下
npm init
npm i htmllint --save-dev
```

### 使用

```html
<!-- htmllint_test.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Title</title>
</head>
<body>
<div class="html-lint-test"></div>
</body>
</html>
```

```js
// htmllint_test.js
const fs = require('fs');
const htmllint = require('htmllint');
const html = fs.readFileSync('./htmllint_test.html', 'utf-8');
const lintOptions = {
  'indent-width': 2,
  'line-end-style': false,
};
htmllint(html, lintOptions).then(out => {
  console.log(out);
});
```

```bash
node htmllint_test.js
```

```bash
# 报错信息
[ Issue {
    line: 8,
    column: 12,
    code: 'E011',
    data:
     { attribute: 'class',
       format: 'underscore',
       value: 'html-lint-test' },
    rule: 'class-style' } ]
```

修复方案一  
修改错误代码

```html {9}
<!-- htmllint_test.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Title</title>
</head>
<body>
<div class="html_lint_test"></div>
</body>
</html>
```

修复方案二  
修改 htmllint 配置选项

```js {7}
const fs = require('fs');
const htmllint = require('htmllint');
const html = fs.readFileSync('./htmllint_test.html', 'utf-8');
const lintOptions = {
  'indent-width': 2,
  'line-end-style': false,
  'class-style': 'dash',
};
htmllint(html, lintOptions).then(out => {
  console.log(out);
});
```

### [配置选项](https://github.com/htmllint/htmllint/wiki/Options)

| 选项             | 默认值                 | 可选值                     | 说明                                                           |
|------------------|-----------------------|---------------------------|-----------------------------------------------------------------|
| `class-style`    | `false`               | `none`，`false`，格式指示符 | 如果为 `false`，则使用 `id-class-style` 的值                     |
| `id-class-style` | `'underscore'`        | `false`，格式指示符        | 如果有设置，则 id 和 class 都必须满足；但可以被 `class-style` 覆盖 |
| `indent-width`   | `4`                   | `false`，正整数            | 缩进的空格数                                                     |
| `tag-bans`       | `['style', 'b', 'i']` | 所有标签名                 | 禁止使用的标签                                                   |
| `title-max-len`  | `60`                  | `false`，非负整数          | 指定标签的长度                                                   |

htmllint format specifier（格式指示符）

| 指示符               | 说明             |
|---------------------|------------------|
| `'none'`            | 没有要求          |
| `'lowercase'`       | 小写字符          |
| `'underscore'`      | 小写并以下划线分隔 |
| `'dash'`            | 小写并以横杠分隔   |
| `'camel'`           | 驼峰              |
| `'bem'`             | 符合 BEM 语法     |
| 任意 JavaScript 正则 |                  |
| 符合正则语法的字符串  |                  |

### 内联选项配置

```html {8}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Title</title>
</head>
<body>
<!-- htmllint class-style="dash" -->
<div class="html-lint-test"></div>
</body>
</html>
```

## HTML 规范检查工具

* [Unicorn](http://validator.w3.org/unicorn/)
* [Tidy](http://infohound.net/tidy/)

## CSS 代码检查工具

* [CSSLint](https://github.com/CSSLint/csslint)
* [stylelint](https://github.com/stylelint/stylelint)

## stylelint

### 安装

```bash
npm i -g stylelint
stylelint -v

13.0.0
```

### 使用

```json
// .stylelintrc
{
  "rules": {
    "indentation": 2,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "function-comma-space-after": "always",
    "max-empty-lines": 2
  }
}
```

```css
/* test.css */
div, p, ul, ol, li {
    margin:0;
    padding: 0;
}
.s-fc, a.s-fc:hover {
    color: #ffffff;
}
```

```bash
stylelint test.css

test.css
 2:5   ×  Expected indentation of 2 spaces   indentation
 2:12  ×  Expected single space after ":"    declaration-colon-space-after
 3:5   ×  Expected indentation of 2 spaces   indentation
 6:5   ×  Expected indentation of 2 spaces   indentation
```

### 配置文件

运行 stylelint 命令时，会使用 [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) 查找配置信息，顺序如下：

1. package.json stylelint
1. .stylelintrc
1. stylelint.config.js

.stylelintrc 文件可以加后缀

* .stylelintrc.json
* .stylelintrc.yaml
* .stylelintrc.yml
* .stylelintrc.js
  * 需要时 common js 模块 `module.exports = { "rules": {} }`

### 常用属性

| 属性              | 说明                                              |
|-------------------|--------------------------------------------------|
| `rules`           | 检查规则，共150多个；没有默认规则                   |
| `extends`         | 扩展已有的配置对象，如：stylelint-config-standard   |
| `plugins`         | 插件，是一组规则，如：非标准 CSS 特性、特殊使用场景等 |
| `processors`      | 钩子函数，对输入输出做处理                          |
| `ignoreFiles`     | 忽略文件                                          |
| `defaultSeverity` | 报错级别，可选值有 `error`、`warning`              |

#### `extends`

```bash
# 进入目标文件夹下
npm i stylelint-config-standard --save-dev
```

```json {3}
// .stylelintrc
{
  "extends": "stylelint-config-standard"
}
```

```bash
stylelint test.css

test.css
 1:4   ×  Expected newline after ","                                       selector-list-comma-newline-after
 1:7   ×  Expected newline after ","                                       selector-list-comma-newline-after
 1:11  ×  Expected newline after ","                                       selector-list-comma-newline-after
 1:15  ×  Expected newline after ","                                       selector-list-comma-newline-after
 2:5   ×  Expected indentation of 2 spaces                                 indentation
 2:12  ×  Expected single space after ":" with a single-line declaration   declaration-colon-space-after
 3:5   ×  Expected indentation of 2 spaces                                 indentation
 5:1   ×  Expected empty line before rule                                  rule-empty-line-before
 5:6   ×  Expected newline after ","                                       selector-list-comma-newline-after
 6:5   ×  Expected indentation of 2 spaces                                 indentation
 6:12  ×  Expected "#ffffff" to be "#fff"                                  color-hex-length
 7:1   ×  Unexpected missing end-of-source newline                         no-missing-end-of-source-newline
```

#### [`rules`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules/list.md)

常用 `rules`

| 规则                             | 所属分类     | 说明                    |
|----------------------------------|-------------|------------------------|
| `color-no-invalid-hex`           | Color       | 禁止无效的十六进制颜色值 |
| `font-family-no-duplicate-names` | Font family | 禁止重复字体名          |
| `unit-no-unknown`                | Unit        | 禁止未知单位            |
| `property-no-unknown`            | Property    | 禁止未知属性            |
| `block-no-empty`                 | Block       | 禁止空选择器            |
| `comment-no-empty`               | Comment     | 禁止空注释              |
| `color-named`                    | Color       | 允许或禁止颜色名         |
| `color-no-hex`                   | Color       | 禁止使用十六进制颜色值   |

rule 取值

| 取值   | 说明                 |
|--------|----------------------|
| 单个值 | 主选项                |
| 数组   | `[option1, option2]` |
| null   | 关闭规则              |

## JavaScript 代码检查工具

* [ESLint](https://github.com/eslint/eslint)
* [JSHint](https://github.com/jshint/jshint)
* [JSLint](https://github.com/douglascrockford/JSLint)

## ESLint

### 安装

```bash
npm i -g eslint
eslint -v

v6.8.0
```

### 使用

```bash
# 进入目标文件夹下
npm init
eslint --init
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? What format do you want your config file to be in? JavaScript
```

```js
// eslint --init 生成 .eslintrc.js
// 再添加 rules
module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
```

```js
// test.js
(function () {
  let page = {
    init() {
      document.write('hello world')
    }
  }
  page.init()
})();
```

```bash
eslint test.js 

C:\Users\0000\Desktop\eslint-test\test.js
  4:36  error  Missing semicolon  semi
  6:4   error  Missing semicolon  semi
  7:14  error  Missing semicolon  semi

✖ 3 problems (3 errors, 0 warnings)
  3 errors and 0 warnings potentially fixable with the `--fix` option.
```

修复问题

加分号

```js {4,6,7}
(function () {
  let page = {
    init() {
      document.write('hello world');
    }
  };
  page.init();
})();
```

### 功能

注释忽略检查

```js {1,3}
/* eslint-disable */
console.log('do something');
/* eslint-enable */
```