<template>
  <header id="main">
   <div>
    <img class="my-style" src="https://image.zuma.com/image/1132100791935149067.png" alt="">
	 </div>
		<h1 class="my-font text-center">Tasty bread</h1>
   <el-menu background-color="orange" text-color="rgb(177, 105, 57)" @select="handleSelect" 
   :default-active="$route.path" class="el-menu-demo" router  mode="horizontal">
		<el-menu-item v-for="(item,i) of navList" :key="i" :index="item.path">
			{{item.navItem}}</el-menu-item>	
			<router-link class="myrouter ml-3 pr-5" to='/login'>登录</router-link>
			<router-link class="myrouter" to='/register'>注册</router-link>
	</el-menu>
</header>
</template>
<script>
export default {
			data() {
      return {
		navList:[
			{path:'/',navItem:"首页"},
			{path:'/product',navItem:"产品专区"},
			{path:'/join',navItem:"加盟代理"},
			{path:'/company',navItem:"企业资讯"},
			{path:'/About',navItem:"关于我们"}
		]
      }
    },
	methods:{
		handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
	}
	}
</script>
<style scoped>
#main{
	position: relative;
	margin:0 auto;
	padding:0;
	width:100%;
}
/*图片的样式*/
img.my-style{
position:absolute;
width:100px;height:100px;
top:-100px;left:50%;
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
	font:15% !important;
}
.el-menu--horizontal>.el-menu-item{
	width:10%;height:70px;
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
.myrouter{
	float:right;line-height:70px;
	color:rgb(177, 105, 57) !important;
}
</style>


