$(document).on("pageinit", function(){
    $("#left img").on("tap", function(){
        location.href = "welcome/index";
    });
    $('.buy').on('tap',function(){
        // console.log(111);
        var product_id = $('#hidden-product-id').val();
        $.get('user/check_logined',{},function(data){
            if(data == 'yes'){
                location.href = 'welcome/submit_order?productId='+product_id;
            }else{
                location.href = 'user/login_page';
            }
        },'text');
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
           $.get('user/cancel_collect', {
               'productId': productId
           }, function (data) {
               if (data == 'success') {
                   _that.text('收藏');
                   _that.removeClass('active');
               }
           }, 'text');
       }
    });
});

