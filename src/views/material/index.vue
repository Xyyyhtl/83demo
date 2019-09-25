<template>
  <!-- 卡片 -->
  <el-card>
    <!-- 面包屑 header具名给卡片-->
    <bread-crumb slot="header">
      <!-- title具名 给面包屑组件 -->
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 标签页组件 v-model绑定得是 变量name属性-->
    <el-tabs v-model="activeName" @tab-click="getMaterial">
      <el-tab-pane label="全部素材" name="all">
          <!-- 定义循环模板 渲染全部素材-->
        <div class="img-list">
          <el-card class="img-item" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <!-- 图标 -->
            <div class="icon">
                <!-- is_collected当他ture是全部 false是收藏 -->
              <i :style='{color:item.is_collected ? "red" : "green"}'  class="el-icon-star-on"></i>
              <i class="el-icon-delete"></i>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane  label="收藏素材" name="collect">
           <!-- 定义循环模板 渲染收藏素材-->
          <div class="img-list">
          <el-card class="img-item" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 默认选中全部
      list: [] // 定义list 接收数据
    }
  },
  methods: {
    // 获取all素材列表
    getMaterial () {
      this.$axios({
        url: '/user/images',
        // 当点击页面全部或收藏时，会根据activeName得到all或collect，当collect等于collect时就会请求收藏得数据，而不等于collect时，就会请求全部得数据
        params: { collect: this.activeName === 'collect' } // collect参数为false 获取得是全部素材，true是获取得收藏图片//设定的参数， 全部和收藏公用一个接口
      }).then(result => {
        this.list = result.data.results // 接收返回数据，且赋值给list数据
      })
    }
  },
  //   使用钩子函数，请求数据
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.img-list {
  display: flex;
  //换行
  flex-wrap: wrap;
  //
  justify-content: center;
  .img-item {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 40px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .icon {
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        height: 26px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        i {
            font-size: 18px;
        }
    }
  }
}
</style>
