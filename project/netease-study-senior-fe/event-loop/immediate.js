const fs = require('fs')

fs.readFile(__filename, _ => {
  setTimeout(_ => {
    console.log("setTimeout")
  }, 0)
  setImmediate(_ => {
    console.log("setImmediate")
  })
})
// setImmediate setTimeout