<template>
<div>
    <div class="bread-img1"></div>
    <div class="container">
            <div class="footer1-div">
                <!--产品系列-->
                <div class="footer1-div-div">
                    <span>产品系列</span>
                    <!--产品系列下边的下划线-->
                </div>
                <div class="footer1-border"></div>
                </div>
            <!--</div>-->
            <!--产品系列下面的面包系列-->
            <div class="breadSeries">
                <!--五个div,一个大的包含三个小的，其中三个包含三个span-->
                <!--x：300 h:71-->
                <!--w 250-->
                <div class="breadSeries3div">
                <div class="breadSeries-div1">
                    <span class="bread-span1">BREAD</span>
                </div>
                <!--x：150 h:26-->
                <div class="breadSeries-div2">
                    <span class="bread-span2">面包系列</span>
                </div>
                <!--x：290 h:42-->
                <div class="breadSeries-div3">
                    <span class="bread-span3">甄选小麦粉，纯天然自制酵母发酵面团<br/>使用牛奶代替纯净水揉面</span>
                </div>
                </div>
                <!--x：240 h:204-->
                <div class="breadSeries1div">
                    <div class="breadSeries-div4"></div>
                </div>
            </div>
            <!--w:1200 h:220.8面包系列下面-->
            <!--<div class="carousel">
                <div class="leftjt">
                <i class="iconfont icon-zuofanye-xue"></i>
                </div>
                <div class="carousel-div">
                    <ul class="carouse-ul">
                        <li class="carouse-ul-li1">
                            <div class="carouse-ul-li1-div11"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div">奶酥核桃吐司</div>
                            </a>
                            <div class="carouse-ul-li1-div2">
                                <span class="carouse-span">￥15.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li2">
                            <div class="carouse-ul-li1-div12"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div">芒果岩烧吐司</div>
                            </a>
                            <div class="carouse-ul-li1-div2">
                                <span class="carouse-span">￥20.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li3">
                            <div class="carouse-ul-li1-div13"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div">奥利奥榴莲</div>
                            </a>
                            <div class="carouse-ul-li1-div2">
                                <span class="carouse-span">￥17.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li4">
                            <div class="carouse-ul-li1-div14"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div">法式杏仁可颂</div>
                            </a>
                            <div class="carouse-ul-li1-div2">
                                <span class="carouse-span">￥15.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li5">
                            <div class="carouse-ul-li1-div15"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div">伯爵红茶脆皮</div>
                            </a>
                            <div class="carouse-ul-li1-div2">
                                <span class="carouse-span">￥20.00</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="rightjt">
                <i class="iconfont icon-youfanye"></i>
                </div>
            </div>-->
            <!--轮播-->
            <el-carousel :interval="2000" type="card" height="300px">
    <!--<el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{item}}</h3>
    </el-carousel-item>-->
    <el-carousel-item v-for="item in images" :key="item.id">
      <img :src="images.idimg" alt="">
    </el-carousel-item>
  </el-carousel>
<!--轮播结束-->
            <div class="cake">
                <!--四个div，其中三个包含三个span-->
                <div class="cake1div">
                    <div class="cake-div1"></div>
                </div>
                <!--x：300 h:71-->
                <!--包含3个div-->
                <div class="cake3div">
                    <div class="cake-div2">
                        <span class="cake-span1">CAKE</span>
                    </div>
                    <!--x：150 h:26-->
                    <div class="cake-div3">
                        <span class="cake-span2">蛋糕系列</span>
                    </div>
                    <!--x：290 h:42-->
                    <div class="cake-div4">
                        <span class="cake-span3">100%乳脂奶油与时令食材的相遇 设计蛋糕造型和口味的多种可能 寻找传统蛋糕场景与新意之间的平衡点</span>
                    </div>
                </div>
            </div>
                <!--草莓马卡龙~~榴莲飘飘慕斯盒子-->
            <div class="carousel-2">
                <div class="leftjt">
                <i class="iconfont icon-zuofanye-xue"></i>
                </div>
                <div class="carousel-div-2">
                    <ul class="carouse-ul-2">
                        <li class="carouse-ul-li1-2">
                            <div class="carouse-ul-li1-div11-2"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-2">冰雪奇缘</div>
                            </a>
                            <div class="carouse-ul-li1-div2-2">
                                <span class="carouse-span-2">￥198.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li2-2">
                            <div class="carouse-ul-li1-div12-2"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-2">小公主</div>
                            </a>
                            <div class="carouse-ul-li1-div2-2">
                                <span class="carouse-span-2">￥258.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li3-2">
                            <div class="carouse-ul-li1-div13-2"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-2">雪域牛乳芝士</div>
                            </a>
                            <div class="carouse-ul-li1-div2-2">
                                <span class="carouse-span-2">￥258.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li4-2">
                            <div class="carouse-ul-li1-div14-2"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-2">萌萌兔</div>
                            </a>
                            <div class="carouse-ul-li1-div2-2">
                                <span class="carouse-span-2">￥258.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li5-2">
                            <div class="carouse-ul-li1-div15-2"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-2">百分百恋人</div>
                            </a>
                            <div class="carouse-ul-li1-div2-2">
                                <span class="carouse-span-2">￥198.00</span>
                            </div>
                        </li>
                    </ul>
                </div> 
                <div class="rightjt">
                <i class="iconfont icon-youfanye"></i>
                </div>   
            </div>
            <div class="dessert">
                <!--四个div，其中三个包含三个span-->
                <!--x：300 h:71-->
                <!--西点系列-->
                <div class="dessert3div">
                    <div class="dessert-div1">
                        <span class="dessert-span1">BREAD</span>
                    </div>
                    <!--x：150 h:26-->
                    <div class="dessert-div2">
                        <span class="dessert-span2">西点系列</span>
                    </div>
                <!--x：290 h:42-->
                    <div class="dessert-div3">
                     <span class="dessert-span3">甄选小麦粉，纯天然自制酵母发酵面团<br/>使用牛奶代替纯净水揉面</span>
                    </div>
                </div>
                    <!--x：240 h:204-->
                <div class="dessert1div">
                    <div class="dessert-div4-div"></div>
                </div>
            </div>
            <div class="carousel-1">
                <div class="leftjt">
                <i class="iconfont icon-zuofanye-xue"></i>
                </div>
                <div class="carousel-div-1">
                    <ul class="carouse-ul-1">
                        <li class="carouse-ul-li1-1">
                            <div class="carouse-ul-li1-div11-1"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-1">草莓马卡龙</div>
                            </a>
                            <div class="carouse-ul-li1-div2-1">
                                <span class="carouse-span-1">￥12.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li2-1">
                            <div class="carouse-ul-li1-div12-1"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-1">芒果盒子</div>
                            </a>
                            <div class="carouse-ul-li1-div2-1">
                                <span class="carouse-span-1">￥20.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li3-1">
                            <div class="carouse-ul-li1-div13-1"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-1">双皮奶</div>
                            </a>
                            <div class="carouse-ul-li1-div2-1">
                                <span class="carouse-span-1">￥12.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li4-1">
                            <div class="carouse-ul-li1-div14-1"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-1">北海道草莓戚风杯</div>
                            </a>
                            <div class="carouse-ul-li1-div2-1">
                                <span class="carouse-span-1">￥15.00</span>
                            </div>
                        </li>
                        <li class="carouse-ul-li5-1">
                            <div class="carouse-ul-li1-div15-1"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div-1">榴莲飘飘慕斯盒子</div>
                            </a>
                            <div class="carouse-ul-li1-div2-1">
                                <span class="carouse-span-1">￥15.00</span>
                            </div>
                        </li>
                    </ul>
                </div> 
                <div class="rightjt">
                <i class="iconfont icon-youfanye"></i>
                </div>   
            </div>
    </div>
