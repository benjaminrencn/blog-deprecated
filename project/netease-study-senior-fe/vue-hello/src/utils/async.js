export function runQueue(queue, iterator, end) {
  step(0)

  function step(index) {
    if (index >= queue.length) { return end && end() }
    if (!queue[index]) { return step(index + 1) }
    iterator(queue[index], () => { step(index + 1) })
  }
}
