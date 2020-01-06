import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import DramaDetail from '../views/Drama/_id.vue'
import HomeList from '../views/Home/HomeList.vue'
import DramaList from '../views/Home/DramaList.vue'
import Center from '../views/Home/Center.vue'

// -----------------李志阳-------------------
import Search from '../views/Search.vue'
import City from '../views/City.vue'
import Chat from '../views/Chat.vue'
// -----------------李志阳-------------------
import Address from '../views/User/Address.vue'
import UserLike from '../views/User/UserLike.vue'
import Order from '../views/User/Order.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'home',
          component: HomeList,
          meta: {
            tabIndex: 0
          }
        },
        {
          path: 'dramas/:cityId/:kinds',
          component: DramaList,
          meta: {
            tabIndex: 1
          }
        },
        {
          path: 'center',
          component: Center,
          meta: {
            tabIndex: 2,
            needLogin: true
          }
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/drama/:dramaId',
      component: DramaDetail
    },

    // -----------------李志阳-------------------
    {
      path: '/search',
      component: Search
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    // -----------------李志阳-------------------
    {
      path: '/user/address',
      component: Address,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/user/order',
      component: Order,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/user/like',
      component: UserLike,
      meta: {
        needLogin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !store.state.userInfo) {
    next('/login')
  } else {
    next()
  }
})

// 解决多次点击问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default router
