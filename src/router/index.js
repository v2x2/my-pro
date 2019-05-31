import Vue from 'vue'
import Router from 'vue-router'
//引入 userElement 组件
// import UserEelement from '../components/userElement.vue'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', redirect:'/home' }, // redirect:{ name:''home } //请求根目录时重定向到根目录
    { path:'/login',name:'login',component:Login }, //登陆路由
    { path:'/home', name:'home' , component:Home } // 首页路由
  ]
})
