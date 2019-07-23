<template>
  <div id="app">
    <my-header v-if="header_show"></my-header>
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <my-footer v-if="footer_show"></my-footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        header_show: true,
        footer_show: true
      }
    },
    mounted() {
      if (this._isMobile()) {
        this.$router.push('/mindex');
        this.header_show = false;
        
      } else {
        this.$router.push('/');
      }
    },
    methods: {
      _isMobile() {
        return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      },
      header: function (bool) {
        this.header_show = bool;
      },
      footer(bool) {
        this.footer_show = bool;
      }
    },
    watch: {
      $route: function(newVal) {
        //里面有路由的信息，根据路由信息做相关处理
        this.footer_show = newVal.path !== '/mproductdetails';
      },
    }
  }
</script>
<style>
  ul, p {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
