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


export default {
    [RECEIVE_ADDRESS] (state,{address}){
        state.address = address
    },

    [RECEIVE_USER_INFO] (state,{userInfo}){
        state.userInfo = userInfo
    },

    [RESET_USER_INFO] (state){
        state.userInfo = {}
    },
    //利用mock来模拟数据
    [RECEIVE_GOODS] (state,{goods}){
        state.goods = goods
    },
    [RECEIVE_INFO] (state,{info}){
        state.info = info
    },
    [RECEIVE_RATINGS] (state,{ratings}){
        state.ratings = ratings
    },
}