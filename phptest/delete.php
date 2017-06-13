<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 22:38
 */

$con = mysqli_connect("localhost","peter","abc123");
if (!$con)
{
    die('Could not connect: ' . mysqli_error());
}

mysqli_select_db("my_db", $con);

mysqli_query("DELETE FROM Persons WHERE LastName='Griffin'");

mysqli_close($con);
?>