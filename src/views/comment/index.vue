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
      <el-table-column align="center" label="操作"></el-table-column>
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
