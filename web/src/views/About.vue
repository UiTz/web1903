<template>
  <div>
    <div class="item"></div>
    <div class="container">
      <div class="text-white my-font2">联系我们</div>
      <div class="w-100"></div>
      <div class="row m-0 d-flex">
        <div class=" col-md-6 col-sm-12 mt-5 p-0">
          <h2>留言</h2>
          <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="name">
              <el-input v-model="ruleForm.name"placeholder="请输入要使用的昵称"></el-input>
            </el-form-item>
            <el-form-item prop="message">
              <el-input
                      type="textarea"
                      :autosize="{ minRows:8, maxRows: 15}"
                      placeholder="留言"
                      v-model="ruleForm.message">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitForm('ruleForm')">留言</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="about col-md-6 col-sm-12 p-0">
          <div class="about-center">
            <h1 class="wu">Tasty bread</h1>
            <p>码 农 练 习 生 蛋 糕 屋</p>
            <p>Add / 公司地址：福建厦门湖里区软件园18号-404</p>
            <p>Tel / 联系电话：400 - 000 - 0000</p>
            <p>Email/电子邮件：1043083945@qq.com</p>
          </div>
        </div>
      </div>
      <div class="infinite-list-wrapper row">
        <div class="col-md-12 col-sm-12">
          <h2 class="text-center mb-5">留言墙</h2>
          <ul class="list">
            <li v-for="item in list" class="mt-5 ml-4">
              <a style="text-decoration:none" href="javascript:">
                <div>
                  <h6>{{item.date}}</h6>
                  <p>{{item.msg}}</p>
                  <br>
                  <p class="float-right">来自: {{item.name}}</p>
                </div>
              </a>
            </li>
          </ul>
          <!--<p v-if="loading">加载中...</p>-->
          <!--<p v-if="noMore">没有更多了</p>-->
        </div>
        <div class="col-md-3 col-sm-12"></div>
        <!--<div class="map" style="width:1030px;height:320px;border:#ccc solid 1px;" id="dituContent"></div>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [],
        loading: false,
        ruleForm: {
          name: '',
          message: ''
        }
      }
    },
    computed: {
      user_name() {
        return this.$store.state.user_name
      },
      isDis () {
        return !!this.$store.state.user_name
      }
    },
    methods: {
      loadmessage() {
        var url = "user/api/loading_message";
        var count = this.list.length;
        this.axios.get(url, {params: {count}}).then(result => {
          if (result.data.code === 200) {
            // console.log(result);
            this.list = result.data.result;
            this.loading = false;
            console.log('success');
          } else {
            this.loading = false;
            console.log("fail");
          }
        })
      },
      submitForm(formName) {
        var url = 'user/api/message_board';
        var msg = this.ruleForm.message;
        var name = this.ruleForm.name;
        console.log(name);
        if (name.length === 0) {
          this.$alert("昵称不能为空");
          return;
        }
        if (msg.length <= 5) {
          this.$alert("不能少于5个字符");
          return;
        }
        this.axios.get(url, {params: {msg, name}}).then(result => {
          if (result.data.code === 200) {
            this.$alert('留言成功');
            this.loadmessage();
          } else {
            this.$alert("留言失败", {confirmButtonText: '确定'});
          }
        })
      }
    },
    created () {
        this.loadmessage()
    }
      /* methods:{
            //创建和初始化地图函数：
       initMap(){
           createMap();//创建地图
           setMapEvent();//设置地图事件
           addMapControl();//向地图添加控件
           addMarker();//向地图中添加marker
       },
       
       //创建地图函数：
       createMap(){
           var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
           var point = new BMap.Point(118.184607,24.492302);//定义一个中心点坐标
           map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
           window.map = map;//将map变量存储在全局
       },
       
       //地图事件设置函数：
       setMapEvent(){
           map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
           map.enableScrollWheelZoom();//启用地图滚轮放大缩小
           map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
           map.enableKeyboard();//启用键盘上下左右键移动地图
       },
       
       //地图控件添加函数：
       addMapControl(){
           //向地图中添加缩放控件
     var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
     map.addControl(ctrl_nav);
           //向地图中添加缩略图控件
     var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
     map.addControl(ctrl_ove);
           //向地图中添加比例尺控件
     var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
     map.addControl(ctrl_sca);
       },
       
       //创建marker
       addMarker(){
            //标注点数组
       var markerArr = [{title:"达内时代科技集团",content:"观日路18号楼之一4楼404",point:"118.18476|24.492401",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
        ];
           for(var i=0;i<markerArr.length;i++){
               var json = markerArr[i];
               var p0 = json.point.split("|")[0];
               var p1 = json.point.split("|")[1];
               var point = new BMap.Point(p0,p1);
         var iconImg = createIcon(json.icon);
               var marker = new BMap.Marker(point,{icon:iconImg});
         var iw = createInfoWindow(i);
         var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
         marker.setLabel(label);
               map.addOverlay(marker);
               label.setStyle({
                           borderColor:"#808080",
                           color:"#333",
                           cursor:"pointer"
               });
         
         (function(){
           var index = i;
           var _iw = createInfoWindow(i);
           var _marker = marker;
           _marker.addEventListener("click",function(){
               this.openInfoWindow(_iw);
             });
             _iw.addEventListener("open",function(){
               _marker.getLabel().hide();
             })
             _iw.addEventListener("close",function(){
               _marker.getLabel().show();
             })
           label.addEventListener("click",function(){
               _marker.openInfoWindow(_iw);
             })
           if(!!json.isOpen){
             label.hide();
             _marker.openInfoWindow(_iw);
           }
         })()
           }
       },
       //创建InfoWindow
       createInfoWindow(i){
           var json = markerArr[i];
           var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
           return iw;
       },
       //创建一个Icon
       createIcon(json){
           var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
           return icon;
       },
       initMap()//创建和初始化地图
   }*/
  }
