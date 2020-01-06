<template>
 <div class="option" v-if="openOption">
      <ul>
        <li v-for="item in options" :key="item.name" >
          <span>{{item.name}}</span>
          <van-checkbox v-model="item.checked" checked-color="#ff1d41" @click="changeDrama(item)"></van-checkbox>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'option-ele',
  props: {
    openOption: {
      type: Boolean
    }
  },
  data () {
    return {
      options: [{
        name: '近期热门',
        checked: false,
        sorting: 'weight'
      }, {
        name: '最近开场',
        checked: false,
        sorting: 'latestShowTime'
      }, {
        name: '折扣最优',
        checked: false,
        sorting: 'discount'
      }, {
        name: '离我最近',
        checked: false,
        sorting: 'distance'
      }]
    }
  },
  watch: {
    options () {
    }
  },
  methods: {
    changeDrama (val) {
      // options数据更新
      this.options.forEach(item => {
        item.checked = false
      })
      // 通知父组件关闭此option
      setTimeout(() => {
        this.$emit('closeOption', false, val)
      }, 1000)
    }
  }
}
</script>

<style lang='scss' scoped>
   .option{
    position: fixed;
    padding-top: 10px;
    left: 0;
    top: 20%;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 90%;
    height: 258px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    background-color: #fff;
    z-index: 9991;
    transition: opacity 1s;
    border-radius: 10px;
    li{
      display: flex;
      justify-content: space-between;
      text-align: left;
      padding: 12px 20px;
      span{
      line-height: 37px;
      font-size: 15px;
      color: #323038;
    }
   }
  }
</style>
