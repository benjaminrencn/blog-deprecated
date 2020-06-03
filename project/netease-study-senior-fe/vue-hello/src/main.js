import Vue from 'vue'
import App from '@/App.vue'
import { Input } from 'element-ui'
import mixin from '@/mixins/mixin'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(Input)

Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
