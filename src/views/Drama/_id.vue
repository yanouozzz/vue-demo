<template>
  <div class="page-drama-1">
    <van-nav-bar title="演出详情"  @click-right="$router.push('/')" class="detail-nav-bar">
      <template slot="left">
        <div class="van-nav-bar__text"  @click="$router.go(-1)">
          <i class="iconfont iconzuobianjiantou1"></i>
        </div>
      </template>
      <template slot="right">
        <div class="van-nav-bar__text">
          <i class="iconfont iconzhuye1"></i>
        </div>
      </template>
    </van-nav-bar>
    <div class="content-detail">
      <div class="content-body">
        <div class="content-body-header">
          <div class="content-body-header-x">
            <div class="backgroud-img" :style="`background-image: url(${darmadata.posterURL})`"></div>
            <div class="content-header_show">
              <div class="content-header_img"  :style="`background-image: url(${darmadata.posterURL})`"></div>
              <div class="content-header_title">{{darmadata.showName}}</div>
            </div>
            <div class="body-radius"></div>
          </div>
        </div>
        <div class="content-body-container">
          <div class="content-container-info">
            <h3 class="iconfont iconshizhong1">{{darmadata.showDate}}</h3>
            <div class="iconfont icondizhi2 address-detail">
              <div class="address">{{darmadata.venueName}}</div>
              <div class="detail">{{darmadata.venueAddress}}</div>
            </div>
            <div class="notice iconfont iconxuzhi">观影须知<i class="iconfont iconicon-copy"></i></div>
          </div>
          <div class="content-service">
            <div class="content-service-left">
              <div class="service-title">摩天轮服务保障</div>
              <div class="desc">
                <span class="iconfont iconduigou-kongxinquan">票品保真</span>
                <span class="iconfont iconduigou-kongxinquan">假一赔三</span>
                <span class="iconfont iconduigou-kongxinquan">无票赔付</span>
              </div>
            </div>
            <div class="content-service-right"><img src="../../assets/imgs/icon_bao-f2d94f8ee0.png" alt=""></div>
          </div>
          <div class="content-discount">
            <img class="content-discount-img" src="../../assets/imgs/Discount.png" alt="">新用户注册即送166红包<span class="receive">立即领取</span>
          </div>
          <div class="content-guess"  v-if="guessData.length">
            <div class="guess-you">猜你喜欢</div>
            <dl class="guess-list" v-for="(item, index) in guessData" :key='index' @click="$router.push(`/drama/${item.showId}`)" >
              <dt>{{guessData[index].showDesc}}</dt>
              <dd>{{guessData[index].latestShowTimeDesc}}</dd>
            </dl>
          </div>
          <div class="content-artist">
            <div class="artist-box" v-if="darmadata.artists">
              <a href="#">
                <img :src="darmadata.artists[0].artistIcon" alt="" class="head-portrait">
              </a>
              <a href="#" class="artist-name">
                <div class="artist-title">{{darmadata.artists[0].artistName}}</div>
                <div class="artist-desc">{{darmadata.artists[0].artistSummarize}}</div>
              </a>
              <div :class=nthClass @click="setFollow">
                {{btnFollow}}
              </div>
            </div>
          </div>
          <div class="show-details">
            <div class="section-title">
              节目详情
            </div>
            <div class="details-text" :style=textHeight v-html="darmadata.content">{{darmadata.content}}</div>
            <p>
              <br>
            </p>
            <div class="details-hidden" @click="opens">{{textContent}}</div>
          </div>
        </div>
        <div class="content-body-others">
          <div class="other-title">为你推荐</div>
          <content-list v-for="(item,index) in otherData" :key="index" :showInfo='item' @click="$router.push(`/drama/${item.showId}`)"></content-list>
        </div>
      </div>
    </div>
    <div class="content-footer">
      <div class="customer-service">
        <span class="iconfont iconkefu"></span>
        <span class="iconfont iconguanzhu1"></span>
      </div>
      <div class="footer-btn-wrapper"><span>立即预定</span></div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import contentList from '../../components/Drama/contentList'
