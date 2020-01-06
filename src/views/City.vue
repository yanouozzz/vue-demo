<template>
  <div class="page-city">
    <van-nav-bar
      title="选择城市"
      left-arrow
      @click-left="$router.back()"
    />

    <div class="page-city__body"  ref="cityView">
      <div class="page-city__view" >

        <div class="page-city__box">
          <h2 class="head">定位城市</h2>
          <ul class="list">
            <li class="list-item" @click="onLocationCity(location)">
              {{this.city === null ? '深圳' : this.city.cityName}}
            </li>
          </ul>
        </div>
        <!-- 修复了假如浏览器本地没有localstorage数据 -->
        <div class="page-city__box" v-show="nearCity.length > 0">
          <h2 class="head">最近访问的城市</h2>
          <ul class="list">
            <!-- 修复了点击会出现null情况发生 -->
            <li class="list-item" v-for=" (item,index) in nearCity" :key="index" @click="onCityClick(item)">
              {{  nearCity.length === 0 ? '' :  item.cityName }}
            </li>
          </ul>
        </div>

        <div class="page-city__box" >
          <h2 class="head">热门城市</h2>
          <ul class="list">
            <li class="list-item" v-for="item in hotCities" :key="item.cityOID" @click="onCityClick(item)">
              {{ item.cityName }}
            </li>
          </ul>
        </div>

        <div class="page-city__box" v-for="item in allCities" :key="item.cities.cityOID" :ref="`box-${item.title}`">
          <h2 class="head">{{ item.title }}</h2>
          <ul class="list__body" v-for="item in item.cities" :key="item.cityOID">
            <li class="list-item__body" @click="onCityClick(item)">
              {{ item.cityName }}
            </li>
          </ul>
        </div>

        <div class="page-city__py">
          <ul>
            <li  v-for="item in allCities" :key="item.cities.cityOID" @click="goTop(item.title)">
             {{ item.title }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'City',

  computed: {
    ...mapState(['city']),
    ...mapState(['nearCity'])
  },

  data () {
    return {
      hotCities: [],
      allCities: [],
      location: { cityOID: 4403, province: '广东省', cityName: '深圳', spelling: 'shenzhen' }
    }
  },

  methods: {
    getCity () {
      Axios.get('https://m.moretickets.com/showapi/cities?time=1576498687481&src=m_web').then((response) => {
        this.hotCities = response.data.result.hotCities
        this.allCities = response.data.result.allCities
      })
    },

    goTop (title) {
      // 获取对应的元素
      const box = this.$refs[`box-${title}`][0]
      const top = box.offsetTop
      this.$refs['cityView'].scrollTop = top
    },

    onCityClick (city) {
      this.$store.commit('SET_CITY', city)
      this.$router.back()
    },
    onLocationCity (city) {
      this.$store.commit('SET_CITY_LOCATION', city)
      this.$router.back()
    }
  },

  created () {
    this.getCity()
  },
  // 判断返回的路由 修改路由路径
  beforeRouteLeave (to, from, next) {
    if (to.meta.tabIndex === 1) {
      next()
      this.$router.push(`/dramas/${this.city.cityOID}/all`).catch(err => err)
    } else if (to.meta.tabIndex === 0) {
      next()
      this.$router.push(`/home`).catch(err => err)
    }
  }
}
</script>

<style lang="scss">
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;

  &__body {
    font-size: 16px;
    padding: 0 15px;
    overflow-y: auto;
    position: relative;
    .head {
      font-size: 12px;
      margin-bottom: 12px;
      margin-top: 15px;
      color: #aaa;
    }
    .list-item {
      width: 28%;
      max-height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
      background-color: #fff;
      font-size: 16px;
      margin-bottom: 15px;
      margin-right: 4%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block
    }
    .list__body {
      background-color: #fff;
      margin: 0 -15px;
      max-height: 45px;
      line-height: 45px;
      font-size: 16px;
      padding: 0 35px 0 15px;
      .list-item__body {
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
      }
    }
  }
  &__view {
    position: relative;
  }
  &__py {
    align-items: center;
    display: flex;
    width: 20px;
    height: 100%;
    position: fixed;
    right: 5px;
    top: 0;
    color: #108ee9;
    font-size: 16px;
    li {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
  }
}
</style>
