/**
 * Created by wmy on 2017/2/13.
 */
define(function(){
    function isArray(arr){
        if(arr instanceof Array){
            return true;
        }
        return false;
    }
    return isArray;
});