<template>
  <div class="login">
      <!-- 使用elementui 卡片组件 el-card-->
      <el-card class="login-card"></el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
/* 想用less在组件内写样式 就得定义leng="less"属性
scoped解决组件内使用同样选择器，且该属性只对当前组件有效 */
.login {
    background-image: url('../../assets/img/login_bg.jpg');
    height: 100vh;
    background-size: cover;
    // 使用flex布局
    display: flex;
    // 水平居中
    justify-content: center;
    // 垂直居中
    align-items: center;
    .login-card {
        width: 440px;
        height: 340px;
    }
}
</style>
