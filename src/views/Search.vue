<template>
  <div class="page-search">
    <div class="page-search__top">
      <van-search
        :placeholder="`${$store.state.searchPlace}`"
        show-action
        shape="round"
        class="page-search__left"
        v-model="inputValue"
        @search="onEnter(inputValue)"
      >
        <div slot="action" class="page-search__right" @click="cancelClick()">取消</div>
      </van-search>
    </div>

    <hot-search v-if="this.showHotSearch" @abc="clickHotSearch"></hot-search>

    <character-card :card="getCard" v-if="this.showActor"></character-card>

    <search-list :list="getList" v-show="this.showCardList"></search-list>

    <show-content :tabs="getContent" v-show="this.showContent && !this.showCardList"></show-content>
  </div>
</template>

<script>
import HotSearch from '@/components/Search/HotSearch'
import CharacterCard from '@/components/Search/CharacterCard'
import SearchList from '@/components/Search/SearchList'
import ShowContent from '@/components/Search/ShowContent'
import Axios from 'axios'
export default {
  name: 'Search',

  data () {
    return {
      inputValue: '',
      getContent: [],
      getList: [],
      getCard: {},
      showHotSearch: true,
      showCardList: false,
      showActor: false,
      showContent: false
    }
  },

  watch: {
    inputValue () {
      if (this.inputValue) {
        this.getCity()
        this.showHotSearch = false
        this.showContent = true
      } else {
        this.showHotSearch = true
        this.showContent = false
        this.getContent = []
      }
      this.showCardList = false
      this.showActor = false
    }
  },

  components: {
    HotSearch,
    CharacterCard,
    SearchList,
    ShowContent
  },

  methods: {
    getCity () {
      Axios.get(`https://m.moretickets.com/showapi/page/index?offset=0&length=10&keyword=${this.inputValue}&locationCityOID=${this.$store.state.city.cityOID}&time=1576721151544&src=m_web`).then((response) => {
        // console.log(response.data.result.data)
        this.getContent = response.data.result.data
        // console.log(this.getContent)
      })
    },

    getActorList (value) {
      Axios.get('https://m.moretickets.com/showapi/pub/active_show?offset=0&length=10&key_words=' + encodeURI(value) + '&userOID=000&client=piaodashi_weixin&locationCityOID=' + this.$store.state.city.cityOID + '&siteOID=null&siteCityOID=null&time=1576742496894&src=m_web').then((response) => {
        // console.log(response.data.result.others)
        this.getList = response.data.result.data
        if (response.data.result.others.length > 0) {
          this.getCard = response.data.result.others[0].value
          this.showActor = true
        } else {
          this.showActor = false
        }
        this.showCardList = true
        // console.log(this.getList)
        // console.log(this.getCard)
      })
    },

    onEnter (value) {
      if (this.showContent) {
        // console.log(this.inputValue)
        this.showContent = false
        this.getActorList(value)
      } else {
        this.showHotSearch = false
        this.getActorList(this.$store.state.searchPlace)
      }
    },

    cancelClick () {
      if (this.showHotSearch) {
        this.$router.back()
      } else {
        this.inputValue = ''
      }
    },

    clickHotSearch (event) {
      this.showHotSearch = false
      this.showContent = true
      this.inputValue = event
      this.onEnter(event)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/mixins.scss';
.page-search {
  background-color: #fff;
  font-size: 18px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  &__top {
    @include border-bottom;
    width: 100%;
    height: 64px;
    line-height: 80px;
    padding: 8px 0 8px 8px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 333;
    background-color: #fff;
  }
  &__left {
    height: 44px;
    width: 100%
  }
  &__right {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    width: 76px;
  }
}
</style>
