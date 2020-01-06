import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Swipe,
  SwipeItem,
  Loading,
  Cell,
  CellGroup,
  Toast,
  Field,
  Search,
  IndexBar,
  IndexAnchor,
  Sticky,
  Checkbox,
  CheckboxGroup,
  CouponCell,
  CouponList,
  Panel,
  Popup,
  AddressList
} from 'vant'
import './base.scss'

Vue.use(Button).use(Tabbar).use(TabbarItem).use(Toast).use(NavBar).use(Swipe).use(SwipeItem).use(Loading).use(Cell).use(CellGroup).use(Field).use(Search).use(IndexBar).use(IndexAnchor).use(Sticky).use(Checkbox).use(CheckboxGroup).use(CouponCell).use(CouponList).use(Panel).use(Popup).use(AddressList)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
