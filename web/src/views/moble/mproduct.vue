<template>
<div>
    <mmyheader></mmyheader>
        <!--图片-->
    <div class="breadImage"></div>
    <div>
        <!--产品系列-->
        <div class="productsseries">
            <!--产品-->
            <div class="productsseries-food">产品系列</div>
            <!--线-->
            <div class="productsseries-border"></div>
        </div>
        <!--面包系列-->
        <div class="mbreadSeries">
            <!--面包-->
            <div class="mbread">
                <!--面包图片-->
                <div class="mbreadimg"></div>
            </div>
            <!--面包下面的文字-->
            <div class="breadText">
                <div class="breadText-1">bread</div>
                <div class="breadText-2">面包系列</div>
                <div class="breadText-3">甄选小麦粉，纯天然自制酵母发酵面团<br/>使用牛奶代替纯净水揉面</div>
            </div>
        </div>
        <!--奶酥--伯爵-->
        <div>
            <mt-tab-container v-model="active">
            <!--子面板1-->
            <mt-tab-container-item id="tab1" class="carousel-hetao">
                <div class="carousel-hetao-1">
                    <div class="hetao">
                        <!--图片-->
                        <div class="hetaoimg"></div>
                        <div class="carousel-1div">
                            <router-link to="/mproductdetails" class="carousel-a1">奶酥核桃吐司
                            </router-link>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥15.00
                            </a>
                        </div>
                    </div>
                    <div class="mangguo">
                        <!--图片-->
                        <div class="mangguoimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">芒果岩烧吐司
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥20.00
                            </a>
                        </div>
                    </div>
                </div>
                <div class="carousel-hetao-2">
                    <div class="olo">
                        <!--图片-->
                        <div class="oloimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">奥利奥榴莲
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥17.00
                            </a>
                        </div>
                    </div>
                    <div class="xingren">
                        <!--图片-->
                        <div class="xingrenimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">法式杏仁可颂
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥20.00
                            </a>
                        </div>
                    </div>
                 </div>
            </mt-tab-container-item>
            <!--子面板2-->
            <mt-tab-container-item id="tab2">
            <div class="carousel-hetao-1">
                    <div class="hetao">
                        <!--图片-->
                        <div class="bojueimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">
                                伯爵红茶脆皮
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥15.00
                            </a>
                        </div>
                    </div> 
                 </div>
            </mt-tab-container-item>
            </mt-tab-container>  
            <div class="mtbutton">
            <!--上一页和下一页-->
            <mt-button type="danger" size="small"
            @click.prevent="itemTab1">
              <!--@click.prevent="itemTab2"-->  
                    上一页
            </mt-button>  
            <mt-button type="danger" size="small"
            @click.prevent="itemTab2">
              <!--@click.prevent="itemTab2"-->  
                    下一页
            </mt-button>  
            </div>
        </div>
        <!--蛋糕系列-->
        <div class="mcakeSeries">
            <!--面包-->
            <div class="mcake">
                <!--面包图片-->
                <div class="mcakeimg"></div>
            </div>
            <!--面包下面的文字-->
            <div class="cakeText">
                <div class="cakeText-1">CAKE</div>
                <div class="cakeText-2">蛋糕系列</div>
                <div class="cakeText-3">100%乳脂奶油与时令食材的相遇<br/>设计蛋糕造型和口味的多种可能<br/>寻找传统蛋糕场景与新意之间的平衡点</div>
            </div>
        </div>
        <!--冰雪奇缘--百分百恋人-->
        <div>
            <mt-tab-container v-model="active">
            <!--子面板1-->
            <mt-tab-container-item id="tab1" class="carousel-bingxue">
                <div class="carousel-hetao-1">
                    <div class="hetao">
                        <!--图片-->
                        <div class="bxqyimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">冰雪奇缘
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥198.00
                            </a>
                        </div>
                    </div>
                    <div class="mangguo">
                        <!--图片-->
                        <div class="xgzimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">小公主
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥258.00
                            </a>
                        </div>
                    </div>
                </div>
                <div class="carousel-hetao-2">
                    <div class="olo">
                        <!--图片-->
                        <div class="xynrzsimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">雪域牛乳芝士
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥258.00
                            </a>
                        </div>
                    </div>
                    <div class="xingren">
                        <!--图片-->
                        <div class="mmtimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">萌萌兔
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥258.00
                            </a>
                        </div>
                    </div>
                 </div>
            </mt-tab-container-item>
            <!--子面板2-->
            <mt-tab-container-item id="tab2">
            <div class="carousel-hetao-1">
                    <div class="hetao">
                        <!--图片-->
                        <div class="bfbimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">
                                百分百恋人
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥198.00
                            </a>
                        </div>
                    </div> 
                 </div>
            </mt-tab-container-item>
            </mt-tab-container>  
            <div class="mtbutton">
            <!--换一批-->
            <mt-button type="danger" size="small"
            @click.prevent="itemTab1">
              <!--@click.prevent="itemTab2"-->  
                    上一页
            </mt-button>  
            <mt-button type="danger" size="small"
            @click.prevent="itemTab2">
              <!--@click.prevent="itemTab2"-->  
                    下一页
            </mt-button>  
            </div>
        </div>
        <!--西点系列-->
        <div class="mwestSeries">
            <!--面包-->
            <div class="mwest">
                <!--面包图片-->
                <div class="mwestimg"></div>
            </div>
            <!--面包下面的文字-->
            <div class="cakeText">
                <div class="cakeText-1">DESSERT</div>
                <div class="cakeText-2">西点系列</div>
                <div class="cakeText-3">多种口味松软蛋糕卷<br/>精致的杯子蛋糕和奶油水果杯<br/> 带来下午茶的美好时光</div>
            </div>
        </div>
        <!--草莓马卡龙-->
        <div>
            <mt-tab-container v-model="active">
            <!--子面板1-->
            <mt-tab-container-item id="tab1" class="carousel-caomei">
                <div class="carousel-hetao-1">
                    <div class="hetao">
                        <!--图片-->
                        <div class="caomeiimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">草莓马卡龙
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥12.00
                            </a>
                        </div>
                    </div>
                    <div class="mangguo">
                        <!--图片-->
                        <div class="mgimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">芒果盒子
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥20.00
                            </a>
                        </div>
                    </div>
                </div>
                <div class="carousel-hetao-2">
                    <div class="olo">
                        <!--图片-->
                        <div class="spnimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">双皮奶
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥12.00
                            </a>
                        </div>
                    </div>
                    <div class="xingren">
                        <!--图片-->
                        <div class="xingrenimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">北海道草莓戚风杯
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥15.00
                            </a>
                        </div>
                    </div>
                 </div>
            </mt-tab-container-item>
            <!--子面板2-->
            <mt-tab-container-item id="tab2">
            <div class="carousel-hetao-1">
                    <div class="hetao">
                        <!--图片-->
                        <div class="liulianimg"></div>
                        <div class="carousel-1div">
                            <a href="javascript:;" class="carousel-a1">
                                榴莲飘飘慕斯盒子
                            </a>
                        </div>
                        <div class="carousel-2div">
                            <a href="javascript:;" class="carousel-a2">￥15.00
                            </a>
                        </div>
                    </div> 
                 </div>
            </mt-tab-container-item>
            </mt-tab-container>  
            <div class="mtbutton">
            <!--上一页和下一页-->
            <mt-button type="danger" size="small"
            @click.prevent="itemTab1">
              <!--@click.prevent="itemTab2"-->  
                    上一页
            </mt-button>  
            <mt-button type="danger" size="small"
            @click.prevent="itemTab2">
              <!--@click.prevent="itemTab2"-->  
                    下一页
            </mt-button>  
            </div>
        </div>
    </div>
