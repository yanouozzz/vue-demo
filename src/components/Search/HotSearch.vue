<template>
  <div class="HotSearch">
    <div class="section-name">热门搜索</div>
    <div class="section-content">
      <div class="section-content__hot"
        v-for="(item,index) in HotName"
        :key="index"
        @click="goSearch(item.keyword)"
      >
      {{ item.keyword }}
      </div>
    </div>
  </div>

</template>

<script>
import Axios from 'axios'
export default {
  name: 'HotSearch',

  data () {
    return {
      HotName: []
    }
  },

  methods: {
    /**
     * 获取热门搜索名字
     */
    getHotName () {
      Axios.get(`https://m.moretickets.com/userdataapi/keywords?cityId=null&time=1576483435145&src=m_web`).then(response => {
        // console.log(response.data.result.data)
        this.HotName = response.data.result.data
        this.$store.state.searchPlace = this.HotName[0].keyword
      })
    },

    placehoder (data) {
      console.log(this.HotName)
    },

    goSearch (event) {
      console.log(event)
      this.$emit('abc', event)
    }
  },

  created () {
    this.getHotName()
  }
}
</script>

<style lang="scss">
.HotSearch {
  background-color: #fff;
  box-sizing: border-box;
  .section-name {
    height: 64px;
    color: #000;
    line-height: 64px;
    padding-left: 24px;
    background-color: #fff;
    font-weight: 700;
  }
  .section-content {
    background-color: #fff;
    overflow: hidden;
    padding-bottom: 16px;
    padding-left: 24px;
    &__hot {
      padding: 12px 16px;
      border-radius: 4px;
      border: 1px solid #eaeaeb;
      display: inline-block;
      margin-top: 16px;
      margin-right: 16px;
      margin-bottom: 0;
      color: #323038;
      font-size: 12px;
    }
  }

}
</style>
