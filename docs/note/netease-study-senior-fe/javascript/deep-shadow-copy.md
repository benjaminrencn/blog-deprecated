---
lang: zh-CN
description: 深拷贝、浅拷贝。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,函数,深拷贝和浅拷贝,JavaScript,js
---

# 深拷贝和浅拷贝

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#函数#
\#深拷贝和浅拷贝#
\#JavaScript#
\#js#

深拷贝、浅拷贝。

* 传值  
  原始数据类型值
* 传址  
  引用、内存地址
* 背景
  * js 对于原始数据类型、引用数据类型处理不同  
    能直接操作原始数据类型  
    只能操作引用数据类型的引用

## 概念

* 对于原始数据类型、纯粹对象，深浅拷贝没有区别  
  深浅拷贝是对于复杂对象而言
* 拷贝对象所有属性都为原始数据类型，深浅拷贝没有区别，遍历属性进行复制

## 浅拷贝

* 复制一层属性，当属性为引用类型时，实质是复制其引用
  * `Object.assign`

### 实现

```js
// 浅拷贝
let shallowCopy = (obj) => {
  let res = {}
  // 遍历
  for (let key in obj) {
    // 自身属性（非继承）
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key]
    }
  }
  return res
}
let hero = {
  name: 'iron man',
  friend: {
    name: 'captain america',
  },
}
let newHero = shallowCopy(hero)
newHero.name = 'hulk'
console.log(hero) // { name: 'iron man', friends: [ { name: 'captain america' } ] }
console.log(newHero) // { name: 'hulk', friends: [ { name: 'captain america' } ] }
newHero.friend.name = 'black widow'
console.log(hero) // { name: 'iron man', friend: { name: 'black widow' } }
console.log(newHero) // { name: 'hulk', friend: { name: 'black widow' } }
```

### [Object.assign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<Badge text="ES6"/>


* 将一个或多个源对象复制到目标对象
* 浅拷贝


```js
let newHero = Object.assign({}, hero)
```

### [扩展运算符 `...`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)<Badge text="ES6"/>

* 展开函数、对象

```js
let newHero = { ...hero }
```

### 案例

```js
let hero = {
  name: 'iron man',
  friend: {
    name: 'captain america',
  },
}
let newHero = Object.assign({}, hero)
// let newHero = { ...hero }
newHero.name = 'hulk'
console.log(hero) // { name: 'iron man', friends: [ { name: 'captain america' } ] }
console.log(newHero) // { name: 'hulk', friends: [ { name: 'captain america' } ] }
newHero.friend.name = 'black widow'
console.log(hero) // { name: 'iron man', friend: { name: 'black widow' } }
console.log(newHero) // { name: 'hulk', friend: { name: 'black widow' } }
```

## 深拷贝

* 复制多层属性

### 实现

* JSON
  * 经使用纯 JSON 数据，不包含循环引用
  * [JSON 序列化](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)问题  
    `undefined`、函数、`symbol`、`Date`、`NaN`、`Infinity`、循环引用等导致深拷贝缺陷

  ```js
  let deepCopy = (obj) => JSON.parse(JSON.stringify(obj))
  let hero = {
    name: 'iron man',
    friend: {
      name: 'captain america',
    },
    attack: function () { return 'focus shot' },
  }
  let newHero = deepCopy(hero)
  newHero.name = 'hawk eye'
  newHero.friend.name = 'black widow'
  console.log(hero) // { name: 'iron man', friend: { name: 'captain america' }, attack: [Function: attack] }
  console.log(hero.attack()) // focus shot
  console.log(newHero) // { name: 'hawk eye', friend: { name: 'black widow' } }
  console.log(newHero.attack) // undefined
  ```

* 递归

  ```js
  let deepCopy = (obj, cache) => {
    // 非对象
    if (!obj || typeof obj !== 'object') { return obj }
    // 存储以解决循环引用
    cache = cache || []
    if (cache.includes(obj)) {
      return obj
    } else {
      cache.push(obj)
    }
    // 数组或对象
    let res = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === 'object') {
      for (let key in obj) {
        // 自身属性
        if (obj.hasOwnProperty(key)) {
          // 值为对象
          if (obj[key] && typeof obj[key] === 'object') {
            res[key] = deepCopy(obj[key], cache)
          } else { // 值非对象
            res[key] = obj[key]
          }
        }
      }
    }
    return res
  }
  let hero = {
    name: 'iron man',
    friend: {
      name: 'captain america',
    },
    attack: function () { return 'focus shot' },
  }
  hero.self = hero
  let newHero = deepCopy(hero)
  newHero.name = 'hawk eye'
  newHero.friend.name = 'black widow'
  console.log(hero) // { name: 'iron man', friend: { name: 'captain america' }, attack: [Function: attack], self: [Circular] }
  console.log(hero.attack()) // focus shot
  console.log(newHero) // { name: 'hawk eye', friend: { name: 'black widow' }, attack: [Function: attack], self: { name: 'iron man', friend: { name: 'captain america' }, attack: [Function: attack], self: [Circular] } }
  console.log(newHero.attack()) // focus shot
  ```

## 应用

* 混合模式（Mixin）  
  不通过继承做到扩展
* [Vue.mixin](https://cn.vuejs.org/v2/api/#Vue-mixin)
* [lodash.pick](https://www.lodashjs.com/docs/lodash.pick)

## 练习

```js
/**
 * 深拷贝
 *
 * 缺陷: 比如拷贝Symbol、拷贝函数、循环引用
 */
export const deepCopyJson = source => {
  return JSON.parse(JSON.stringify(source))
}

/**
 * 请试着实现一个可以解决 deepCopyJson 中不能拷贝的Symbol、循环引用问题的拷贝函数，
 * 并且保证copy.test.js中的单元测试顺利通过。
 */
export const deepCopy = (source, cache) => {
  // 非对象
  if (!source || typeof source !== 'object') { return source }
  // 存储以解决循环引用
  cache = cache || []
  if (cache.includes(source)) {
    return source
  } else {
    cache.push(source)
  }
  // 数组或对象
  let res = Array.isArray(source) ? [] : {}
  if (source && typeof source === 'object') {
    for (let key in source) {
      // 自身属性
      if (source.hasOwnProperty(key)) {
        // 值为对象
        if (source[key] && typeof source[key] === 'object') {
          res[key] = deepCopy(source[key], cache)
        } else { // 值非对象
          res[key] = source[key]
        }
      }
    }
  }
  return res
}
```
