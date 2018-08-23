import ajax from './ajax'

const BASE_URL = '/api'
/**
 * 获取地址信息(根据经纬度串)
 * 这个接口的经纬度参数是在url路径里的，没有query参数
 */
export const reqAddress = (geohash) =>ajax(`$(BASE_URL)/position/$(geohash)`)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqCategorys = () => ajax(BASE_URL + '/index_category')