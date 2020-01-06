<template>
  <div class="page-homeList">
    <div class="page-homeList__header">
      <div class="visible" v-if="moveheight">
        <div to="/city" class="tou">
          <router-link tag="div" to="/city" class="zuo"><img src="https://m.moretickets.com/_nuxt/img/7beda2a.png" /><i>{{this.$store.state.city.cityName}}</i></router-link>
          <router-link to="/search" class="you"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAACoElEQVRYR+2YWWsVQRCFv7ggBBdEDEGREDdQQfPkhqJZQAQ1Twbf9Kf56PJkFERwwQUVERFxCSiCBEXcjZIQcONIDzTjndtdMz2SC9OPd2aqvzn3VFfVdNFhq6vDeGmA6/7HGoU7SeEFQA+wDFjkwGeBr8A74EeKl0lhiT5gM7AamFcA9Qt4DTwFXlUBrwK8EtgF9BoB3gJ3gPfG5/7eXhZYiu5uoehn4CMw7WC6gRXA8hycFL/tFDdxlwHeCWz1dvkJPHGbTxXsvtTZZgsw37vnEXDXQmwFlrJ7vA2UTFeAb5GbLgGGXXJmj9yyKG0BlmdHPRu8BK4BUtiypPAgsNY9JHuci/W0BfiIl2BS9nwJ2OzFBH3YU1qJOB7z1rHAOroOuIBS9IzBBkUcsseY5+lLMUdeLPBBYI3b2ZwobZTzE3gSuBhSOQZYFeyE591TQNFpENovf12nxzHPyydDFTEGeBVwyAXVOXvWShW4/6h3Tl8A3rS7PwZ4E7DXBXkBXE0MPASsdzFvAs+qAg8A22vwb8bl+/ge8HCuA+8AtjlIVT0ldeGaC5ZQEdngCFWInlcFrjvpfGAVDxWRSgovBI7XdKwJTEebcuQLcD+U0DGWUIy6CkeI75/rscD50nwa+G7eLcEDscDaKmXzUxrdApyyvdS00g88Bh5Y6C3Aituqgb9ssMdiYCTXwJuaKSuwoFOOSJm4UlozXnCVAc6UrjqEaliVzbKlTwAal9qussAKWnbM/wBcBz4BanzWeYQTwI2qhSP00jEfUvTVR22jpms16tmSYPu90qzf1Q2qK2y5qiicD5j/VPUbmHGjlGbAomFVDPuAjS7gfwMO/ROh61lPXKiuAqRUOASU5HoDnETGNkEahRuFcwo0lmgskVPgD32+gy2zOUfJAAAAAElFTkSuQmCC" /><i>{{asdsda[0]}}</i></router-link>
        </div>
      </div>
      <div class="nav">
        <div class="tou">
          <router-link tag="div" to="/city" class="zuo"><img src="https://m.moretickets.com/_nuxt/img/7beda2a.png" /><i>{{this.$store.state.city.cityName}}</i></router-link>
          <router-link to="/search" class="you"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAACoElEQVRYR+2YWWsVQRCFv7ggBBdEDEGREDdQQfPkhqJZQAQ1Twbf9Kf56PJkFERwwQUVERFxCSiCBEXcjZIQcONIDzTjndtdMz2SC9OPd2aqvzn3VFfVdNFhq6vDeGmA6/7HGoU7SeEFQA+wDFjkwGeBr8A74EeKl0lhiT5gM7AamFcA9Qt4DTwFXlUBrwK8EtgF9BoB3gJ3gPfG5/7eXhZYiu5uoehn4CMw7WC6gRXA8hycFL/tFDdxlwHeCWz1dvkJPHGbTxXsvtTZZgsw37vnEXDXQmwFlrJ7vA2UTFeAb5GbLgGGXXJmj9yyKG0BlmdHPRu8BK4BUtiypPAgsNY9JHuci/W0BfiIl2BS9nwJ2OzFBH3YU1qJOB7z1rHAOroOuIBS9IzBBkUcsseY5+lLMUdeLPBBYI3b2ZwobZTzE3gSuBhSOQZYFeyE591TQNFpENovf12nxzHPyydDFTEGeBVwyAXVOXvWShW4/6h3Tl8A3rS7PwZ4E7DXBXkBXE0MPASsdzFvAs+qAg8A22vwb8bl+/ge8HCuA+8AtjlIVT0ldeGaC5ZQEdngCFWInlcFrjvpfGAVDxWRSgovBI7XdKwJTEebcuQLcD+U0DGWUIy6CkeI75/rscD50nwa+G7eLcEDscDaKmXzUxrdApyyvdS00g88Bh5Y6C3Aituqgb9ssMdiYCTXwJuaKSuwoFOOSJm4UlozXnCVAc6UrjqEaliVzbKlTwAal9qussAKWnbM/wBcBz4BanzWeYQTwI2qhSP00jEfUvTVR22jpms16tmSYPu90qzf1Q2qK2y5qiicD5j/VPUbmHGjlGbAomFVDPuAjS7gfwMO/ROh61lPXKiuAqRUOASU5HoDnETGNkEahRuFcwo0lmgskVPgD32+gy2zOUfJAAAAAElFTkSuQmCC" v-if="asdsda"/><i>{{asdsda[0]}}</i></router-link>
        </div>
        <div class="hotSearch-people">
          <div class="icon iconfont iconresou1 hotSearch-people__follow"></div>
          <span class="hotSearch-people__follow">热搜:</span>
          <div class="hotSearch-people__show"  v-for="(item, index) in 4" :key="index">{{ asdsda[index+1] }}</div>
        </div>
      </div>
      <div class="nav-swipe">
        <van-swipe class="nav-swipe__kong" :autoplay="3000" indicator-color="blue">
          <van-swipe-item class="nav-swipe__navagnin" v-for="(item, index) in banner" :key="index" >
            <router-link class="nav-swipe__navagnin" tag="div" :to='`/drama/${banner[index].bannerUrl}`'><img class="nav-swipe__pthoy" :src="banner[index].posterUrl" /></router-link>
          </van-swipe-item>
      </van-swipe>
      </div>
      <div class="di">
        <div class="di-si" v-if="navigation[0]">
          <router-link  tag="div" @click.native="SET_TYPE(slideList[index+1])" :to='`/dramas/${city}/${slideList[index+1].alias}`' class="di-si__top" v-for="(item, index) in navigation" :key="index" style="background-image: url(navigation[index].imgUrl);">
            <img class="di-si__fu" :src="navigation[index].imgUrl" >
            <i class="shuoming">{{ navigation[index].title }}</i>
          </router-link>
        </div>
      </div>
    </div>
    <router-link tag="div" :to='`/drama/${moveshowtu.bannerUrl}`' class="move-picture" v-if="moveshowtu">
      <img class="move-picture__dongtai" :src="moveshowtu.posterUrl" />
    </router-link>
    <div class="guarantee-container">
      <div class="service-guarantee">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAC2klEQVRIS62W208TURDGv+0WacuDRBEMmkYurV1oaVNMQQsEAzGAGvUN9UXFP0t88/KmRrwEY2zACrSUdmlrm1aQVCGCaDDhUky3mNmYwtJtd7nM08nZmfmdyzdzlkmn01tQYevrGwhM8kilvoveRuNpNJ+zw2DQq4gGGDWgVGoeoyNjSKc3JUl1ulK0d5yH0XhKEVYUtLGRhs83hS/Jr0UT1Ztq4HI5odfrCvrJgoSMgFgsgVAogs3Nv4qrJYfS0iNwOKzgODNYLZsXIwFlMhkkErOY5qNYW1tXBdjtVFZmQJO9EWZzLbRabe5zDhQOx8DvYQdKq6Ad2h1W2Gyc6JoDPRx8jK0tVQJUYmzvgmFwb+CWFDT44JHqBHtxHLh/+3BADMOA7mV1dU2WfyigkpIS9F3uRmVlBULBMPz+UB7swCCW1aCntwvV1SfF5AsLP/Bq6N3+QK4WJyyWevChKHg+Krnkru4O1NQYxTkqC4IsLS3vD3Tnbj/oeMjGxwMIT38Wx23treA4kzjOZrMYHvbgW2pe3R3JyZuaptPZlEvg8wVh0Otg/V8bVA4ej7dgiyKh5Mn76ZNnst3A3eZCQ8NZ2dWOjU0iEo4VVDupsf/mDam8PR+8mJmZkw3qvOiGyVQr+RYKRuD3B4uWVF3dGVCspDOQat68fi8bSEew8/Lj8SRGR8YV67a3b1uVkqY69HIYi4s/ZRNoNBrYmjgIQhbRSFyxXVVVncCVq5e2lbrz4VtZ+YMXz9+Kcj2IUde+dr0H5eVH5UE0m0jMqDqWYgtp72iF2VwncZF9+CYmpoqqqRiEpN/S4sxzKfiUe70+xGPJPZ2ghTPB7XbJC6rQzwkVYyDAi+1HjdkdjWhutoMUKmeKf0HJ5Cy8H30QBEE2AcuyoKLeXWe7nRVBFEBq9Hg+4dfyb0n88Ypj6Oy8IFFXod2rAlEwNU8q1Eg4Luay2iywWEyg+lJj/wCh1GqgdAlrzQAAAABJRU5ErkJggg==" class="title-icon" />
        <div class="guarantee-title">服务保障</div>
        <div class="guarantee-item">票品保证</div>
        <div class="guarantee-item">假一赔三</div>
        <div class="guarantee-item" style="border-right:none">无票佩服</div>
      </div>
    </div>
    <div class="floors">
      <div class="floor-container">
        <div class="header">
          <div class="title">近期热门</div>
          <router-link tag="div" class="show-more" :to='`/dramas/${city}/${slideList[0].alias}`'>全部 ></router-link>
        </div>
        <div class="content" v-if="yanchenglin[0]">
          <div class="row">
            <div class="column-4">
              <div class="budazhe" v-if="yanchenglin[1].discount >= 1 ? false : yanchenglin[1].discount">
                {{(yanchenglin[0].discount*10).toFixed(1)}}
                <br>
                折起
              </div>
              <router-link tag="div" :to='`/drama/${yanchenglin[0].showOID}`' class="yangchenglin"  :style="`background-image: url(${yanchenglin[0].squarePosterUrl ? yanchenglin[0].squarePosterUrl : yanchenglin[0].posterURL})`">
                <div class="yingyin">
                  <div class="whitecolor">{{yanchenglin[0].shortShowDate}}</div>
                  <div class="yangcolor" >{{yanchenglin[0].showName.slice(5)}}</div>
                </div>
              </router-link>
            </div>
            <div class="column-3" v-if="yanchenglin[1].showOID">
              <div class="budazhe" v-if="yanchenglin[1].discount >= 1 ? false : yanchenglin[1].discount">
                {{(yanchenglin[1].discount*10).toFixed(1)}}
                <br>
                折起
              </div>
              <router-link tag="div" :to='`/drama/${yanchenglin[1].showOID}`' class="xishizhenbao"  :style="`background-image: url(${yanchenglin[1].posterURL})`">
              </router-link>
                <div class="yangcolor">{{yanchenglin[1].showName.slice(5)}}</div>
                <div class="whitecolor">{{yanchenglin[1].shortShowDate}}</div>
            </div>
          </div>
          <div class="row"></div>
        </div>
        <div class="therrfor">
          <Three class="therr" :yanchenglin="yanchenglin" v-for="item in 3" :key="item" :nuber="item+1"></Three>
        </div>
      </div>
      <div class="floor-containen" v-if="shixun.lenght < 1 ? false : true">
        <div class="header">
          <div class="title">新演推荐</div>
          <router-link tag="div" class="show-more" :to='`/dramas/${city}/${slideList[0].alias}`'>全部 ></router-link>
        </div>
        <div class="therrfor">
          <Shixun class="shi" :shixun="shixun" v-for="item in 7" :key="item" :nuber="item"></Shixun>
        </div>
      </div>
      <div class="floor-containeh">
        <div class="header">
          <div class="title">演唱会</div>
          <router-link tag="div" class="show-more" :to='`/dramas/${city}/${slideList[0].alias}`'>全部 ></router-link>
        </div>
        <div class="therrfor">
          <YanChangHui class="shi" :yanchang="yanchang" v-for="item in 14" :key="item" :nuber="item-1"></YanChangHui>
        </div>
      </div>
      <div class="floor-containeg">
        <div class="header">
          <div class="title">话剧歌剧</div>
          <router-link tag="div" class="show-more" :to='`/dramas/${city}/${slideList[0].alias}`'>全部 ></router-link>
        </div>
        <div class="therrfor">
          <GeJu class="shi" :geju="geju" v-for="item in 15" :key="item" :nuber="item"></GeJu>
        </div>
      </div>
      <div class="floor-containey">
        <div class="header">
          <div class="title">音乐会</div>
          <router-link tag="div" class="show-more" :to='`/dramas/${city}/${slideList[0].alias}`'>全部 ></router-link>
        </div>
        <div class="therrfor">
          <YinYue class="shi" :geju="yinyue" v-for="item in 10" :key="item" :nuber="item"></YinYue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Three from '@/components/publicHome/three.vue'
