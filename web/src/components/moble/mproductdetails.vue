<template>
<div>
<div class="top d-flex">
<i class="el-icon-arrow-left"></i>
<i class="el-icon-shopping-cart-full mt-3"></i>
 <el-col>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-more mt-3 text-dark"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-s-comment">消息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-home">首页</el-dropdown-item>
        <el-dropdown-item icon="el-icon-share">分享</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</div>
<img class="w-100" src="../../../public/img/productDetails/product-details-2.png" alt="">
<div class="item">
<h5 class="text-danger mt-2">￥15.00/项</h5>
<div>
<span class="myfont bg-danger text-white">新品</span>
<span class="float-right px-1 mr-1 bg-primary">联系我们</span></div>
<p class="mt-1">奶酥核桃吐司</p >
<mt-cell title="发货期：1天"></mt-cell >
<mt-cell title="产品参数" is-link ></mt-cell>
<mt-cell title="发货方式：虚拟产品"></mt-cell>
<mt-cell title="产品评论(0)" is-link>
<span style="color:red;">查看全部</span></mt-cell>
<mt-cell title="暂无评论"></mt-cell>
<mt-cell title="详细描述"></mt-cell>
<mt-cell title="奶酥核桃吐司"></mt-cell>
</div>
<mt-tabbar class="d-flex" fixed>
<mt-tab-item id="tab1">
<router-link to="/mindex" class="text-dark">
<i class="el-icon-receiving"></i>
<p>首页</p >
</router-link>
</mt-tab-item>
<mt-tab-item id="tab2">
<router-link to="/mlogin" class="text-dark">
<i class="el-icon-chat-dot-round"></i>
<p>客服</p >
</router-link>
</mt-tab-item>
<mt-tab-item id="tab3" class="bg-danger myheight text-white text-center">
加入购物车
</mt-tab-item>
<mt-tab-item id="tab4" class="bg-info myheight text-white">
立刻购买
</mt-tab-item>
</mt-tabbar>
</div>
</template>
<script>
export default {
data(){
return{ 

}
}
}
</script>
<style>
footer {
display:none !important;
}
.top{
position:fixed;
background:rgba(216,62,62,0.372);
width:100%;height:50px;
top:0;left:0;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
.el-icon-arrow-left{
margin-left:20px;
margin-top:20px;
font-size:20px;
}
.el-icon-shopping-cart-full{
margin-left:260px;
font-size:20px;
}
.item{
   padding-left:10px;
}
.el-icon-more{
margin-left:10px;
font-size:20px;
}
.el-icon-arrow-right{
margin-left:260px;
margin-top:5px;
margin-bottom:20px;
}
.mt-cell{
display: flex;
}
.mint-tab-item{
width:90px;height:100px;
text-align: center;
margin-bottom:0;
}
.mint-tab-item-label{
    font-size:15px !important;
}
.myheight{
    padding-top:15px !important;
}
.el-icon-receiving,.el-icon-chat-dot-round{
font-size:20px;
}
.el-button{
width:100px;height:60px;
text-align: 10%;
line-height: 60px;
border-radius:0 !important;
border:0 !important;
}
.mt-tabbar{
display:fixed;
}
.mint-tabbar.is-fixed{
    bottom:-50px !important;
}
</style>