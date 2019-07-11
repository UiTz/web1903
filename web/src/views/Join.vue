<template>
<div id="join">
    <!--首页~~联系我们使用文件引入  1625*280
    -->
    <div id="header"></div>
    <!-- 去掉头部和尾部   中间模块main -->
    <div id="main">
        <!--1625*400 面包图片-->
        <div class="main-img1"></div>
        <!--放一个1200的div宽1200,高2850-->
        <div class="main2">
            <div class="main2-details1">
                <div class="main2-details1-top"></div>
                <div class="main2-details1-left">
                    <div class="main2-left-img1"></div>
                    <div class="main2-left-img2"></div>
                </div>
                <div class="main2-details1-right">
                     <div>
                         <span class="span-style">
                            所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。
                         </span>
                         <span class="span-style">
                            每件商品均在总部进行研发，以创意、时尚作为市场的定位和区隔。我们的目标是最终成为在上海乃至全中国本行业领域中的第一品牌，让XXX成为世界饮食文化的主流品牌。
                         </span>
                     </div>
                </div>
            </div>
        </div>
    </div>
    <!--页脚。1625*320，使用文件引入-->
    <div id="footer1"></div>
    <!--最后的页脚，1625*80，使用文件引入-->
    <div id="footer2"></div>   
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* 整个页面大小设置 */
    #join{
        width:1625px;
        height:3530px;
        margin:0 auto;
    } 
/* 页头设置 */
    #header{
        width:1625px;
        height:280px;
        background-color:#fff
    }

/* 主体部分设置 */
    #main{
        width:1625px;
        /* height:2850px; */
        /* background-color:powderblue; */
        /*父元素设置绝对定位*/
        position:relative;
    }
    .main-img1{
        width:100%;
        height:400px;
        background:url("../../public/img/join/join-1.png") no-repeat center center; 
    }
    .main2{
        width:1200px;
    }
    .main2-details1{
        width:1200px;
        height:500px;

    }
    .main2-details1-top{
        width:1200px;
        height:82px;
        border:1px solid red;
    }
    .main2-details1-left{
        width:520px;
        height:320px;
        border:1px solid red;
    }
    .main2-left-img1,.main2-left-img2{
        width:500px;
        height:300px;
        background-color:#EAD4C1; 
    }
    .main2-left-img2{
        background:url("../../public/img/join/join-2.png") no-repeat center center;
    }
    .main2-details1-right{
        width:560px;
        height:320px;
        background-color: rgba(245,183,100,0);
        padding:0 0 0 2px;
    }
    .span-style{
        font-size: 15px;
        text-indent: 0.01px;
        box-sizing: border-box;
        letter-spacing: 1px;
        line-height: 2.2em;
        color: rgb(177, 105, 57);
    }

/* 页尾设置 */
    #footer1{
        width:1625px;
        height:320px;
        background-color:#fff;
    }
    #footer2{
        width:1200px;
        height:80px;
        background-color:#fff;
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
    .main-img1{
        width:100%;
        height:400px;
        background:url("../../public/img/join/join-1.png") no-repeat center center;
        /*宽 高*/
        /* background-size:100% 240%; */
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
</style>