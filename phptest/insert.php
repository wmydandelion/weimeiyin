<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 20:21
 */
$con = mysqli_connect("localhost","root","");
if (!$con){
    die('Could not connect: ' . mysqli_error());
}
mysqli_select_db("my_db",$con);
mysqli_query("insert into persons (fristname,lastname,age)VALUES ('Peter', 'Griffin', '35')");


mysqli_query("INSERT INTO Persons (FirstName, LastName, Age) 
VALUES ('Glenn', 'Quagmire', '33')");

mysqli_close($con);
?>


