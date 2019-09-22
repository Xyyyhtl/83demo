<template>
  <div class="login">
    <!-- 使用elementui 卡片组件 el-card-->
    <!-- 匿名插槽 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!--  表单 必须得由 el-form包裹才可以 -->
      <!-- 数据校验 使用v-bind来，绑定model(表单数据)，rules(验证规则) -->
      <el-form
        ref="myForm"
        style="margin-top:16px"
        v-bind:model="loginForm"
        v-bind:rules="loginRules"
      >
        <!-- 每个表单域由一个 form-item 组件组成 -->
        <!-- 使用验证规则来 验证下面表单组件  必须得设置属性prop绑定字段名 -->
        <el-form-item prop="mobile">
          <!-- 表单域中可以放置各种类型得表单控件
                单，多，复选框均可
          Select、Checkbox、Radio、Switch、DatePicker、TimePicker-->
          <!-- 手机号 绑定v-model 实现数据视图实时交换-->
          <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <!-- 表单域 输入框 -->
        <el-form-item prop="code">
          <!-- 输入验证码 表单域 -->
          <el-input style="width:60%" placeholder="请输入验证码" v-model="loginForm.code"></el-input>
          <!-- 获取验证码按钮 -->
          <el-button type="primary" style="float:right">获取验证码</el-button>
        </el-form-item>
        <!-- 表单多选框 -->
        <el-form-item prop="agree">
          <!-- 多选框 -->
          <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <!-- 登录表单 按钮 -->
        <el-form-item>
          <el-button @click="login" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据 是一个对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议
      },
      loginRules: {
        // 登陆规则
        // 校验规则：key（字段名）:value（对象数组） 一个对象就是一个校验规则
        // required 为true（该字段必须填写才可以） 若为false（字段为空）则提示（message）
        // required 只可以校验null ，空字符串，和unf
        mobile: [
          { required: true, message: '不可为空哦' },
          // 第二个验证规则，pattern
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确手机号' }
        ],
        code: [
          { required: true, message: '不可为空哦' },
          { pattern: /^\d{6}$/, message: '验证码不正确' }
        ],
        agree: [
          {
            validator: function (rule, value, callBack) {
              // validator 自定义校验规则  本身就是一个函数
              // rule 当前规则， value当前表单项得值， callBack 回调函数
              // 正常模式
              // if (value) {
              //   callBack()
              // } else {
              //   callBack(new Error('该选项必选'))
              // }
              // 三元模式
              value ? callBack() : callBack(new Error('狗蛋,莫要搞事儿赛'))
            }
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // validate校验整个表单规则得方法
      // 该方法内是一个回调函数， 有俩个校验参数  1，是否校验成功 2，未通过校验得字段
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          // 只有所有得校验通过后，才会进入请求
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.loginForm
          }).then(result => {
            // 将后台返回得token令牌 存储到前端缓存中
            // console.log(result.data)
            window.localStorage.setItem('user-token', result.data.token)
            // 请求成功后，使用编程式导航返回主页面$router
            this.$router.push('/home')
          })
        }
      })
    }
  }
}
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
