/**
 * Created by ZJ on 2017/6/6.
 */
$(function(){
   //²Ëµ¥À¸»¬¶¯
    var bflag=false;
    function swipeComp (){
        $(".button").on('click', function () {
            if(!bflag){
                $(".content").animate({
                    bottom:-550
                });
            }else{
                $(".content").animate({
                    bottom:0
                });
            }
            bflag = !bflag;

        $(".up").toggleClass('display');
        $(".down").toggleClass('display');
        })
    }
    swipeComp();

    function change(){
        $(".fa-clock-o").on('click', function () {
            $(".menu").animate({
                bottom:0
            })
        })
        $(".fa-times,.confirm").on('click',function(){
            $(".menu").animate({
                bottom:-2000
            })
        })
    };
    change();

    var index=0;
    function menu(){
        $(".type li").on('click',function(){
            $(this).toggleClass('select').siblings().removeClass('select');
            index = $(this).index()-1;
            $('.b-img img').eq(index).show().siblings().hide();
        });
        $(".time li").on('click', function () {
            $(this).toggleClass('select').siblings().removeClass('select');
        });
        $(".amount li").on('click', function () {
            $(this).toggleClass('select').siblings().removeClass('select');
        });
    }
    menu();
});