<template>
<div class="container">
    <div class="item"></div>
    <!-- 第一部分 -->
    <div>
        <div class="text-white my-font2">品牌介绍</div>
        <div class="w-100"></div>
    </div>
    <div class="row m-0">
        <div class="col-md-6 col-sm-12 p-0">
            <div class="my-img1 mb-3"></div>
            <img class="my-img2" src="../../public/img/join/join-2.png" alt="">
        </div>
        <div class="col-md-6 col-sm-12 p-0 my-font3">
            <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
            <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
        </div>
    </div>
    <!-- 第二部分 -->
    <div>
        <div class="text-white my-font2">品牌特色</div>
        <div class="w-100"></div>
    </div>
    <div class="row m-0">
        <div class="col-md-9 col-sm-12 p-0">
             <p class="two-font1">来自欧洲  新鲜烘焙专家</p>
             <p class="two-font2">烘焙 · 快乐 · 设计 · 生活</p>
             <p class="two-font3">Baking / Happy / Design / Life</p> 
             <div class="two-style d-inline-flex">
                 <div>
                     <p>极丰富的</p>
                     <p>高品质产品</p>
                 </div>
                 <div>
                     <p>明快通透的</p>
                     <p>购物环境</p>  
                 </div>
                 <div>
                     <p>轻松简洁的</p>
                     <p>设计调性</p>
                 </div>
                 <div>
                     <p>无压力感的</p>
                     <p>购物与生活</p>
                 </div>
             </div> 

        </div>
        <div class="col-md-3 col-sm-12 p-0">
            <img style="width:300px;height:390px;" src="../../public/img/join/join-3.png" alt="">
        </div>
    </div>

    <!-- 第三部分 -->
    <div row m-0 class="col-md-6 col-sm-12 p-0 d-inline-flex">
        <div class="left">
           <div>
              <div class="text-white my-font2">品牌介绍</div>
              <div class="w-50"></div>
           </div>
           <div>
               <p>·选择核心商圈位置,稳健有节奏的扩张</p>
               <p>· 面包+西点+蛋糕+素轻餐+健康饮品+庆典礼品(翻糖及礼盒)</p>
               <p>· 无漂白面粉全面使用,纯天然自制酵母</p>
               <p>· 研发配方,口味造型力求最佳</p>
               <p>· 通过Online的推广Campaign与整体运营</p>
               <p>· 为线下门店引导成倍的人流</p>
               <p>· 借Online平台的优势,进行全员维护,有力保障门店生意稳定</p>
               <p>· 借门店地段优势,进行落地接触活动,激活会员消费</p>
           </div>
           
           <div>
               <img style="width:500px;height:300px" src="../../public/img/join/join-4.png" alt="">
           </div>
        </div>

        <div class="right">
            <div>
              <div class="text-white my-font2">品牌介绍</div>
              <div class="w-50"></div>
           </div>
           <div>
               <p>位置选择：一类商圈A级铺面</p>
               <p>SHOPPING MALL 、大型卖场、商业中心等客流量充足的繁华地段</p>
               <p>十字路口大展示面</p>
               <p>优质A级规模社区沿街面面积需求：150-200平米为主</p>
               <p>地区首店，则大于200平米为佳</p>
               <p>有适合大型烘焙店的排污、排水、排气系统。水电气等能源能满足营</p>
               <p>运需要。</p>
           </div>
           <div>
               <img style="width:500px;height:300px" src="../../public/img/join/join-4.png" alt="">
           </div>
        </div>
    </div>



         
</div>
</template>
<script>
export default {
    data(){
        return{}
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
    width:100%;height:400px;
    background:url("../../public/img/join/join-1.png") no-repeat center center;
    background-size:100% 100%;
}
/*设置品牌介绍的logo*/
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
.two-font1,.two-font2,.two-font3{
    font-size: 40px;
    text-indent: 0.01px;
    color: rgb(177, 105, 57);
    box-sizing: border-box;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0);
}
.two-font2{
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 1px;
}
.two-font3{
    font-size: 15px;
    text-indent: 0.01px;
    font-weight: normal;
    font-family: "Work Sans Extra Light";
}
.two-style>div{
    width:150px;height:150px;
    background-color: rgb(234, 212, 193);
    border: 4px solid rgb(177, 105, 57);
    border-radius: 120px;
    box-shadow: none;
}
.two-style>div>p{
    color: rgb(177, 105, 57);
    box-sizing: border-box;
    font-weight: bold;
    font-size: 20px;
    font-family: 微软雅黑;
    text-align: center;
    overflow-wrap: normal;
    overflow-wrap: break-word;
}


 .left div:nth-child(2)>p,.right div:nth-child(2)>p{
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: rgb(177, 105, 57);
    line-height: 2.2em;
    font-size: 16px;
}

</style>
