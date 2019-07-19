<template>
<div>
<div class="icon">
  <i class="el-icon-arrow-left"></i>
  <i class="el-icon-shopping-cart-full"></i>
  <i class="el-icon-more"></i>
  </div>
  <p class="text-danger mt-2">￥15.00/项</p>
  <p class="myfont ml-2">新品
      <span class="float-right mr-4">联系我们 </span>
  </p>
  <p>奶酥核桃吐司</p>
  <p>发货期 1天</p>
  <div class="d-flex">
  <mt-cell title="产品参数" to="//github.com" is-link ></mt-cell>
  <i class="el-icon-arrow-right"></i></div>
  <p>发货方式：<span>虚拟产品</span></p>
  <mt-cell title="产品评论(0)" is-link>
  <span style="color: green">查看全部</span>
</mt-cell>
<p class="text-center">详细描述</p>
<p>奶酥核桃吐司</p>
<mt-tabbar class="d-flex">
  <mt-tab-item id="tab1">
    <el-button><i class="el-icon-receiving"></i><p>首页</p></el-button>
  </mt-tab-item>
  <mt-tab-item id="tab2">
      <el-button><i class="el-icon-chat-dot-round"></i><p>客服</p></el-button>
  </mt-tab-item>
  <mt-tab-item id="tab3">
   <el-button type="danger" class="text-white"> 加入购物车</el-button>
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <el-button type="info" class="text-white">立刻购买</el-button>
  </mt-tab-item>
</mt-tabbar>
</div>
</template>
<script>
export default {
  data(){
      return{}
  },
  created:function () {
            this.$emit('myfooter', false);
        }
}
</script>
<style>
.icon{
    background:url("../../../public/img/productDetails/product-details-2.png")no-repeat;
   background-size:cover;
   width:100%;height:300px;
   display: fixed;
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
.el-icon-more{
    margin-left:10px;
    font-size:20px;
}
.el-icon-arrow-right{
    margin-left:280px;
    margin-top:5px;
}
#tab1{
    width:50px;height:50px;
}
.el-icon-receiving,.el-icon-chat-dot-round{
    font-size:20px;
}
.el-button{
width:94px;height:60px;
text-align: center;
line-height: 60px;
border-radius:0 !important;
border:0 !important;
}

</style>
