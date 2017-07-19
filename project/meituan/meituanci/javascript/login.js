$(document).on("pageinit", function(){
    $("#register_page").on("tap", function(){
        location.href = "user/register_page";
    });

    $("#login_page").on("tap", function(){
        location.href = "user/login_page";
    });

});