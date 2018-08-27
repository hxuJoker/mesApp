<template>
  <div id="app">
    <router-view/>
    <FooterGuider v-show='$route.meta.showFooter'/> 
  </div>
</template>

<script>
import FooterGuider from './components/FooterGuide/FooterGuider'
export default {
  name: 'App',
  components:{
    FooterGuider
  },
  computed:{
  },
  mounted(){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    background :#f5f5f5;
  }
   a{
      text-decoration: none;
    }
    ul,li{
      list-style: none;
      padding: 0;
      margin: 0
    }
    h4,p{
      margin: 0
    }
</style>
