/**
 * Created by ZJ on 2017/6/6.
 */
var map = new BMap.Map("map");//������ͼʵ��
//ҳ���ʼ��
//$(function() {
    //��ʼ����ͼ Ĭ�ϼ��ر����찲��
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,20);//��ʼ����ͼ��pointΪ���ĵ㣬���ż���Ϊ18
    //�ж��ֻ�������Ƿ�֧�ֶ�λ
    if(navigator.geolocation){
        var geolocation = new BMap.Geolocation();//������λʵ��
        geolocation.getCurrentPosition(showLocation,{enableHighAccuracy: true});//enableHighAccuracy Ҫ���������ȡ��ѽ��
    }else{
        map.addControl(new BMap.GeolocationControl());//��Ӷ�λ�ؼ� ֧�ֶ�λ
    }
//});
//ת����λ����
function translate(point){
    var convertor = new BMap.Convertor();//ʵ��ת����
    var pointArr = [];
    pointArr.push(point);//��ת�������� ������
    convertor.translate(pointArr, 1, 5, function (data){
        if(data.status === 0) {
            var marker = new BMap.Marker(data.points[0]);//ת���ɹ��������
            map.addOverlay(marker);
            map.setCenter(data.points[0]);
        }
    })
}
//����λ�����Ϣ
function showLocation(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){//��λ�ɹ�
        //�½����ĵ� ������ͼ�����ƶ���ȥ

        var centerPoint = new BMap.Point(r.longitude,r.latitude);
        map.panTo(centerPoint);
        map.setCenter(centerPoint);
        //�½���ע
        var mk = new BMap.Marker(centerPoint);
        mk.disableDragging();// ������ק
        map.addOverlay(mk);
    }
    else {
        alert('failed'+this.getStatus());//��λʧ��
    }
}