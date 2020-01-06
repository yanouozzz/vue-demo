<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight" >
    <i class="iconfont iconzhuye1"  style="font-size:22px;font-weight:700;padding-top:3rem;" slot="right"></i>
  </van-nav-bar>
</template>

<script>

export default {
  name: 'userNav',

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  methods: {

    onClickLeft () {
      this.$router.back()
      this.$toast('返回')
    },

    onClickRight () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss">
.van-nav-bar {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eaeaeb;
    .van-icon{
      color: #494949;
    }
    .van-nav-bar__right {
      position: absolute;
      top: 0;
      bottom: 0;
    }
  }
</style>
