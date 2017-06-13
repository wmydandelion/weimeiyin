<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 16:18
 */
$x = 25;
$y = 75;
function addition(){
    $GLOBALS['z'] = $GLOBALS['x']+$GLOBALS['y'];

}
addition();
echo $z;
?>

