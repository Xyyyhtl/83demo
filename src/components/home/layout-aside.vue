<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
        <!-- 布局模板   el-menu内置一个属性router=true时启用路由
        原始写法:router="true"  高级写法router
        index属性作为router-link的to属性-->
    <el-menu router style="width:201px" background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
        <!-- 导航首页模板 -->
      <el-menu-item index="/home">
        <i class="el-icon-loading"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 导航内容模板 -->
      <el-submenu index="1">
          <!-- title插槽时submenu 中显示的一级内容 -->
        <template slot="title">
            <!-- icon图标 可换哦 -->
          <i class="el-icon-edit-outline"></i>
          <span slot="title">内容管理</span>
        </template>
         <!-- 二级内容 el-menu-item -->
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <!-- 导航粉丝模板 -->
      <el-submenu index="2">
          <!-- title插槽时submenu 中显示的一级内容 -->
        <template slot="title">
          <i class="el-icon-s-check"></i>
          <span slot="title">粉丝管理</span>
        </template>
        <!-- 二级内容 el-menu-item -->
        <el-menu-item index="/home/gradata">图文数据</el-menu-item>
        <el-menu-item index="/home/fanpro">粉丝概况</el-menu-item>
        <el-menu-item index="/home/fanpic">粉丝画像</el-menu-item>
        <el-menu-item index="/home/fanlist">粉丝列表</el-menu-item>
      </el-submenu>
      <!-- 导航粉丝模板 -->
      <el-menu-item index="/home/account">
        <i class="el-icon-setting"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-aside {
  height: 100vh;
  width: 200px;
  .title {
    text-align: center;
    background-color: #2e2f32;
    padding: 15px 0;
    img {
      height: 30px;
    }
  }
}
</style>
