import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false

const vm = new Vue({
  render: function (h) { return h(App) }
})
vm.$mount('#app')
