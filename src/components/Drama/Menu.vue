<template>
 <div class="pop-box">
   <div class="pop-box__title">选择分类<span class="iconfont iconguanbi close" @click="closeItemList"></span></div>
   <ul class="item-list">
     <li v-for="item in itemList" :key="item.type" @click="goToPage(item)">
       <img :src="(item.src)" alt="" style="width:36px;height:36px;">
       <span>{{item.name}}</span>
     </li>
   </ul>
 </div>
</template>

<script>
import all from '../../assets/imgs/quanbu.png'
import concert from '../../assets/imgs/YanChangHuipng.png'
import opera from '../../assets/imgs/opera.png'
import sport from '../../assets/imgs/TiYuSaiShi.png'
import music from '../../assets/imgs/YinYueHui.png'
import exhibition from '../../assets/imgs/XiuXianZhanLan-45bee1035f.png'
import dance from '../../assets/imgs/WuDaoBaLei.png'
import children from '../../assets/imgs/ErTongQinZi.png'
import art from '../../assets/imgs/QuYiZaTan.png'

export default {
  name: 'menu-ele',
  props: {
    sliderScroll: {
      type: Object
    }
  },
  data () {
    return {
      itemList: [
        { name: '全部', src: all, type: 0, alias: 'all', index: 0 },
        { name: '演唱会', src: concert, type: 1, alias: 'concert', index: 1 },
        { name: '话剧歌剧', src: opera, type: 3, alias: 'opera', index: 2 },
        { name: '体育赛事', src: sport, type: 6, alias: 'sport', index: 3 },
        { name: '音乐会', src: music, type: 2, alias: 'music', index: 4 },
        { name: '展览休闲', src: exhibition, type: 7, alias: 'exhibition', index: 5 },
        { name: '舞蹈芭蕾', src: dance, type: 5, alias: 'dance', index: 6 },
        { name: '儿童亲子', src: children, type: 9, alias: 'children', index: 7 },
        { name: '曲艺杂谈', src: art, type: 4, alias: 'art', index: 8 }
      ]
    }
  },
  methods: {
    closeItemList () {
      this.$emit('closeItemList', false)
    },
    goToPage (val) {
      // 改变路由
      this.$router.push(`/dramas/${this.$route.params.cityId}/${val.alias}`).catch(err => err)
      // 关闭menu和遮罩
      this.closeItemList()
      // 把当前的type值传出 显示出对应内容
      this.$emit('menuKinds', val)
      //  slider滚动到相应位置
      if (val.index < 4) {
        this.sliderScroll.$refs['sliderScroll'].style.transform = 'translate(-1px, 0)'
      } else if (val.index >= 4 && val.index <= 6) {
        this.sliderScroll.$refs['sliderScroll'].style.transform = 'translate(-220px, 0)'
      } else {
        this.sliderScroll.$refs['sliderScroll'].style.transform = 'translate(-345px, 0)'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.pop-box{
    position: fixed;
    padding-top: 10px;
    left: 0;
    top: 0;
    width: 100%;
    // height: 300px;
    background-color: #fff;
    z-index: 9991;
    transition: opacity 1s;
    &__title{
      position: relative;
      text-align: center;
      .close{
        font-size: 14px;
        right: 22px;
        top: 2px;
        position: absolute;
      }
    }
    .item-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        padding-bottom: 24px;
        text-align: center;
        font-size: 13px;
        color: #323038;
        span{
          padding: 10px 0;
          font-size: 13px;
        }
      }
    }
}

</style>
