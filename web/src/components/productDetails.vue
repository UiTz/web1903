<template>
  <div class="container">
    <div class="row m-0">
        <div class="col-md-6 col-sm-12 p-0 mt-5">
            <div> 
        <img class="w-75" src="../../public/img/productDetails/product-details-1.png" id="smallimg">  
      </div>
            <div><img class="my-img1" src="../../public/img/productDetails/product-details-2.png" /></div>
            </div>
        <div class="col-md-6 col-sm-12 p-0 mt-5">
            <h5>奶酥核桃吐司</h5>
            <ul class="stars">
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
                <li><img class="my-img2" src="../../public/img/productDetails/star.png" alt=""></li>
            </ul>
            <p class="bg-light mt-3 mb-3">价格：
                <span>￥15.00/项</span>
                <span>新品</span>
            </p>
            <p>运输：<span>虚拟产品</span></p>
            <p>数量：
                <el-button type="light">1</el-button>
                <el-button class="icon1" type="light" icon="el-icon-arrow-up"></el-button>
                <el-button class="icon2" type="light" icon="el-icon-arrow-down"></el-button>
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
export default {
  data(){
      return{
          activeName:'first',
      }
  },
    methods:{
        handleClick(tab,event){
       console.log(tab,event)}
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

