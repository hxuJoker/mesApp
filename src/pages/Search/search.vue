<template>
    <div class="search">
        <HeaderTop title="搜索"/>
        <form class="search_form" @submit.prevent="search">
            <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
            <input type="submit" class="search_submit">
        </form>
        <section class="list" v-if="!noSearchShops">
            <ul class="list_container">
                <!-- <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li" v-for="item in searchShops" :key="item.id" class="list_li"> -->
                <router-link to="/shop" class="list_li">
                <section class="item_left">
                    <!-- <img :src="imgBaseUrl + item.image_path" class="restaurant_img"> -->
                </section>
                <section class="item_right">
                    <div class="item_right_text">
                    <p>
                        <!-- <span>{{item.name}}</span> -->
                    </p>
                    <!-- <p>月售 {{item.month_sales||item.recent_order_num}} 单</p> -->
                    <!-- <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p> -->
                    </div>
                </section>
                </router-link>
            </ul>
        </section>
        <div class="search_none" v-else>很抱歉！无搜索结果</div>   
    </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";

export default {
  components: {
    HeaderTop
  },
  data() {
    return {
        keyword: '',
        imgBaseUrl: 'http://cangdu.org:8001/img/',
        noSearchShops: false
    };
  },
  methods:{
      search () {
      // 得到搜索关键字
        const keyword = this.keyword.trim()
        // 进行搜索
        // if (keyword) {
        //     this.$store.dispatch('searchShops', keyword)
        // }
    }
  },
  watch: {
    // searchShops (value) {
    //   if (!value.length) { // 没有数据
    //     this.noSearchShops = true
    //   } else { // 有数据
    //     this.noSearchShops = false
    //   }
    // }
  },
};
</script>

<style lang="less">
@import "search.less";
</style>
