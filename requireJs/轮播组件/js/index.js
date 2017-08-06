/**
 * Created by wmy on 2017/8/6.
 */
require(['jquery','carousel'],function ($,Carousel) {
    var imgData = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];

    new Carousel({
        selector : '#container',
        arrowPos : 'center',
        buttonType : 'squire',
        imgData : imgData
    });
    new Carousel({
        selector : '#container2',
        buttonType : 'circle',
        imgData : imgData
    });
});