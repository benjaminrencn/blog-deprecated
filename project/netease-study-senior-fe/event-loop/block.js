const fs = require('fs')

function someAsyncOperation(callback) {
  fs.readFile(__dirname, callback)
}
const timeoutScheduled = Date.now()
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled
  console.log(`${delay}ms have passed since I was scheduled`)
}, 100)
someAsyncOperation(() => {
  const startCallback = Date.now()
  while (Date.now() - startCallback < 200) {
    // do nothing
  }
})
// 204ms have passed since I was scheduled