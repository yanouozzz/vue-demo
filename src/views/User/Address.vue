<template>
  <div class="page-address">
    <userNav title="地址管理"></userNav>
    <div class="page-address_view">
      <div v-if="!(list.length)">
        <ul class="page-address_view_none">
          <li><img src="../../assets/imgs/address.png" alt=""></li>
          <li>暂无收货地址</li>
          <li class="lip">点击按钮新增收货地址哦</li>
        </ul>
      </div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import userNav from '@/components/User/UserNav'

export default {
  name: 'Address',

  components: {
    userNav
  },

  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },

  methods: {
    onAdd () {
      this.$toast('新增地址')
    },
    onEdit (item, index) {
      this.$toast('编辑地址:' + index)
    }
  },

  created () {

  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/mixins.scss';
.page-address {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 25.6px;
  color: #494949;
  &_view {
    width: 100%;
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
      text-align: center;
      padding: 0 10px;
      color: #747576;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      img {
        margin-top: 16px;
        width: 128px;
      }
      .lip {
        font-size: 12.8px;
      }
    }
  }
}
</style>
