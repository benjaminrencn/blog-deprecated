import Vue from 'vue'
import App from '@/App.vue'
import { Input } from 'element-ui'
import mixin from '@/mixins/mixin'

Vue.config.productionTip = false

Vue.use(Input)

Vue.mixin(mixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
