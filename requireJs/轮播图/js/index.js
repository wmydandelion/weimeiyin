require(["carousel"],function(Carousel){
    var imgArr1 = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var settings1 = {
        selector : "#container1",
        imgs : imgArr1,
        buttonStyle : "circle",
        arrowPos : "bottom",
        speed  : 500
    };
    var carousel1 = new Carousel();
    carousel1.init(settings1);
    var imgArr2 = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var settings2 = {
        selector : "#container2",
        imgs : imgArr2,
        buttonStyle : "square",
        arrowPos : "center",
        speed : 1000
    };
    var carousel2 = new Carousel();
    carousel2.init(settings2);
});

