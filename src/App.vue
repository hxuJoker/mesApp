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

  methods:{
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    position: relative;
  }
   a{
      text-decoration: none;
    }
    ul,li{
      list-style: none;
      padding: 0
    }
</style>
