<template>
    <div class="container">
        <div class="title">艾草蒸蛋糕的做法 做一个有“艾”的蛋糕</div>
        <div class="center">
            <span>2019-05-25 15:35:18</span>
            <span class="ml-4">来自</span>
            <span class="ml-4" style="color:blue;">杨楚</span>
        </div>
        <div class="mt-5"><img src="../../public/img/company/company-7.png" alt=""></div>
        <!-- 文字说明 -->
        <div class="bottom mt-5">   
            <p>艾草蒸蛋糕</p>
            <p>艾草做的美食，最常见就要数青团，青团的菜谱有很多，所以我就不发了。我想了一些用艾草可以做的美食，其中一个就是艾草蒸蛋糕，天气越来越热了，</p>
            <p>就想吃点“草”养养生。艾草好像是春天的植物吧，它可以祛湿散寒，一般适合雨水较多的春季，其实对于南方人来说，一年四季似乎没有那么泾渭分明，而且</p>
            <p>今年气候真的很奇怪，该冷的时候不冷，不该冷的时候又冷了，前段时间还经常下那种绵绵细雨，人都快长出蘑菇了，所以，现在祛湿是重中之重！恰逢520情人节到了，</p>
            <p>做一个有“艾”的蛋糕，送给自己或送给最爱的人吧!</p>
            
            <p class="mt-5"> <strong>【食材】</strong> </p>
            <p> <strong>【面团材料】</strong>（可做80g一个4个</p>
            <p> &nbsp;&nbsp;鸡蛋 / 2个</p>
            <p> &nbsp;&nbsp;低筋面粉 / 32g</p>
            <p> &nbsp;&nbsp;艾草粉/3g</p>
            <p> &nbsp;&nbsp;玉米油 / 22g</p>
            <p> &nbsp;&nbsp;温水/ 25g</p>
            <p> &nbsp;&nbsp;砂糖 / 30g</p>
            <p> &nbsp;&nbsp;柠檬汁 / 几滴</p>
            <p> &nbsp;&nbsp;黑芝麻、干桂花/适量点缀</p>
            <p class="copyright mt-5">资讯编号：ZN000004642</p>
        </div>
        <!-- 点赞-分享 -->
        <div class="handleBtnsLine d-flex">
            <div class="handleBtns mr-5">
                <a href="javascript:;" style="text-decoration:none">
                    <span class="pic0 mr-2"><img class="mb-2" src="../../public/img/speak/good-1.png" alt=""></span> 
                    <span class="zan font-14">点赞</span>   
                </a>  
            </div>
            <div class="handleBtns mr-5">
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
            <div class="handleBtns">
                <a href="javascript:;" style="text-decoration:none">
                    <span class="pic0 mr-2"><img class="mb-2" style="width:20px;height:20px;" src="../../public/img/speak/good-3.png" alt=""></span> 
                    <span class="zan font-14">举报</span>   
                </a>  
            </div>
        </div>
        <!-- 评论区 -->
        <div class="discuss">
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
                    <img style="width:20px;height:20px;" src="../../public/img/speak/good-5.png" alt=""> 表情
                    <button class="button">提交</button>
                </div>
            </div>
            <div class="kong mt-3"><img src="../../public/img/speak/good-4.png" alt=""></div>
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
.container{
    margin:0;padding:0;
    margin:0 auto;
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
    margin-left:30%;
    margin-top:60px;
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
    margin-left:80%;
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
