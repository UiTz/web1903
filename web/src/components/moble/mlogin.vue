<template>
  <div>
      <h5 class="text-white">用户登录</h5>
      <mt-field autofocus label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" class="border-bottom" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
      <mt-button class="mt-3 mybtn text-white" size="large">登录</mt-button>
  </div>
</template>
<script>
export default {
  data(){
      return {}
  }
}
</script>
<style>
h5{
    width:100%;height:50px;
    text-align: center;
    line-height: 50px;
    background:green;
}
.mybtn{
    background-color:green;
}
</style>
