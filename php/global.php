<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 14:28
 */
$x = 6;
$y = 10;
function mytest(){
    global $x,$y;
    $y = $x + $y;
    echo $y;
    echo "<br/>";
}
mytest();
echo "<br/>";
echo $y;