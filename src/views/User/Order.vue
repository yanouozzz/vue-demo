<template>
  <div class="page-order">
    <userNav title="我的订单"></userNav>
    <div class="page-order_view">
      <ul class="page-order_view_none">
        <li><img src="../../assets/imgs/ordernone.png" alt=""></li>
        <li>暂无相关订单</li>
      </ul>
    </div>
  </div>
</template>

<script>
import userNav from '@/components/User/UserNav'

export default {
  name: 'Order',

  components: {
    userNav
  },

  methods: {

  },

  created () {

  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/mixins.scss';
.page-order {
  display: flex;
  flex-direction: column;
  height: 100%;
  &_view {
    flex: 1;
    overflow-y: auto;
    background: #fff;
    &_none {
      position: fixed;
      left: 0;
      top: 35%;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      width: 260px;
      padding: 0 10px;
      color: #747576;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      img {
        margin-top: 16px;
        width: 128px;
      }
    }
  }
}
</style>
