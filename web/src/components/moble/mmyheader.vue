<template>
  <header>
    <div class="d-flex">
    <img class="my-style" src="https://image.zuma.com/image/1132100791935149067.png" alt="">
		<h4 class="my-font mt-4">Tastybread</h4>
      <el-dropdown>
  <span class="el-dropdown-link">
    <i class="el-icon-circle-plus-outline text-dark"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item><router-link class="text-dark" to="/mindex">首页</router-link></el-dropdown-item>
    <el-dropdown-item><router-link class="text-dark" to="/mproduct">产品专区</router-link></el-dropdown-item>
    <el-dropdown-item><router-link class="text-dark" to="/mjoin">加盟代理</router-link></el-dropdown-item>
    <el-dropdown-item><router-link class="text-dark" to="/mcompany">企业加盟</router-link></el-dropdown-item>
    <el-dropdown-item><router-link class="text-dark" to="/mabout">联系我们</router-link></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>
  </header>
</template>
<script>
export default {
  data (){
      return{}
  },
  methods:{
  handleOpen(key,keyPath){
      console.log(key,keyPath);
  },
   handleClose(key,keyPath){
      console.log(key,keyPath);
  }
  }
}
</script>
<style>
.my-style{
width:80px;height:80px;
margin:10px 10px 0 20px;
}
.el-icon-circle-plus-outline{
    margin:28px 0 0 90px;
    font-size:30px;
}
.my-font{
    color:rgb(177, 105, 57); 
}
</style>

