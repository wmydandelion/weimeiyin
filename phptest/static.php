<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 14:31
 */
function mytest(){
    static $x = 0;
    echo $x;
    $x++;
}
mytest();
echo "<hr/>";
mytest();
echo "<hr/>";
mytest();
echo "<hr/>";
mytest();
echo "<hr/>";
?>
