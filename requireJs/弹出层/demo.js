/**
 * Created by wmy on 2017/8/6.
 */
require(['jquery','dialog'],function ($,Dialog) {
    $("#btn").on('click',function(){
       var  dialog = new Dialog();
       dialog.open({
           title : '我是对话框',
           width : 500,
           url : 'login.html'
       });
    });
});