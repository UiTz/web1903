<template>
  <div>
    <div class="d-flex justify-content-center container">
        <div class="p-0 mt-5">
 <div>
    <div class="move" @mouseover="over()" @mouseout="out()" @mousemove="move($event)"> 
        <div id="small"> 
        <span id="float"></span>  
        <img src="../../public/img/productDetails/product-details-2.png" id="smallimg">
        </div>  
    </div>
      <div id="big"><img  src="../../public/img/productDetails/product-details-2.png"></div>    
      <img class="my-img1" src="../../public/img/productDetails/product-details-2.png" />
            </div>
  </div>     
        <div class=" p-0 mt-5 mycontent">
            <h5>奶酥核桃吐司</h5>
            <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
            </el-rate>
            <p class="bg-light mt-3 mb-3">价格：
                <span>￥15.00/项</span>
                <span class="border border-danger p-1 ml-2">新品</span>
            </p>
            <p>运输：<span>虚拟产品</span></p>
            <p class="mt-3">数量：
                <el-button class="count" type="light">{{i}}</el-button>
                <el-button @click="add" class="icon1" type="light" icon="el-icon-arrow-up"></el-button>
                <el-button @click="min" class="icon2" type="light" icon="el-icon-arrow-down"></el-button>
                <span>项</span>
                <span>剩余库存：</span>
                <span>9999项</span>
            </p>
            <el-button class="bg-danger text-white mt-3" icon="el-icon-shopping-cart-2">加入购物车</el-button>
            <el-button class="bg-info text-white mt-3">立刻购买</el-button>
            <p class="mt-3">发货期：<span>1天交货</span></p>
        </div>
    </div>
    <div class=" mycontent1">
    <div class="mt-3">
    <el-dropdown>
  <span class="el-dropdown-link">
    <i class="el-icon-share el-icon--right"></i>分享
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>qq好友</el-dropdown-item>
    <el-dropdown-item>微信好友/朋友圈</el-dropdown-item>
    <el-dropdown-item>新浪微博</el-dropdown-item>
    <el-dropdown-item>复制链接</el-dropdown-item>
   </el-dropdown-menu>
  </el-dropdown>
        <el-button clas="item1" icon="el-icon-user-solid">联系商家</el-button>
        <el-button clas="item1" icon="el-icon-phone">联系我们</el-button>
        </div>
   <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="产品详情" name="first">
        <div class="w-100 my-style0">
        <p class="my-style1">
            <span>产品名称：
            <span>奶酥核桃吐司</span></span>
            <span class="pr-5">单位：<span>项</span></span>
            <span class="pr-5">SKU: <span>1000010100</span></span>
            </p>
            <p class="my-style1">
            <span>产品保质期 ：
            <span>7天</span></span>
            <span class="pl-5">产品所在地:<span>上海</span></span>
            <span class="pr-5">产品编码:<span>M00000025550</span></span>
            </p>
            <p class="ml-3">是否危险产品：<span>否</span></p>
    </div>
    <el-tabs type="border-card">
    <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 全部评价(0)</span>
        <img  src="../../public/img/productDetails/product-details-3.png" alt="">
    </el-tab-pane>
    <el-tab-pane label='晒图(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
    <el-tab-pane label='追评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
    <el-tab-pane label='好评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
    <el-tab-pane label='中评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
    <el-tab-pane label='差评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
   </el-tabs>
    </el-tab-pane>
        <el-tab-pane label="累计评价" name="second">
        <el-tabs type="border-card">
    <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 全部评价(0)</span>
    <img  src="../../public/img/productDetails/product-details-3.png" alt="">
  </el-tab-pane>
  <el-tab-pane label='晒图(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
  <el-tab-pane label='追评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
  <el-tab-pane label='好评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
  <el-tab-pane label='中评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
  <el-tab-pane label='差评(0)'><img  src="../../public/img/productDetails/product-details-3.png" alt=""></el-tab-pane>
</el-tabs>
</el-tab-pane>
  </el-tabs>
  </div>
  </div>
</template>
<script>
  var i, float,smallimg,big,bigImg;
