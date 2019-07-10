<template>
<div id="product">
    <!--首页~~联系我们使用文件引入
    宽：1448高：280
    -->
    <div id="header"></div>
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
                    <div>
                        <path class="path"></path>
                    </div>
                </div>
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
    #product{
        width:1448px;
        height:3530px;
        background-color:palevioletred;
        margin:0 auto;
    }
    #header{
        width:1448px;
        height:280px;
        background-color:#fff
    }
    #footer{
        width:1448px;
        height:2850px;
        background-color:powderblue;
        /*父元素设置绝对定位*/
        position:relative;
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
    .footer1-div-div>div>{
        width:1160px;
        height:21px;
        background-color:tan;
    }
    .path{
        border:1px solid #b16939;
    }
</style>