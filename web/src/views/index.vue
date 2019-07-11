<template> 
  <div class="container">
      <div class="item">
        <div class="my-item">
            <h1 class="my-font">Tasty bread</h1>
            <p class="text-muted mb-4">口感深香有回味,吃在口中香软诱人</p>
            <span class="my-font1">立刻订购？</span>
        </div>
        </div>
        <div>
        <div class="text-white my-font2">品牌介绍</div>
        <div class="w-100"></div></div>
        <div class="row m-0">
            <div class="col-md-6 col-sm-12 p-0">
                <div class="my-img1 mb-3"></div>
                <img class="my-img2" src="../../public/img/index/index-2.png" alt="">
            </div>
            <div class="col-md-6 col-sm-12 p-0 my-font3">
                <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
                <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
            <button>了解更多</button>
            </div>
        </div>  
    <div class="item1 text-center">
      <div class="my-style1">
        <h5 style="margin-top:70px">未漂白 · 面粉</h5>
        <p>精选优质小麦面粉，经过缓慢的自然氧化过程烘烤后，使面包更加蓬松、柔软、健康</p>
      </div>
      <div class="my-style2">
        <h5 style="margin-top:70px">纯 · 乳脂奶油</h5>
        <p>100%纯天然新西兰牛奶被自然搅拌、均匀降温制成纯乳脂奶油清甜、散发淡淡奶香</p>
      </div>
      <div class="my-style3">
        <h5 style="margin-top:70px">尚选 · 咖啡豆</h5>
        <p>尚选4款100%阿拉比卡咖啡豆拼配而成采用小作坊精品咖啡豆烘培坊中深度烘焙</p>
      </div>
  </div>
  <div class="pt-5">
    <div class="text-white my-font2">产品系列</div>
    <div class="w-100"></div>
  </div>
  <div class="row m-0 my-t mb-5">
      <div class="col-sm-6 my-item2 text-right">
          <h2>BREAD</h2>
          <h5>面包系列</h5>
          <p>甄选小麦粉，纯天然自制酵母发酵面团 使用牛奶代替纯净水揉面</p>
          <button>了解更多</button>
      </div>
      <div class="col-sm-6">
          <div class="my-picture1"></div>
      </div>
  </div>
  <div class="row m-0 my-t mb-5 mt-5">
      <div class="col-sm-6">
          <div class="my-picture2"></div>
      </div>
      <div class="col-sm-6  my-item2 text-left">
          <h2>BREAD</h2>
          <h5>面包系列</h5>
          <p>甄选小麦粉，纯天然自制酵母发酵面团 使用牛奶代替纯净水揉面</p>
          <button>了解更多</button>
      </div>
  </div>
  <div class="row m-0 my-t mb-5 mt-5">
      <div class="col-sm-6 my-item2 text-right">
          <h2>BREAD</h2>
          <h5>面包系列</h5>
          <p>甄选小麦粉，纯天然自制酵母发酵面团 使用牛奶代替纯净水揉面</p>
          <button>了解更多</button>
      </div>
      <div class="col-sm-6">
          <div class="my-picture3"></div>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
      return {}
  },
  /*components:{
      "indexImg":indexImg
  }*/
}
</script>
<style scoped>
/*设置背景*/
div.container{
    padding:0;
}
.item{
    position: relative;
    width:100%;height:500px;
    background:url("../../public/img/index/index-1.png") no-repeat center center;
    background-size:100% 100%;
}
/*设置小div背景样式*/
.my-item{
    background-color:rgba(255, 255, 255, 0.75);
    border:0 solid rgb(246, 246, 246);
    width:400px;height:250px;
    position: absolute;
    top:20%;left:30%;
    text-align: center;
}
/*设置字体样式*/
.my-font{
    margin-top:30px;
    font-family: "Peaches Cream";
    color:rgb(177, 105, 57);
    margin-bottom:50px;
}
.my-font1{
    color:rgb(177, 105, 57);
}
.my-font2{
    margin-top:50px;
    background-color:rgb(177, 105, 57);
    font-size:22px;
    width:200px;height:60px;
    text-align: center;
    line-height: 60px;
    border-radius:80px 0;
    
}
/*设置下划线*/
.my-font2+div{
    border-bottom:2px solid rgb(177, 105, 57);
}
/*设置图片*/
@media screen and (min-width:992px) {
   .my-img1,.my-img2{
    width:75%;height:65%;}
    .my-img2{
   margin-top:-340px;
   margin-left:30px;}
   .my-img1{
       margin-top:80px;
   }

}
@media screen and (max-width:992px) and (min-width:768px){
   .my-img1,.my-img2{ margin-top:80px;
    width:75%;height:55%;}
    .my-img2{
   margin-top:-340px;
   margin-left:30px;
}
}
@media screen and (max-width:768px){
   .my-img1,.my-img2{margin-top:80px;
    width:80%;height:400px;}
    .my-img2{
        margin-top:-520px;
        margin-left:30px;
    }
}
.my-img1,.my-img2{
    background-color:rgb(234, 212, 193);
}
/*设置字体样式*/
.my-font3{
    margin-top:60px;
    color:rgb(177, 105, 57);
    line-height:35px;
    text-indent:35px;
    padding:10px;
}
button{
    width:150px;height:50px;
    border:3px solid rgb(177, 105, 57);
    color:rgb(177, 105, 57);
    background-color:#fff;
}
/*设置背景样式*/
.item1{
    position: relative;
    top:50px;
    width:100%;height:300px;
    background:url("../../public/img/index/index-3.png") no-repeat center center;
    background-size:100% 300%;
    display:flex;
}
/*三个div的样式*/
.my-style1,.my-style2,.my-style3{
    background-color:rgba(255, 255, 255, 0.75);
    border:0 solid rgb(246, 246, 246);
    width:250px;height:200px;
    position: absolute;
    top:16%;left:15%;
    text-align: center;
    color:rgb(177, 105, 57);
    background-image:url("../../public/img/index/index-7.png");
    background-size:20% 20%;
    background-repeat:no-repeat;
    background-position:center 10%;
}
.my-style2{
    background-image:url("../../public/img/index/index-8.png");
    left:40%;
}
.my-style3{
    background-image:url("../../public/img/index/index-9.png");
    left:65%;
}
.my-big{
    margin-top:50px;
}
/*设置产品的样式*/
.my-t{
    height:500px;width:100%;
    margin-top:50px;
    margin-bottom: 50px;
}
.my-item2{
    margin-top:100px;
    color:rgb(177, 105, 57);
}
.my-picture1,.my-picture2,.my-picture3{
    margin-top:30px;
    background:url("../../public/img/index/index-4.png") no-repeat;
    width:120%;height:100%;
    background-size:cover;
}
.my-picture2{
    background:url("../../public/img/index/index-5.png") no-repeat;
}
.my-picture3{
    background:url("../../public/img/index/index-6.png") no-repeat;
}
</style>