import Shixun from '@/components/publicHome/shixun.vue'
import YanChangHui from '@/components/publicHome/yanchang.vue'
import GeJu from '@/components/publicHome/geju.vue'
import YinYue from '@/components/publicHome/yinyuehui.vue'
import { mapMutations } from 'vuex'
// import { mapState } from 'vuex'

export default {
  name: 'All',
  data () {
    return {
      moveheight: false,
      hotpeople: [],
      asdsda: [],
      banner: [],
      navigation: [],
      yanchenglin: [],
      shixun: [],
      yanchang: [],
      geju: [],
      yinyue: [],
      city: this.$store.state.city.cityOID,
      moveshowtu: '',
      slideList: this.$store.state.slideList
    }
  },
  // computed: {
  //   ...mapState(['city'])
  // },
  methods: {
    ...mapMutations(['SET_TYPE']),
    async getList () {
      let data = await Axios.get('https://m.moretickets.com/showapi/pub/site/' + this.$store.state.city.cityOID + '/recentShows?offset=0&length=10&siteCityOID=' + this.$store.state.city.cityOID + '&time=1576640407177&src=m_web')
      this.yanchenglin = data.data.result.data
      // console.log(this.yanchenglin)
    },
    onScroll (event) {
      // 滚动条滚动事件
      const scrollTop = event.target.scrollTop
      if (scrollTop <= 20) {
        this.moveheight = false
      } else {
        this.moveheight = true
      }
    }
  },
  components: {
    Three,
    Shixun,
    YanChangHui,
    GeJu,
    YinYue
  },
  created () {
    // 请求数据
    Axios.get('https://m.moretickets.com/userdataapi/keywords?cityId=' + this.$store.state.city.cityOID + '&time=1576549642543&src=m_web').then(response => {
      const { data } = response
      this.hotpeople = data.result.data
      this.hotpeople.forEach(element => {
        this.asdsda.push(element.keyword)
      })
    })
    Axios.get('https://m.moretickets.com/showapi/pub/site/1007/banner/app?siteCityOID=' + this.$store.state.city.cityOID + '&time=1576243881919&src=m_web').then(response => {
      this.navigation = response.data.result.categorys.rooms[0].items
      this.banner = response.data.result.data
      this.moveshowtu = response.data.result.spreadAd[0]
    })
    Axios.get('https://m.moretickets.com/showapi/pub/presale_shows?offset=0&length=10&siteOID=1007&siteCityOID=' + this.$store.state.city.cityOID + '&time=1576737416887&src=m_web').then(response => {
      this.shixun = response.data.result.data
    })
    Axios.get('https://m.moretickets.com/showapi/pub/site/' + this.$store.state.city.cityOID + '/active_show?offset=0&length=20&type=1&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=' + this.$store.state.city.cityOID + '&siteCityOID=' + this.$store.state.city.cityOID + '&lat=0&lng=0&time=1576758086699&src=m_web').then(response => {
      this.yanchang = response.data.result.data
    })
    Axios.get('https://m.moretickets.com/showapi/pub/site/' + this.$store.state.city.cityOID + '/active_show?offset=0&length=20&type=3&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=' + this.$store.state.city.cityOID + '&siteCityOID=' + this.$store.state.city.cityOID + '&lat=0&lng=0&time=1576760249027&src=m_web').then(response => {
      this.geju = response.data.result.data
    })
    Axios.get('https://m.moretickets.com/showapi/pub/site/' + this.$store.state.city.cityOID + '/active_show?offset=0&length=20&type=2&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=' + this.$store.state.city.cityOID + '&siteCityOID=' + this.$store.state.city.cityOID + '&lat=0&lng=0&time=1576804600546&src=m_web').then(response => {
      this.yinyue = response.data.result.data
    })
    this.getList()
  },
  mounted () {
    // 监听滚动条事件
    window.addEventListener('scroll', this.onScroll, true)
  }
}
</script>

