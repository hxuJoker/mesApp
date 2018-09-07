/**
 * 使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

//返回goods的接口
Mock.mock('/goods',{code:0,data:data.goods})
//返回ratings的接口
Mock.mock('/ratings',{code:0,data:data.ratings})

//返回info的接口
Mock.mock('/info',{code:0,data:data.info})

//返回地址的接口
Mock.mock('/address',{code:0,data:data.address})

//返回轮播信息
Mock.mock('/categorys',{code:0,data:data.categorys})

//返回商家列表
Mock.mock('/shops',{code:0,data:data.shops})

//返回用户信息
Mock.mock('/userinfo',{code:0,data:data.userInfo})

// export default ??? 不需要向外暴露任何接口