<template>
  <div id="app">
    <my-header v-if="header_show"></my-header>
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <my-footer v-if="footer_show"></my-footer>
  </div>
</template>
<script>
import myheader from './components/myheader'
import myfooter from './components/myfooter'
export default {
  data() {
    return {
      header_show:true,
      footer_show:true
    }
  },
  components:{
      "my-header":myheader,
      "my-footer":myfooter,
    },
  mounted() {
    if (this._isMobile()) {
      this.$router.push('/mindex');
      this.header_show=false;

    } else {
      this.$router.push('/');
    }
  },
  methods:{
      _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      return flag;
      },
      header:function(bool){
        this.header_show=bool;
      },
      footer(bool){
        this.footer_show=bool;
      }
    }
}
</script>
<style>
  ul,p{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
