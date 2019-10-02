import Vue from 'vue'
import App from './App.vue'
import router from './permission' // 导入设置拦截后的路由表配置
import ElementUI from 'element-ui' // ①,引入下载好的elementui插件
import Component from './components' // 一引入插件对象（所有普通组件）
import axios from './qqlj/axios' // 1，引入axios配置,  引入拦截处理过后的axios
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less' // 二，全局注册插件

Vue.prototype.$axios = axios // 2，讲axios共享给所有得实例或组件使用
Vue.config.productionTip = false
Vue.use(ElementUI) // ②，全局注册elementui插件
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
