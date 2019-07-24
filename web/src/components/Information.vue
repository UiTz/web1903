<template>
  <div class="container">
    <div class="title">{{ information.title }}</div>
    <div class="center">
      <span>{{ information.datetime }}</span>
      <span class="ml-4">来自</span>
      <span class="ml-4" style="color:#2E8DED;">杨楚</span>
      <img class="trueImg" src="../../public/img/news/ShopEntrepTrue.png" alt="">
    </div>
    <div class="mt-5 cakeimg"><img :src="information.img_url" alt=""></div>
    <!-- 文字说明 -->
    <div class="bottom mt-5">
      <p class="content">{{ information.content }}</p>
      <p class="mt-5"></p>
      <p class="copyright mt-5">资讯编号：{{ information.serial_number }}</p>
    </div>
    <!-- 点赞-分享 -->
    <div class="handleBtnsLine d-flex">
      <div class="handleBtns mr-5">
        <a href="javascript:" style="text-decoration:none">
          <span class="pic0 mr-2"><img class="mb-2" src="../../public/img/speak/good-1.png" alt=""></span>
          <span class="zan">点赞</span>
        </a>
      </div>
      <div class="handleBtns mr-5">
        <!-- <span class="pic5"><img class="mb-2" src="../../public/img/speak/good-2.png" alt=""></span>  -->
        <el-dropdown>
          <el-button type="none" class="el-icon-share zan font-16">
            分享
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>分享</el-dropdown-item>
            <el-dropdown-item>QQ好友</el-dropdown-item>
            <el-dropdown-item>微信/朋友圈</el-dropdown-item>
            <el-dropdown-item>新浪微博</el-dropdown-item>
            <el-dropdown-item>复制链接</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="handleBtns">
        <a href="javascript:" style="text-decoration:none">
          <span class="pic0 mr-2"><img class="mb-2" style="width:20px;height:20px;"
                                       src="../../public/img/speak/good-3.png" alt=""></span>
          <span class="zan font-14">举报</span>
        </a>
      </div>
    </div>
    <!-- 评论区 -->
    <!--<div class="discuss">-->
    <!--  <div>-->
    <!--    <span><strong>| 评论</strong></span>-->
    <!--    <span class="ml-3">共0条评论</span>-->
    <!--  </div>-->
    <!--  <div class="about mt-3">-->
    <!--    <div class="about1 p-10 mt-2">&nbsp;评论几句...</div>-->
    <!--    <div class="about2 p-2">-->
    <!--      <input type="text" placeholder="我来说两句" class="speak">-->
    <!--    </div>-->
    <!--    <div class="mt-1 m-1">-->
    <!--      <img style="width:20px;height:20px;" src="../../public/img/speak/good-5.png" alt=""> 表情-->
    <!--      <button class="button">提交</button>-->
    <!--    </div>-->
    <!--  </div>-->
    <!--  <div class="kong mt-3"><img src="../../public/img/speak/good-4.png" alt=""></div>-->
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        information: []
      }
    },
    created() {
      let id = this.$route.query.id;
      let url = 'information/api/querydetails';
      this.axios.get(url,{params:{id}}).then(result=> {
        if (result.data.code === 200) {
          this.information = result.data.result[0];
          console.log(this.information);
        }
      })
    }
  }
</script>
<style scoped lang="less">
  .el-icon-share:before{
    font-size: 21px;
  }
  .font-16{
    font-size: 16px;
    line-height: 4;
  }
  .cakeimg{
    margin: 0 auto;
    text-align: center;
  }
  .content{
    white-space: pre-wrap;
  }
  .trueImg{
    width: 65px;
    height: 24px;
    display: inline-block;
    margin-left: 20px;
  }
  .container {
    padding: 0;
    margin: 0 auto;
  }
  
  .title {
    font-weight: bold;
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 28px;
    margin-top: 40px;
  }
  
  .center {
    margin-top: 40px;
  }
  
  .bottom > p {
    color: #686868;
    font-size: 16px;
  }
  
  .copyright {
    text-align: right;
    font-size: 12px;
  }
  
  /* 点赞等功能 */
  .pic5 {
    margin-left: 2px;
  }
  
  .handleBtnsLine {
    width: 100%;
    /* box-sizing: border-box; */
    text-align: center;
    margin-left: 30%;
    margin-top: 60px;
  }
  
  .handleBtns {
    margin-bottom: 40px;
    position: relative;
    text-align: center;
    width: 100px;
    height: 34px;
    border: 1px solid #A1A1A1;
    border-radius: 5px;
    /* background-color:#A1A1A1; */
  }
  
  .handleBtns > ul {
    border: 1px solid #A1A1A1;
    border-radius: 8px;
    margin-top: 10px;
    width: 160px;
    text-align: left;
    list-style: none;
    background-color: #fff;
  }
  
  .handleBtns > ul > li {
    margin-top: 8px;
  }
  
  .handleBtns > ul > li > a {
    color: #A1A1A1;
  }
  
  .zan {
    line-height: 35px;
    color: #A1A1A1;
  }
  
  .about {
    border: 1px solid #686868;
    padding: 5px;
    border-radius: 5px;
  }
  
  .about1, .about2 {
    color: #333333;
  }
  
  .speak {
    height: 90px;
    width: 100%;
  }
  
  input::placeholder {
    text-align: left;
    margin-top: 25px;
    
  }
  
  .kong {
    border: 1px solid #A1A1A1;
    height: 175px;
    text-align: center;
    vertical-align: middle;
    border-radius: 5px;
  }
  
  .kong > img {
    margin-top: 40px;
  }
  
  .button {
    margin-left: 80%;
    width: 80px;
    height: 30px;
  }
  
  .el-button {
    border: none;
    height: 10px;
    margin-top: 2px;
    line-height: 9px;
    /* opacity: 0; */
  }
  
  .el-button:focus, .el-button:hover {
    background-color: #fff;
    color: #606266;
  }
  
  .el-dropdown-menu {
    left: 10px;
    /* text-align: center; */
  }
</style>
