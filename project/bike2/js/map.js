/**
 * Created by ZJ on 2017/6/6.
 */
var map = new BMap.Map("map");//创建地图实例
//页面初始化
//$(function() {
    //初始化地图 默认加载北京天安门
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,20);//初始化地图，point为中心点，缩放级别为18
    //判断手机浏览器是否支持定位
    if(navigator.geolocation){
        var geolocation = new BMap.Geolocation();//创建定位实例
        geolocation.getCurrentPosition(showLocation,{enableHighAccuracy: true});//enableHighAccuracy 要求浏览器获取最佳结果
    }else{
        map.addControl(new BMap.GeolocationControl());//添加定位控件 支持定位
    }
//});
//转换定位坐标
function translate(point){
    var convertor = new BMap.Convertor();//实例转换器
    var pointArr = [];
    pointArr.push(point);//待转换的坐标 可批量
    convertor.translate(pointArr, 1, 5, function (data){
        if(data.status === 0) {
            var marker = new BMap.Marker(data.points[0]);//转换成功后的坐标
            map.addOverlay(marker);
            map.setCenter(data.points[0]);
        }
    })
}
//处理定位后的信息
function showLocation(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){//定位成功
        //新建中心点 并将地图中心移动过去

        var centerPoint = new BMap.Point(r.longitude,r.latitude);
        map.panTo(centerPoint);
        map.setCenter(centerPoint);
        //新建标注
        var mk = new BMap.Marker(centerPoint);
        mk.disableDragging();// 不可拖拽
        map.addOverlay(mk);
    }
    else {
        alert('failed'+this.getStatus());//定位失败
    }
}