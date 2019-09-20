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
      <img class="head-img" src="../../assets/img/avatar.jpg" alt />
      <!-- 下拉菜单组件 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          用户名
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 具名插槽 -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
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