<style lang="scss">
.page-homeList {
  font-size: 12px;
  height: 100%;
  .move-picture{
    padding-top: 15px;
    height: 119px;
    &__dongtai{
      height: 100%
    }
  }
  &__header {
    height: 380px;
    position: relative;
    .visible {
        z-index: 99;
        position: fixed;
        top: 0;
        height: 38px;
        background: pink;
        padding-top: 6px;
        .tou {
          border-radius: 15px;
          background: white;
          height: 32px;
          width: 331px;
          margin: 0 22px;
          display: flex;
          flex-direction: row;
          align-items: center;
          .zuo {
            width: 100px;
            height: 25px;
            padding-left: 10px;
            line-height: 25px;
            display: flex;
            border-right: 1px solid black;
            font-weight: 700;
            img {
              height: 25px;
            }
          }
          .you {
            display: flex;
            padding-left: 12px;
            line-height: 25px;
            width: 200px;
            color: #a1a0a0;
            img {
              height: 25px;
              padding-right: 10px;
            }
          }
        }
      }
    .nav {
        height: 203px;
        padding-top: 12px;
        background: pink;
        display: flex;
        flex-direction: column;
        .tou {
          align-self: center;
          border-radius: 5px;
          background: white;
          margin-bottom: 10px;
          height: 44px;
          width: 331px;
          display: flex;
          flex-direction: row;
          align-items: center;
          .zuo {
            width: 100px;
            height: 25px;
            padding-left: 10px;
            line-height: 25px;
            display: flex;
            border-right: 1px solid black;
            font-weight: 700;
            img {
              height: 25px;
            }
          }
          .you {
            display: flex;
            padding-left: 12px;
            line-height: 25px;
            width: 200px;
            color: #a1a0a0;
            img {
              height: 25px;
              padding-right: 10px;
            }
          }
        }
        .hotSearch-people {
          overflow: hidden;
          font-size: 12px;
          align-self: center;
          display: flex;
          flex-direction: row;
          height: 16px;
          width: 331px;
          line-height: 16px;
          &__follow {
            opacity: 0.6;
            color: white;
          }
          &__show {
            color: white;
            padding: 0 5px;
          }
        }
      }
      .nav-swipe {
        margin-left: 5.9%;
        width: 331px;
        height: 133px;
        position: absolute;
        top: 95px;
        &__kong{
          height: 100%;
          .nav-swipe__navagnin{
          height: 100%;
              border-radius: 10px;
            .nav-swipe__pthoy {
              height: 100%;
              border-radius: 10px;
            }
        }
        }
      }
      .di {
        height: 150px;
        padding-top: 15px;
        background: white;
        &-si{
          width: 331px;
          height: 150px;
          margin:0 auto;
          display: flex;
          flex-wrap: wrap;
          &__top {
            font-size: 12px;
            font-weight: 600;
            width: 82.75px;
            height: 60px;
            justify-content: center;
            display: flex;
            .di-si__fu {
              width: 40px;
              position: absolute;
            }
            .shuoming {
              padding-top: 48px;
            }
          }
        }
      }
  }
  .guarantee-container {
    padding-top: 16px;
    height: 34px;
    .service-guarantee {
      font-size: 12px;
      display: flex;
      margin-left: 6%;
      margin-right: 6%;
      padding: 0 3%;
      width: 82%;
      height: 100%;
      background: #f8f8f8;
      .title-icon {
        align-self: center;
        height: 55%;
      }
      .guarantee-title {
        align-self: center;
        padding: 0 3%;
        font-weight: 700;
      }
      .guarantee-item {
        text-align: center;
        width: 23%;
        align-self: center;
        border-right: 1px solid black;
      }
    }
  }
  .floors {
    .floor-container {
      width: 331px;
      height: 491.4px;
      margin: 0 20.625px;
      .header {
        padding-top: 12%;
        height: 5.7%;
        display: flex;
        .title {
          align-self: center;
          font-size: 20px;
          font-weight: 700;
        }
        .show-more {
          align-self: center;
          margin-left: 60%;
          font-size: 14px;
        }
      }
      .content {
        padding-bottom: 3%;
        padding-top: 4.5%;
        .row {
          display: flex;
          .column-4 {
            margin-right: 3%;
            height: 202px;
            width: 218px;
            position: relative;
            .budazhe {
              color: white;
              font-size: 14px;
              font-weight: 700;
              text-align: center;
              line-height: 150%;
              border-radius: 5px;
              width: 16%;
              height: 22%;
              background: linear-gradient(180deg,#ee0e87,#ff1d41);
              top: -2%;
              margin-left: 6%;
              position: absolute;
              z-index: 10;
            }
            .yangchenglin {
              height: 100%;
              background-size: cover;
              position: absolute;
              width: 218px;
              display: flex;
              flex-direction: column-reverse;
              .yingyin {
                width: 94%;
                height: 60%;
                padding-left: 6%;
                padding-bottom: 8%;
                background: linear-gradient(180deg,transparent,rgba(0,0,0,.8));
                display: flex;
                flex-direction: column-reverse;
                .yangcolor {
                  padding-bottom: 4%;
                  font-size: 13px;
                  font-weight: 700;
                  color: white;
                }
                .whitecolor {
                  color: #95949d;
                  z-index: 88;
              }
              }
            }
         }
          .column-3 {
            width: 105px;
            position: relative;
            .budazhe {
              color: white;
              font-size: 14px;
              font-weight: 700;
              text-align: center;
              line-height: 150%;
              width: 33%;
              border-radius: 5px;
              height: 22%;
              background: linear-gradient(180deg,#ee0e87,#ff1d41);
              top: -2%;
              margin-left: 6%;
              position: absolute;
              z-index: 10;
            }
            .xishizhenbao {
              background-size: cover;
              width: 100%;
              height: 147px;
            }
            .yangcolor {
              font-size: 13px;
              padding-top: 4%;
              font-weight: 700;
              color: black;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .whitecolor {
              padding-top: 4%;
              color: #95949d;
              z-index: 88;
            }
         }
        }
      }
      .therrfor {
        display: flex;
        width: 100%;
        height: 197px;
        .therr {
          margin-right: 3%;
        }
      }
    }
    .floor-containen {
      height: 306px;
      padding-left: 22.1px;
      .header {
        padding-top: 12%;
        height: 5.7%;
        display: flex;
        .title {
          align-self: center;
          font-size: 20px;
          font-weight: 700;
        }
        .show-more {
          font-size: 14px;
          align-self: center;
          margin-left: 60%;
        }
      }
      .therrfor {
        overflow-x: auto;
        padding-top: 4.7%;
        display: flex;
        width: 100%;
        height: 197px;
        .xishizhenbao {
          height: 147px;
        }
        .shi {
          margin-right: 2%;
        }
      }
    }
    .floor-containeh {
      height: 342.4px;
      padding-left: 22.1px;
      .header {
        padding-top: 12%;
        height: 5.7%;
        display: flex;
        .title {
          align-self: center;
          font-size: 20px;
          font-weight: 700;
        }
        .show-more {
          font-size: 14px;
          align-self: center;
          margin-left: 60%;
        }
      }
      .therrfor {
        overflow-x: auto;
        padding-top: 4.7%;
        display: flex;
        width: 100%;
        height: 232.6px;
        .shi {
          margin-right: 2%;
        }
      }
    }
    .floor-containeg {
      height: 342.4px;
      padding-left: 22.1px;
      .header {
        padding-top: 12%;
        height: 5.7%;
        display: flex;
        .title {
          align-self: center;
          font-size: 20px;
          font-weight: 700;
        }
        .show-more {
          font-size: 14px;
          align-self: center;
          margin-left: 60%;
        }
      }
      .therrfor {
        overflow-x: auto;
        padding-top: 4.7%;
        display: flex;
        width: 100%;
        height: 232.6px;
        .shi {
          margin-right: 2%;
        }
      }
    }
    .floor-containey {
      height: 342.4px;
      padding-left: 22.1px;
      .header {
        padding-top: 12%;
        height: 5.7%;
        display: flex;
        .title {
          align-self: center;
          font-size: 20px;
          font-weight: 700;
        }
        .show-more {
          font-size: 14px;
          align-self: center;
          margin-left: 60%;
        }
      }
      .therrfor {
        overflow-x: auto;
        padding-top: 4.7%;
        display: flex;
        width: 100%;
        height: 232.6px;
        .shi {
          margin-right: 2%;
        }
      }
    }
  }
}
</style>
