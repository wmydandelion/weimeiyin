<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 14:25
 */
$x = 5;
function mytest(){
    $y = 10;
    echo "<p>测试函数内部的变量：</p>";
    echo "变量 x 是：$x";
    echo "<br>";
    echo "变量 y 是：$y";
}
mytest();
echo "<p>测试函数之外的变量：</p>";
echo "变量 x 是：$x";
echo "<br>";
echo "变量 y 是：$y";
?>
