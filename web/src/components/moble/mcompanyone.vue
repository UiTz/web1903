<template>
   
    <div class="container">
        <mmyheader></mmyheader> 
        <div class="title p-3">酸奶芝士蛋糕的做法 无油低热不腻</div>
        <div class="center">
            <span class="ml-2">2019-05-25 15:35:18</span>
            <span class="ml-4">来自</span>
            <span class="ml-4" style="color:blue;">杨楚</span>
        </div>
        <div class="mt-5"><img class="mpic" src="../../../public/img/company/company-2.png" alt=""></div>
        <!-- 文字说明 -->
        <div class="bottom mt-5 p-2">   
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无油酸奶蛋糕，口感细腻柔滑的芝士蛋糕让人难以拒绝，每一口都含有浓郁的芝士香味，但是夏天吃芝士蛋糕，实在太腻了，而且它的高热量高脂肪让人感到压力。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不添加一滴油的酸奶蛋糕就是炎炎夏日的最佳选择，采用水浴法烤制的蛋糕，可以保持柔嫩，酸奶的加入令蛋糕的口感更加细腻香醇，入口即化，让人感觉在吃芝士蛋糕。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为一滴油都没有加入，所以这个的热量很低，爽口不腻，做出来的蛋糕也不容易开裂，幸福感爆棚！</p>
            <p class="mt-5"> <strong>材料:</strong> 酸奶200克，鸡蛋4个，低筋面粉50克，玉米淀粉25克，细砂糖70克，柠檬汁几滴</p>
            <p class="copyright mt-5">资讯编号：ZN000004642</p>
        </div>
        <!-- 点赞-分享 -->
        <div class="handleBtnsLine">
            <div class="handleBtns">
                <a href="javascript:;" style="text-decoration:none">
                    <span class="pic0 mr-2"><img class="mb-2" src="../../../public/img/speak/good-1.png" alt=""></span> 
                    <span class="zan font-14">点赞</span>   
                </a>  
            </div>
            <div class="handleBtns ml-1">
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
            <div class="handleBtns ml-1">
                <a href="javascript:;" style="text-decoration:none">
                    <span class="pic0 mr-2"><img class="mb-2" style="width:20px;height:20px;" src="../../../public/img/speak/good-3.png" alt=""></span> 
                    <span class="zan font-14">举报</span>   
                </a>  
            </div>
        </div>
        <!-- 评论区 -->
        <div class="discuss p-2">
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
.mpic{
    width:350px;height:260px;
    margin-left:12px;
}
/* 点赞等功能 */
.pic5{
    margin-left:2px;
}
.handleBtnsLine{
    display:flex;
    width:100%;
    box-sizing: border-box;
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
