const fs = require("fs")

fs.readFile(__filename, _ => {
  setTimeout(_ => {
    console.log("setTimeout")
  }, 0)
  setImmediate(_ => {
    console.log("setImmediate")
    process.nextTick(_ => {
      console.log("nextTick2")
    })
  })
  process.nextTick(_ => {
    console.log("nextTick1")
  })
})
// nextTick1 setImmediate nextTick2 setTimeout