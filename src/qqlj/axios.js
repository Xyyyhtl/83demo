// 对axios ① 请求进行拦截处理
import axios from 'axios'
import router from '../permission' // 导入一个实例 为啥导入？因为这里this不指向vue实例 ，所以不能用this.$riuter
import { Message } from 'element-ui' // 引入emlement-ui
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
  // 执行失败时 执行 1，获取失败的状态码
  let status = error.response.status
  // 定义一个未知错误 信息提示
  let message = '未知错误'
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '403 refresh_token未携带或已过期'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      message = 'token过期或未传'
      router.push('/login') // 跳转到登录页面
      window.localStorage.clear() // 清除前端缓存
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  // 希望在异常处理函数中，将所有的错误都处理完毕，不在进入catch，终止错误
  Message({ message }) // 调用该方法，方法内是对象，属性名是message，值是message
  return new Promise(function () {}) // 终止当前的错误
})
export default axios // 第一种

// 第二种全局注册
// export default {
//   install (Vue) {
//     Vue.prototype.$axios = axios  //将axios共享给所有Vue或主键是使用
//   }
// }
