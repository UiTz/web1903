<template>
    <div class="container">
        <div class="title">榴莲千层蛋糕的做法 入口细腻香甜不油腻</div>
        <div class="center">
            <span>2019-05-25 15:35:18</span>
            <span class="ml-4">来自</span>
            <span class="ml-4" style="color:blue;">杨楚</span>
        </div>
        <div class="mt-5"><img src="../../public/img/company/company-3.png" alt=""></div>
        <!-- 文字说明 -->
        <div class="bottom mt-5">   
            <p>对于我来说榴莲是闻着香，吃起来更香，超爱的榴莲肉泥和淡奶油一起做成千层榴莲蛋糕，不油腻，口感上层次分明，入口细腻香甜，吃一口就停不下来了。</p>
            <p>做千层，相对麻烦些的是摊可丽饼，面糊混合好了，选对了工具，其实就成功了一半了，选用小点的不粘锅，特别好操作。厚薄度按自己喜好，我摊的比较薄,</p>
            <p>约30张饼，做千层余下几张，放一点水果和奶油很好吃，瞬间被大宝消灭掉了。</p>
            <p class="mt-5"> <strong>材料:</strong> 酸奶200克，鸡蛋4个，低筋面粉50克，玉米淀粉25克，细砂糖70克，柠檬汁几滴</p>
            <p> <strong>饼皮:</strong> 鸡蛋2个 面粉140克 牛奶460克 白糖40克 玉米油40克 </p>
            <p> <strong>馅料:</strong> 淡奶油280克 白糖28克 榴莲适量</p>
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
                <a href="javascript:;" style="text-decoration:none">
                    <span class="pic0 mr-2"><img class="mb-2" src="../../public/img/speak/good-2.png" alt=""></span> 
                    <span class="zan font-14">分享</span>   
                </a>  
                <ul>
                    <li><a href="#">> 分享 </a></li><hr>
                    <li><a href="#">QQ好友</a></li>
                    <li><a href="#">微信/朋友圈</a></li>
                    <li><a href="#">新浪微博</a></li>
                    <li><a href="#">复制链接</a></li>
                </ul>
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
    width:100px;height:36px;
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
    margin-left:920px;
    width:80px;height:30px;
}

</style>
