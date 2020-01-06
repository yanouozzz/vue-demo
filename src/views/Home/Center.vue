<template>
  <div class="page-center">
    <userNav title="个人中心"></userNav>
    <div class="page-center_top">
      <div class="profile">
        <div class="avatar" >
        </div>
        <div class="info">
          <router-link class="user" to="/user/profile">
            <span class="label">{{ userInfo.phone | formatPhone }}</span>
          </router-link>
          <div class="editor">
            查看并编辑个人资料
          </div>
          <router-link class="creadit" to="/">
            <span class="label">0</span>
          </router-link>
        </div>

      </div>
      <div class="page-center_middle">
        <span class="label"><img src="../../assets/imgs/vip.png"/>会员中心</span>
        <div class="right">八项权益<i class="iconfont iconarrow-right"></i></div>
      </div>
    </div>
    <div class="orderBox">
      <van-button class="left" type="default" to="/user/order">
        <div>我的订单</div>
      </van-button>
      <van-button class="right" type="default">
        <div>我的抢票单</div>
      </van-button>
    </div>
    <div class="section">
      <van-cell title="关注的艺人" is-link to="/user/like" :value="userInfo.artistOID.length" />
      <van-cell title="地址管理" is-link to="/user/address" value="" />
      <van-coupon-cell title="我的优惠券"
        :coupons="coupons"
        :chosen-coupon="chosenCoupon" show-count
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom" get-container="body">
        <van-coupon-list enabled-title="未使用" disabled-title="不可用"
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
    <div class="section">
      <van-cell title="在线客服" is-link to="/chat" />
      <van-cell class="tel" title="客服电话" is-link value="10102266"/>
    </div>
    <div class="loginOut">
      <van-button type="default" size="large" round color="linear-gradient(278deg,#ff1d41,#ee0e87)" @click="loginOut" >退出登录</van-button>
    </div>
  </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
import userNav from '@/components/User/UserNav'
const coupon = {
  available: 1,
  condition: '满1000元可使用',
  reason: '',
  value: 1000,
  name: '新用户专享-演唱会',
  startAt: 1549104000,
  endAt: 1580592000,
  valueDesc: '10',
  unitDesc: '元'
}

export default {
  name: 'Center',

  components: {
    userNav
  },

  data () {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: []
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },

  filters: {
    formatPhone (value, payload) {
      return value.substring(0, 3) + '****' + value.substring(7, 11)
    }
  },

  methods: {
    ...mapMutations(['SET_TITLE']),
    ...mapMutations(['CLEAR_USER_INFO_AND_TOKEN']),

    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {
      this.coupons.push(coupon)
    },

    loginOut () {
      this.CLEAR_USER_INFO_AND_TOKEN()
      this.$toast('退出登录')
      this.$router.replace('/login')
    }

  },

  created () {
    this.SET_TITLE('个人中心')
  }
}
</script>

<style lang="scss">
.page-center {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  &_top {
    width: 100%;
    margin-bottom: 30px;
    box-sizing: border-box;
    background: #f6f6f6;
    .profile {
      padding-top: 22px;
      display: flex;
      padding-left: 22px;
      padding-right: 22px;
      padding-bottom: 16px;
      .avatar {
        min-width: 100px;
        max-width: 150px;
        height: 100px;
        margin-right: 20px;
        border-radius: 50%;
        background-image: url(../../assets/imgs/avatar.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
      }
      .info {
        display: flex;
        flex-direction: column;
        line-height: 32px;
        font-size: 10px;
        padding: 3px 0;
        .user {
          color: #323038;
          font-size: 24px;
          font-weight: 700;
        }
        .editor {
          font-size: 14px;
          color: #95949d;
        }
        .creadit {
          width: 100%;
          font-size: 14px;
          padding-left: 85px;
          background-image: url(../../assets/imgs/creadit.png);
          background-size: contain;
          background-repeat: no-repeat;
          .label {
            padding-left: 16px;
            color: #be39b0;
            font-size: 14px;
            font-weight: bolder;
          }
        }
      }
    }
    .page-center_middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 48px;
      height: 48px;
      background: linear-gradient(113deg,#f3dbad 0,#d6b782 100%);
      border-radius: 9.6px 9.6px 0 0;
      margin: 0 22px;
      padding: 0 16px;
      color: #4c3516;
      img {
        vertical-align: middle;
        height: 25.6px;
        width: 25.6px;
        margin-right: 3.2px;
      }
    }
  }
  .orderBox {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0rem 16px;
    margin-bottom: 30px;
    .van-button--normal{
      padding: 0 10px;
    }
    .left{
      width: 50%;
      margin-right: 5px;
      height: 80px;
      border-radius: 4px;
      div {
        padding-left: 30px;
        font-size: 18px;
        font-weight: 500;
        background-image: url(../../assets/imgs/order.png);
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .right{
      width: 50%;
      margin-left: 5px;
      height: 80px;
      border-radius: 4px;
      div {
        padding-left: 30px;
        font-size: 18px;
        font-weight: 500;
        background-image: url(../../assets/imgs/agent-order.png);
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  .section {
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    border-top: 8px solid #f4f4f4;
    .van-coupon-cell {
      width: 100%;
      border-bottom: 1px solid rgba(228,228,228,.5);
    }
  }
  .section {
    .tel{
      .van-cell__value {
      color: #108ee9;
      }
    }

  }
  .loginOut {
    margin: 0 auto;
    padding: 0 15px;
    padding-top: 32px;
    .van-button {
      height: 35px;
      line-height: 12px;
      font-size: 12px;
    }
  }
}
</style>
