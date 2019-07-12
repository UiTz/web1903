<template>
 <div class="container">
     <div id="d1"></div>
  <div id="demo">
    <h3 style="margin-top:20px;">用户登录</h3>
    <el-input class="ml-5 mt-3 mb-3" style="width:330px;height:40px" autofocus placeholder="请输入用户名" v-model="input">
    </el-input>
    <el-input class="ml-5 mt-3 mb-5" style="width:330px;height:40px" type="password" placeholder="请输入密码" v-model="upwd">
    </el-input>
    <el-button class="w-50 mybtn bg-primary text-white">登录</el-button>
 </div>
</div>
</template>
<script>
  export default {
    data() {
       return{}
    }
  }
</script>
<style scoped>
.container{
    display: flex;
    margin:0 auto;
    padding:0;
}
#d1{
    width:100%;height:500px;
    background:url("../../public/img/index/index-2.png") no-repeat;
    background-size:cover;
}
#demo{
    margin-top:100px;
    margin-left:-460px;
    background:rgba(255,255,255,0.3);
    border:1px solid #ddd;
    width:400px;height:320px;
    border-radius:5px;
}
h3{text-align: center;}
.mybtn{
    margin:0 22%;
}
</style>
