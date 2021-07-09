import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import 'bootstrap'
 
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
 
// 全局注册 $
Vue.prototype.$ = $




Vue.use(VueAxios, axios)

Vue.config.productionTip = false
axios.defaults.baseURL = "/api"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
