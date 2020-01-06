<template>
  <div class="page-login">
    <userNav title="登录摩天轮票务"></userNav>
    <div class="page-login__view">
      <div class="page-login__view__loginBox">
        <van-field
        v-model="phone"
        placeholder="请输入手机号码" clearable
        @blur="testPhone" :error-message="errorMessage" />
        <van-field
          v-model="sms"
          center
          clearable
          placeholder="请输入短信验证码"
        >
          <van-button slot="button" size="small" type="default">获取验证码</van-button>
        </van-field>
      </div>
      <div class="page-login__view__loginWrapper">
        <van-button type="default"
          size="large" :disabled="isDisabled"
          round color="linear-gradient(278deg,#ff1d41,#ee0e87)"
          @click="handleLogin">登录</van-button>
        <div class="login-tip">
          未注册过的手机号将自动创建摩天轮账号，且代表您已同意
          <a class="agree-link"
          href="javascript:void(0);"
          >《摩天轮用户隐私政策》
          </a>和
          <a href="javascript:void(0);"
          class="agree-link"
          >《第三方商品平台交易服务协议》
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import userNav from '@/components/User/UserNav'
export default {
  name: 'Login',

  components: {
    userNav
  },

  data () {
    return {
      phone: '',
      sms: '',
      errorMessage: '',
      loading: false,
      isDisabled: true
    }
  },

  methods: {

    testPhone () {
      if (this.phone.split('').length === 11) {
        let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
        if (phoneReg.test(this.phone)) {
          this.isDisabled = false
          this.errorMessage = ''
        } else {
          this.errorMessage = '手机号格式错误'
        }
      } else {
        this.errorMessage = '手机号格式错误'
      }
    },

    handleLogin () {
      if (this.loading) {
        return
      }

      if (!this.phone) {
        this.$toast('请输入有效的手机号码')
        return
      }

      this.loading = true

      // 发送ajax请求
      Axios.post('http://129.204.85.186:3000/login', {
        phone: this.phone
      }).then(response => {
        const { data } = response
        if (data.code === 0) {
          this.$toast('登录成功')
          this.$store.commit('SET_USER_INFO_AND_TOKEN', data.data)

          setTimeout(() => {
            this.$router.back()
          }, 500)

          this.loading = false
        }
      })
    }

  }
}
</script>

<style lang="scss">
@import '../assets/styles/mixins.scss';

.page-login {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 16px;
  color: #494949;
  .van-nav-bar {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eaeaeb;
    .van-icon{
      color: #494949;
    }
  }
  &__view {
    border-bottom: 1px solid #eaeaeb;
    flex: 1;
    background: #fff;

    &__loginBox {
      width: 80%;
      margin: 30px auto;
      .van-field {
        padding: 0;
        margin-top: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #eaeaeb;
        .van-button {
          border: none;
          font-size: 16px;
        }
      }
    }
    &__loginWrapper {
      width: 80%;
      margin: 30px auto;
      font-size: 16px;
      .van-button {
        height: 35px;
        line-height: 35px;
      }
      .login-tip {
        width: 100%;
        padding-top: 15px;
        color: #95949d;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}
</style>
