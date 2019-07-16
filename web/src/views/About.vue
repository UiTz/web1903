<template>
    <div>
        <div class="item"></div>
        <div class="container"> 
            <div class="text-white my-font2">联系我们</div>
            <div class="w-100"></div>
            <div class="row m-0 d-flex">
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
            <div style="width:1030px;height:320px;border:#ccc solid 1px;" id="dituContent"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
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
    width:100%;
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
    margin-top:80px;
    margin-left:80px;
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
/*百度地图*/
     html,body{margin:0;padding:0;}
    .iw_poi_title {color:#CC5522;font-size:14px;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}
    .iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}
</style>
