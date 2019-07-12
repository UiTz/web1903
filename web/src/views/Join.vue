<template>
<div id="join">
    <!--首页~~联系我们使用文件引入  1625*280
    -->
    <div id="header"></div>
    <!-- 去掉头部和尾部   中间模块main -->
    <div id="main">
        <!--1625*400 面包图片-->
        <div class="main-img1"></div>
        <!--品牌介绍模块-->
        <div class="main2">
            <div class="main2-top">
                <div class="main2-head">
                    <span class="main2-p">品牌介绍</span>
                </div>
                <div class="main2-line"></div>    
            </div>
            <div class="main2-pic">
                <div class="pic-left"></div>
                <div class="pic-right"></div>
            </div>
            <div class="main2-che">
                <div class="main2-div">
                    <p class="span-style">
                            &nbsp;&nbsp;&nbsp;&nbsp;所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。
                    </p>
                    <p class="span-style">
                            &nbsp;&nbsp;&nbsp;&nbsp;每件商品均在总部进行研发，以创意、时尚作为市场的定位和区隔。我们的目标是最终成为在上海乃至全中国本行业领域中的第一品牌，让XXX成为世界饮食文化的主流品牌。
                    </p>
                </div>       
            </div>
        </div>
        <!-- 品牌特色 -->
        <div class="main2">
            <div class="main2-top">
                <div class="main2-head">
                    <span class="main2-p">品牌特色</span>
                </div>
                <div class="main2-line"></div>    
            </div>
            <div class="main3-top">
                <span class="main3-b">来自欧洲  新鲜烘焙专家</span>
                <p class="main3-l">烘焙 · 快乐 · 设计 · 生活</p>
                <p class="main3-s">Baking / Happy / Design / Life</p>
            </div>
            <div class="main3-bottom">
                <div class="main3-bottom1">
                    <p>&nbsp;极丰富的 <br>高品质产品</p>
                </div>
                <div class="main3-bottom1">
                    <p>&nbsp;明快通透的<br>购物环境</p>
                </div>
                <div class="main3-bottom1">
                    <p>&nbsp;轻松简洁的 <br>设计调性</p>
                </div>
                <div class="main3-bottom1">
                    <p>&nbsp;无压力感的 <br>购物与生活</p>    
                </div>
            </div>
            <div class="main3-pic"></div>
        </div>
        <!-- 业务模式 -->
        <div class="main4">
            <div class="main4-Lmodel">
                <div class="main4-top">
                    <div class="main2-head">
                        <span class="main2-p">业务模式</span>
                   </div>
                   <div class="main4-line"></div>    
                   <div class="main4-Lwenzi">
                        <span>· 选择核心商圈位置,稳健有节奏的扩张</span><br>
                        <span>· 面包+西点+蛋糕+素轻餐+健康饮品+庆典礼品(翻糖及礼盒)</span><br>
                        <span>· 无漂白面粉全面使用,纯天然自制酵母</span><br>
                        <span>· 研发配方,口味造型力求最佳</span><br>
                        <span>· 通过Online的推广Campaign与整体运营</span><br>
                        <span>· 为线下门店引导成倍的人流</span><br>
                        <span>· 借Online平台的优势,进行全员维护,有力保障门店生意稳定</span><br>
                        <span>· 借门店地段优势,进行落地接触活动,激活会员消费</span><br> 
                   </div> 
                   <div class="main4-tupian1"></div>   
               </div>
            </div>
            <div class="main4-Rmodel">
                <div class="main4-top">
                    <div class="main2-head">
                        <span class="main2-p">门店要求</span>
                    </div>
                    <div class="main4-line"></div>
                    <div class="main4-Lwenzi2">
                        <span>· 位置选择：一类商圈A级铺面</span><br>
                        <span>· SHOPPING MALL 、大型卖场、商业中心等客流量充足的繁华地段</span><br>
                        <span>· 十字路口大展示面</span><br>
                        <span>· 优质A级规模社区沿街面面积需求：150-200平米为主</span><br>
                        <span>· 地区首店，则大于200平米为佳</span><br>
                        <span>· 有适合大型烘焙店的排污、排水、排气系统。水电气等能源能满足营运需要。</span><br> 
                   </div>  
                   <div class="main4-tupian2"></div>        
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
    data(){}
}
</script>
<style scoped>
/* 整个页面大小设置 */
    #join{
        width:100%;
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
        /*父元素设置绝对定位*/
        position:relative;
    }
