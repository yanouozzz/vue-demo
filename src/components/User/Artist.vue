<template>
  <div class="artist-item">
    <div class="artist-flex">
      <a href="#">
        <img class="avatar" :src="artistInfo.artistIcon"/>
      </a>
      <a href="#" class="info">
        <div class="name">{{ artistInfo.artistName }}</div>
        <div class="summarize">{{ artistInfo.artistSummarize }}</div>
      </a>
      <div class="btn">
        <van-button round type="info" v-if="isFollow" @click="removeFollow">已关注</van-button>
        <van-button style="color: #ff1d41;border: 1px solid #ff1d41;" round type="info" v-if="!isFollow" @click="AddFollow">+关注</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'artist',

  props: {
    artistInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      isFollow: true
    }
  },

  methods: {
    ...mapMutations(['CANCEL_USER_FOLLOW']),
    ...mapMutations(['SET_USER_FOLLOW']),

    removeFollow ($event) {
      this.isFollow = !this.isFollow
      let value = this.artistInfo.artistOID
      this.CANCEL_USER_FOLLOW(value)
    },

    AddFollow ($event) {
      this.isFollow = !this.isFollow
      this.SET_USER_FOLLOW(this.artistInfo.artistOID)
    }
  }

}
</script>

<style lang="scss">
@import '~@/assets/styles/mixins.scss';
.artist-item {
  padding: 0 16px;
  .artist-flex {
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #eaeaeb;
    a {
      color: #494949;
      .avatar {
      min-width: 32px;
      height: 32px;
      border-radius: 50%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      padding-left: 8px;
      padding-right: 64px;
      height: 36px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .name{
        min-height: 16px;
        line-height: 16px;
        font-size: 16px;
        color: #000;
        font-weight: 700;
        padding-bottom: 3.2px;
      }
      .summarize {
        min-height: 16px;
        line-height: 16px;
        font-size: 12px;
        color: #95949d;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .btn {
      .van-button {
        position: absolute;
        width: 80px;
        height: 32px;
        line-height: 24px;
        right: 0;
        top: 20px;
        text-align: center;
        font-size: 16px;
        color: #95949d;
        border: 1px solid #eaeaeb;
        background-color: #fff;
      .toFollow.van-button--normal {
        position: absolute;

      }
      }
    }
  }
}
</style>
