// 权限，引入router对齐操作
//  对路由表根据需求，来进行甄别拦截操作，后导出该路由表
import router from './router'
// 全局前置守卫  来设置路由权限，进行甄别拦截
router.beforeEach(function (to, from, next) {
  // 判断拦截范围
  // 使用js内的方法startsWith() 以什么开头的方法，进行甄别
  if (to.path.startsWith('/home')) {
    // 判断是否有token
    // 获取前端缓存中的token
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 如果有token不拦截
      next()
    } else {
      // 没有token就拦截到登录页面
      next('/login')
    }
  } else {
    next()// 放行
  }
})

// 导出设置权限过后的router路由表
export default router
