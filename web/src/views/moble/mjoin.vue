<template>
<div>
    <mmyheader></mmyheader>
    <div class="item"></div>
    <div class="container">
    <!-- 第一部分 -->
    <div>
        <div class="text-white my-font2 ml-3">品牌介绍</div>
        <div class="w-100 ml-3"></div>
    </div>
    <div class="row m-0">
        <div class="col-md-6 col-sm-12 p-0">
            <div class="my-img1 mb-3 ml-4"></div>
            <img class="my-img2 ml-5" src="../../../public/img/join/join-2.png" alt="">
        </div>
        <div class="col-md-6 col-sm-12 p-3 my-font3">
            <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
            <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
        </div>
    </div>
    <!-- 第二部分 -->
    <div class="teo">
    <div>
        <div class="text-white my-font2 ml-3">品牌特色</div>
        <div class="w-100 ml-3"></div>
    </div>
    <div class="row m-0 mt-5">
        <div class="col-md-9 col-sm-12 p-0">
             <p class="two-font1 ml-5">来自欧洲  新鲜烘焙专家</p>
             <p class="two-font2 ml-5 ">烘焙 · 快乐 · 设计 · 生活</p>
             <p class="two-font3 ml-5">Baking / Happy / Design / Life</p> 
             <div class="two-style d-flex mt-5 ml-3">
                 <div>
                     <p>极丰富的<br>高品质产品</p>
                 </div>
                 <div class="ml-3">
                     <p>明快通透的<br>购物环境</p>
                 </div>
             </div> 
             <div class="two-style d-flex mt-5 ml-5">
                 <div>
                     <p>轻松简洁的<br>设计调性</p>
                 </div>
                 <div class="ml-3">
                     <p>无压力感的<br>购物与生活</p>
                 </div>
             </div> 
        </div>
        <div class="col-md-3 col-sm-12 p-0">
            <img class="my-img3 ml-5" style="width:280px;height:300px;" src="../../../public/img/join/join-3.png" alt="">
        </div>
    </div>
</div>
    <!-- 第三部分 -->
  
        <div class="left col-md-6 col-sm-12 p-0">
           <div>
              <div class="text-white my-font2 ml-3 mt-5">品牌介绍</div>
              <div class="w-100 ml-3"></div>
           </div>
           <div class="mt-5 ml-5 p-3">
               <p>·选择核心商圈位置,稳健有节奏的扩张</p>
               <p>· 面包+西点+蛋糕+素轻餐+健康饮品+庆典礼品(翻糖及礼盒)</p>
               <p>· 无漂白面粉全面使用,纯天然自制酵母</p>
               <p>· 研发配方,口味造型力求最佳</p>
               <p>· 通过Online的推广Campaign与整体运营</p>
               <p>· 为线下门店引导成倍的人流</p>
               <p>· 借Online平台的优势,进行全员维护,有力保障门店生意稳定</p>
           </div>
           <div class="ml-5">
               <img style="width:280px;height:168px" src="../../../public/img/join/join-4.png" alt="">
           </div>
        </div>

        <div class="right col-md-6 col-sm-12 p-0">
            <div>
              <div class="text-white my-font2 ml-3 mt-5">门店要求</div>
              <div class="w-100 ml-3"></div>
           </div>
           <div class="mt-5 ml-5 p-3">
               <p>位置选择：一类商圈A级铺面</p>
               <p>SHOPPING MALL 、大型卖场、商业中心等客流量充足的繁华地段</p>
               <p>十字路口大展示面</p>
               <p>优质A级规模社区沿街面面积需求：150-200平米为主</p>
               <p>地区首店，则大于200平米为佳</p>
               <p>有适合大型烘焙店的排污、排水、排气系统。水电气等能源能满足营</p>
               <p>运需要。</p>
           </div>
           <div class="ml-5">
               <img style="width:280px;height:168px" src="../../../public/img/join/join-5.png" alt="">
           </div>
        </div>

</div>
</div>
</template>
<script>
import mmyheader from '../../components/moble/mmyheader'
export default {
    data(){
        return{}
    },
    components:{
        mmyheader 
    }
}
</script>
<style scoped>
div.container{
    padding:0;
    margin:0 auto;
}
/*设置第一个图片*/
.item{
    position: relative;
    width:100%;height:280px;
    background:url("../../../public/img/join/join-1.png") no-repeat center center;
    background-size:100% 75%;
}
/*设置品牌介绍的logo*/
.my-font2{
    margin-top:10px;
    background-color:rgb(177, 105, 57);
    font-size:16px;
    width:160px;height:45px;
    text-align: center;
    line-height: 45px;
    border-radius:80px 0;   
}
/*设置下划线*/
.my-font2+div{
    border-bottom:2px solid rgb(177, 105, 57);
    width:50px;
}
/*设置图片*/
@media screen and (min-width:992px) {
   .my-img1,.my-img2{
    width:70%;height:85%;}
    .my-img2{
   margin-top:-350px;
   margin-left:30px;}
   .my-img1{
       margin-top:75px;
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
    .my-img3{margin-top:60px;}
    
}
.my-img1,.my-img2{
    background-color:rgb(234, 212, 193);
}
/*设置字体样式*/
.my-font3{
    margin-top:10px;
    color:rgb(177, 105, 57);
    line-height:35px;
    text-indent:35px;
    padding:10px;
}
.two-font1,.two-font2,.two-font3{
    font-size: 28px;
    text-indent: 0.01px;
    color: rgb(177, 105, 57);
    box-sizing: border-box;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0);
}
.two-font2{
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 1px;
}
.two-font3{
    font-size: 12px;
    text-indent: 0.01px;
    font-weight: normal;
    font-family: "Work Sans Extra Light";
}
.two-style>div{
    width:110px;height:110px;
    background-color: rgb(234, 212, 193);
    border: 4px solid rgb(177, 105, 57);
    border-radius: 50%;
    box-shadow: none;
    margin-left:40px;
}
.two-style>div>p{
    color: rgb(177, 105, 57);
    /* box-sizing: border-box; */
    font-weight: bold;
    font-size: 16px;
    font-family: 微软雅黑;
    text-align: center;
    overflow-wrap: normal;
    overflow-wrap: break-word;
    margin-top:25%;
}


 .left div:nth-child(2)>p,.right div:nth-child(2)>p{
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: rgb(177, 105, 57);
    line-height: 2.2em;
    font-size: 16px;
}
.teo,.last{
    margin-top:20px;
}
</style>
