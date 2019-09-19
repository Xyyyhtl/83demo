<template>
  <!-- 定义超级大容器 -->
  <el-container>
    <!-- 放置左侧列表容器 -->
    <el-aside>
      <!-- 左侧导航普通组件 -->
      <layyou-aside></layyou-aside>
    </el-aside>
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
import layyouAside from '../../components/home/layout-aside'
export default {
  components: {
    'layyou-aside': layyouAside
  }
}
</script>

<style>
</style>
