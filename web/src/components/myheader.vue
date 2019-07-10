<template>
  <header>
<div class="container">
   <div>
    <img class="my-style" src="https://image.zuma.com/image/1132100791935149067.png" alt="">
	 </div>
		<h1 class="my-font text-center">Tasty bread</h1>
		<div>
			<ul class="nav nav-pills d-flex justify-content-center bg-pink">
				<li class="nav-link"><a class="my-font1" href="#">首页</a></li>
				<li class="nav-link"><a class="my-font1" href="#">产品专区</a></li>
				<li class="nav-link"><a class="my-font1" href="#">加盟代理</a></li>
				<li class="nav-link"><a class="my-font1" href="#">企业咨询</a></li>
				<li class="nav-link"><a class="my-font1" href="#">联系我们</a></li>
			</ul>
		</div>
</div>
</header>
</template>
<script>
export default {
      data() {
          return {}
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
top:0;left:0;bottom:0;right:0;
margin:0 auto;
width:6%;height:auto;
}
/*字体的样式*/
h1.my-font{ 
color: rgb(177, 105, 57); 
font-family: "Peaches Cream"; 
margin-top:100px;
text-align:center;
font:32px solid orange;
}
/*导航栏的样式*/
ul {
display:block;
width:100%;
height:80px;
list-style:none;
background-color:orange;
}
/*导航栏的样式*/
ul li{
width:100px;height:80px;
line-height:60px;
text-align:center;
border:1px solid transparent;
}
/*导航栏的字体样式*/
a.my-font1{
color:#b16939;
}
</style>


