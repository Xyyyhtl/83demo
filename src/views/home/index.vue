<template>
  <!-- 定义超级大容器 -->
  <el-container>
    <!-- 放置左侧列表容器 -->
    <el-aside style="width:200px">
      <!-- 左侧导航普通组件 -->
      <layyou-aside></layyou-aside>
    </el-aside>
    <!-- 右侧大容器 -->
    <el-container>
      <!-- 顶部导航栏容器 -->
      <el-header>
        <!-- 导航头部组件 -->
        <layyou-header></layyou-header>
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
import layyouAside from '../../components/home/layout-aside' // 首页组件
import layoutHeader from '../../components/home/layout-header' // 导航二级组件
export default {
  components: {
    'layyou-aside': layyouAside,
    'layyou-header': layoutHeader
  }
}
</script>

<style>
height: ;
</style>
