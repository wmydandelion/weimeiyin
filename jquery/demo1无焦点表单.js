/**
 * Created by wmy on 2017/1/6.
 */
$(function(){
    $(":input").focus(function(){
        $(this).addClass('focus');
    }).blur(function(){
        $(this).removeClass('focus');
    });
})
