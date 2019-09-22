// 对axios ① 请求进行拦截处理
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 3,将地址得常态值设置给baseURL
// 请求途中拦截  语法
// config是请求体的对象（里面包含大量数据）
axios.interceptors.request.use(function (config) {
  //  从前端缓存，拿到token
  let token = window.localStorage.getItem('user-token')
  // 在发起请求途中做一些处理，比如将token赛进去
  //   使用config内的属性heagers(请求头)把token赋值
  config.headers['Authorization'] = `Bearer ${token}` // 给axios请求同一注入token
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})

// ② 响应拦截  // 对响应结果到达浏览器途中的或称到达then之前 拦截处理
// response 响应体的对象
axios.interceptors.response.use(function (response) {
  // 有data数据属性 则返回data 若没有data则返回一个空对象
  return response.data ? response.data : {}
}, function (error) {
  return Promise.reject(error)
})
export default axios // 第一种

// 第二种全局注册
// export default {
//   install (Vue) {
//     Vue.prototype.$axios = axios  //将axios共享给所有Vue或主键是使用
//   }
// }
