<template>
  <!-- 定义超级大容器 -->
  <el-container>
    <!-- 放置左侧列表容器 -->
    <el-aside>左侧列表</el-aside>
    <!-- 右侧大容器 -->
    <el-container>
      <!-- 顶部导航栏容器 -->
      <el-header>头部导航</el-header>
      <!-- 中部容器 -->
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
