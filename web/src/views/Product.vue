<template>
<div id="product">
    <!--首页~~联系我们使用文件引入
    宽：1448高：280
    -->
    <!--<div id="header"></div>-->
    <!--除了header和最下面的content这两个div之外，剩下的模块内容全在这个div里面，宽1448，高2850-->
    <div id="footer">
        <!--宽1448高400 面包图片-->
        <div class="bread-img1"></div>
        <!--放一个1200的div宽1200,高2850-->
        <div class="footer1">
            <div class="footer1-div">
                <!--产品系列-->
                <div class="footer1-div-div">
                    <span>产品系列</span>
                    <!--产品系列下边的下划线-->
                    <div></div>
                </div>
                </div>
            </div>
            <!--产品系列下面的面包系列-->
            <div class="breadSeries">
                <!--四个div，其中三个包含三个span-->
                <!--x：300 h:71-->
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
                <!--x：240 h:204-->
                <div class="breadSeries-div4"></div>
            </div>
            <!--w:1200 h:220.8面包系列下面-->
            <div class="carousel">
                <div class="carousel-div">
                    <ul class="carouse-ul">
                        <li class="carouse-ul-li1">
                            <div class="carouse-ul-li1-div11"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div"> </div>
                            </a>
                            <div class="carouse-ul-li1-div2"></div>
                        </li>
                        <li class="carouse-ul-li2">
                            <div class="carouse-ul-li1-div12"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div"> </div>
                            </a>
                            <div class="carouse-ul-li1-div2"></div>
                        </li>
                        <li class="carouse-ul-li3">
                            <div class="carouse-ul-li1-div13"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div"> </div>
                            </a>
                            <div class="carouse-ul-li1-div2"></div>
                        </li>
                        <li class="carouse-ul-li4">
                            <div class="carouse-ul-li1-div14"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div"> </div>
                            </a>
                            <div class="carouse-ul-li1-div2"></div>
                        </li>
                        <li class="carouse-ul-li5">
                            <div class="carouse-ul-li1-div15"></div>
                            <a href="javascript:;">
                                <div class="carouse-ul-li1-a-div"> </div>
                            </a>
                            <div class="carouse-ul-li1-div2"></div>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
    <!--页脚。宽1448，高320，使用文件引入-->
    <div id="content"></div>
    <!--最后的页脚，高1200，宽80，使用文件引入-->
    <div id="paletteContent"></div>

    
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    *{margin:0;padding:0}
    #product{
        width:1448px;
        height:3530px;
        background-color:palevioletred;
        margin:0 auto;
    }
    #header{
        width:1448px;
        height:280px;
        background-color:#fff;
    }
    #footer{
        width:1448px;
        height:2850px;
        background-color:powderblue;
        /*父元素设置绝对定位*/
        position:relative;
        margin:0 auto;
    }
    #paletteContent{
        width:1200px;
        height:80px;
        background-color:rosybrown;
    }
    .footer1{
        width:1200px;
        height:2850px;
        background-color:sandybrown;
        /*设置居中*/
        margin:0 auto;
        }
    .bread{
        width:1448px;
        height:400px;
    }
    .bread-img1{
        width:100%;
        height:400px;
        background:url("../../public/img/product/product-1.png") no-repeat center center;
        /*宽 高*/
        background-size:100% 240%;
    }
    .footer1-div{
        width:1200px;
        height:82px;
        position:absolute;
        top:510px;
        /*设置相对定位*/
        background-color:slateblue;
    }
    .footer1-div-div{
        width:240px;
        height:52px;
        background-color:#b16939;
        border-radius:80px 0;
        position:absolute;
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
    .footer1-div-div>div{
        width:1160px;
        height:0.5px;
        background-color:#b16939;
        margin-top:-3px;
    }
    .breadSeries{
        position:absolute;
        width:700px;
        height:250px;
        left:250px;
        top:680px;
        background-color:darkorange;
        margin:0 129px;
    }
    .breadSeries-div1{
        width:300px;
        height:71px;
        padding:0 0 0 2px;
        background-color:darkturquoise;
        margin:20px 0 25px 4px;
        text-align:right;
        line-height:71px;
    }
    .breadSeries-div2{
        width:300px;
        height:26px;
        background-color:darkturquoise;
        margin:0 0 25px 4px;
        text-align:right;
        line-height:26px;
    }
    .breadSeries-div3{
        width:300px;
        height:42px;
        background-color:darkturquoise;
        position:absolust;
        top:170px;
        margin:0 0 25px 4px;
        text-align:right;
    }
    .breadSeries-div4{
        width:240px;
        height:204px;
        background-color:darkturquoise;
        background-image:url("../../public/img/product/product-19.png");
        /*width:100%;
        height:100%;*/
        background-position:50% 50%;
        background-size:100% 100%;
        float:right;
        margin:-212px 28px 0 0;
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
    .carousel{
        width:1200px;
        height:221px;
        background-color:beige;
        position:absolute;
        top:980px;
        left:124px;
    }
    .carousel-div{
        width:1100px;
        height:220.8px;
        padding:10px 10px 0;
        background-color:brown;
        margin:0 auto;
    }
    .carouse-ul>li{
        display:block;
        width:208px;
        height:212px;
        background-color:blueviolet;
        float:left;
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
    .carouse-ul-li1-div11{
        width:208px;
        height:156px;
        background-image:url("../../public/img/product/product-2.png");
        background-color:cornsilk
    }
    .carouse-ul-li1-div12{
        width:208px;
        height:156px;
        background-image:url("../../public/img/product/product-3.png");
        background-color:cornsilk
    }
    .carouse-ul-li1-div13{
        width:208px;
        height:156px;
        background-image:url("../../public/img/product/product-4.png");
        background-color:cornsilk
    }
    .carouse-ul-li1-div14{
        width:208px;
        height:156px;
        background-image:url("../../public/img/product/product-5.png");
        background-color:cornsilk
    }
    .carouse-ul-li1-div15{
        width:208px;
        height:156px;
        background-image:url("../../public/img/product/product-6.png");
        background-color:cornsilk
    }

    .carouse-ul>li>a>div{
        width:208px;
        height:15.59px;
        margin:8.2px 0 0;
        background-color:darkgoldenrod;
    }
    .carouse-ul-li1-div2{
        width:210px;
        height:16px;
        margin:6.2px 0 10px -2px;
        background-color:darkgoldenrod;
    }
</style>