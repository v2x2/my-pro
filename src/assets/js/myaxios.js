//自己封装的一个  axios 插件
//导入vue
 import Vue from 'vue'
 //导入axios
 import axios from 'axios'
 //创建插件对象
 var myaxios ={};
 //添加 install 方法
 myaxios.install = function(Vue) {
     //统一设置请求的api
     axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
     //给 vue 实例对象添加方法
     Vue.prototype.$http = axios
 }

 //将对象暴露
 export default myaxios