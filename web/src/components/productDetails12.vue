<template>
  <div class="container">
    <div class="row m-0">
        <div class="col-md-6 col-sm-12 p-0 mt-5">
 <div>
    <div class="move" @mouseover="over()" @mouseout="out()" @mousemove="move($event)"> 
        <div id="small"> 
        <div id="float"></div>  
        <img src="../../public/img/productDetails/product-15.png" id="smallimg"></div>  
    </div>
      <div id="big"><img src="../../public/img/productDetails/product-15.png"></div>    
  </div>
            <div><img class="my-img1" src="../../public/img/productDetails/product-15.png" /></div>
            </div>
        <div class="col-md-6 col-sm-12 p-0 mt-5">
            <h5>芒果盒子</h5>
            <ul class="stars p-0">
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
            </ul>
            <p class="bg-light mt-3 mb-3">价格：
                <span>￥15.00/项</span>
                <span class="border border-danger p-1 ml-2">新品</span>
            </p>
            <p>运输：<span>虚拟产品</span></p>
            <p>数量：
                <el-button class="count" type="light">{{i}}</el-button>
                <el-button @click="add" class="icon1" type="light" icon="el-icon-arrow-up"></el-button>
                <el-button @click="min" class="icon2" type="light" icon="el-icon-arrow-down"></el-button>
                <span>项</span>
                <span>剩余库存：</span>
                <span>9999项</span>
            </p>
            <el-button class="bg-danger text-white" icon="el-icon-shopping-cart-2">加入购物车</el-button>
            <el-button class="bg-info text-white">立刻购买</el-button>
            <p class="mt-3">发货期：<span>1天交货</span></p>
        </div>
    </div>
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
</template>
<script>
  var i, float,smallimg,big,bigImg,small,float_maxJL_t,float_maxJL_l,bigImg_maxJL_t,bigImg_maxJL_l;
export default {
  data(){
      return{
          activeName:'first',
          i:1
      }
  },
    mounted(){
      float = document.getElementById("float"); //左侧遮罩层
      smallimg = document.getElementById("smallimg"); //左边的小图
      big = document.getElementById("big"); //右侧可视区域
      bigImg = big.getElementsByTagName("img")[0]; //右侧大图
      small = document.getElementById("small");// 左侧的容器
       
      //得到右侧可视区的宽高
      var bigW = big.clientWidth;
      var bigH = big.clientHeight;

      //右侧大图的宽高
      var bigImgW = bigImg.offsetWidth;
      var bigImgH = bigImg.offsetHeight;

      //左侧的小图的宽高
      var smallImgW = smallimg.offsetWidth;
      var smallImgH = smallimg.offsetHeight;

      //左侧遮罩层的宽高
      float.style.width =  bigW/bigImgW * smallImgW + "px";   //175
      float.style.height = bigH/bigImgH * smallImgH/3*2 + "px";     

      //遮罩层运动的最大距离
      float_maxJL_l = smallimg.clientWidth -float.offsetWidth;
      float_maxJL_t = smallimg.clientHeight - float.offsetHeight;

      //右侧图片运动的最大距离
      bigImg_maxJL_l = bigImg.clientWidth - big.offsetWidth;
      bigImg_maxJL_t = bigImg.clientHeight - big.offsetHeight;

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
        big.style.visibility ="visible";
        big.style.display = "block";
      }, 

      //鼠标移出左侧区域使遮罩层以及右侧大图不可见
      out: function () {
        float.style.visibility ="hidden";
        big.style.display = "none";
      }, 

      //鼠标移动时遮罩层随鼠标的移动而移动
      move: function (e) {
        var l = e.clientX-smallimg.offsetWidth-float.offsetWidth/2;
        var t = e.clientY-smallimg.offsetHeight-float.offsetHeight/2;
        
        if( l < 0 ) l = 0;     // 超出左边界赋值为0
        if( t < 0 ) t = 0;     // 超出上边界赋值为0

        if( l > float_maxJL_l ) l = float_maxJL_l;  //限制其运动范围在容器之内
        if( t > float_maxJL_t ) t = float_maxJL_t;

        //求出来一个比例
        var scaleL = l/float_maxJL_l;
        var scaleT = t/float_maxJL_t;

         //遮罩层运动位置
        float.style.left = l + "px";
        float.style.top = t + "px"; 

         //右侧大图运动位置
        bigImg.style.left = -scaleL * bigImg_maxJL_l + "px";
        bigImg.style.top = -scaleT * bigImg_maxJL_t + "px";
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
    width: 120px;
    height: 120px;
    position: absolute;     
    background: rgb(255,255,255,0.5);
    border: 1px solid #ccc;
    opacity: 0.5;
    cursor:move ;
  }
      #big {
    position: absolute;  
    top: 0px;
    left: 70%;
    width: 340px;
    height: 400px;
    overflow: hidden;
    border: 1px solid #ccc;
    background: #ffffff;
    z-index: 1;
    visibility: hidden;
  }
  #small {
    position: relative;  
    z-index: 1;
  }
 #small img{
      width: 340px;
      height:320px;
      border:1px solid #ddd;
    }
  #big img{
    position: absolute;   
    z-index: 5;
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
/*设置右边星星的样式*/
.stars{
    width:5%;
    display:flex;
    list-style: none;
}
.my-img2{
    width:20px;height:20px;
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
    background:red !important;color:#fff !important;
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

