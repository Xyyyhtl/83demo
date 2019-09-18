<template>
  <div class="login">
    <!-- 使用elementui 卡片组件 el-card-->
    <!-- 匿名插槽 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!--  表单 必须得由 el-form包裹才可以 -->
      <el-form style="margin-top:16px">
          <!-- 每个表单域由一个 form-item 组件组成 -->
        <el-form-item>
            <!-- 表单域中可以放置各种类型得表单控件
                单，多，复选框均可
                Select、Checkbox、Radio、Switch、DatePicker、TimePicker -->
          <el-input></el-input>
        </el-form-item>
        <!-- 表单域 输入框 -->
        <el-form-item>
            <!-- 输入验证码 表单域 -->
          <el-input  style="width:60%"></el-input>
          <!-- 获取验证码按钮 -->
          <el-button type="primary" style="float:right">获取验证码</el-button>
        </el-form-item>
        <!-- 表单多选框 -->
        <el-form-item>
            <!-- 多选框 -->
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <!-- 登录表单 按钮 -->
        <el-form-item>
            <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
/* 想用less在组件内写样式 就得定义leng="less"属性
scoped解决组件内使用同样选择器，且该属性只对当前组件有效 */
.login {
  background-image: url("../../assets/img/login_bg.jpg");
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
    .title {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>
