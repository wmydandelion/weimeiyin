<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 20:25
 */

$con = mysqli_connect("localhost","peter","abc123");
if (!$con)
{
    die('Could not connect: ' . mysqli_error());
}
mysqli_select_db("my_db",$con);

$result = mysqli_query("select * from person");
while($row = mysqli_fetch_array($result)){
    echo $row['FirstName'] . " " . $row['LastName'];
    echo "<br />";
}

mysqli_close($con);
?>

