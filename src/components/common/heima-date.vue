<template>
  <div class="date">
    <div :style="hourStyle" class="hour"></div>
    <div :style="minStyle" class="min"></div>
    <div :style="secondStyle" class="second"></div>
  </div>
</template>

<script>
//   - 时针 =》 8点 =》 一圈 360deg =>  一格30deg => 30*8=>240deg
// - 分针 =》 20分 =》 1圈360deg => 一格6deg => 20* 6 =》 120deg
// - 秒针 =》 20秒 =》 一圈360deg => 1格6deg => 20*6 => 120deg
export default {
  data () {
    return {
      hour: 12,
      min: 60,
      second: 60
    }
  },
  // 使用钩子函数，单次页面刷新
  created () {
    this.updateTime()
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  // 计算属性 ：智能更新数据
  computed: {
    // 时针的样式
    hourStyle () {
      // 24小时 获取到当前12小时制 的时间
      let hour = this.hour - 12 ? this.hour - 12 : this.hour
      // 算出当前时间姚旋转的角度  一小格30度
      let rowDeg = 30 * hour + this.min / 60 * 30 // 时针至少转的角度 + 分针分钟数/60 * 30度
      // 旋转角度 设置
      return { transform: `rotate(${rowDeg}deg)` }
    },
    // 分钟的样式
    minStyle () {
      let rowDeg = 6 * this.min
      return { transform: `rotate(${rowDeg}deg)` }
    },
    // 秒针的样式
    secondStyle () {
      let rowDeg = 6 * this.second
      return { transform: `rotate(${rowDeg}deg)`, transition: 'all 1s linear forwards' }
    }
  },
  methods: {
    updateTime () {
      let newdate = new Date() // 获取当前时间
      this.hour = newdate.getHours() // 获取当前 小时
      this.min = newdate.getMinutes() // 获取当前分钟
      this.second = newdate.getSeconds() // 获取当前秒
    }
  }
}
</script>

<style lang="less" scoped>
.date {
  background-image: url("../../assets/img/back.png");
  width: 400px;
  height: 400px;
  background-size: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  opacity: 0.6;
  .hour,
  .min,
  .second {
    position: absolute;
    bottom: 200px;
    transform-origin: 0 100%;
  opacity: 0.5;
  }
  // 时
  .hour {
    background-image: url("../../assets/img/hou.png");
    width: 6px;
    height: 100px;
  }
  // 分
  .min {
    background-image: url("../../assets/img/min.png");
    width: 4px;
    height: 130px;
  }
  // 秒
  .second {
    background-image: url("../../assets/img/sec.png");
    width: 2px;
    height: 160px;
  }
}
</style>
