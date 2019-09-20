<template>
  <!-- 定义超级大容器 -->
  <el-container>
    <!-- 放置左侧列表容器 -->
    <el-aside style="width:200px">
      <!-- 左侧导航普通组件 -->
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧大容器 -->
    <el-container>
      <!-- 顶部导航栏容器 -->
      <el-header>
        <!-- 导航头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <!-- 中部容器 -->
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style>

</style>
