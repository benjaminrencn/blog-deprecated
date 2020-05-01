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
// let hero = {
//   name: 'iron man',
//   friend: {
//     name: 'captain america',
//   },
// }
// let newHero = shallowCopy(hero)
// newHero.name = 'hulk'
// // console.log(hero) // { name: 'iron man', friends: [ { name: 'captain america' } ] }
// // console.log(newHero) // { name: 'hulk', friends: [ { name: 'captain america' } ] }
// newHero.friend.name = 'black widow'
// // console.log(hero) // { name: 'iron man', friend: { name: 'black widow' } }
// // console.log(newHero) // { name: 'hulk', friend: { name: 'black widow' } }

// let hero = {
//   name: 'iron man',
//   friend: {
//     name: 'captain america',
//   },
// }
// let newHero = Object.assign({}, hero)
// newHero.name = 'hulk'
// console.log(hero) // { name: 'iron man', friends: [ { name: 'captain america' } ] }
// console.log(newHero) // { name: 'hulk', friends: [ { name: 'captain america' } ] }
// newHero.friend.name = 'black widow'
// console.log(hero) // { name: 'iron man', friend: { name: 'black widow' } }
// console.log(newHero) // { name: 'hulk', friend: { name: 'black widow' } }

// let hero = {
//   name: 'iron man',
//   friend: {
//     name: 'captain america',
//   },
// }
// let newHero = { ...hero }
// newHero.name = 'hulk'
// console.log(hero) // { name: 'iron man', friends: [ { name: 'captain america' } ] }
// console.log(newHero) // { name: 'hulk', friends: [ { name: 'captain america' } ] }
// newHero.friend.name = 'black widow'
// console.log(hero) // { name: 'iron man', friend: { name: 'black widow' } }
// console.log(newHero) // { name: 'hulk', friend: { name: 'black widow' } }

// let deepCopy = (obj) => JSON.parse(JSON.stringify(obj))
// let hero = {
//   name: 'iron man',
//   friend: {
//     name: 'captain america',
//   },
//   attack: function () { return 'focus shot' },
// }
// let newHero = deepCopy(hero)
// newHero.name = 'hawk eye'
// newHero.friend.name = 'black widow'
// console.log(hero)
// console.log(hero.attack())
// console.log(newHero)
// console.log(newHero.attack)

let deepCopy = (obj) => {
  // 数组或对象
  let res = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      // 自身属性
      if (obj.hasOwnProperty(key)) {
        // 值为对象
        if (obj[key] && typeof obj[key] === 'object') {
          res[key] = deepCopy(obj[key])
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
let newHero = deepCopy(hero)
newHero.name = 'hawk eye'
newHero.friend.name = 'black widow'
console.log(hero)
console.log(hero.attack())
console.log(newHero)
console.log(newHero.attack())