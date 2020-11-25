import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/public.css'
// import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1/api'
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })
// Vue.prototype.$http = axios
// Vue.config.productionTip = false
// Vue.prototype.staticURL = 'http://www.clearayt.com/public/lautsky/ReFaith'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
