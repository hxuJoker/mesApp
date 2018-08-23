import Vue from 'vue'
import Router from 'vue-router'
import Miste from '@/pages/Miste/miste.vue'
import Order from '@/pages/Order/order.vue'
import Personal from '@/pages/Personal/personal.vue'
import Search from '@/pages/Search/search.vue'
import Login from '@/pages/Login/Login.vue'

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
    }
  ]
})
