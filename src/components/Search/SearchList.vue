<template>
  <div class="SearchList">
    <router-link tag="div" class="show-component" v-for="item in list" :key="item.showOID" :to="`/drama/${item.showOID}`">
      <div class="left-column">
        <div class="boxImg">
          <img :src="`${item.posterURL}`" alt="">
        </div>
      </div>
      <div class="right-column">
        <div class="show-name">
          {{ item.showName }}
        </div>
        <div class="show-line">
          <div class="show-time">{{ item.showDate }}</div>
          <div class="show-avenue">{{ item.venueName }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SearchList',

  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.SearchList {
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  .show-component {
    padding: 22px 0;
    box-sizing: border-box;
    font-size: 20px;
    display: flex;

    .left-column {
      width: 168px;
      height: 100%;
      .boxImg {
        width: 112px;
        height: 156px;
        border-radius: 3px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .right-column {
      width: 100%;
      padding-left: 16px;
      .show-name {
        font-size: 17px;
        font-weight: 700;
        line-height: 26px;
        max-height: 52px;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
      .show-line {
        width: 100%;
        font-size: 13px;
        color: #323038;
        line-height: 20px;
        margin-top: 11px;
      }
    }
  }
}

</style>
