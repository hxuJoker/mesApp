import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS} from './mutations-types'

import {reqAddress,reqUserInfo,reqLogout,reqShopGoods,reqShopInfo,reqShopRatings} from '../api'
 
export default {  
    //异步获取  
    async getAddress({commit,state}){
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
        const geohash = state.latitude + "," + state.longitude
        // 1. 发送异步ajax请求
        const result  = await reqAddress(geohash)
        // 2. 提交一个mutation
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },

    //同步获取
    recordUser ({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },

    //异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo();
        if(result.code === 0){
            const userInfo = result.data;
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },

    //异步退出
    async logout ({commit}){
        const result = await reqLogout();
        if(result.code === 0){
            commit(RESET_USER_INFO)
        }
    },
    //异步获取商家信息
    async getShopInfo ({commit}){
        const result = await reqShopInfo();
        if(result.code === 0){
            const info = result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    //异步获取商家评论列表
    async getShopRatings ({commit}){
        const result = await reqShopRatings();
        if(result.code === 0){
            const ratings = result.data
            commit(RECEIVE_INFO,{ratings})
        }
    },
    //异步获取商家列表
    async getShopGoods ({commit},callback){
        const result = await reqShopGoods();
        if(result.code === 0){
            const goods = result.data
            commit(RECEIVE_INFO,{goods})
            callback  && callback()
        }
    },
}