export default {
  data(){
      return{
          activeName:'first',
          i:1,
          value:4.5
      }
  },
    mounted(){
      float = document.getElementById("float"); //左侧遮罩层
      big = document.getElementById("big"); //右侧可视区域
      bigImg = big.getElementsByTagName("img")[0]; //右侧大图
    
      big.style.display = "none";
      float.style.visibility ="hidden"; //鼠标未移入左侧区域使遮罩层以及右侧大图均不可见
    },

    methods: {
        handleClick(tab,event){
       console.log(tab,event)},
       add(){
           this.i++;
       },
       min(){
           this.i<=1 ? 1:this.i--;
       },
    //鼠标移入左侧区域使遮罩层以及右侧大图可见
      over: function () {
        float.style.visibility ="visible";
        //big.style.visibility ="visible";
        big.style.display = "block";
      }, 

      //鼠标移出左侧区域使遮罩层以及右侧大图不可见
      out: function () {
        float.style.visibility ="hidden";
        big.style.display = "none";
      }, 

      //鼠标移动时遮罩层随鼠标的移动而移动
      move: function (e) {
        var MSIZE=330;//记录小mask的大小
        var SMSIZE=400;
        var l =e.offsetX-MSIZE/2;
        var t =e.offsetY-MSIZE/2;
        
        if( l < 0 ){ l = 0; }
        else if( l > SMSIZE-MSIZE ){
             l = SMSIZE-MSIZE; 
        }    
        if( t < 0 ) {t = 0;}
        else if(t > SMSIZE-MSIZE) {
            t = SMSIZE-MSIZE;
        }    

        //求出来一个比例
        var scale = 500/400;

         //遮罩层运动位置
        float.style.left = l + "px";
        float.style.top = t + "px"; 

         //右侧大图运动位置
       bigImg.style.left=-scale*l+'px';
       bigImg.style.top =-scale*t + "px";
      }
    }
    }
</script>
<style scoped>
/*设置全局的间距*/
.container{
    padding:0;margin:0;
    margin:0 auto;
}
/*放大镜*/
#float {
    width:330px;
    height:330px;
    position: absolute;     
    background:url("../../public/img/productDetails/selector.png");
    background-size:cover;
    border: 1px solid #ccc;
    opacity: 0.5;
    cursor:move;
  }
      #big {
    position: absolute;  
    top:320px;
    left:50%;
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-size:cover;
    border: 1px solid #ccc;
    background: #ffffff;
    z-index: 1;
    /*visibility: hidden;*/
  }
  #small {
    position: relative;  
    z-index: 1;
  }
 #smallimg{
      width:400px;
      height:400px;
      border:1px solid #ddd;
    }
  #big img{
    position: absolute;  
    top:50%; 
    z-index:3;
    width:500px;
    height:500px;
  }
/*设置左边图片的样式*/
.my-img{
    border:1px solid #ddd;
    margin-top:50px;
    width:70%;
}
.my-img1{
    margin-top:30px;
    width:15%;height:50px;
    border:1px solid red;
}
@media screen and (min-width:992px){
    .mycontent1{
    margin-left:13%;
    width:75%;
   }
}
@media screen and (max-width:992px) and (min-width:678px) {
    .mycontent1{margin-left:-20%;
    width:100%;}
}
@media screen and (max-width:678px) {
    .mycontent1{width:100%;}
}
.my-img2{
    width:20px;height:20px;
}
.mycontent{
    margin-left:200px;
}
.item{
    display:flex;
    flex-direction: column;
}
div>.el-button{
    border:0px solid #DCDFE6 !important;
}
div>.el-button:hover{
    background:#fff;
}
/*设置评论的样式*/
.my-style0{
    border:1px solid #ddd;
    border-top:0;
    
}
.my-style1{
    margin-left:20px;
    display:flex;
    justify-content: space-between;
}
/*商品详情的背景样式*/
.el-tabs--card>.el-tabs__header .el-tabs__item:hover{
    color:#000 !important;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    background:red !important;
    color:#fff !important;
    border-bottom-color:red !important;
}
/*全部评价的字体样式*/
.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
color:red !important;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
color:red !important;
}
</style>

