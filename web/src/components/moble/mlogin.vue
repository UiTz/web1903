<template>
  <div>
        <router-link to="/mproductdetails" slot="left">
        <mt-button icon="back" class="mybtn1">返回</mt-button>
        </router-link>
      <mt-field autofocus label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" class="border-bottom" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
      <mt-button class="mt-3 mybtn text-white" size="large" @click="login">登录</mt-button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  data(){
      return {
          username:'',
          upwd:''
      }
  },
  methods:{
      login(){
          var url="user/api/login";
          var uname=this.username;
          var upwd=this.upwd;
          var obj={uname:uname,upwd:upwd};
          this.axios.post(url,obj).then(result=>{
              if(result.data.code===200){
                  MessageBox.alert('登录成功').then(action => 
                  {this.$router.push('/mindex');})
              }else{
                 MessageBox.alert("用户名或者密码错误");
              }
          })
      }
  }
}
</script>
<style scoped>
.mybtn1,.mybtn{
    width:100%;height:50px;
    line-height: 50px;
    background:#4BB1A6 !important;
    color:#fff;
}
.mybtn1{
    text-align: left;
    color:white;
}
</style>
