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

import {reqAddress} from '../api'
 
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
    }
}