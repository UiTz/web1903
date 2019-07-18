<template>
    <div>
        <mmyheader></mmyheader>
        <div class="item"></div>
        <div class="container">
        <div class="text-white my-font2">品牌资讯</div>
        <div class="w-100"></div>
        <div class="media mt-3 ml-4 pb-2 border-bottom">
            <a href="#" class="media-left media-middle media-bottom">
                <img src="../../../public/img/company/company-2.png" alt="">
            </a>
            <div class="media-body">
                <router-link to="/companyOne" class="media-heading mylink mr-3 text-dark">酸奶芝士蛋糕的做法 无油低热不腻</router-link>
                <p class="my-font">2019/5/25</p>
            </div>
        </div>
        <div class="media mt-3 ml-4 pb-2 border-bottom">
            <a href="#" class="media-left media-middle media-bottom">
                <img src="../../../public/img/company/company-3.png" alt="">
            </a>
            <div class="media-body">
                <router-link to="/companyTwo" class="media-heading mylink mr-3 text-dark">榴莲千层蛋糕的做法 入口细腻香甜不油腻</router-link>
                <p class="my-font">2019/5/25</p>
            </div>
        </div>
        <div class="media mt-3 ml-4 pb-2 border-bottom">
            <a href="#" class="media-left media-middle media-bottom">
                <img src="../../../public/img/company/company-4.png" alt="">
            </a>
            <div class="media-body">
                <router-link to="/companyThree" class="media-heading mylink mr-3 text-dark">杨枝甘露蛋糕的做法 还会爆浆噢</router-link>
                <p class="my-font">2019/5/25</p>
            </div>
        </div>
        <div class="media mt-3 ml-4 pb-2 border-bottom">
            <a href="#" class="media-left media-middle media-bottom">
                <img src="../../../public/img/company/company-5.png" alt="">
            </a>
            <div class="media-body">
                <router-link to="/companyFour" class="media-heading mylink mr-3 text-dark">提拉米苏的做法 520最幸福的事情</router-link>
                <p class="my-font">2019/5/25</p>
            </div>
        </div>
        <div class="media mt-3 ml-4 pb-2 border-bottom">
            <a href="#" class="media-left media-middle media-bottom">
                <img src="../../../public/img/company/company-6.png" alt="">
            </a>
            <div class="media-body">
                <router-link to="/companyFive" class="media-heading mylink text-dark mr-3">德国布雷结的做法 德国碱水包的做法</router-link>
                <p class="my-font">2019/5/25</p>
            </div>
        </div>
        <div class="media mt-3 ml-4 pb-2 border-bottom">
            <a href="#" class="media-left media-middle media-bottom">
                <img src="../../../public/img/company/company-7.png" alt="">
            </a>
            <div class="media-body">
            <router-link to="/companySix" class="media-heading mylink text-dark mr-3">艾草蒸蛋糕的做法 做一个有“艾”的蛋糕</router-link>
                <p class="my-font">2019/5/25</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import mmyheader from '../../components/moble/mmyheader'
    export default {
      data() {
          return {}
  },
  components:{
      mmyheader
  }
}
</script>
<style scoped>
/*背景样式*/
.container{
    padding:0;
}
.item{
    background:url("../../../public/img/company/company-1.png") no-repeat;
    background-size:100% 80%;
    width:100%;height:300px;
}
/*设置标题的样式*/
.my-font2{
    margin-top:10px;
    background-color:rgb(177, 105, 57);
    font-size:16px;
    width:150px;height:50px;
    text-align: center;
    line-height: 50px;
    border-radius:80px 0;
    
}
/*设置标题的下划线*/
.my-font2+div{
    border-bottom:2px solid rgb(177, 105, 57);
}
/*设置图文的样式*/
img{
    width:150px;height:80px;
    margin-right:20px;
    line-height:30px;
}
/*设置段落的样式*/
.mylink{
    display: block;
}
</style>

