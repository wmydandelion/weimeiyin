/**
 * Created by xiecheng on 2017/7/10.
 */

$(document).on("pageinit", function(){
    $("#left img").on("tap", function(){
        location.href = "welcome/index";
    });




    $('#collect-btn').on('tap',function(){

        var _that = $(this);
        var productId = $('#hidden-product-id').val();

        if(!_that.hasClass('active')){
            $.get('user/check_logined',{},function(data){
                if(data == 'yes'){

                    $.get('user/collect',{'productId':productId},function(data){
                        if(data == 'success'){
                            _that.text('取消');
                            _that.addClass('active');
                        }
                    },'text');
                }else{

                    location.href = "user/login_page";
                }
            },'text');

        }else {
            $.get('user/cancel_collect',{
                'productId':productId
            },function (data) {
                if (data == 'success'){
                    _that.text('收藏');
                    _that.removeClass('active');
                }
            },'text');
        }

    });




});

