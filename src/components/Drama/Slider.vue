<template>
 <div class="drama-slider">
   <div class="bscroll" ref="bscroll">
    <div class="bscroll-container" ref="sliderScroll">
        <div v-for="item in slideList" :key="item.type"
          class="drama-slider__list"
          :class="{'active': dramaType === item.type}"
           @click="changeDrama(item)">
           {{item.name}}
        <div :class="{'active-line': dramaType === item.type}"></div>
        </div>
    </div>
    <div class="drama-slider__menu" @click="showItemList"></div>
   </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'slider-ele',
  // 实现数据的双向绑定  通过父组件的dramaType控制prop
  props: {
    dramaType: {
      type: Number
    }
  },
  data () {
    return {
      // slideList: [
      //   { name: '全部', alias: 'all', type: 0 },
      //   { name: '演唱会', alias: 'concert', type: 1 },
      //   { name: '话剧歌剧', alias: 'opera', type: 3 },
      //   { name: '体育赛事', alias: 'sport', type: 6 },
      //   { name: '音乐会', alias: 'music', type: 2 },
      //   { name: '展览休闲', alias: 'exhibition', type: 7 },
      //   { name: '舞蹈芭蕾', alias: 'dance', type: 5 },
      //   { name: '儿童亲子', alias: 'children', type: 9 },
      //   { name: '曲艺杂谈', alias: 'art', type: 4 }
      // ],
      itemList: true
    }
  },
  computed: {
    ...mapState(['slideList']),
    ...mapState(['city'])
  },
  methods: {
    showItemList () {
      // 控制面板menu的出现
      this.$emit('showItemList', this.itemList)
    },
    // 改变不同的演出方式
    changeDrama (val) {
      this.curSel = val.type
      // 把val值传出去给父组件
      this.$emit('changeDrama', val)
      // 跳转到相对的路由
      this.$router.replace(`/dramas/${this.$route.params.cityId}/${val.alias}`).catch(err => err)
      // 改变仓库的slid的值
      this.$store.commit('SET_TYPE', val)
    }
  },
  mounted () {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll
      this.aBScroll = new BScroll(bscrollDom, {
        click: true,
        scrollX: true
      })
    })
    this.$emit('slideScroll', this)
  }
}
</script>

<style lang='scss' scoped>
// -130 216 300
  .bscroll{
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;
    .bscroll-container{
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      height: 100%;
      width: 720px;
      overflow: hidden;
      .drama-slider__list{
        position: relative;
        padding-left: 18px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #95949d;
        font-size: 15px;
        white-space: nowrap;
        transition: all .3s ease;
        .active-line{
          position: relative;
          bottom: 10px;
          margin: 0 auto;
          height: 2px;
          background: #000;
          border-radius: 2px;
          margin-top: 5px;
        }
      }
       .active{
          color: #323038;
          font-size: 24px;
          font-weight: 700;
         }
    }
    .drama-slider__menu{
      position: absolute;
      right: 0px;
      top: 10px;
      width: 36px;
      height: 36px;
      background: url(../../assets/imgs/icon_menu.png) no-repeat;
      background-size: contain;
      background-position: 0px -2px;
    }
}
</style>
