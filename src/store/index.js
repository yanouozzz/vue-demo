import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const city = window.localStorage.getItem('city')
const nearCity = window.localStorage.getItem('nearCity')

const userInfo = window.localStorage.getItem('userInfo')
const token = window.localStorage.getItem('token')

const store = new Vuex.Store({
  state: {
    title: '影片列表',
    city: city ? JSON.parse(city) : { cityOID: 4403, cityName: '深圳' },
    nearCity: nearCity ? JSON.parse(nearCity) : [],
    searchPlace: '默认值',

    userInfo: userInfo ? JSON.parse(userInfo) : null,
    token: token || null,
    // 主页传递跳转参数
    slid: null,
    // 分类演出数据
    slideList: [{
      name: '全部',
      alias: 'all',
      type: 0
    },
    {
      name: '演唱会',
      alias: 'concert',
      type: 1
    },
    {
      name: '话剧歌剧',
      alias: 'opera',
      type: 3
    },
    {
      name: '体育赛事',
      alias: 'sport',
      type: 6
    },
    {
      name: '音乐会',
      alias: 'music',
      type: 2
    },
    {
      name: '展览休闲',
      alias: 'exhibition',
      type: 7
    },
    {
      name: '舞蹈芭蕾',
      alias: 'dance',
      type: 5
    },
    {
      name: '儿童亲子',
      alias: 'children',
      type: 9
    },
    {
      name: '曲艺杂谈',
      alias: 'art',
      type: 4
    }
    ]
  },

  mutations: {
    SET_TYPE (state, type) {
      state.slid = type
    },

    SET_TITLE (state, title) {
      state.title = title
    },

    // 修复
    SET_CITY (state, city) {
      state.city = city
      //  过滤不能重复同一个
      let res = state.nearCity.filter(item => {
        return item.cityOID === city.cityOID
      })
      if (res.length < 1) {
        state.nearCity.unshift(city)
      }
      if (this.state.nearCity.length > 5) {
        state.nearCity.pop()
      }
      window.localStorage.setItem('city', JSON.stringify(city))
      window.localStorage.setItem('nearCity', JSON.stringify(state.nearCity))
    },
    SET_CITY_LOCATION (state, city) {
      state.city = city
      // console.log(city)
      window.localStorage.setItem('city', JSON.stringify(city))
    },

    SET_USER_INFO_AND_TOKEN (state, payload) {
      state.userInfo = payload.userInfo
      state.token = payload.token
      state.token = payload.stoken
      window.localStorage.setItem('userInfo', JSON.stringify(payload.userInfo))
      window.localStorage.getItem('token', payload.token)
    },

    CLEAR_USER_INFO_AND_TOKEN (state, payload) {
      state.userInfo = null
      window.localStorage.setItem('userInfo', '')
      window.localStorage.getItem('token', '')
    },

    CANCEL_USER_FOLLOW (state, artistOID) {
      let artists = state.userInfo.artistOID
      artists.splice(artists.indexOf(artistOID), 1)
      state.userInfo.artistOID = artists
      window.localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },

    SET_USER_FOLLOW (state, artistOID) {
      state.userInfo.artistOID.push(artistOID)
      window.localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    }
  }
})

export default store
