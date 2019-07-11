<template> 
  <div class="container">
      <div class="item">
        <div class="my-item">
            <h1 class="my-font">Tasty bread</h1>
            <p class="text-muted mb-4">口感深香有回味,吃在口中香软诱人</p>
            <span class="my-font1">立刻订购？</span>
        </div>
        </div>
        <div class="text-white my-font2">品牌介绍
        </div><div class="w-100"></div>
        <div class="row m-0">
            <div class="col-sm-6 p-0">
                <div class="my-img1"></div>
                <div><img class="my-img2" src="../../public/img/index/index-2.png" alt=""></div>
            </div>
            <div class="col-sm-6 p-0 my-font3">
                <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
                <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
            <button>了解更多</button>
            </div>
        </div>
        <!--indexImg></indexImg-->
    <div class="item1 text-center">
      <div class="my-style">
        <h3>未漂白 · 面粉</h3>
        <p>精选优质小麦面粉，经过缓慢的自然氧化过程烘烤后，使面包更加蓬松、柔软、健康</p>
      </div>
      <div class="my-style">
        <h3>纯 · 乳脂奶油</h3>
        <p>100%纯天然新西兰牛奶被自然搅拌、均匀降温制成纯乳脂奶油清甜、散发淡淡奶香</p>
      </div>
      <div class="my-style">
        <h3>尚选 · 咖啡豆</h3>
        <p>尚选4款100%阿拉比卡咖啡豆拼配而成采用小作坊精品咖啡豆烘培坊中深度烘焙</p>
      </div>
  </div>
  </div>
</template>
<script>
import index1 from '../components/index1'
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
    margin-top:30px;
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
.my-img1,.my-img2{
    margin-top:80px;
    background-color:rgb(234, 212, 193);
    width:450px;height:300px;
}
.my-img2{
   margin-top:-380px;
   margin-left:30px;
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
    width:100%;height:500px;
    background:url("../../public/img/index/index-3.png") no-repeat center center;
    background-size:100% 100%;
    display:flex;
}
/*三个div的样式*/
.my-style{
    position: absolute;
    background-color:rgba(255, 255, 255, 0.75);
    border:0 solid rgb(246, 246, 246);
    width:200px;height:150px;
    position: absolute;
    top:20%;left:30%;
    text-align: center;}
</style>
