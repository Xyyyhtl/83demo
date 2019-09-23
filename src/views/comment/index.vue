<template>
  <!-- 评论列表组件 -->
  <el-card>
    <!-- 给card得插槽 -->
    <bread-crumb slot="header">
    <!-- 给面包屑得 插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- el-table 表格 data属性是一个对象数组-->
    <el-table :data="list">
      <!-- el-table-column 是表格得列属性    align对齐方式 prop是键名或称字段名  label是表头 width属性来定义列宽。-->
      <!-- 布尔值在table上显示不了 使用table属性formatter来处理-->
      <el-table-column width="1000px" prop="title" label="标题"></el-table-column>
      <el-table-column :formatter="statusFormatter" align="center" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column align="center" prop="total_comment_count" label="评论数"></el-table-column>
      <el-table-column align="center" prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column align="center" label="操作">
        <!-- ② 使用emlementui 内得作用域插槽 父读取收子组件数据  emlementui已经做好了子组件 所以可以直接读取  -->
        <template slot-scope="obj">
          <!-- 操作里面的状态 需要根据评论状态 展示反值 当评论为关，操作显示打开 -->
        <!-- ① （该子组件看不到，emlementui已经做好，直接可用）通过 作用域Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。 -->
          <el-button size="small" type="text">修改</el-button>
          <!--  当状态为true 操作为关闭   false是打开 -->
          <el-button @click="closeOropen(obj.row)" size="small" type="text">{{obj.row.comment_status ? "关闭" : "打开"}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 获取评论列表数据
    getComment () {
      this.$axios({
        url: '/articles', // 评论列表接口
        params: { response_type: 'comment' } // 传参数才可以获取，评论列表数据，comment参数得值，获取评论字段
        // params 是路径参数，也就是query参数
      }).then(result => {
        this.list = result.data.results // 接收数据，results 评论列表对象  且赋值给list
      })
    },
    // 该table属性 有4个参数
    // row 代表-- 所有行得数据得对象
    // column 代表-- 列得数据对象
    // cellValue 代表-- 当前列得布尔值
    // index 代表-- 元素得索引
    statusFormatter (row, column, cellValue, index) {
      // row["comment_status"] ? '正常' : '关闭' 也可以
      return cellValue ? '正常' : '关闭' // 当布尔值为true时显示文本正常，fasle为关闭
    },
    // 打开或关闭 评论状态  接收表达式得传参 row行得数据
    closeOropen (row) {
    //  获取评论状态得文本 true关闭 false打开
      // let mess = row.comment_status ? '关闭' : '打开'
      // 使用emlementui内得方法$confirm方法即可打开消息提示
      this.$confirm(`你确定${row.comment_status ? '关闭' : '打开'}评论？`, '龟儿子', {
      }).then(() => {
        // 确定是调用接口, 根据关闭评论或打开评论状态
        this.$axios({
          url: '/comments/status', // 地址
          method: 'put',
          params: { article_id: row.id }, // 路径参数  传入文章得id
          data: { allow_comment: !row.comment_status } // body参数 关闭打开，打开关闭  调用状态和当前状态是反着的 所以得取反
        }).then(result => {
          // 从新拉取数据
          this.getComment()
        })
      })
    }
  },
  // 使用钩子函数 调用获取数据列表
  created () {
    this.getComment()
  }
}
</script>

<style>

</style>