export default {
  name: 'Drama',
  components: {
    contentList
  },
  data () {
    return {
      detailsHidden: true,
      textHeight: {
        'height': 600 + 'px'
      },
      textContent: '展开更多',
      btnFollow: '+关注',
      darmadata: {},
      guessData: [],
      otherData: [],
      showId: '',
      nthClass: '.nth-like'
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['CANCEL_USER_FOLLOW']),
    ...mapMutations(['SET_USER_FOLLOW']),

    getShowId () {
      this.showId = this.$route.params.dramaId
    },
    setFollow () {
      if (this.userInfo) {
        if (this.userInfo.artistOID.indexOf(this.darmadata.artists[0].artistOID) === -1) {
          this.SET_USER_FOLLOW(this.darmadata.artists[0].artistOID)
          this.btnFollow = '已关注'
          this.nthClass = 'nth-like2'
        } else {
          this.CANCEL_USER_FOLLOW(this.darmadata.artists[0].artistOID)
          this.btnFollow = '+ 关注'
          this.nthClass = 'nth-like'
        }
      } else {
        this.$router.push('/login')
      }
    },
    getFollow () {
      if (this.userInfo) {
        if (this.darmadata.artists && this.userInfo.artistOID.indexOf(this.darmadata.artists[0].artistOID) === -1) {
          this.btnFollow = '+ 关注'
          this.nthClass = 'nth-like'
        } else {
          this.btnFollow = '已关注'
          this.nthClass = 'nth-like2'
        }
      } else {
        this.btnFollow = '+ 关注'
        this.nthClass = 'nth-like'
      }
    },
    getDarma () {
      Axios.get('https://m.moretickets.com/showapi/pub/show/' + this.showId, {
        lat: 22.69274,
        lng: 113.783,
        time: 1576754292697,
        src: 'm_web'
      }).then(response => {
        const { data } = response
        this.darmadata = data.result.data
        this.getFollow()
      })
    },
    getGuess () {
      Axios.get('https://m.moretickets.com/buyerapi/buyer/v1/shows/' + this.showId + '/group_shows', {
        time: 1576754282093,
        src: 'm_web'
      }).then(response => {
        const { data } = response
        this.guessData = data.data
      })
    },
    getOther () {
      Axios.get('https://m.moretickets.com/showapi/pub/shows/' + this.showId + '/recommendShows', {
        offset: 0,
        length: 5,
        time: 1576754282426,
        src: 'm_web'
      }).then(response => {
        const { data } = response
        this.otherData = data.result.data
      })
    },
    opens () {
      if (this.detailsHidden) {
        this.textHeight['height'] = 'auto'
        this.textContent = '收起'
        this.detailsHidden = false
      } else {
        this.textHeight['height'] = 600 + 'px'
        this.textContent = '展开更多'
        this.detailsHidden = true
      }
    }
  },

  created () {
    this.getShowId()
    this.getDarma()
    this.getGuess()
    this.getOther()
  }
}
</script>

