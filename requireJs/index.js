/**
 * Created by wmy on 2017/2/13.
 */
require(["a"], function (arrSort) {
    var arr = [3,2,5,1,11];
    console.log(arr);
});

define(function(require){
        var arr = [3,2,5,1,11];
        var arrSort = require("a");
        console.log(arrSort(arr));
    }

);