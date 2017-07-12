<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 22:34
 */

$con = mysqli_connect("localhost","peter","abc123");
if (!$con)
{
    die('Could not connect: ' . mysqli_error());
}
mysqli_select_db("my_db", $con);

mysqli_query("UPDATE Persons SET Age = '36'
WHERE FirstName = 'Peter' AND LastName = 'Griffin'");

mysqli_close($con);
?>



