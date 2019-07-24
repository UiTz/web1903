<template>
  <footer id="footer">
    <div class="row m-0">
      <div class="col-md-6 text-white p-0 col-sm-12">
        <div class="item  text-center mt-3">
          <h1>Tasty bread</h1>
          <p class="mt-4">Add / 公司地址：福建厦门湖里区软件园18号-404</p>
          <p>Tel / 电话：400 - 000 - 0000</p></div>
        <ul class="items">
          <li class="item1">福建</li>
          <li class="item2">厦门</li>
          <li class="item3">河北</li>
          <li class="item4">石家庄</li>
          <li class="item5">漳州</li>
          <li class="item6">泉州</li>
        </ul>
      </div>
      <div class="col-md-6 col-sm-12 p-0 item2">
        <div class="mr-5">
          <img class="my-img1" src="../../public/img/footer/footer-2.png" alt="">
          <p class="my-font">微信公众号</p></div>
        <div>
          <img class="my-img2" src="../../public/img/footer/footer-3.png" alt="">
          <p class="my-font">微信小程序</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped>
  /*设置背景图片*/
  #footer {
    margin-top: 80px;
    background-image: url("../../public/img/footer/footer-1.png")
  }
  
  /*列表样式*/
  ul.items {
    letter-spacing: 5px;
    list-style: none;
    display: flex;
    justify-content: center;
  }
  
  .item1 + .item2::before {
    content: "|";
    color: #fff;
  }
  
  .item2 + .item3::before {
    content: "|";
    color: #fff;
  }
  
  .item3 + .item4::before {
    content: "|";
    color: #fff;
  }
  
  .item4 + .item5::before {
    content: "|";
    color: #fff;
  }
  
  .item5 + .item6::before {
    content: "|";
    color: #fff;
  }
  
  /*设置布局方式*/
  .item2 {
    display: flex;
    text-align: center;
    color: white;
    justify-content: center;
  }
  
  /*设置图片大小*/
  .my-img1, .my-img2 {
    width: 100px;
    height: 100px;
    border: 0;
  }
  
  @media screen and (min-width: 992px) {
    .my-img1, .my-img2 {
      margin: 50px 50px 0 60px;
    }
    
    .my-font {
      margin-left: 10px;
    }
  }
  
  @media screen and (max-width: 992px) and (min-width: 768px) {
    .my-img1, .my-img2 {
      margin: 50px 30px 0 20px;
    }
    
    .my-font {
      margin-right: 10px;
    }
  }
  
  /*设置字体样式*/
  .my-font {
    font-size: 14px;
    margin-top: 5px;
    color: #fff;
  }
</style>


