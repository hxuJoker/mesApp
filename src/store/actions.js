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

import {
    reqAddress,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopInfo,
    reqShopRatings,
    reqCategorys,
    reqShops,
    } from '../api'
 
export default {  
    //异步获取  
    // async getAddress({commit,state}){
    // // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
    //     const geohash = state.latitude + "," + state.longitude
    //     // 1. 发送异步ajax请求
    //     const result  = await reqAddress(geohash)
    //     // 2. 提交一个mutation
    //     if(result.code === 0){
    //         const address = result.data
    //         commit(RECEIVE_ADDRESS,{address})
    //     }
    // },

    //同步获取
    recordUser ({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },

    //异步获取用户信息
    // async getUserInfo({commit}){
    //     const result = await reqUserInfo();
    //     if(result.code === 0){
    //         const userInfo = result.data;
    //         commit(RECEIVE_USER_INFO,{userInfo})
    //     }
    // },

    //异步退出
    // async logout ({commit}){
    //     const result = await reqLogout();
    //     if(result.code === 0){
    //         commit(RESET_USER_INFO)
    //     }
    // },


//利用mock来模拟数据

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
            commit(RECEIVE_RATINGS,{ratings})
        }
    },
    //异步获取商家列表
    async getShopGoods ({commit},callback){
        const result = await reqShopGoods();
        if(result.code === 0){
            const goods = result.data
            commit(RECEIVE_GOODS,{goods})
            callback  && callback()
        }
    },
    //异步获取地址信息
    async getAddress ({commit}) {
        const result =await reqAddress()
        if(result.code === 0){
            const address = result.data;
            commit(RECEIVE_ADDRESS,{address})
        }
    },

    //异步获取轮播信息
    async getCategorys({commit}){
        const result = await reqCategorys()
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },

    //异步获取商品信息
    async getShops({commit}){ 
        const result = await reqShops()
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },

    //异步获取用户信息
    async getUserInfo({commit}){ 
        const result = await reqUserInfo()
        if(result.code === 0){
            const userInfo = result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    }
}