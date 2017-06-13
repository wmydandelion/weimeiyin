<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 20:07
 */
$con = mysqli_connect("localhost","root","");

if (!$con){
    die("could not connect:".mysql_error());
}else{
    echo "success";
}



if (mysqli_query("CREATE DATABASE my_db",$con)){
    echo "Database created";
}else{
    echo "Error creating database: " . mysqli_error();
}
mysqli_close($con);
?>