<style lang="scss">
  .page-drama-1{
    display: flex;
    flex-direction: column;
    height: 100%;
    .detail-nav-bar {
      position: relative;
      height: 8.7vh;
      line-height: 8.7vh;
      .van-nav-bar__title {
        height: 100%;
        font-size: 5vw;
        line-height: 8.7vh;
      }
      .iconzhuye1 {
        font-size: 7.5vw;
        font-weight: 700;
        color: #ccc;
      }
      .iconzuobianjiantou1 {
        font-size: 6.25vw;
        color: #ccc;
      }
    }
    .content-detail {
      flex: 1;
      overflow-y: auto;
      .content-body {
        background: #fff;
        &-header {
          .content-body-header-x {
            background-color: rgba(0,0,0,.3);
            width:100%;
            .backgroud-img {
              width: 100%;
              height: 100%;
              background-repeat: no-repeat;
              background-position: center;
              filter: blur(6.5vw);
            }
            position: relative;
            height: 26.05vh;
            .content-header_show {
              height: 22vh;
              position: absolute;
              bottom: 0;
              left: 5.625vw;
              right: 5.625vw;
              display: flex;
              padding-left: 32.81vw;
              .content-header_img {
                position: absolute;
                left:0;
                width: 27.87vw;
                height: 22vh;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                z-index: 1000;
              }
              .content-header_title {
                width: 55.93vw;
                font-size: 4.375vw;
                font-weight: 600;
                line-height: 5.625vw;
                color: #fff;
              }
            }
            .body-radius {
              height: 5.281vh;
              width: 100%;
              position: absolute;
              bottom: 0;
              background: #fff;
              border-radius: 3.125vw 3.125vw 0 0;
            }
          }
        }
        &-container {
          padding: 0 5.625vw 0 5.625vw;
          background: #fff;
          position: relative;
          z-index: 1111;
          .content-container-info {
            position: relative;
            height: 22.728vh;
            box-sizing: border-box;
            padding-top: 5.281vh;
            h3 {
              padding-left: 6.875vw;
              padding-bottom: 2.64vh;
              font-weight: 600;
            }
            .iconshizhong1:before,.icondizhi2:before,.iconxuzhi:before {
              position:absolute;
              left: 0;
            }
            .notice {
              padding-left: 6.875vw;
              display: flex;
              justify-content: space-between
            }
            .address-detail {
              padding-left: 6.875vw;
              padding-bottom: 2.64vh;
              .address {
                font-weight: 600;
              }
              .detail {
                padding-top: 4px;
                font-size: 4.375vw;
              }
            }
          }
          .content-service {
            height: 9.7vh;
            box-sizing: border-box;
            padding-top: 3.521vh;
            display: flex;
            justify-content: space-between;
            .content-service-left {
              .desc {
                .iconduigou-kongxinquan {
                  font-size: 4.062vw;
                }
                .iconduigou-kongxinquan:before {
                  color: #ff1d41;
                }
              }
            }
            .content-service-right {
              width: 8.34vw;
              height: 5.72vh;
              img {
                width: 100%;
              }
            }
          }
          .content-discount {
            height:7.62vh;
            margin-top: 3.22vh;
            padding-left: 8vw;
            box-sizing: border-box;
            line-height: 7.62vh;
            position: relative;
            box-shadow: 0px 0px 4px #666;
            &-img {
              width:8vw;
              position:absolute;
              left: 0;
              top: 8px;
            }
            .receive {
              font-size: 3.75vw;
              display: inline-block;
              width: 18.75vw;
              height:3.521vh;
              border-radius: 3.125vw;
              line-height: 3.521vh;
              text-align: center;
              border: 1px solid rgba(255,29,65,.3);
              background-color: rgba(255,70,85,.07);
              color: #ff1d41;
            }
          }
          .content-guess {
            display: flex;
            width: 94.37vw;
            overflow-x:auto;
            height: 9.6vh;
            padding-top: 4vh;
            .guess-you {
              display: block;
              text-align: center;
              width: 4.375vw;
              writing-mode: vertical-lr;
              font-size: 3.125vw;
              margin-right: 3vw;
              flex-shrink: 0;
              padding-left: 4px;
              border-radius: 4px;
            }
            .guess-list {
              box-sizing: border-box;
              height: 7.8vh;
              padding: 1vh 2vw;
              border:1px solid #666;
              flex-shrink: 0;
              width: 27.18vw;
              margin-right:2vw;
              border-radius: 4px;
              dt {
                font-size: 4.375vw;
              }
              dd {
                font-size:3.125vw;
              }
            }
          }
          .content-artist {
            padding-top: 3.22vh;
            .artist-box {
              height: 9.5vh;
              display: flex;
              justify-content: space-between;
              .head-portrait {
                width:16.875vw;
                border-radius: 50%;
              }
              .artist-name{
                color: #494949;
                padding-left: 3.125vw;
                .artist-title {
                  font-weight: 600;
                  width: 40.625vw;
                  height:4.788vh;
                  line-height: 4.788vh;
                }
                .artist-desc {
                  font-size: 3.75vw;
                  width: 40.625vw;
                  height: 3.8vh;
                  line-height: 3.8vh;
                }
              }
              .nth-like {
                width: 21.875vw;
                height: 5.105vh;
                line-height: 5.105vh;
                text-align: center;
                border-radius: 2.5vh;
                margin-top: 2.112vh;
                font-size: 4.062vw;
                border:1px solid #ff1d41;
                color: #ff1d41;
              }
              .nth-like2 {
                width: 21.875vw;
                height: 5.105vh;
                line-height: 5.105vh;
                text-align: center;
                border-radius: 2.5vh;
                margin-top: 2.112vh;
                font-size: 4.062vw;
                border:1px solid #4e4849;
                color: #4e4849;
              }
            }
          }
          .show-details {
            padding-bottom: 3.169vh;
            .section-title {
              font-size: 6.25vw;
              font-weight: 600;
              padding: 3.22vh 0;
              margin-top: 3.22vh;
              border-top: 1px solid #ccc;
            }
            .details-text {
              overflow: hidden;
              strong {
                font-weight: 600;
              }
              img {
                width: 100%;
                border-radius: 4px;
              }
              p {
                line-height: 1.5;
              }
            }
            .details-hidden {
              text-align: center;
              color: #ff1d41;
              height: 3.521vh;
              line-height: 3.521vh;
              margin-top: 3.169vh;
            }
          }
        }
        &-others {
          padding: 3.169vh 3.169vh 5.281vh 3.169vh;
          .other-title {
            font-size: 6.25vw;
            font-weight: 700;
          }
          .other-component {
            width: 100%;
            padding: 6.875vw 0;
            display: flex;
            &-left {
              height: 21.126vh;
              width: 28.125vw;
              img {
                width: 100%;
                display: block;
              }
            }
            &-right {
              box-sizing: border-box;
              width: 55vw;
              padding-left: 5.625vw;
              .show-name {
                font-size: 5.312vw;
                font-weight: 700;
                max-height: 7.746vh;
                line-height: 3.873vh;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .show-address {
                font-size: 4.062vw;
                line-height: 3.169vh;
                color: #323038;
                .show-time {
                  margin-top: 1.936vh;
                }
                .show-detail {
                  margin-bottom: 1.936vh;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              .show-content {
                .advance-box {
                  height: 4.577vh;
                  .advance {
                    font-size: 3.75vw;
                    line-height: 2.992vh;
                    box-sizing: border-box;
                    padding: 0 3px;
                    border: 1px solid rgba(251,82,0,.3);
                    display: inline-block;
                    color: #fb5200;
                    border-radius: 2px;
                    margin: 0 5px 10px 0;
                  }
                }
              }
              .price {
                font-size: 3.125vw;
                .number {
                  font-size: 5.625vw;
                }
              }
              .advertise {
                color: #95949d;
                font-size: 4.062vw;
                padding-top: 2.5vw;
                &-ico {
                  background: url("../../assets/imgs/dot.png") no-repeat center center;
                  width: 5.312vw;
                  height: 2.992vh;
                  background-size: 7px 5px;
                  display: inline-block;
                  vertical-align: top;
                }
              }
            }
          }
        }
      }
    }
    .content-footer {
      box-sizing: border-box;
      align-items: center;
      min-height: 10.915vh;
      line-height: 10.915vh;
      display: flex;
      padding-right: 2.812vw;
      background: #fff;
      .customer-service {
        display:inline-block;
        line-height: 10.915vh;
        span {
          width: 17.18vw;
          display:inline-block;
          text-align: center;
          font-size: 7.5vw;
          font-weight: 700;
        }
      }
      .footer-btn-wrapper {
        flex: 1;
        height: 7.746vh;
        display:inline-block;
        text-align: center;
        line-height: 7.746vh;
        background-image: linear-gradient(270deg,#ff4a00 0,#ff7600 100%);
        border-radius: 2.2rem;
        margin-right: 2.812vw;
        color:#fff;
      }
    }
  }
</style>