</div>
</template>
<script>
import iconfont from "../../public/css/font_gyt5hrnasow/iconfont.css"

export default {
    data(){
        return {
            images:[
                {id:0,idimg:require("../../public/img/product/product-2.png")},
                {id:1,idimg:require("../../public/img/product/product-3.png")},
                {id:2,idimg:require("../../public/img/product/product-4.png")},
                {id:3,idimg:require("../../public/img/product/product-5.png")},
                {id:4,idimg:require("../../public/img/product/product-6.png")}
                ]
        }
    },
    methods:{},
    mounted(){}
}
</script>
<style scoped>
    *{margin:0;padding:0}
        /*媒体查询大屏*/
@media screen and (min-width:1200px){
/*轮播*/
.el-carousel__item h3{
    color:#475669;
    font-size:14px;
    opacity: 0.75;
    line-height:200px;
    margin: 0;
  }
  /*2n*/
  /*  .el-carousel__item:nth-child(1){
    background-image:url("../../public/img/product/product-5.png");
  }*/
  /*2n+1*/
  /*.el-carousel__item:nth-child(2) {
   background-image:url("../../public/img/product/product-6.png");
  }*/
  .el-carousel__item:nth-child(3) {
   /* background-color: #d3dce6;*/
   background:url("../../public/img/product/product-2.png") no-repeat;
      /*margin:80px 0 0 300px;*/
      background-size:75% 80%;
            /*margin:30px 150px 0 150px;*/
            background-position:52% 50% !important;
  }
    .el-carousel__item:nth-child(4) {
   /* background-color: #d3dce6;*/
   background:url("../../public/img/product/product-3.png") no-repeat;
      /*margin:80px 0 0 300px;*/
      background-size:75% 80%;
            /*margin:30px 150px 0 150px;*/
               background-position:52% 50% !important;
  }
    .el-carousel__item:nth-child(5) {
    background:url("../../public/img/product/product-4.png") no-repeat;
      background-size:75% 80%;
            /*margin:30px 150px 0 150px;*/
               background-position:52% 50% !important;

      }
    .el-carousel__item:nth-child(6) {
    background:url("../../public/img/product/product-5.png") no-repeat;
      background-size:75% 80%;
           /* margin:30px 150px 0 150px;*/
            background-position:52% 50% !important;
      }
    .el-carousel__item:nth-child(7) {
    background:url("../../public/img/product/product-6.png") no-repeat;
      background-size:75% 80%;
            /*margin:30px 150px 0 150px;*/
            background-position:52% 50% !important;
      }
     /* .el-carousel__mask{
          width:50% !important;
      }*/
/*轮播结束*/
    .container{
        width:100%;
        margin:0 auto;
    }
    #paletteContent{
        width:1200px;
        height:80px;
    }
    .footer1{
        width:100%;
        height:2850px;
        /*background-color:sandybrown;*/
        /*设置居中*/
        margin:0 auto;
        }
    .bread{
        width:1448px;
        height:400px;
    }
    .bread-img1{
        width:100%;
        /*width:100%;*/
        height:400px;
        background:url("../../public/img/product/product-1.png") no-repeat center center;
        /*宽 高*/
        background-size:100% 240%;
    }
    .footer1-div{
        width:100%;
        height:82px;
        margin-top:125px;
    }
    .footer1-div-div{
        width:240px;
        height:52px;
        background-color:#b16939;
        border-radius:80px 0;
        /*position:absolute;*/
        left:20px;
        top:15px;
        text-align:center;
        line-height:52px;
        }
    .footer1-div-div>span{
        font-size:24px;
        text-indent:0.01px;
        box-sizing:border-box;
        color:rgb(255,255,255);
        font-family:微软雅黑;
    }
    /*产品系列下面的线*/
    .footer1-border{
        width:100%;
        height:0.5px;
        background-color:#b16939;
        /*margin-top:-3px;*/
    }
    /*面包系列1*/
    .breadSeries{
        /*margin:0 auto;*/
        margin:0 0 100px 0;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        /*justify-content:space-between;*/
        width:100%;

    }
    /*面包系列包含三个div的div*/
    .breadSeries3div{
        /*弹性布局不设置高*/
        width:300px;
        margin:0 0 0 225px;
    }
    /*面包系列包含图片div的div*/
    .breadSeries1div{
        width:240px;
        margin:29px 0 0 125px;
    }
    .breadSeries-div1{
        width:300px;
        height:71px;
        padding:0 0 0 2px;
        margin:20px 0 25px 4px;
        text-align:right;
        line-height:71px;

    }
    .breadSeries-div2{
        width:300px;
        height:26px;
        margin:0 0 25px 4px;
        text-align:right;
        line-height:26px;
    }
    .breadSeries-div3{
        width:300px;
        height:42px;
        top:170px;
        margin:0 0 25px 4px;
        text-align:right;
    }
    .breadSeries-div4{
        width:240px;
        height:204px;
        background-image:url("../../public/img/product/product-19.png");
        background-position:50% 50%;
        background-size:100% 100%;
    }
    .bread-span1{
        font-size:60px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span2{
        font-size:20px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span3{
        font-size:16px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*奶酥核桃*/
    .carousel{
        width:100%;
        height:212px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:85px;
    }
    .carousel-div{
        width:1020px;
        height:212px;
        margin:0 auto;
    }
    .carouse-ul>li{
        display:block;
        width:195px;
        height:212px;
        float:left;
    }
    .carouse-ul-li1-div11{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-2.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-3.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-4.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-5.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15{
        /*width:200px;
        height:156px;
        原尺寸
        */
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-6.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div{
        width:200px;
        height:15.59px;
        margin:8.2px 0 0;
    }
    .carouse-ul-li1-div2{
        width:200px;
        height:16px;
        margin:6.2px 0 10px -2px;
    }
    .carouse-ul-li2{
        margin:0 0 0 10px;
    }
    .carouse-ul-li3{
        margin:0 0 0 10px;
    } 
    .carouse-ul-li4{
        margin:0 0 0 10px;
    }
    .carouse-ul-li5{
        margin:0 0 0 10px;
    }
    .carouse-span{
        color:red;
        font-size:20px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div{
        color:#797979;
        font-size:16px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    .cake{
        width:100%;
        margin-top:245px;
        margin-left:297px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        /*justify-content:space-between;*/
    }
    .cake1div{
        width:240px;
        margin-right:106px;

    }
    .cake3div{
        width:300px;
    }
    .cake-div1{
        width:240px;
        height:189px;
        background-image:url("../../public/img/product/product-7.png");
        background-position:50% 50%;
        background-size:100% 100%;

    }
    .cake-div2{
        width:300px;
        height:81px;
    }
    .cake-div3{
        width:150px;
        height:26px;
    }
    .cake-div4{
        width:290px;
        height:63px;
    }
    .cake-span1{
        font-size:60px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        /*background-color:rgba(0, 0, 0, 0);*/
    }
    .cake-span2{
        font-size:20px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .cake-span3{
        font-size:16px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*草莓马卡龙-榴莲*/
    .carousel-1{
        width:100%;
        height:212px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:85px;
    }
    .carousel-div-1{
        width:1020px;
        height:212px;
        margin:0 auto;
    }
    .carouse-ul-1>li{
        display:block;
        width:195px;
        height:212px;
        float:left;
    }
    .carouse-ul-li2-1{
        margin:0 0 0 10px;
    }
    .carouse-ul-li3-1{
        margin:0 0 0 10px;
    } 
    .carouse-ul-li4-1{
        margin:0 0 0 10px;
    }
    .carouse-ul-li5-1{
        margin:0 0 0 10px;
    }
    .carouse-ul-li1-div11-1{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-14.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-1{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-15.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-1{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-16.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-1{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-17.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-1{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-18.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-1{
        width:200px;
        height:15.59px;
        margin:8.2px 0 0;
    }
    .carouse-ul-li1-div2-1{
        width:200px;
        height:16px;
        margin:6.2px 0 10px -2px;
    }
    .carouse-span-1{
        color:red;
        font-size:20px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-1{
        color:#797979;
        font-size:16px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    /*西点系列*/
   .dessert{
        width:100%;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        /*justify-content:space-between;*/
        margin-top:263px;
        
    }
    /*西点系列包含三个div的div*/
    .dessert3div{
        /*弹性布局不设置高*/
        width:300px;
        margin:0 0 0 225px;
    }
    /*西点系列包含图片div的div*/
    .dessert1div{
        width:240px;
        margin:29px 0 0 111px;
    }
   .dessert-div1{
        width:300px;
        height:71px;
        margin:20px 0 25px 0;
        text-align:right;
        line-height:71px;

    }
    .dessert-div2{
        width:300px;
        height:26px;
        margin:0 0 25px 0;
        text-align:right;
        line-height:26px;
    }
    .dessert-div3{
        width:300px;
        height:42px;
        top:170px;
        margin:0 0 25px 0;
        text-align:right;
    }
    .dessert-div4-div{
        width:240px;
        height:204px;
        background-image:url("../../public/img/product/product-13.png");
        background-position:50% 70%;
        background-size:100% 129%;
    }
    .dessert-span1{
        font-size:60px;
        font-weight:normal;
        font-family:Georgia, serif;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span2{
        font-size:20px;
        font-weight:normal;
        font-family:微软雅黑;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span3{
        font-size:16px;
        font-weight:normal;
        font-family:微软雅黑;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*冰雪奇缘~~百分百恋人*/
    .carousel-2{
        width:100%;
        height:212px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:100px;
    }
    .carousel-div-2{
        width:1020px;
        height:212px;
        margin:0 auto;
    }
    .carouse-ul-2>li{
        display:block;
        width:195px;
        height:212px;
        float:left;
    }
    .carouse-ul-li2-2{
        margin:0 0 0 10px;
    }
    .carouse-ul-li3-2{
        margin:0 0 0 10px;
    } 
    .carouse-ul-li4-2{
        margin:0 0 0 10px;
    }
    .carouse-ul-li5-2{
        margin:0 0 0 10px;
    }
    .carouse-ul-li1-div11-2{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-8.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-2{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-9.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-2{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-10.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-2{
         width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-11.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-2{
        width:195px;
        height:146.25px;
        background-image:url("../../public/img/product/product-12.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-2{
        width:200px;
        height:15.59px;
        margin:8.2px 0 0;
    }
    .carouse-ul-li1-div2-2{
        width:200px;
        height:16px;
        margin:6.2px 0 10px -2px;
    }
    .carouse-span-2{
        color:red;
        font-size:20px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-2{
        color:#797979;
        font-size:16px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    .leftjt{
        width:30px;
        height:120px;
        line-height:120px;
        margin:10px auto;
    }
    .rightjt{
        width:30px;
        height:120px;
        line-height:120px;
        margin:10px auto;
    }
        /*右翻页图标*/
    .icon-youfanye{
        display:block;
        font-size:30px;
        color:orangered;
    }
        /*左翻页图标*/
    .icon-zuofanye-xue{
        display:block;
        font-size:30px;
        color:orangered;

    }
    }
    /*媒体查询中屏代码*/
    @media screen and (min-width:963px) and 
    (max-width:1199px){
         .container{
        width:100%;
        min-width:963px;
        /*父元素设置绝对定位*/
        margin:0 auto;
    }
    
    .footer1{
        width:100%;
        height:2850px;
        /*设置居中*/
        margin:0 auto;
        }
    /*产品系列下面的线*/
    .footer1-border{
        width:100%;
        height:0.5px;
        background-color:#b16939;
    }
    .bread-img1{
        width:100%;
        /*height:400px;*/
        height:318.8px;
        background:url("../../public/img/product/product-1.png") no-repeat center center;
        /*宽 高*/
        background-size:100% 240%;
    }
    .footer1-div{
        width:100%;
        height:82px;
        margin-top:125px;
    }
    .footer1-div-div{
        width:202px;
        height:52px;
        background-color:#b16939;
        border-radius:80px 0;
        /*position:absolute;*/
        left:16.8px;
        top:12.6px;
        text-align:center;
        line-height:52px;
        }
    .footer1-div-div>span{
        font-size:20.2px;
        text-indent:0.01px;
        box-sizing:border-box;
        color:rgb(255,255,255);
        font-family:微软雅黑;
    }
    .footer1-div-div>div{
        width:947px;
        height:0.5px;
        background-color:#b16939;
        margin-top:-3px;
    }
    /*中屏面包系列1*/
    .breadSeries{
        margin:0 auto;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        width:100%;
    }
    /*面包系列包含三个div的div*/
    .breadSeries3div{
        /*弹性布局不设置高*/
        width:253px;
        margin:0 30px 0 170px;
    }
    /*面包系列包含图片div的div*/
    .breadSeries1div{
        width:240px;
        margin:24px 0 0 27px;
    }
    .breadSeries-div1{
        width:202px;
        height:71px;
        padding:0 0 0 2px;
        margin:16.9px 0 21.14px 4px;
        text-align:right;
        line-height:71px;

    }
    .breadSeries-div2{
        width:253px;
        height:26px;
        margin:0 0 21.14px 4px;
        text-align:right;
        line-height:26px;
    }
    .breadSeries-div3{
        width:253px;
        height:42px;
        top:170px;
        margin:0 0 21.14px 4px;
        text-align:right;
    }
    .breadSeries-div4{
        width:202px;
        height:204px;
        background-image:url("../../public/img/product/product-19.png");
        background-position:50% 50%;
        background-size:100% 100%;
    }
    .bread-span1{
        font-size:50.7px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span2{
        font-size:16.912px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span3{
        font-size:13.52px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*奶酥核桃*/
    .carousel{
        width:100%;
        height:212px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:85px;
    }
    .carousel-div{
        width:862.5px;
        height:212px;
        margin:0 auto;
    }
    .carouse-ul>li{
        display:block;
        width:164.8px;
        height:212px;
        float:left;
    }
    .carouse-ul-li1-div11{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-2.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-3.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-4.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-5.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-6.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div{
        width:169.12px;
        height:13.1px;
        margin:6.9px 0 0;
    }
    .carouse-ul-li1-div2{
        width:169.12px;
        height:16px;
        margin:5.2px 0 0.84px -1.69px;
    }
    .carouse-ul-li2{
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li3{
        margin:0 0 0 8.4px;
    } 
    .carouse-ul-li4{     
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li5{     
        margin:0 0 0 8.4px;
    }
    .carouse-span{
        color:red;
        font-size:16.9px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div{
        color:#797979;
        font-size:13.44px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    /*蛋糕系列*/
    .cake{
        width:100%;
        margin-top:207.1px;
        margin-left:251.1px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
    }
    .cake1div{
        width:202.9px;
        margin-right:106px;

    }
    .cake3div{
        width:253.6px;
    }
    .cake-div1{
        width:202.9px;
        height:189px;
        background-image:url("../../public/img/product/product-7.png");
        background-position:50% 50%;
        background-size:100% 100%;

    }
    .cake-div2{
        width:253.6px;
        height:81px;
    }
    .cake-div3{
        width:126.84px;
        height:26px;
    }
    .cake-div4{
        width:245.2px;
        height:63px;
    }
    .cake-span1{
        font-size:50.7px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        /*background-color:rgba(0, 0, 0, 0);*/
    }
    .cake-span2{
        /*20*/
        font-size:16.9px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .cake-span3{
        /*16*/
        font-size:13.5px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*草莓马卡龙-榴莲*/
    .carousel-1{
        width:100%;
        height:212px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:85px;
    }
    .carousel-div-1{
        width:862.5px;
        height:212px;
        margin:0 auto;
    }
    .carouse-ul-1>li{
        display:block;
        width:164.8px;
        height:212px;
        float:left;
    }
    .carouse-ul-li2-1{
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li3-1{
        margin:0 0 0 8.4px;
    } 
    .carouse-ul-li4-1{
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li5-1{
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li1-div11-1{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-14.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-1{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-15.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-1{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-16.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-1{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-17.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-1{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-18.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-1{
        width:169.12px;
        height:13.1px;
        margin:6.9px 0 0;
    }
    .carouse-ul-li1-div2-1{
        width:169.12px;
        height:16px;
        margin:5.2px 0 0.84px -1.69px;
    }
    .carouse-span-1{
        color:red;
        /*font-size:20px;*/
        font-size:16.9px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-1{
        color:#797979;
        /*font-size:16px;*/
        font-size:13.44px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    /*中屏西点系列*/
   .dessert{
        width:100%;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        margin-top:222px;
        
    }
    /*西点系列包含三个div的div*/
    .dessert3div{
        /*弹性布局不设置高*/
        /*300*/
        width:253px;
        margin:0 30px 0 170px;
    }
    /*西点系列包含图片div的div*/
    .dessert1div{
        /*240*/
        width:240px;
        margin:29px 0 0 111px;
    }
   .dessert-div1{
       /*width:300px;*/
        width:202px;
        height:71px;
        padding:0 0 0 2px;
        /*margin:20px 0 25px 0;*/
        margin:16.9px 0 21.14px 4px;
        text-align:right;
        line-height:71px;

    }
    .dessert-div2{
        /*width:300px;*/
        width:253px;
        height:26px;
        /*margin:0 0 25px 0;*/
        margin:0 0 21.14px 4px;
        text-align:right;
        line-height:26px;
    }
    .dessert-div3{
        /*width:300px;*/
        width:253px;
        height:42px;
        top:170px;
        /*margin:0 0 25px 0;*/
        margin:0 0 21.14px 4px;
        text-align:right;
    }
    .dessert-div4-div{
        /*width:240px*/
        width:202px;
        height:204px;
        background-image:url("../../public/img/product/product-13.png");
        background-position:50% 70%;
        background-size:100% 129%;
    }
    .dessert-span1{
        /*font-size:60px;*/
        font-size:50.7px;
        font-weight:normal;
        font-family:Georgia, serif;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span2{
        /*font-size:20px;*/
        font-size:16.912px;
        font-weight:normal;
        font-family:微软雅黑;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span3{
        /*font-size:16px;*/
        font-size:16.912px;
        font-weight:normal;
        font-family:微软雅黑;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*冰雪奇缘~~百分百恋人*/
    .carousel-2{
        width:100%;
        height:212px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:84.5px;
    }
    .carousel-div-2{
        width:862.5px;
        height:212px;
        margin:0 auto;
    }
    .carouse-ul-2>li{
        display:block;
        width:164.8px;
        height:212px;
        float:left;
    }
    .carouse-ul-li2-2{
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li3-2{
        margin:0 0 0 8.4px;
    } 
    .carouse-ul-li4-2{
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li5-2{
        margin:0 0 0 8.4px;
    }
    .carouse-ul-li1-div11-2{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-8.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-2{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-9.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-2{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-10.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-2{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-11.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-2{
        width:164.8px;
        height:146.25px;
        background-image:url("../../public/img/product/product-12.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-2{
        width:169.12px;
        height:13.1px;
        margin:6.9px 0 0;
    }
    .carouse-ul-li1-div2-2{
        width:169.12px;
        height:16px;
        margin:5.2px 0 0.84px -1.69px;
    }
    .carouse-span-2{
        color:red;
        font-size:16.9px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-2{
        color:#797979;
        font-size:13.44px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    .leftjt{
        width:30px;
        height:120px;
        line-height:120px;
        margin:0 auto;
    }
    .rightjt{
        width:30px;
        height:120px;
        line-height:120px;
        margin-top:46px;
        margin:0 auto;
    }
        /*右翻页图标*/
    .icon-youfanye{
        display:block;
        font-size:30px;
        color:orangered;
        margin:17px 0 0 0;
        
    }
        /*左翻页图标*/
    .icon-zuofanye-xue{
        display:block;
        font-size:30px;
        color:orangered;
        margin:17px 0 0 0;
    }
    }
    /*媒体查询小屏*/
        @media screen and (min-width:768px) and (max-width:962px){
        .container{
        width:100%;
        min-width:768px;
        max-width:962px;
        margin:0 auto;
    }
    /*轮播*/
    .el-carousel__item:nth-child(3) {
   /* background-color: #d3dce6;*/
   background:url("../../public/img/product/product-2.png") no-repeat;
      /*margin:80px 0 0 300px;*/
      background-size:30% 50%;
            /*margin:30px 150px 0 150px;*/
            background-position:-10% 50% !important;
  }
    .el-carousel__item:nth-child(4) {
   /* background-color: #d3dce6;*/
   background:url("../../public/img/product/product-3.png") no-repeat;
      /*margin:80px 0 0 300px;*/
      background-size:60% 80%;
            /*margin:30px 150px 0 150px;*/
            background-position:-10% 50% !important;
  }
    .el-carousel__item:nth-child(5) {
    background:url("../../public/img/product/product-4.png") no-repeat;
      background-size:60% 80%;
            /*margin:30px 150px 0 150px;*/
            background-position:-10% 50% !important;

      }
    .el-carousel__item:nth-child(6) {
    background:url("../../public/img/product/product-5.png") no-repeat;
      background-size:60% 80%;
           /* margin:30px 150px 0 150px;*/
            background-position:-10% 50% !important;
      }
    .el-carousel__item:nth-child(7) {
    background:url("../../public/img/product/product-6.png") no-repeat;
      background-size:60% 80%;
            /*margin:30px 150px 0 150px;*/
            background-position:-10% 50% !important;
      }
      /*轮播结束*/
    .footer1{
        width:100%;
        height:2850px;
        /*设置居中*/
        margin:0 auto;
        }
    /*产品系列下面的线*/
    .footer1-border{
        width:100%;
        height:0.5px;
        background-color:#b16939;
    }
    .bread-img1{
        width:100%;
        height:300px;
        background:url("../../public/img/product/product-1.png") no-repeat center center;
        /*宽 高*/
        background-size:100% 240%;
    }
    .footer1-div{
        width:100%;
        height:82px;
        margin-top:125px;
    }
    .footer1-div-div{
        width:160.9px;
        height:52px;
        background-color:#b16939;
        border-radius:80px 0;
        left:13.3px;
        top:9.954px;
        text-align:center;
        line-height:52px;
        }
    .footer1-div-div>span{
        font-size:16px;
        text-indent:0.01px;
        box-sizing:border-box;
        color:rgb(255,255,255);
        font-family:微软雅黑;
    }
    .footer1-div-div>div{
        width:754.7px;
        height:0.5px;
        background-color:#b16939;
        margin-top:-3px;
    }
    /*小屏面包系列1*/
    .breadSeries{
        margin:0 auto;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        width:100%;
    }
    /*面包系列包含三个div的div*/
    .breadSeries3div{
        /*弹性布局不设置高*/
        width:201.6px;
        margin:0 30px 0 170px;
    }
    /*面包系列包含图片div的div*/
    .breadSeries1div{
        width:191.2px;
        margin:24px 0 0 27px;
    }
    .breadSeries-div1{
        width:160.9px;
        height:56.587px;
        padding:0 0 0 2px;
        margin:13.4px 0 16.8px 3.18px;
        text-align:right;
        line-height:56.587px;

    }
    .breadSeries-div2{
        width:201.6px;
        height:20.7px;
        margin:0 0 16.8px 3.18px;
        text-align:right;
        line-height:20.7px;
    }
    .breadSeries-div3{
        width:204px;
        height:33.4px;
        top:170px;
        margin:-7px 0 16.8px 3.18px;
        text-align:right;
    }
    .breadSeries-div4{
        width:160.9px;
        height:162.5px;
        background-image:url("../../public/img/product/product-19.png");
        background-position:50% 50%;
        background-size:100% 100%;
    }
    .bread-span1{
        font-size:40.4px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span2{
        font-size:13.4px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span3{
        font-size:10.77px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*小屏奶酥核桃*/
    .carousel{
        width:100%;
        height:168.9px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:67.7px;
    }
    .carousel-div{
        width:687.4px;
        height:134.6px;
        margin:0 auto;
    }
    .carouse-ul>li{
        display:block;
        width:131.4px;
        height:168.9px;
        float:left;
    }
    .carouse-ul-li1-div11{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-2.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-3.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-4.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-5.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-6.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div{
        width:134.7px;
        height:10.44px;
        margin:5.49px 0 0;
    }
    .carouse-ul-li1-div2{
        width:134.78px;
        height:12.752px;
        margin:4.14px 0 0.66px -1.34px;
    }
    .carouse-ul-li2{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li3{
        margin:0 0 0 6.69px;
    } 
    .carouse-ul-li4{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li5{
        margin:0 0 0 6.69px;
    }
    .carouse-span{
        color:red;
        font-size:13.46px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div{
        color:#797979;
        font-size:10.71px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    /*小屏蛋糕系列*/
    .cake{
        width:100%;
        margin-top:165px;
        /*297*/
        margin-left:200.12px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
    }
    .cake1div{
        width:161.7px;
        margin-right:84.48px;

    }
    .cake3div{
        /*300*/
        width:202.1px;
    }
    .cake-div1{
        /*240*/
        width:161.7px;
        height:150.6px;
        background-image:url("../../public/img/product/product-7.png");
        background-position:50% 50%;
        background-size:100% 100%;

    }
    .cake-div2{
        /*300*/
        width:202.11px;
        height:64.5px;
    }
    .cake-div3{
        /*150*/
        width:101px;
        height:20.72px;
    }
    .cake-div4{
        /*290*/
        width:195.4px;
        height:50.2px;
    }
    .cake-span1{
        /*60*/
        font-size:40.4px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
    }
    .cake-span2{
        /*20*/
        font-size:13.46px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .cake-span3{
        /*16*/
        font-size:10.75px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*小屏草莓马卡龙-榴莲*/
    .carousel-1{
        width:100%;
        height:168.9px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:67.7px;
    }
    .carousel-div-1{
        width:687.4px;
        height:134.6px;
        margin:0 auto;
    }
    .carouse-ul-1>li{
        display:block;
        width:131.4px;
        height:168.9px;
        float:left;
    }
    .carouse-ul-li2-1{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li3-1{
        margin:0 0 0 6.69px;
    } 
    .carouse-ul-li4-1{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li5-1{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li1-div11-1{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-14.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-1{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-15.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-1{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-16.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-1{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-17.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-1{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-18.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-1{
        width:134.7px;
        height:10.44px;
        margin:5.49px 0 0;
    }
    .carouse-ul-li1-div2-1{
        width:134.78px;
        height:12.752px;
        margin:4.14px 0 0.66px -1.34px;
    }
    .carouse-span-1{
        color:red;
        font-size:13.46px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-1{
        color:#797979;
        font-size:10.71px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    /*小屏西点系列*/
   .dessert{
        width:100%;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        margin-top:176.9px;
        
    }
    /*西点系列包含三个div的div*/
    .dessert3div{
        /*弹性布局不设置高*/
        /*300*/
        /*width:253px;*/
        width:201.6px;
        margin:0 30px 0 170px;
    }
    /*西点系列包含图片div的div*/
    .dessert1div{
        width:191.2px;
        margin:24px 0 0 27px;
    }
   .dessert-div1{
        width:160.9px;
        height:56.587px;
        padding:0 0 0 2px;
        margin:13.4px 0 16.8px 3.18px;
        text-align:right;
        line-height:56.587px;
    }
    .dessert-div2{
        width:201.6px;
        height:20.7px;
        margin:0 0 16.8px 3.18px;
        text-align:right;
        line-height:20.7px;
    }
    .dessert-div3{
        width:204px;
        height:33.4px;
        top:170px;
        margin:-7px 0 16.8px 3.18px;
        text-align:right;
    }
    .dessert-div4-div{
        width:160.9px;
        height:162.5px;
        background-image:url("../../public/img/product/product-13.png");
        background-position:50% 70%;
        background-size:100% 129%;
    }
    .dessert-span1{
        font-size:40.4px;
        font-weight:normal;
        font-family:Georgia, serif;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span2{
        font-size:13.4px;
        font-weight:normal;
        font-family:微软雅黑;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span3{
        font-size:10.77px;
        font-weight:normal;
        font-family:微软雅黑;
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*小屏冰雪奇缘~~百分百恋人*/
    .carousel-2{
        width:100%;
        height:168.9px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:67.7px;
    }
    .carousel-div-2{
        width:687.4px;
        height:134.6px;
        margin:0 auto;
    }
    .carouse-ul-2>li{
        display:block;
        width:131.4px;
        height:168.9px;
        float:left;
    }
    .carouse-ul-li2-2{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li3-2{
        margin:0 0 0 6.69px;
    } 
    .carouse-ul-li4-2{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li5-2{
        margin:0 0 0 6.69px;
    }
    .carouse-ul-li1-div11-2{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-8.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-2{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-9.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-2{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-10.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-2{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-11.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-2{
        width:131.3px;
        height:116.5px;
        background-image:url("../../public/img/product/product-12.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-2{
        width:134.7px;
        height:10.44px;
        margin:5.49px 0 0;
    }
    .carouse-ul-li1-div2-2{
        width:134.78px;
        height:12.752px;
        margin:4.14px 0 0.66px -1.34px;
    }
    .carouse-span-2{
        color:red;
        font-size:13.46px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-2{
        color:#797979;
        font-size:10.71px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    .leftjt{
        width:23.91px;
        height:95.64px;
        line-height:95.64px;
        margin:0 auto;
    }
    .rightjt{
        width:23.91px;
        height:95.64px;
        line-height:95.64px;
        margin-top:36.662px;
        margin:0 auto;
    }
        /*右翻页图标*/
    .icon-youfanye{
        display:block;
        font-size:23.91px;
        color:orangered;
        margin:13.549px 0 0 0;
        
    }
        /*左翻页图标*/
    .icon-zuofanye-xue{
        display:block;
        font-size:23.91px;
        color:orangered;
        margin:13.549px 0 0 0;
    }

        }
        /*超小屏代码*/
        @media screen and (max-width:767px){
        .container{
        width:100%;
        /*min-width:963px;*/
       /* min-width:498px;*/
        max-width:767px;
        margin:0 auto;
    }
    .footer1{
        width:100%;
        height:1855.35px;
        /*设置居中*/
        margin:0 auto;
        }
    /*超小屏产品系列下面的线*/
    .footer1-border{
        width:100%;
        height:0.5px;
        background-color:#b16939;
    }
    .bread-img1{
        width:100%;
        /*width:100%;*/
        /*height:400px;*/
        height:260.4px;
        background:url("../../public/img/product/product-1.png") no-repeat center center;
        /*宽 高*/
        background-size:100% 240%;
    }
    .footer1-div{
        width:100%;
        /*height:82px;
        margin-top:125px;*/
        height:53.3px;
        margin-top:81.3px;
    }
    .footer1-div-div{
        /*width:202px;*/
        /*width:160.9px;
        height:52px;*/
        width:104.74px;
        height:33.8px;
        background-color:#b16939;
        border-radius:52.08px 0;
        /*position:absolute;*/
        /*left:16.8px;
        top:12.6px;*/
        /*left:13.3px;
        top:9.954px;*/
        left:8.6583px;
        top:6.48px;
        text-align:center;
        line-height:33.8px;
        }
    .footer1-div-div>span{
        /*font-size:20.2px;*/
        /*font-size:16px;*/
        font-size:10.416px;
        text-indent:0.01px;
        box-sizing:border-box;
        color:rgb(255,255,255);
        font-family:微软雅黑;
    }
    .footer1-div-div>div{
        /*width:947px;*/
        /*width:754.7px;
        height:0.5px;*/
        width:491.3px;
        height:0.325px;
        background-color:#b16939;
        /*margin-top:-3px;*/
        margin-top:-1.953px;
    }
    /*超小屏面包系列1*/
    .breadSeries{
        margin:0 auto;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        /*justify-content:space-between;*/
        width:100%;
    }
    /*面包系列包含三个div的div*/
    .breadSeries3div{
        /*弹性布局不设置高*/
        /*width:253px;*/
        /*width:201.6px;
        margin:0 30px 0 170px;*/
        width:131.2px;
        margin:0 19.53px 0 110.67px;
    }
    /*面包系列包含图片div的div*/
    .breadSeries1div{
        /*width:240px;*/
        /*width:191.2px;
        margin:24px 0 0 27px;*/
        width:124.4px;
        margin:15.6px 0 0 17.5px;
    }
    .breadSeries-div1{
        /*width:202px;*/
        /*width:160.9px;*/
        width:104.74px;
        /*height:71px;*/
        /*height:56.587px*/
        height:36.836px;
        /*padding:0 0 0 2px;*/
        padding:0 0 0 1.302px;
        /*margin:16.9px 0 21.14px 4px;*/
        /*margin:13.4px 0 16.8px 3.18px;*/
        margin:8.72px 0 10.93px 2.07px;
        text-align:right;
        line-height:36.836px;

    }
    .breadSeries-div2{
        /*width:253px;*/
        /*width:201.6px;*/
        width:131.2px;
        /*height:26px;*/
        /*height:20.7px;*/
        height:13.4px;
        /*margin:0 0 21.14px 4px;*/
        /* margin:0 0 16.8px 3.18px;*/
        margin:0 0 10.9px 2.07px;
        text-align:right;
        /*line-height:26px;*/
        line-height:13.4px;
    }
    .breadSeries-div3{
        /*width:253px;*/
        /*width:204px;*/
        width:132.8px;
        /*height:42px;*/
        /*height:33.4px;*/
        height:21.74px;
        /*135.49*/
        /*top:170px;*/
        top:110.67px;
        /*margin:0 0 21.14px 4px;*/
        /*argin:-7px 0 16.8px 3.18px;*/
        margin:-4.557px 0 10.93px 2.070px;
        text-align:right;
    }
    .breadSeries-div4{
        /*width:202px;*/
        /*width:160.9px;*/
        width:104.74px;
        /*height:204px;*/
        /*height:162.5px;*/
        height:105.78px;
        background-image:url("../../public/img/product/product-19.png");
        background-position:50% 50%;
        background-size:100% 100%;
    }
    .bread-span1{
        /*font-size:50.7px;*/
        /*font-size:40.4px;*/
        font-size:26.3px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span2{
        /*font-size:16.912px;*/
        /*font-size:13.4px;*/
        font-size:8.723px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .bread-span3{
        /*font-size:13.52px;*/
        /*font-size:10.77px;*/
        font-size:7.011px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*超小屏奶酥核桃*/
    .carousel{
        width:100%;
        /*height:212px;*/
        /*height:168.9px;*/
        height:109.95px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        /*margin-top:85px;*/
        /*margin-top:67.7px;*/
        margin-top:44.072px;
    }
    .carousel-div{
        /*width:1020px;*/
        /*width:862.5px;*/
        /*width:687.4px;*/
        width:447.49px;
        /*height:168.9px;*/
        /*height:134.6px;*/
        height:87.62px;
        margin:0 auto;
    }
    .carouse-ul>li{
        display:block;
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.4px;*/
        width:85.54px;
        /*height:212px;*/
        /*height:168.9px;;*/
        height:109.95px;
        float:left;
    }
    .carouse-ul-li1-div11{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-2.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-3.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-4.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-5.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-6.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div{
        /*width:200px;*/
        /*width:169.12px;*/
        /*width:134.7px;*/
        width:87.68px;
        /*height:15.59px;*/
        /*height:13.1px;*/
        /*height:10.44px;*/
        height:6.796px;
        /*margin:8.2px 0 0;*/
        /*margin:6.9px 0 0;*/
        /*margin:5.49px 0 0;*/
        margin:3.573px 0 0;
    }
    .carouse-ul-li1-div2{
        /*width:200px;*/
        /*width:169.12px;*/
        /*width:134.78px;*/
        width:87.74px;
        /*height:16px;*/
        /*height:12.752px;*/
        height:8.3px;
        /*margin:6.2px 0 10px -2px;*/
        /*margin:5.2px 0 0.84px -1.69px;*/
        /*margin:4.14px 0 0.66px -1.34px;*/
        margin:2.69px 0 0.429x -0.872px;
    }
    .carouse-ul-li2{
        /*margin:0 0 0 10px;*/
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li3{
        /*margin:0 0 0 10px;*/
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    } 
    .carouse-ul-li4{
        /*margin:0 0 0 10px;*/        
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li5{
        /*margin:0 0 0 10px;*/        
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    }
    .carouse-span{
        color:red;
        /*font-size:20px;*/
        /*font-size:16.9px;*/
        /*font-size:13.46px;*/
        font-size:8.762px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div{
        color:#797979;
        /*font-size:16px;*/
        /*font-size:13.44px;*/
        /*font-size:10.71px;*/
        font-size:6.972px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    /*超小屏蛋糕系列*/
    .cake{
        width:100%;
        /*margin-top:245px;*/
        /*margin-top:207.1px;*/
        /*margin-top:165px;*/
        margin-top:107.415px;
        /*297*/
        /*margin-left:251.1px;*/
        /*margin-left:200.12px;*/
        margin-left:130.27px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        /*justify-content:space-between;*/
    }
    .cake1div{
        /*width:240px;*/
        /*width:202.9px;*/
        /*width:161.7px;*/
        width:105.26px;
        /*margin-right:106px;*/
        /*margin-right:84.48px;*/
        margin-right:54.99px;

    }
    .cake3div{
        /*300*/
        /*width:253.6px;*/
        /*width:202.1px;*/
        width:131.567px;
    }
    .cake-div1{
        /*240*/
        /*width:202.9px;
        height:189px;*/
        /*width:161.7px;*/
        width:105.26px;
        /*height:150.6px;*/
        height:98.04px;
        background-image:url("../../public/img/product/product-7.png");
        background-position:50% 50%;
        background-size:100% 100%;

    }
    .cake-div2{
        /*300*/
        /*width:253.6px;
        height:81px;*/
        /*width:202.11px;*/
        width:131.57px;
        /*height:64.5px;*/
        height:41.98px;
    }
    .cake-div3{
        /*150*/
        /*width:126.84px;
        height:26px;*/
        /*width:101px;*/
        width:65.751px;
        /*height:20.72px;*/
        height:13.48px;
    }
    .cake-div4{
        /*290*/
        /*width:245.2px;
        height:63px;*/
        /*width:195.4px;
        height:50.2px;*/
        width:127.20px;
        height:32.68px;
    }
    .cake-span1{
        /*60*/
        /*font-size:50.7px;*/
        /*font-size:40.4px;*/
        font-size:26.3px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        /*background-color:rgba(0, 0, 0, 0);*/
    }
    .cake-span2{
        /*20*/
        /*font-size:16.9px;*/
        /*font-size:13.46px;*/
        font-size:8.762px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .cake-span3{
        /*16*/
        /*font-size:13.5px;*/
        /*font-size:10.75px;*/
        font-size:6.99px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*超小屏草莓马卡龙-榴莲*/
    .carousel-1{
        width:100%;
        height:109.95px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:44.072px;
    }
    .carousel-div-1{
        /*width:1020px;*/
        /*width:862.5px;*/
        /*width:687.4px;*/
        width:447.49px;
        /*height:168.9px;*/
        /*height:134.6px;*/
        height:87.62px;
        margin:0 auto;
    }
    .carouse-ul-1>li{
        display:block;
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.4px;*/
        width:85.54px;
        /*height:212px;*/
        /*height:168.9px;;*/
        height:109.95px;
        float:left;
    }
    .carouse-ul-li2-1{
        /*margin:0 0 0 10px;*/
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li3-1{
        /*margin:0 0 0 10px;*/
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    } 
    .carouse-ul-li4-1{
        /*margin:0 0 0 10px;*/
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li5-1{
        /*margin:0 0 0 10px;*/
        /*margin:0 0 0 8.4px;*/
        /*margin:0 0 0 6.69px;*/
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li1-div11-1{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-14.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-1{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-15.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-1{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-16.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-1{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-17.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-1{
        /*width:195px;*/
        /*width:164.8px;*/
        /*width:131.3px*/
        width:85.47px;
        /*height:146.25px;*/
        /*height:116.5px;*/
        height:75.84px;
        background-image:url("../../public/img/product/product-18.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-1{
        /*width:200px;*/
        /*width:169.12px;*/
        /*width:134.7px;*/
        width:87.68px;
        /*height:15.59px;*/
        /*height:13.1px;*/
        /*height:10.44px;*/
        height:6.796px;
        /*margin:8.2px 0 0;*/
        /*margin:6.9px 0 0;*/
        /*margin:5.49px 0 0;*/
        margin:3.573px 0 0;
    }
    .carouse-ul-li1-div2-1{
        /*width:200px;*/
        /*width:169.12px;*/
        /*width:134.78px;*/
        width:87.74px;
        /*height:16px;*/
        /*height:12.752px;*/
        height:8.3px;
        /*margin:6.2px 0 10px -2px;*/
        /*margin:5.2px 0 0.84px -1.69px;*/
        /*margin:4.14px 0 0.66px -1.34px;*/
        margin:2.69px 0 0.429x -0.872px;
    }
    .carouse-span-1{
        color:red;
        /*font-size:20px;*/
        /*font-size:16.9px;*/
        /*font-size:13.46px;*/
        font-size:8.762px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-1{
        color:#797979;
        /*font-size:16px;*/
        /*font-size:13.44px;*/
        font-size:10.71px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    /*超小屏西点系列*/
   .dessert{
        width:100%;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        /*justify-content:space-between;*/
        /*margin-top:263px;*/
        /*margin-top:222px;*/
        margin-top:115.16px;
        
    }
    /*超小屏西点系列包含三个div的div*/
    .dessert3div{
        /*弹性布局不设置高*/
        width:131.2px;
        margin:0 19.53px 0 110.67px;
    }
    /*超小屏西点系列包含图片div的div*/
    .dessert1div{
        width:124.4px;
        margin:15.6px 0 0 17.5px;
    }
   .dessert-div1{
        width:104.74px;
        height:36.836px;
        padding:0 0 0 1.302px;
        margin:8.72px 0 10.93px 2.07px;
        text-align:right;
        line-height:36.836px;
    }
    .dessert-div2{
        width:131.2px;
        height:13.4px;
        margin:0 0 10.9px 2.07px;
        text-align:right;
        line-height:13.4px;
    }
    .dessert-div3{
        width:132.8px;
        height:21.74px;
        top:110.67px;
        margin:-4.557px 0 10.93px 2.070px;
        text-align:right;
    }
    .dessert-div4-div{
        width:104.74px;
        height:105.78px;
        background-image:url("../../public/img/product/product-13.png");
        background-position:50% 50%;
        background-size:100% 100%;
    }
    .dessert-span1{
        font-size:26.3px;
        font-weight:normal;
        font-family:Georgia, serif;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span2{
        font-size:8.723px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    .dessert-span3{
        font-size:7.011px;
        font-weight:normal;
        font-family:微软雅黑;
        /*缩进*/
        box-sizing:border-box;
        color:#b16939;
        background-color:rgba(0, 0, 0, 0);
    }
    /*超小屏冰雪奇缘~~百分百恋人*/
    .carousel-2{
        width:100%;
        height:109.95px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow:row wrap;
        flex-flow:row wrap;
        justify-content:space-between;
        margin-top:120px;
    }
    .carousel-div-2{
        width:447.49px;
        height:87.62px;
        margin:0 auto;
    }
    .carouse-ul-2>li{
        display:block;
        width:85.54px;
        height:109.95px;
        float:left;
    }
    .carouse-ul-li2-2{
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li3-2{
        margin:0 0 0 4.355px;
    } 
    .carouse-ul-li4-2{
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li5-2{
        margin:0 0 0 4.355px;
    }
    .carouse-ul-li1-div11-2{
        width:85.47px;
        height:75.84px;
        background-image:url("../../public/img/product/product-8.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div12-2{
        width:85.47px;
        height:75.84px;
        background-image:url("../../public/img/product/product-9.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div13-2{
        width:85.47px;
        height:75.84px;
        background-image:url("../../public/img/product/product-10.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div14-2{
        width:85.47px;
        height:75.84px;
        background-image:url("../../public/img/product/product-11.png");
        background-size:100% 100%;
    }
    .carouse-ul-li1-div15-2{
        width:85.47px;
        height:75.84px;
        background-image:url("../../public/img/product/product-12.png");
        background-size:100% 100%;
    }
    .carouse-ul>li>a>div-2{
        width:87.68px;
        height:6.796px;
        margin:3.573px 0 0;
    }
    .carouse-ul-li1-div2-2{
        width:87.74px;
        height:8.3px;
        margin:2.69px 0 0.429px -0.872px;
    }
    .carouse-span-2{
        color:red;
        font-size:8.762px;
        font-family:微软雅黑
    }
    .carouse-ul-li1-a-div-2{
        color:#797979;
        font-size:10.71px;
        font-family:微软雅黑;
        text-decoration:none;
    }
    .leftjt{
        width:23.91px;
        height:62.26px;
        line-height:62.26px;
        margin:0 auto;
    }
    .rightjt{
        width:23.91px;
        height:95.64px;
        line-height:95.64px;
        margin-top:36.662px;
        margin:0 auto;
    }
        /*右翻页图标*/
    .icon-youfanye{
        display:block;
        font-size:15.56px;
        color:orangered;
        margin:8.814px 0 0 0;
        
    }
        /*左翻页图标*/
    .icon-zuofanye-xue{
        display:block;
        font-size:15.56px;
        color:orangered;
        margin:8.814px 0 0 0;
    }

        }
</style>