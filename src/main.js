import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'
import './utils/rem'
import './assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

const vm = new Vue({
  router,
  store,
  render: function (h) { return h(App) }
})
vm.$mount('#app')
