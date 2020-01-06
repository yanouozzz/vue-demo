<template>
  <div class="page-drama">
    <!-- 头部 -->
    <div class="page-drama__header">
      <div class="page-drama__header__left" @click="$router.push('/city')">
        <span>{{city.cityName}}</span>
      </div>
      <div class="page-drama__header__right" @click="$router.push('/search')">
        <van-search placeholder="搜索明星，演出" v-model="value" shape="round" />
      </div>
    </div>
    <!-- 滑动选择 -->
    <slider-ele @showItemList="openItemList" @changeDrama="changeDrama" :dramaType="dramaType" @slideScroll="getSlideScroll"></slider-ele>
    <!-- 下拉菜单 -->
    <drop-ele @showWrapper="openWrapper"></drop-ele>
    <!-- 内容区 -->
    <div class="page-drama__content">
      <content-list v-for="(item,index) in showItem" :key="index" :showInfo="item"></content-list>
      <!-- 加载更多 -->
      <div class="add-more" v-if="isLoading && restCount > 0" @click="nextPageDrama">点击加载剩余{{restCount}}场演出</div>
      <!-- 加载中 -->
      <div class="loaded" v-if="isLoaded">
        <van-loading type="spinner" />
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="page-drama__shadow" v-if="showOption || showItemList" @click="closeAll"></div>
    <!-- 近期热门等的选项卡 -->
    <option-ele :openOption="showOption" @closeOption="closeOption(arguments)"></option-ele>
    <!-- 各个种类演出的选项 -->
    <menu-ele v-if="showItemList" @closeItemList="close" @menuKinds="menuChange" :sliderScroll="sliderScroll"></menu-ele>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import SliderEle from '@/components/Drama/Slider.vue'
import DropEle from '@/components/Drama/Drop.vue'
import ContentList from '@/components/Drama/contentList.vue'
import OptionEle from '@/components/Drama/Option.vue'
import MenuEle from '@/components/Drama/Menu.vue'

import Axios from 'axios'

export default {
  name: 'Dramas',
  data () {
    return {
      value: '',
      showItem: [],
      isLoading: false,
      isLoaded: true,
      count: 0,
      pageTotal: 0,
      dramaType: 0,
      showOption: false,
      showItemList: false,
      type: '',
      dramaName: '',
      sliderScroll: null,
      sorting: null
    }
  },
  components: {
    SliderEle,
    DropEle,
    ContentList,
    OptionEle,
    MenuEle
  },
  computed: {
    // 计算剩余的演出数
    restCount () {
      return this.pageTotal - 20 - this.count
    },
    ...mapState(['city']),
    sortingRes () {
      return this.sorting === null ? 0 : this.sorting.sorting === 'distance' ? 22.67552 : 0
    },
    ...mapState(['slid'])
  },
  watch: {
    // 监听发生变化时 原来的数据要清空掉
    type () {
      // 重置
      this.showItem = []
      this.count = 0
      this.getShowItem(this.type, this.count)
    },
    // 监听sorting发生变化
    sorting () {
      // 重置
      this.showItem = []
      this.count = 0
      this.getShowItem(this.type, this.count)
    },
    slid () {
      // home页面跳转
      this.type = this.slid.type
    }
  },
  methods: {
    ...mapMutations(['SET_TITLE']),
    getShowItem (val, counted) {
      // 加上开关
      this.isLoading = false
      this.isLoaded = true
      Axios.get(`https://m.moretickets.com/showapi/pub/site/${this.city.cityOID}/active_show`, {
        params: {
          offset: counted,
          length: 20,
          type: val === 0 ? '' : val,
          sorting: this.sorting === null ? 'weight' : this.sorting.sorting,
          // seq: 'desc',
          // client: 'piaodashi_weixin',
          locationCityOID: this.city.cityOID,
          siteCityOID: this.city.cityOID,
          // 离我最近的参数需要判断
          lat: this.sorting === null ? 0 : this.sorting.sorting === 'distance' ? 22.67552 : 0,
          lng: this.sorting === null ? 0 : this.sorting.sorting === 'distance' ? 113.78339 : 0
          // time: 1576552420764,
          // src: 'm_web'
        }
      }).then(res => {
        this.showItem = [...this.showItem, ...res.data.result.data]
        this.pageTotal = res.data.result.pagination.count
        // 开关打开
        this.isLoading = true
        this.isLoaded = false
      })
    },
    nextPageDrama () {
      // count+20 下一页数据
      this.count += 20
      // 发请求
      this.getShowItem(this.type, this.count)
    },
    openWrapper (val) {
      this.showOption = val
    },
    closeAll () {
      this.showOption = false
    },
    openItemList (val) {
      this.showItemList = val
    },
    close (val) {
      this.showItemList = val
    },
    changeDrama (val) { // 切换不同的演出
      this.type = val.type
      // 双向绑定
      this.dramaType = val.type
      this.dramaName = val.alias
    },
    menuChange (val) {
      this.dramaType = val.type
      // 切换不同的演出
      this.type = val.type
    },
    getSlideScroll (val) {
      // 把slider实例赋给data的sliderScroll
      this.sliderScroll = val
    },
    closeOption (val) {
      this.showOption = val[0]
      this.sorting = val[1]
    }
  },

  created () {
    this.SET_TITLE('演出列表')
    this.getShowItem(this.type, this.count)
    // this.$router.push(`/dramas/${this.city.cityOID}/${this.dramaName}`)
  }
}
</script>

<style lang='scss'>
  .page-drama{
    height: 100%;
    &__header{
      display: flex;
      height: 44px;
      align-items: center;
      &__left{
        padding-left: 20px;
        margin-left: 15px;
        background-image: url(../../assets/imgs/i.png);
        background-repeat: no-repeat;
        background-size: contain;
      span{
        font-size: 16px;
        font-weight: 700;
      }
    }
    &__right{
      flex: 10;
      .van-search{
        .van-cell{
          padding: 2px 8px 2px 0;
        }
      }
    }
   }
   .add-more{
    height: 20px;
    line-height: 20px;
    font-weight: 700;
    font-size: 14px;
    color: #ff1d41;
    text-align: center;
    padding-bottom: 10px;
   }
   .loaded{
      display: flex;
      justify-content: center;
      line-height: 50px;
      color: #666;
      font-weight: bold;
      height: 50px;
   }
   &__content{
     height: 100%;
     overflow-y: auto;
   }
   &__shadow{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-width: 1190px;
    z-index: 9990;
    background: #000;
    opacity: .5;
   }
  }
</style>>
