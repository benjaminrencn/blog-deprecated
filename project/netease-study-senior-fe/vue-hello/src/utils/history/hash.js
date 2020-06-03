import BaseHistory from './base'

export default class HashHistory extends BaseHistory {
  constructor(options) {
    super(options)
  }
  push(target) {
    super.transitionTo(target)
    location.hash = target
  }
}
