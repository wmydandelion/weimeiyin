/**
 * Created by wmy on 2017/7/6.
 */
$(function () {
    var $guideUl = $("#guide ul");
    var $navSpan = $("#nav span");
    // $navSpan.on("tap",function () {
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $guideUl.css({
    //         left : -$(this).index()*$guideUl.width()/2
    //     });
    // });
    // $guideUl.on("swipeleft",function () {
    //     $navSpan.eq(1).addClass("active").siblings().removeClass("active");
    //     $guideUl.css({
    //         left:-$guideUl.width()/2
    //     });
    // }).on("swiperight",function () {
    //     $navSpan.eq(0).addClass("active").siblings().removeClass("active");
    //     $guideUl.css({
    //             left:0
    //         });
    // });

    $navSpan.on("tap",function () {
        swipeGuide($(this).index());
    });
    $guideUl.on("swipeleft",function () {
        swipeGuide(1);
    }).on("swiperight",function () {
        swipeGuide(0);
    });
    $("go-top").on("tap",function () {
        if($(window).scrollTop() <= 1){
            return false;
        }
        $("body").animate({
            scrollTop:0
        },500);
        var top = $(this).css("top");
        $(this).animate({
           top :0
        },500,function(){
            $(this).css("top",top);
        });
    });
    function swipeGuide(index){
        $navSpan.eq(index).addClass("active").siblings().removeClass("active");
       $guideUl.css({
           left : -index * $guideUl.width()/2
       });
    }
});