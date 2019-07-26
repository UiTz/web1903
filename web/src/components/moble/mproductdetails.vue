<template>
  <div>
    <div class="top d-flex">
      <router-link to="/mproduct" slot="left">
        <mt-button icon="back" class="mybtn"></mt-button>
      </router-link>
      <router-link to="/mlogin">
        <i class="el-icon-shopping-cart-full mt-3 text-dark"></i>
      </router-link>
      <el-col>
        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-more mt-3 text-dark"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-comment">消息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-s-home">
              <router-link to="/mindex" class="text-dark">首页</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-share">分享</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </div>
    <img class="w-100 productImg" src="../../../public/img/productDetails/product-details-2.png" alt="">
    <div class="item">
      <h5 class="text-danger mt-2">￥15.00/项</h5>
      <div>
        <span class="myfont bg-danger text-white">新品</span>
        <span class="float-right px-1 mr-1 bg-primary">联系我们</span></div>
      <p class="mt-1">奶酥核桃吐司</p>
      <mt-cell title="发货期：1天"></mt-cell>
      <mt-cell title="产品参数">
        <i @click="popupVisible= true" class="el-icon-arrow-right mt-3"></i></mt-cell>
        <mt-popup
                v-model="popupVisible"
                position="bottom"
                style="height:400px;">
          <mt-cell style="width:380px;height:50px;" title="产品参数"></mt-cell>
          <mt-cell style="width:380px;height:50px;" title="单位：项"></mt-cell>
          <mt-cell style="width:380px;height:50px;" title="产品ID：M00000025550"></mt-cell>
          <mt-cell style="width:380px;height:50px;" title="产地：上海"></mt-cell>
        </mt-popup>
      <mt-cell title="发货方式：虚拟产品"></mt-cell>
      <mt-cell title="产品评论(0)">
        <span style="color:red;" @click="popupVisible1= true">查看全部</span>
      </mt-cell>
      <mt-popup
              v-model="popupVisible1"
              position="right">
        <mt-cell title="评价" class="mywrapper">
          <router-link to="/mproductdetails" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-cell>
        <div style="border-bottom:1px solid #ddd">
          <mt-button class="btn">全部(0)</mt-button>
          <mt-button class="btn">最新(0)</mt-button>
          <mt-button class="btn">有图(0)</mt-button>
          <mt-button class="btn">好评(0)</mt-button>
          <mt-button class="btn">中评(0)</mt-button>
          <mt-button class="btn">差评(0)</mt-button>
          <mt-button class="btn">追评(0)</mt-button>
        </div>
        <img src="../../../public/img/header/view.png" alt="">
      </mt-popup>
      <mt-cell title="暂无评论"></mt-cell>
      <mt-cell title="详细描述"></mt-cell>
      <mt-cell title="奶酥核桃吐司"></mt-cell>
    </div>
    <mt-tabbar class="d-flex" fixed>
      <mt-tab-item id="tab1">
        <router-link to="/mindex" class="text-dark">
          <i class="el-icon-receiving"></i>
          <p>首页</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <router-link to="/mlogin" class="text-dark">
          <i class="el-icon-chat-dot-round"></i>
          <p>客服</p>
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
    data() {
      return {
        popupVisible: false,
        popupVisible1: false
      }
    }
  }
</script>
<style scoped lang="less">
  .productImg{
    margin-top: 50px;
  }
  /*footer {
    display: none !important;
  }*/
  
  .mint-button {
    background: pink !important;
  }
  
  .mint-button::after {
    background: red !important;
    border: 0 !important;
  }
  
  .mint-popup-right {
    top: 34% !important;
  }
  
  .mint-cell-wrapper {
    width: 100% !important;
    
  }
  
  .mywrapper {
    background: #ddd !important;
  }
  
  .mint-button {
    background: rgba(216, 62, 62, 0.001) !important;
    margin-top: 5px;
  }
  
  .top {
    position: fixed;
    background: rgba(216, 62, 62, 0.372);
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
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
  
  .el-icon-arrow-left {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
  
  .el-icon-shopping-cart-full {
    margin-left: 260px;
    font-size: 20px;
  }
  
  .item {
    padding-left: 10px;
  }
  
  .el-icon-more {
    margin-left: 10px;
    font-size: 20px;
  }
  
  .el-icon-arrow-right {
    margin-left: 260px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  
  .mt-cell {
    display: flex;
  }
  
  .mint-tab-item {
    width: 90px;
    height: 100px;
    text-align: center;
    margin-bottom: 0;
  }
  
  .mint-tab-item-label {
    font-size: 15px !important;
  }
  
  .myheight {
    padding-top: 15px !important;
  }
  
  .el-icon-receiving, .el-icon-chat-dot-round {
    font-size: 20px;
  }
  
  .el-button {
    width: 100px;
    height: 60px;
    text-align: 10%;
    line-height: 60px;
    border-radius: 0 !important;
    border: 0 !important;
  }
  
  .mt-tabbar {
    display: fixed;
  }
  
  .mint-tabbar.is-fixed {
    bottom: -50px !important;
  }
</style>
