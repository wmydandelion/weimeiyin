/**
 * Created by wmy on 2017/2/13.
 */
define(["b"], function (isArray) {
    function arrSort(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return a-b;
            });
        }else{
            return "����Ĳ�����������";
        }
        }
        return arrSort;
});

