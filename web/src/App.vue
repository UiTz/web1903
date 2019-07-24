<template>
  <div id="app">
    <my-header v-if="header_show && isRouterAlive"></my-header>
    <router-view v-on:header="header" v-on:footer="footer" v-if="isRouterAlive"></router-view>
    <my-footer v-if="footer_show && isRouterAlive"></my-footer>
  </div>
</template>
<script>
  export default {
    provide () {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        header_show: true,
        footer_show: true,
        isRouterAlive: true
      }
    },
    created() {
      this.$store.commit('getSession')
      // let uin = this.$store.state.userInfo;
      // console.dir(uin);
      // console.log(uin.user_name);
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
      reload () {
        this.isRouterAlive = false;
        this.$nextTick( ()=> {
          this.isRouterAlive = true;
        })
      },
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
