<template>
  <div>
    <div class="item"></div>
    <div class="container">
      <div class="text-white my-font2">品牌资讯</div>
      <div class="w-100"></div>
      <div class="media mt-5" v-for="(item,index) of information" :key="index">
        <a href="javascript:" @click="goInformation" class="media-left media-middle media-bottom">
          <img :src="item.img_url" :data-id="item.id" alt="">
        </a>
        <div class="media-body">
          <h5 class="media-heading">{{ item.title }}</h5>
          <p class="my-font">{{ item.content }}</p>
          <button class="btn" @click="goInformation" :data-id="item.id">现在阅读</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        information: []
      }
    },
    methods: {
      goInformation (e) {
        let id = e.target.dataset.id;
        this.$router.push({ path: '/Information',query: {id} })
      }
    },
    created() {
      this.axios.get('information/api/queryall').then(result=> {
        if (result.data.code === 200) {
          //console.log(result.data.result);
          this.information = result.data.result;
        } else {
          this.$message({
            message: '加载失败请刷新~'
          })
        }
      })
    }
  }
</script>
<style scoped>
  /*背景样式*/
  .container {
    padding: 0;
  }
  
  .item {
    background: url("../../public/img/company/company-1.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 600px;
  }
  
  /*设置标题的样式*/
  .my-font2 {
    margin-top: 50px;
    background-color: rgb(177, 105, 57);
    font-size: 22px;
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 80px 0;
    
  }
  
  /*设置标题的下划线*/
  .my-font2 + div {
    border-bottom: 2px solid rgb(177, 105, 57);
  }
  
  /*设置图文的样式*/
  img {
    width: 300px;
    height: 200px;
    margin-right: 20px;
    line-height: 30px;
  }
  
  /*设置段落的样式*/
  .my-font {
    line-height: 40px;
    color: darkgray;
    height: 107px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  
  .btn {
    background: rgb(177, 105, 57);
    width: 180px;
    height: 50px;
    color: white;
    text-align: center;
    line-height: 38px;
    margin-top: 11px;
  }
</style>
