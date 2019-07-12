<template>
  <header>
<div class="container">
   <div>
    <img class="my-style" src="https://image.zuma.com/image/1132100791935149067.png" alt="">
	 </div>
		<h1 class="my-font text-center">Tasty bread</h1>
   <el-menu background-color="orange" text-color="rgb(177, 105, 57)" :default-active="this.$router.path" class="el-menu-demo" router mode="horizontal">
		<el-menu-item v-for="(item,i) of navList" :key="i" :index="item.name">
			{{item.navItem}}
		</el-menu-item>
	</el-menu>
	</div>
</header>
</template>
<script>
export default {
			data() {
      return {
        navList:[
			{name:'/index',navItem:'首页'},
			{name:'/product',navItem:'产品专区'},
			{name:'/join',navItem:'加盟代理'},
			{name:'/company',navItem:'企业资讯'}
		]
      }
    }
    
  }
</script>
<style scoped>
.container{
	padding:0;
}
/*图片的样式*/
img.my-style{
position:absolute;
width:100px;height:100px;
top:5%;left:49%;
margin-left:-50px;
}
/*字体的样式*/
h1.my-font{ 
color: rgb(177, 105, 57); 
font-family: "Chiller"; 
text-align:center;
margin-top:130px;
margin-bottom:30px;
font:32px solid orange;
}
/*导航栏的样式*/
.el-menu-demo{
	width:100%;height:70px;
	color:#EEE1cf;
}
.el-menu--horizontal>.el-menu-item{
	width:120px;height:70px;
	font-size:16px;
	text-align:center;
	line-height: 70px;
}
.el-menu--horizontal>.el-menu-item:hover{
background-color:rgb(177, 105, 57) !important;
color:#fff !important;
background-color:#FF9900 !important;
}
.el-menu--horizontal>.el-menu-item.is-active 
{border-bottom:0 !important;
color:#fff !important;
background-color:#FF9900 !important;}
</style>