</script>
<style scoped lang="scss">
  .container {
    padding: 0;
    margin: 0 auto;
  }
  
  .layedit-tool-face {
    font-size: 18px;
  }
  
  .item {
    background: url("../../public/img/about/about-1.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 400px;
  }
  
  h5 {
    color: rgb(177, 105, 57);
  }
  
 /* .myborder {
    border: 1px solid #FAC8C8;
  }*/
  
  ul {
    float: left;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
    width: 100%;
    background-color: rgb(177, 105, 57);
    min-height: 400px;
  }
  
  ul a {
    box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.4);
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #000;
    background-color: #ffc;
    padding: 1em;
    cursor: default;
    font: 13px/1.3 "Microsoft Yahei", 宋体;
    /*color: #000;*/
  }
  
  ul a:before {
    content: '';
    position: absolute;
    top: -20px;
    left: 35%;
    width: 50px;
    height: 30px;
    background-color: rgba(255, 255, 204, 0.5);
    border-left: 1px dashed rgba(0, 0, 0, 0.1);
    border-right: 1px dashed rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  }
  
  ul li {
    float: left;
  }
  
  ul li:nth-child(even) a {
    position: relative;
    top: 50px;
    left: 50px;
    background-color: #cfc;
  }
  
  ul li:nth-child(3n) a {
    position: relative;
    background-color: #ccf;
  }
  
  ul li:nth-child(5n) a {
    position: relative;
    background-color: #FAC8C8;
  }
  
  li > a {
    background-color: #ffffcc;
    box-shadow: 5px 5px 5px rgba(33, 33, 33, 0.4);
    position: relative;
    display: inline-block;
    font-size: 100%;
    padding: 1em;
    cursor: default;
    max-width: 400px;
    /*display: inline-block;*/
  }
  
  .my-font2 {
    margin-top: 50px;
    background-color: rgb(177, 105, 57);
    font-size: 22px;
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 80px 0;
    
  }
  
  .list {
    list-style-type: none;
    /*position: absolute;*/
  }
  
  h2 {
    color: rgb(177, 105, 57);
    text-align: center;
  }
  
  .el-input {
    width: 100% !important;
    
  }
  
  .el-textarea__inner:hover {
    border: 1px solid rgb(177, 105, 57) !important;
  }
  
  .el-button {
    width: 150px;
    background: rgb(177, 105, 57);
    color: #fff;
    border-radius: 5px;
  }
  
  .el-button:hover {
    background: rgb(177, 105, 57);
    color: #fff;
  }
  
  .el-button.is-active {
    background: rgb(177, 105, 57);
    color: #fff;
  }
  
  /*设置标题的下划线*/
  .my-font2 + div {
    border-bottom: 2px solid rgb(177, 105, 57);
  }
  
  .aboutme > input {
    margin-bottom: 35px;
    width: 100%;
    height: 40px;
    font-size: 14px;
    font: 14px 黑体;
    border: 1px solid rgb(177, 105, 57);
    display: inline-block;
    min-width: 120px;
    padding-left: 5px;
  }
  
  .aboutme > input::placeholder {
    color: rgb(177, 105, 57);
    
  }
  
  .aboutme :nth-child(3) {
    height: 80px;
  }
  
  .btn {
    background: rgb(177, 105, 57);
    width: 180px;
    height: 50px;
    color: white;
    text-align: center;
    line-height: 38px;
  }
  
  .about {
    position: relative;
    
  }
  
  .about-center {
    font: 16px "微软雅黑";
    color: rgb(177, 105, 57);
    margin-top: 80px;
    margin-left: 80px;
    p{
      line-height: 50px;
    }
  }
  
  /* .about-center :first-child{
      font:60px;
      font-family:"Peaches Cream";
  } */
  .wu {
    font-size: 48px;
    font-family: "Peaches Cream";
  }
  
  .myfont {
    text-indent: 0.01px;
    color: rgb(177, 105, 57);
    white-space: pre;
    box-sizing: border-box;
  }
  
  /*百度地图*/
  .map {
    margin-top: 60px;
  }
</style>