</div>
</template>    
<script>
import mmyheader from '../../components/moble/mmyheader'
export default {
    data(){
        return{
                active:"tab1"
        }
    },
    methods:{
       itemTab1(){
            this.active="tab1"
        },
         itemTab2(){
             this.active="tab1"?this.active="tab2":this.active=="tab1"       
        },
         itemTab3(){
            this.active="tab3"
        }
    },
    components:{
        mmyheader
    }
}
</script>
<style scoped>
    .breadImage{
        width:100%;
        height:200px;
        background-image:url("../../../public/img/product/product-1.png");
        background-size:100% 100%;
    }
    /*产品系列*/
    .productsseries{
        width:100%;
        height:60px;
        margin:15px 0 0 10px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        /*justify-content:space-between;*/
    }
    .productsseries-food{
        width:120px;
        height:36px;
        background-color:#b16939;
        border-radius:80px 0;
        text-align:center;
        line-height:36px;
        color:#fff
    }
    .productsseries-border{
        width:95%;
        height:1px;
        background-color:#b16939;
        margin-top:-12px;
    }
    /*面包系列*/
    .mbreadSeries{
        width:100%;
        height:400px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        margin:20px 0 0 0;
    }
    /*包含面包图片的div*/
    .mbread{
        width:100%;
        height:190px;
    }
    .mbreadimg{
        width:220px;
        height:190px;
    background-image:url("../../../public/img/product/product-19.png");
        background-size:100% 100%;
        background-position:100% 100%;
        margin:0 auto;
    }
    /*包含文字的div*/
    .breadText{
        width:100%;
        height:150px;
        text-align:right;
        margin:-45px 0 0 0;
    }
    .breadText-1{
        font-size:31.75px;
        text-indent:0.01px;
        box-sizing:border-box;
        font-weight:normal;
        color:rgb(177, 105, 57);
        font-family:"Work Sans Extra Light";
        padding-right:50px;
    }
    .breadText-2{
        margin-top:15px;
        font-weight:700;
        font-size:14px;
        text-indent:0.01px;
        box-sizing:border-box;
        font-weight:normal;
        color:rgb(177, 105, 57);
        font-family:"Work Sans Extra Light";
        padding-right:50px;
    }
    .breadText-3{
        margin-top:7px;
        font-size:14px;
        text-indent:0.01px;
        box-sizing:border-box;
        font-weight:normal;
        color:rgb(177, 105, 57);
        font-family:"Work Sans Extra Light";
        padding-right:50px;
    }
    /*核桃-伯爵*/
    .carousel-hetao{
        width:100%;
        height:417px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        margin:0 auto;
    }
    .carousel-hetao-1{
        width:300px;
        height:207px;
        margin:0 auto;
    }
    .carousel-hetao-2{
        width:300px;
        height:207px;
        margin:0 auto;
    }
    .hetao{
        width:140px;
        height:202px;
        float:left;
        margin-left:7px;
    }
    .mangguo{
        width:140px;
        height:202px;
        margin-left:7px;
        float:left;
    }
    .olo{
        width:140px;
        height:202px;
        float:left;
        margin-left:7px;
    }
    .xingren{
        width:140px;
        height:202px;
        float:left;
        margin-left:7px;
    }
    /*核桃到伯爵图片*/
    .hetaoimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-2.png");
        background-size:115% 100%;
    }
    .mangguoimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-3.png");
        background-size:115% 100%;
    }
    .oloimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-6.png");
        background-size:115% 100%;
    }
    .xingrenimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-5.png");
        background-size:115% 100%;
    }
    .bojueimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-4.png");
        background-size:115% 100%;
    }
    /*核桃-伯爵div样式*/
    .carousel-1div{
        width:100%;
        height:18px;

    }
    .carousel-2div{
        width:100%;
        height:16px; 
        margin-top:10px;
    }
    /*核桃-伯爵文字样式*/
    .carousel-a1{
        font-weight:400;
        font-family:微软雅黑;
        font-size:12px;
        color:rgb(121, 121, 121);
        font-style:normal;

    }
    .carousel-a2{
        font-weight:700;
        font-family:微软雅黑;
        font-size:16px;
        color:rgb(227, 51, 51);
        font-style:normal;
    }
    /*换一批样式*/
    .mt-button{
        display:inline-block;
        width:100%;
        height:100%;
        text-align:center;
        border-radius:50%;
    }
    .mtbutton{
        width:280px;
        height:20px;
        margin:0 0 0 200px;
        line-height:20px;
        border-radius:0 0 0 0;

    }
    /*蛋糕系列*/
    .mcakeSeries{
        width:100%;
        height:400px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        margin:170px 0 0 0;
    }
    /*包含蛋糕图片的div*/
    .mcake{
        width:100%;
        height:190px;
    }
    .mcakeimg{
        width:220px;
        height:190px;
        background-image:url("../../../public/img/product/product-7.png");
        background-size:100% 100%;
        background-position:100% 100%;
        margin:0 auto;
    }
    /*包含文字的div*/
    .cakeText{
        width:100%;
        height:150px;
        text-align:left;
        margin:-15px 0 0 50px;
    }
    .cakeText-1{
        font-size:31.75px;
        text-indent:0.01px;
        box-sizing:border-box;
        font-weight:normal;
        color:rgb(177, 105, 57);
        font-family:"Work Sans Extra Light";
        padding-right:50px;
    }
    .cakeText-2{
        margin-top:15px;
        font-weight:700;
        font-size:14px;
        text-indent:0.01px;
        box-sizing:border-box;
        font-weight:normal;
        color:rgb(177, 105, 57);
        font-family:"Work Sans Extra Light";
        padding-right:50px;
    }
    .cakeText-3{
        margin-top:7px;
        font-size:14px;
        text-indent:0.01px;
        box-sizing:border-box;
        font-weight:normal;
        color:rgb(177, 105, 57);
        font-family:"Work Sans Extra Light";
        padding-right:50px;
    }
    /*冰雪奇缘--百分百恋人*/
    .carousel-bingxue{
        width:100%;
        height:417px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        margin-top:40px;
    }
    /*冰雪奇缘--百分百恋人图片*/
    .bxqyimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-8.png");
        background-size:115% 100%;
    }
    .xgzimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-9.png");
        background-size:115% 100%;
    }
    .xynrzsimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-10.png");
        background-size:115% 100%;
    }
    .mmtimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-11.png");
        background-size:115% 100%;
    }
    .bfbimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-12.png");
        background-size:115% 100%;
    }
    /*西点系列*/
    .mwestSeries{
        width:100%;
        height:400px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        margin-top:120px;
    }
    /*包含面包图片的div*/
    .mwest{
        width:100%;
        height:190px;
    }
    .mwestimg{
        width:220px;
        height:190px;
    background-image:url("../../../public/img/product/product-13.png");
        background-size:100% 100%;
        background-position:100% 100%;
        margin:0 auto;
    }
    /*草莓~~榴莲*/
    .caomeiimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-14.png");
        background-size:115% 100%;
    }
    .mgimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-15.png");
        background-size:115% 100%;
    }
    .spnimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-16.png");
        background-size:115% 100%;
    }
    .bhdimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-17.png");
        background-size:115% 100%;
    }
    .liulianimg{
        width:140px;
        height:132px;
        background-image:url("../../../public/img/product/product-18.png");
        background-size:115% 100%;
    }
    .carousel-caomei{
        width:100%;
        height:417px;
        display:flex;
        display:-webkit-flex;
        -webkit-flex-flow: row wrap;
        flex-flow:row wrap;
        margin-top:90px;
    }
</style>