<template>
  <div class="ShowContent">
    <div class="show-body" v-for="item in tabs" :key="item.showOID" @click="goDramaId(item.showOID)">
      <div class="show-name">
        {{ item.showName }}
      </div>
      <div class="show-mixin">
        <div class="show-avenue">{{ item.venueName }}</div>
        <div class="show-time">{{ item.showDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowContent',

  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    goDramaId (event) {
      // console.log(event)
      this.$router.push('/drama/' + event)
    }
  }
}
</script>

<style lang="scss">
.ShowContent {
  box-sizing: border-box;
  display: blocck;
  min-height: 0;
  overflow-y: auto;
  padding: 0 30px;
  position: relative;
  background-color: #fff;
  overflow-x: hidden;
  .show-body {
    width: 100%;
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #e4e4e4;
    position: relative;
    .show-name {
      color: #131313;
      font-size: 14px;
      line-height: 20px;
      max-height: 64px;
      margin-bottom: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .show-mixin {
      font-size: 10px;
      color: #aaa;
      .show-avenue {
        float: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 50%;
      }
      .show-time {
        float: right;
      }
    }
  }
}
</style>
