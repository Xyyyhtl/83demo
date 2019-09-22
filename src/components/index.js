// 实现整体普通组件得统一注册
import layoutAside from './home/layout-aside' // 左侧导航普通组件引入
import layoutHeader from './home/layout-header' // 头部导航普通组件引入
import breadCrumb from './common/bread-crumb' // 引入面包屑普通组件
export default {
  install (Vue) {
    // 调用install方法 会自动传入Vue对象
    // 组件可以在实例化之前注册组件
    Vue.component('layout-aside', layoutAside) // 全局注册左侧导航组件
    Vue.component('layout-header', layoutHeader) // 全局注册头部导航组件
    Vue.component('bread-crumb', breadCrumb) // 全局注册面包屑组件
  }
}