/* 1625*400 面包图片 */
    .main-img1{
        width:100%;
        height:400px;
        background:url("../../public/img/join/join-1.png") no-repeat center center; 
    }
/* 品牌介绍模块 */
    .main2,.main4{
        width:1200px;height:550px;
        border:1px solid #fff;
        margin:80px auto;
        position:relative;
    } 
    .main2-top{
        width:1200px;height:80px;
    }
    .main2-head{
        width:240px;height:52px;
        background-color:#b16939;
        border-radius:80px 0;
        box-shadow: none;
        text-align: center;
    }
    .main2-line,.main4-line{
        border-top:1px solid #b16939;
        width:1200px;
        position: absolute; 
        top:52px;
    }
    .main2-p{
        font-size: 24px;
        text-indent: 0.01px;
        box-sizing: border-box;
        letter-spacing: 1px;
        line-height: 2.2em;
        color:#fff;
    }
    .pic-left{
        width:500px;
        height:300px;
        background-color:#EAD4C1;
        position: absolute; 
        top:173px;
        left:55px;
    }
    .pic-right{
        width:500px;
        height:300px;
        background:url("../../public/img/join/join-2.png") no-repeat center center;
        position: absolute; 
        top:140px;
        left:95px;
    }
    .main2-che{
        width:450px;
        height:320px;
        position: absolute; 
        top:168px;
        right:52px;
    }
    .span-style{
        font-size: 15px;
        text-indent: 0.01px;
        box-sizing: border-box;
        letter-spacing: 1px;
        line-height: 2.2em;
        color: rgb(177, 105, 57);
    }
/* 产品介绍模块 */
    .main3-top{
        width:430px;
        height:160px;
        position: absolute;
        left:60px;
        top:120px;
    }
    .main3-b,.main3-l,.main3-s{
        font-size: 40px;
        font-family: 微软雅黑;
        color: rgb(177, 105, 57);
        font-weight: 700;
        text-decoration: none;
        text-shadow: none;
        letter-spacing: 0px;
        box-sizing: border-box
    }
    .main3-l{
         font-size: 24px;
         font-weight:80;
    }
    .main3-s{
        font-size: 16px;
        font-family: "Work Sans Extra Light";
        font-weight: 50;
    }
    .main3-bottom{
        width:900px;
        display:flex;
        position: absolute;
        left:52px;
        bottom:68px;
    }
    .main3-bottom1{
        width:150px;height:150px;
        background-color: rgb(234, 212, 193);
        border: 4px solid rgb(177, 105, 57);
        border-radius: 120px;
        box-shadow: none;
        text-align: center;
    }
    .main3-bottom1>p{
        margin:0px;padding:0px;
        color: rgb(177, 105, 57);
        font-size: 20px;
        box-sizing: border-box;
        font-weight: 700;
        display: inline-block;
        margin-top:40px;  
    }
    .main3-pic{
        width:300px;height:390px;
        background:url("../../public/img/join/join-3.png") no-repeat center center;
        position: absolute;
        right:52px;
        bottom:68px;
    }
/* 业务模式 */
    .main4{height:772px;}
    .main4-line,.main5-line,.main4-top,.main5-top{
        width:590px;
    } 
    .main4-Lmodel,.main4-Rmodel{
        width:590px;
        border:1px solid #fff;
    }
    .main4-Rmodel{
        position:absolute;
        right:0px;
        top:1px;  
    }
    .main4-Lwenzi,.main4-Lwenzi2{
        width:492px;height:306px;
        position: absolute;
        top:130px;
    }
     .main4-Lwenzi2,.main4-tupian2{
        right:50px;
    }
    .main4-Lwenzi,.main4-Lwenzi2{
        background-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        color: rgb(177, 105, 57);
        line-height: 2.2em;
        font-size: 16px
    }
   
    .main4-tupian1,.main4-tupian2{
        width:500px;height:300px;
        position: absolute;
        top:470px;   
    }
    .main4-tupian1{
        background:url("../../public/img/join/join-4.png") no-repeat center center;
    }
    .main4-tupian2{
        background:url("../../public/img/join/join-5.png") no-repeat center center;
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
</style>
