<template>
<div id="demo">
    <h3 style="margin-top:20px;margin-bottom:20px;">用户登录</h3>
    <el-input autofocus placeholder="请输入用户名" v-model="input">
    </el-input>
    <el-input style="margin-top:20px;margin-bottom:20px;" type="password" placeholder="请输入密码" v-model="upwd">
    </el-input>
    <el-button>登录</el-button>
</div>
</template>
<script>
export default {
  data(){
      return {
          input:'',
          upwd:''
      }
  }
}
</script>
<style>
#demo{
    margin-top:30px;
    background-color:transparent;
    border:1px solid #ddd;
    width:25%;height:250px;
    margin:3% 63.5%;
}
</style>
