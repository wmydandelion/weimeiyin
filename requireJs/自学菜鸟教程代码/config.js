/**
 * Created by wmy on 2017/2/15.
 */
require.config({
    paths:{
        "a" : "a",
        "b" : "b",
        "c" : "c"
    }
});
require(['a','b','c'],function(a,b,c){
    a.hello();
    b.hello();
    c.hello();
});