<template>
  <!-- 卡片 -->
  <el-card>
    <!-- 面包屑 header具名给卡片-->
    <bread-crumb slot="header">
      <!-- title具名 给面包屑组件 -->
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 上传图片组件 el-upload -->
    <!--  :http-request="" 自定义上传 :show-file-list="false" 隐藏上传文件名 -->
    <el-upload :show-file-list="false" :http-request="uploadImg" action="" class="too-difficult">
      <el-button type="primary">上传图片</el-button>
    </el-upload>
    <!-- 标签页组件 v-model绑定得是 变量name属性-->
    <el-tabs v-model="activeName" @tab-click="changeTabe">
      <el-tab-pane label="全部素材" name="all">
        <!-- 定义循环模板 渲染全部素材-->
        <div class="img-list">
          <el-card class="img-item" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <!-- 图标 -->
            <div class="icon">
              <!-- is_collected当他ture是全部 false是收藏 -->
              <i :style='{color:item.is_collected ? "red" : "green"}' class="el-icon-star-on"></i>
              <i class="el-icon-delete"></i>
            </div>
          </el-card>
        </div>

      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="collect">
        <!-- 定义循环模板 渲染收藏素材-->
        <div class="img-list">
          <el-card class="img-item" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
      </el-tab-pane>
      <!-- 分页 -->
        <el-row type="flex" justify="center">
      <el-pagination @current-change="changePage" :page-size="page.pageSize" :current-page="page.currentPage" background layout="prev, pager, next" :total="page.total"></el-pagination>
        </el-row>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 默认选中全部
      list: [], // 定义list 接收数据
      // 分页信息
      page: {
        total: 0, // 全部数据
        currentPage: 1, // 当前页码
        pageSize: 10 // 单页数据
      }
    }
  },
  methods: {
    // 上传方法  (传参)
    uploadImg (params) {
      const data = new FormData() // 声明一个新的表单
      data.append('image', params.file)
      // 上传文件
      this.$axios({
        url: '/user/images',
        method: 'post',
        data: data
      }).then(() => {
        // 表单数据
        this.getMaterial()
      })
    },
    //    监听事件 ： 当事件发生改变时，会调用函数传入参数（这个参数就是当前事件改变时的页码），接收该参数
    changePage (newCurrentPage) {
      this.page.currentPage = newCurrentPage // 将最新页码赋值给当前页码
      this.getMaterial() // 从新拉取数据
    },
    // 全部和收藏得切换页码共用方法
    changeTabe () {
      // 切换全部或收藏 页码归1？不能按照之前得浏览记录来查看全部或收藏
      // 接口一致，但是切换得时候，页码归1，各自从第一面开始查询
      this.page.currentPage = 1
      this.getMaterial() // 从新拉取数据
    },
    // 获取素材列表
    getMaterial () {
      this.$axios({
        url: '/user/images',
        // 当点击页面全部或收藏时，会根据activeName得到all或collect，当collect等于collect时就会请求收藏得数据，而不等于collect时，就会请求全部得数据
        params: { collect: this.activeName === 'collect', page: this.page.currentPage, per_page: this.page.pageSize } // collect参数为false 获取得是全部素材，true是获取得收藏图片//设定的参数， 全部和收藏公用一个接口
      }).then(result => {
        this.list = result.data.results // 接收返回数据，且赋值给list数据
        this.page.total = result.data.total_count // 获取图片总数量 且赋值给data数据
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
.too-difficult{
  position: absolute;
  right: 20px;
  margin-top: -10px;
}
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
