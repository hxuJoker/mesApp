import Vue from 'vue'
import Router from 'vue-router'


// import Miste from '@/pages/Miste/miste.vue'
// import Order from '@/pages/Order/order.vue'
// import Personal from '@/pages/Personal/personal.vue'
// import Search from '@/pages/Search/search.vue'
//路由懒加载
const Miste = ()=> import('@/pages/Miste/miste.vue')
const Order = ()=> import('@/pages/Order/order.vue')
const Personal = ()=> import('@/pages/Personal/personal.vue')
const Search = ()=> import('@/pages/Search/search.vue')

import Login from '@/pages/Login/Login.vue'
import Shop from '@/pages/Shop/Shop.vue'
import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRating from '@/pages/Shop/ShopRating/ShopRating.vue'
import ShopInfo from '@/pages/Shop/ShopInfo/ShopInfo.vue'

Vue.use(Router)


export default new Router({
  
  routes: [
    {
      path: '/miste',
      name: 'miste',
      meta:{
        showFooter:true
      },
      component: Miste
    },
    {
      path: '/order',
      name: 'order',
      meta:{
        showFooter:true
      },
      component: Order
    },
    {
      path: '/personal',
      name: 'personal',
      meta:{
        showFooter:true
      },
      component: Personal
    },
    {
      path: '/search',
      name: 'search',
      meta:{
        showFooter:true
      },
      component: Search
    },
    {
      path: '/',
      redirect: '/miste'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path:"/shop/goods",
          component:ShopGoods
        },
        {
          path:"/shop/ratings",
          component:ShopRating
        },
        {
          path:"/shop/info",
          component:ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    }
  ]
})
