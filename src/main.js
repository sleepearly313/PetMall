import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入全局变量
import './assets/css/global.css'


import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.1:80'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
