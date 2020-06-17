// app.js
const a = require('./js/a')
console.log('app.js')
const b = require('./js/b')
App({
  globalData: {
    a: 1,
  },
})
const scopeA = require('./js/scope-a')
const scopeB = require('./js/scope-b')