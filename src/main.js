import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/index'
import store from './store'
import './styles/theme/index.css'
import './permission' // 权限
import * as util from './utils'

Vue.use(ElementUI)

Vue.prototype.$util = util //工具类

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

