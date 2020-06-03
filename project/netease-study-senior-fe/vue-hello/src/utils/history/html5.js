import BaseHistory from './base'

export default class Html5History extends BaseHistory {
  constructor(options) {
    super(options)
    this.initListener()
  }
  initListener() {
    window.addEventListener('popstate', () => {
      super.transitionTo(this.getCurrentLocation())
    })
  }
  getCurrentLocation() {
    return decodeURI(window.location.pathname) || '/' + window.location.search + window.location.hash;
  }
  push(target) {
    super.transitionTo(target)
    window.history.pushState({ key: +new Date() }, '', target)
  }
}
