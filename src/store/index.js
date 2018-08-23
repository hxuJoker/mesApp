/*
vuex最核心的管理对象store
组装模块并导出 store 的地方
 */
// 首先引入Vue及Vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 引入四个基本模块
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { Store } from 'vuex';
// 一定要声明使用插件
Vue.use(Vuex)


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})