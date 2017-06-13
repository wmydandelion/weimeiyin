<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 20:03
 */

$con = mysqli_connect("localhost","root","");

if (!$con){
    die("could not connect:".mysql_error());
}else{
    echo "success";
}
mysqli_close($con);
?>


