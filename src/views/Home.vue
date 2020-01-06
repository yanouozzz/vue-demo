<template>
  <div class="page-home">
    <div class="page-home__view">
      <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated ">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

    <van-tabbar route active-color="#ff1d41">
      <van-tabbar-item icon="wap-home" to="/home">精选</van-tabbar-item>
      <van-tabbar-item icon="photo-o" :to="`/dramas/${this.city.cityOID }/${this.slid === null ? 'all' : this.slid.alias }`"><span>演出</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.inactive"
    ></van-tabbar-item>
      <van-tabbar-item icon="manager" to="/center">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapState(['title']),
    ...mapState(['city']),
    ...mapState(['slid'])
  },

  data () {
    return {
      active: 0,
      icon: {
        active: 'https://m.moretickets.com/images/bottom-tab/list-active-d90ccc2e14.png',
        inactive: 'https://m.moretickets.com/images/bottom-tab/list-ddc66f48b7.png'
      }
    }
  },

  methods: {
    onClickLeft () {
      this.$router.back()
      this.$toast('返回')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/mixins.scss';

.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .van-nav-bar {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eaeaeb;
    .van-icon{
      color: #494949;
    }
  }
  &__view {
    flex: 1;
    overflow-y: auto;
    background: #fff;
  }
  .van-tabbar {
    position: relative;
  }
}
</style>
