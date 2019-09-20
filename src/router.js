import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue' // 首页路由级组件
import Login from './views/login/index.vue' // 登录路由级组件
import Main from './views/home/main'
Vue.use(Router)

export default new Router({
  routes: [
    // 一级路由
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '', // 什么都不写，就是默认二级路由组件
          component: Main // 默认二级路由
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
