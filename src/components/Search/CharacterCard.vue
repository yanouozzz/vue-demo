<template>
  <div class="CharacterCard">
    <router-link
    to=""
    class="artist-item"
    :style="`background-image:url(${card.artistBackgroudUrl})`"
    >
      <div class="con">
        <img :src="`${card.artistIcon}`" class="avatar">
        <div class="name">{{ card.artistName }}</div>
        <div class="desc">近期有{{ card.showCount }}场演出</div>
        <div class="btn-like">关注</div>
      </div>
      <div class="bg"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',

  props: {
    card: {
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.CharacterCard {
  margin: 0 24px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  .artist-item {
    display: block;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding: 16px 24px;
    border-radius: 8px;
    margin: 24px 0;
    .con {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 9;
      .avatar {
        width: 40px;
        height: 40px;
        border: 4px solid #fff;
        border-radius: 50%;
      }
      .name {
        font-size: 20px;
        color: #fff;
        line-height: 30px;
      }
      .desc {
        font-size: 12px;
        color: #fff;
        line-height: 20px;
      }
      .btn-like {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 72px;
        height: 32px;
        background-color: #fff;
        border-radius: 16px;
        text-align: center;
        line-height: 32px;
        background: rgba(255,255,255,.9);
        color: #323038;
        font-size: 12px;
        box-sizing: border-box;
      }
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.4);
      border-radius: 8px;
    }
  }
}
</style>
