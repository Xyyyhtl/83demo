import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 1,引入下载好的elementui插件
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
Vue.use(ElementUI) // 2，全局注册elementui插件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
