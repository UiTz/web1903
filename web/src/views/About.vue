<template>
    <div>
        <div class="item"></div>
        <div class="container"> 
            <div class="text-white my-font2">联系我们</div>
            <div class="w-100"></div>
            <div class="row m-0">
                <div class=" col-md-6 col-sm-12 p-0">
                    <div class="aboutme mt-5">
                        <input type="text" placeholder="姓名(必填)">
                        <input type="text" placeholder="姓名(必填)">
                        <input type="text" placeholder="姓名(必填)">
                        <div class="btn">提交</div>
                    </div>
                </div>
                <div class="about col-md-6 col-sm-12 p-0">
                    <div class="about-center">
                        <p class="wu">Tasty bread</p>
                        <p>XX烘焙坊 / XX餐饮管理有限公司</p>
                        <p>Add / 公司地址：上海市金山区亭林镇林盛路136号</p>
                        <p>Tel / 联系电话：400 - 000 - 0000</p>
                        <p>Eml/电子邮件：jianzhan@zuma.com</p>
                    </div> 
                </div>
            </div>
            <div class="about-bottom mt-5">
                <img src="../../public/img/about/jietu.png">
            </div>
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
    padding:0;
    margin:0 auto;
}
.item{
    background:url("../../public/img/about/about-1.png") no-repeat;
    background-size:100% 100%;
    width:100%;height:400px;
}
.my-font2{
    margin-top:50px;
    background-color:rgb(177, 105, 57);
    font-size:22px;
    width:200px;height:60px;
    text-align: center;
    line-height: 60px;
    border-radius:80px 0;
    
}
/*设置标题的下划线*/
.my-font2+div{
    border-bottom:2px solid rgb(177, 105, 57);
}
.aboutme>input{
    margin-bottom: 35px;
    width:500px;
    height:40px;
    font-size: 14px;
    font:14px 黑体;   
    border: 1px solid rgb(177, 105, 57);
    display: inline-block;
    min-width: 120px;
    padding-left: 5px;
}
.aboutme>input::placeholder{
    color:rgb(177, 105, 57);

}
.aboutme :nth-child(3){
    height:80px;
}
.btn{
    background:rgb(177, 105, 57);
    width:180px;height:50px;
    color:white;
    text-align: center;
    line-height: 38px;
}
.about{
    position: relative;

}
.about-center{
    font:16px "微软雅黑";
    color:rgb(177, 105, 57);
    position:absolute;
    right:80px;
    bottom:86px;
}
/* .about-center :first-child{
    font:60px;
    font-family:"Peaches Cream";
} */
.wu{
   font:60px;
    font-family:"Peaches Cream"; 
} 
.myfont{
    text-indent: 0.01px;
    color: rgb(177, 105, 57);
    white-space: pre;
    box-sizing: border-box;
    font-family:60px "Peaches Cream";
} 

    
</style>
