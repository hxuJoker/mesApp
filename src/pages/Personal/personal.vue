<template>
    <div class="profile">
    <section>
      <HeaderTop title="我的"></HeaderTop>
      <section class="profile-number">
      <!-- 利用router-link实现到Login组件的跳转 -->
        <router-link :to="userInfo._id? '/userInfo':'/login'" class="profile-link">
          <div class="profile_image">
            <i class="iconfont icon-yonghuming"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
            <p class="user-info-top">
              <span class="user-icon">
                <i class="iconfont icon-msnui-tel icon-mobile"></i>
              </span>
              <span class="icon-mobile-number">{{userInfo.phone ||'暂无绑定手机号'}}</span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont icon-previewright"></i>
          </span>
          </router-link>
      </section>
      <section class="profile_info_data border-1px">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0.00</span>元</span>
            <span class="info_data_bottom">我的余额</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>个</span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>分</span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </ul>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 我的订单 -->
        <a href='javascript:' class="my_order">
          <span>
            <i class="iconfont icon-dingdan"></i>
          </span>
          <div class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
              <i class="iconfont icon-previewright"></i>
            </span>
          </div>
        </a>
        <!-- 积分商城 -->
        <a href='javascript:' class="my_order">
          <span>
            <i class="iconfont icon-jifen"></i>
          </span>
          <div class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
              <i class="iconfont icon-previewright"></i>
            </span>
          </div>
        </a>
        <!-- Mint外卖会员卡 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-viptehuishiduan"></i>
          </span>
          <div class="my_order_div">
            <span>Mint外卖会员卡</span>
            <span class="my_order_icon">
              <i class="iconfont icon-previewright"></i>
            </span>
          </div>
        </a>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-lianxikefu"></i>
          </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
              <i class="iconfont icon-previewright"></i>
            </span>
          </div>
        </a>
      </section>
      <section class="profile_my_order border-1px">
        <mt-button type="danger" style="width: 100%" v-if="userInfo._id" @click="logout">退出登录</mt-button>
      </section>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {MessageBox,Toast} from 'mint-ui'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';

    export default {
        components:{
          HeaderTop
        },
        data() {
          return {
              
          }
        },
        computed:{
          ...mapState(['userInfo'])
        },
        methods:{
          logout(){
            MessageBox.confirm('确认退出吗？').then(
              action=>{
                // this.$store.dispatch('logout')
                this.$store.state.userInfo = {};
                Toast('退出成功！')
              },
              action=>{}
            )
          }
        }
    }
</script>

<style lang='less'>
  @import 'personal.less';
</style>