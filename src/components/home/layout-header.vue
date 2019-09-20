<template>
  <!-- el-row包el-col/ 下拉菜单el-dropdown 所用组件 -->
  <!-- align="middle" flex垂直居中 -->
  <el-row class="layout-header" align="middle" type="flex" justify="space-between">
    <!-- 左侧 -->
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <i class="el-icon-s-unfold"></i>
        <span class="title">江苏传智播客教育科技股份有限公司</span>
      </div>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="4">
      <!-- 用户头像 -->
      <img class="head-img" :src="userInfo.photo ? userInfo.photo : dafaultImg" alt />
      <!-- 下拉菜单组件 -->
      <el-dropdown trigger="click" @command="commonClick">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 具名插槽 -->
        <el-dropdown-menu slot="dropdown" >
          <!-- 当出发点击事件后，command属性会携带参数，将参数传给方法内对应得逻辑代码 -->
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="quit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      // 个人信息对象
      userInfo: {},
      // 如果 img中地址不固定 且地址是根据本地条件来的，
      // 而浏览器根本找不到改地址 也不识别，只识别base64位
      // 所以本地地址才需要转base64      !!! 线上地址不需要
      // 使用require 手动将图片转成base64
      dafaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    // 获取用户个人资料
    getUserInfo () {
      // 从前端缓存中获取token
      let token = window.localStorage.getItem('user-token')
      this.$axios({
        url: '/user/profile',
        // 请求头是一个对象
        // 参数Authorization 值Bearer ${token}参数结构
        headers: { Authorization: `Bearer ${token}` }
      }).then(result => {
        // 将接收得数据对象，赋值给 数据中得userInfo
        this.userInfo = result.data.data
      })
    },
    // 公共点击事件方法
    commonClick (key) {
      if (key === 'account') {
        // 跳转账户页面
        this.$router.push('/home/account')
      } else if (key === 'git') {
        // 跳转到github项目网站
        window.location.href = 'https://github.com/Xyyyhtl/83demo'
      } else {
        // 退出时清除token缓存 3种写法
        window.localStorage.clear() // 只能清除本项目得前端缓存
        this.$router.push('/login') // 且跳转回登录页面，重新登录，获取token
        // window.localStorage.removeItem() //
        // window.localStorage.getItem('user-token', '')
      }
    }
  },
  // 使用钩子函数调用请求方法
  // 因为一进入页面就得加载页面，所以使用钩子函数
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  height: 50px;
  .el-icon-s-unfold {
    font-size: 22px;
  }
  .title {
    // 文字基线与图片顶对齐
    vertical-align: top;
    margin-left: 8px;
    font-weight: 500;
    font-size: 18px;
  }
  .head-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // 文字基线与图片中基线顶对齐
    vertical-align: middle;
    margin-right: 12px;
  }
}
</style>
