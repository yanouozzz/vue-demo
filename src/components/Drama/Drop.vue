<template>
 <div class="drama-drop">
   <div class="drama-drop__hot" @click="showOption">
     <span>近期热门</span>
      <i class="iconfont icon-down"></i>
   </div>
   <div class="drama-drop-all">
     <span>全部</span>
     <i class="iconfont icon-down"></i>
   </div>
 </div>
</template>

<script>
export default {
  name: 'drop',
  data () {
    return {
      open: true
    }
  },
  components: {

  },
  methods: {
    showOption () {
      // 传入父组件 控制选项的出现
      this.$emit('showWrapper', this.open)
    }
  }
}
</script>

<style lang='scss'>
  .drama-drop{
    display: flex;
    align-items: center;
    height: 50px;
    text-align: center;
    font-size: 13px;
    padding: 0 18px;
    &__hot{
      margin: 0 10px;
      padding: 0 15px;
      margin-right: 10px;
    }
    i{
      margin-left: 5px;
    }
  }
</style>
