// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入 element-ui
import ElementUI from 'element-ui'
// 引入 element-ui 的样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import router from './router'
// import axios from 'axios'
//设置统一的请求路径
// axios.defaults.baseURL=''
//设置给实例对象
// Vue.prototype.$http = axios

//引入 axios
import myaxios from './assets/js/myaxios.js'
//调用方法
Vue.use(myaxios)

// 引入全局样式
import './assets/css/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'// 将 App渲染到视图容器中
})
