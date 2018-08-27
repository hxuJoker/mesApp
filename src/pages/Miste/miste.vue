<template>
    <div id="miste">
        <HeaderTop :title="address.name">
            <!-- 要使用slot="left"指定插入的插槽位置 -->
            <router-link class="header_search" slot="left" to="/search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
            <router-link class="header_login" slot="right" :to="userInfo._id? '/userInfo':'/login'">
                <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
                <span class="header_login_text" v-else>
                    <i class="iconfont icon-yonghuming"></i>
                </span>
            </router-link>
        </HeaderTop>
        <nav class="msite_nav">
            <div class="swiper-container" v-if="categorys.length">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="categorys in categorysArr">
                        <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                            <div class="food_container">
                                <img :src="baseImageUrl+category.image_url">
                            </div>
                            <span>{{category.title}}</span>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <img src="./images/msite_back.svg" alt="back" v-else>
        </nav>
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-single"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <ShopList></ShopList>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import ShopList from '../../components/ShopList/ShopList.vue';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {mapState} from 'vuex'
    export default {
        components:{
          HeaderTop,
          ShopList
        },
        data() {
            return {
                baseImageUrl: 'https://fuss10.elemecdn.com'
            }
        },
        computed:{
            ...mapState(['address','categorys','userInfo']),
            /*
            根据categorys一维数组生成一个2维数组
            小数组中的元素个数最大是8
            */
            categorysArr(){
                // 1.先从当前组件中得到所有食品分类的一维数组
                const {categorys} = this;
                 // 2.准备一个空的二维数组--categorysArr
                const arr = [];
                 // 3.准备一个小数组--categorys(最大长度为8)
                let minArr = [];
                // 4.遍历categorys得到处理后的二维数组catagorysArr
                categorys.forEach(item =>{
                    // 如果当前小数组(categorys)已经满了, 创建一个新的
                    if(minArr.length === 8){
                        minArr = [];
                    }
                     // 如果minArr是空的, 将小数组(categorys)保存到大数组(catagorysArr)中
                    if(minArr.length === 0){
                        arr.push(minArr)
                    }
                    // 将当前分类信息保存到小数组(categorys)中
                    minArr.push(item);
                })
                return arr
            }
        },
        watch:{
            categorys(value){ // categorys数组中有数据了 但界面还没有异步更新
                // 在修改数据之后立即使用它，然后等待 DOM 更新。
                this.$nextTick(()=>{
                     // 一旦完成界面更新, 立即执行回调
                    //创建一个Swiper对象，来实现轮播
                    new Swiper('.swiper-container',{
                        loop:true,
                        //分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    })
                })
            }
        },
        // 注意要在页面加载完成之后（mounted）再进行swiper的初始化
        mounted(){
            this.$store.dispatch('getCategorys')
            this.$store.dispatch('getShops')
        },
    }
</script>

<style lang='less'>
    @import 'Miste.less';
</style>