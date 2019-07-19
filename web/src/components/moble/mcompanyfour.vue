<template>
    <div class="container">
        <mmyheader></mmyheader> 
        <div class="title p-3">提拉米苏的做法 520最幸福的事情</div>
        <div class="center">
            <span class="p-2">2019-05-25 15:35:18</span>
            <span class="ml-4">来自</span>
            <span class="ml-4" style="color:blue;">杨楚</span>
        </div>
        <div class="mt-5"><img class="mpic" src="../../../public/img/company/company-5.png" alt=""></div>
        <!-- 文字说明 -->
        <div class="bottom mt-5 p-3">   
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甜点是甜蜜的象征，所以很多人会在情人节的时候送蛋糕。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在众多的蛋糕中，没有什么是比提拉米苏更适合的了。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为，在意大利文里，提拉米苏（Tiramisu）有“带我走”和“记住我”的含义。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以，在520情人节的时候，亲手做一款提拉米苏，然后跟另一半分享，是最幸福的事情。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浓缩咖啡和可可粉香浓中带着一点苦涩，但是却让提拉米苏的甜味更突出，每一口都入口即化，甜蜜融化在心里。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最重要的是这个蛋糕无需烘焙，即使没有烤箱，也是能轻松完成的呢！</p>
            
            <p class="mt-5"> <strong>材料:</strong> 斯卡彭芝士250克，淡奶油150克，水 50克，细砂糖70克，蛋黄2个</p>
            <p>浓缩咖啡40克，朗姆酒15克，吉利丁片2片，可可粉适量，手指饼干1份，樱桃酱适量</p>
            <p class="copyright mt-5">资讯编号：ZN000004642</p>
        </div>
        <!-- 点赞-分享 -->
        <div class="handleBtnsLine d-flex">
            <div class="handleBtns mr-1">
                <a href="javascript:;" style="text-decoration:none">
                    <span class="pic0 mr-2"><img class="mb-2" src="../../../public/img/speak/good-1.png" alt=""></span> 
                    <span class="zan font-14">点赞</span>   
                </a>  
            </div>
            <div class="handleBtns mr-1">
                <!-- <span class="pic5"><img class="mb-2" src="../../public/img/speak/good-2.png" alt=""></span>  -->
                <el-dropdown>
                <el-button type="none">
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
            <div class="handleBtns mr-1">
                <a href="javascript:;" style="text-decoration:none">
                    <span class="pic0 mr-2"><img class="mb-2" style="width:20px;height:20px;" src="../../../public/img/speak/good-3.png" alt=""></span> 
                    <span class="zan font-14">举报</span>   
                </a>  
            </div>
        </div>
        <!-- 评论区 -->
        <div class="discuss p-3">
            <div>
                <span><strong>| 评论</strong></span>
                <span class="ml-3">共0条评论</span>
            </div>
            <div class="about mt-3">
                <div class="about1 p-10 mt-2">&nbsp;评论几句...</div>
                <div class="about2 p-2">
                    <input type="text" placeholder="我来说两句" class="speak">
                </div>
                <div class="mt-1 m-1"> 
                    <img style="width:20px;height:20px;" src="../../../public/img/speak/good-5.png" alt=""> 表情
                    <button class="button">提交</button>
                </div>
            </div>
            <div class="kong mt-3"><img src="../../../public/img/speak/good-4.png" alt=""></div>
        </div> 
    </div>
</template>
<script>
import mmyheader from '../../components/moble/mmyheader'
export default {
    data(){
        return{}
    },
    components:{
        mmyheader 
    }
}
</script>
<style scoped>
.container{
    margin:0;padding:0;
    margin:0 auto;
}
.mpic{
    width:350px;height:260px;
    margin-left:12px;
}
.title{
    font-weight: bold;
    color: rgb(51, 51, 51);
    text-align: center;
    font-size:28px;
    margin-top: 40px;
}
.center{
    margin-top:40px;
}
.bottom>p{
    color:#686868;
    font:16px;
}
.copyright{
    text-align:right;
    font:12px;
}
/* 点赞等功能 */
.pic5{
    margin-left:2px;
}
.handleBtnsLine{
    width:100%;
    /* box-sizing: border-box; */
    text-align:center;
    margin-left:9%;
    margin-top:40px;
}
.handleBtns{
    margin-bottom:40px;
    position:relative;
    text-align:center;
    width:100px;height:34px;
    border:1px solid #A1A1A1;
    border-radius: 5px;
    /* background-color:#A1A1A1; */
} 
.handleBtns>ul{
    border:1px solid #A1A1A1;
    border-radius:8px;
    margin-top:10px;
    width:160px;
    text-align:left;
    list-style: none;
    background-color:#fff;
}
.handleBtns>ul>li{
    margin-top:8px;
}
.handleBtns>ul>li>a{
    color:#A1A1A1;
}
.zan{
    line-height:35px;
    color:#A1A1A1;
} 
.about{
    border:1px solid #686868;
    padding:5px;
    border-radius: 5px;
}
.about1,.about2{
    color:#333333;  
}
.speak{
    height:90px;
    width:100%;
} 
input::placeholder{
    text-align:left;
    margin-top:25px;

}
.kong{
    border:1px solid #A1A1A1;
    height:175px;
    text-align:center;
    vertical-align:middle;
    border-radius: 5px;
}
 .kong>img{
    margin-top:40px;
} 
.button{
    margin-left:70%;
    width:80px;height:30px;
}
.el-button{
    border: none;
    height: 10px;
    margin-top: 2px;
    line-height: 9px;
    /* opacity: 0; */
}
.el-button:focus, .el-button:hover{
    background-color: #fff;
    color: #606266;
}
.el-dropdown-menu{
    left: 10px;
    /* text-align: center; */
}

</style>
