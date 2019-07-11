<template>
  <footer>
      <div class="container">
   <div class="row m-0">
		 <div class="col-md-6">
		 <div class="item text-white mt-3 ml-5">
			 <h1 class="ml-5">Tasty bread</h1>
			  <p  class="mt-4 ml-5">Add / 公司地址：上海市金山区亭林镇林盛路136号</p>
				<p class="ml-5">Tel / 电话：400 - 000 - 0000</p>
				<ul class="items">
					<li class="item1 mr-2">上海</li>
					<li class="item2 mr-2">苏州</li>
					<li class="item3 mr-2">无锡</li>
					<li class="item4 mr-2">常州</li>
					<li class="item5 mr-2">南通</li>
					<li class="item6">徐州</li>
				</ul>
				</div>
		 </div>
		 <div class="col-md-6 p-0 item2 text-white text-center">
		 <div class="ml-5">
			<img class="my-img1" src="../../public/img/footer/footer-2.png" alt="">
			<p class="my-font">微信公众号</p></div>
			<div>
				<img class="my-img2" src="../../public/img/footer/footer-3.png" alt="">
				<p class="my-font">微信小程序</p>
			</div>
		 </div>
   </div>
</div>
  </footer>
</template>
<script>
export default {
  data() {
      return{}
  }
}
</script>
<style scoped>
/*设置背景图片*/
.container{
margin-top:80px;
background-image:url("../../public/img/footer/footer-1.png")
}
/*列表样式*/
ul.items{
 margin-left:5px;
 list-style:none;
 display:flex;
}
.item1+.item2::before{
content:"|";
margin-right:8px;
color:#fff;
}
.item2+.item3::before{
content:"|";
margin-right:8px;
color:#fff;
}
.item3+.item4::before{
content:"|";
margin-right:8px;
color:#fff;
}
.item4+.item5::before{
content:"|";
margin-right:8px;
color:#fff;
}
.item5+.item6::before{
content:"|";
margin-right:8px;
color:#fff;
}
/*设置布局方式*/
.item2{
display:flex;
}
/*设置图片大小*/
.my-img1{
width:40%;height:35%;
margin:50px 50px 0 50px;
}
.my-img2{
width:40%;height:35%;
margin:50px 50px 0 50px;
}
/*设置字体样式*/
.my-font{
font-size:14px;
margin-top:5px;
}
</style>


