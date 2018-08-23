<template>
    <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">Mint外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" @click.prevent="getCode">{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册Mint外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <!-- <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha" ref="captcha"> -->
                <img class="get_verification" src="./images/captcha.svg" alt="captcha"  ref="captcha" @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <!--利用$router.back()返回上一级路由 -->
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-arrow-left"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
import AlertTip from "../../components/AlertTip/AlertTip.vue";
import {reqSendCode,reqSmsLogin,reqPwdLogin} from '../../api'
export default {
  components: {
    AlertTip
  },
  data() {
    return {
      loginWay: false, // true代表短信登陆, false代表密码
      phone: "", // 手机号
      computeTime: 0, //计时的时间
      showPwd: false, // 是否显示密码
      pwd: "",
      name: "", // 用户名
      code: "", // 短信验证码
      captcha: "", // 图形验证码
      alertText: "", // 提示文本
      alertShow: false // 是否显示警告框
    };
  },
  computed: {
    rightPhone() {
      // 利用正则对手机号进行匹配，返回布尔值
      return /^1\d{10}$/.test(this.phone);
    }
  },
  methods: {
    //封装验证文字
    showAlert(alertText){
      this.alertShow = true;
      this.alertText = alertText;
    },
    //登录
    async login(){
      let result = {
        code:0,
        data:{
          name:this.name,
          phone:this.phone
        }
      }
      if(this.loginWay){
        const {rightPhone,phone,code} = this;
        if(!rightPhone){
          this.showAlert('手机号不正确')
          return 
        }else if(!code){
          this.showAlert('验证码不正确')
          return 
        }
        //异步发送ajax请求
        // result = await reqSmsLogin(phone,code)
      }else{
        const {name,pwd,captcha} = this;
        if(!name){
          this.showAlert('用户名不正确')
          return 
        }else if(!pwd){
          this.showAlert('密码不正确')
          return 
        }else if(!captcha){
          this.showAlert('验证码不正确')
          return 
        }
        // result = await reqPwdLogin({name,pwd,captcha})
      }
      if(this.computeTime){
        this.computeTime = 0;
        clearInterval(this.intervalId)
        this.intervalId = undefined
      }
      if(result.code === 0){
        const user = result.data;
        this.$store.dispatch('recordUser',user)
        this.$router.replace('/personal')
      }else{
        //显示新的图片验证码
        this.getCaptcha()
        //显示错误提示
        this.showAlert(result.msg)
      }
    },
    // 关闭警告框
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    },
    //获取短信验证码
      async getCode() {
      // 如果当前没有计时!this.computeTime等于this.computeTime === 0
      if (!this.computeTime) {
        // 启动倒计时
        this.computeTime = 30;
        this.intervalId = setInterval(() => {
          this.computeTime--;
          if (this.computeTime <= 0) {
            // 停止计时
            clearInterval(this.intervalId);
          }
        }, 1000);
      }
      // 发送ajax请求（向指定手机号发送验证码短信）
      // const result = await reqSendCode(this.phone);
      // if(result.code === 1){
      //   // 显示提示
      //   this.showAlert(result.msg)
      //    // 停止计时
      //   if(this.computeTime){
      //     this.computeTime = 0;
      //     clearInterval(this.intervalId)
      //     this.intervalId = undefined
      //   }
      // }
    },
    //获取图形验证码
    getCaptcha(){
      // this.$refs.captcha.src = 'http://localhost:4000/captcha?time='+Date.now();
    }
  }
};
</script>

<style lang='less'>
@import 'login.less';
</style>