<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 20:58
 */
$cars = array(
    array('v',2,12),
    array("BMW",15,13),
    array("Saab",5,2),
    array("Land Rover",17,15)
);

echo $cars[0][0].": 库存：".$cars[0][1].", 销量：".$cars[0][2].".<br>";
echo $cars[1][0].": 库存：".$cars[1][1].", 销量：".$cars[1][2].".<br>";
echo $cars[2][0].": 库存：".$cars[2][1].", 销量：".$cars[2][2].".<br>";
echo $cars[3][0].": 库存：".$cars[3][1].", 销量：".$cars[3][2].".<br>";


echo '<hr>';

for ($row = 0;$row<4;$row++){
    echo "<p>$row</p>";
    echo "<ul style='border: 1px solid #993599;'>";
    for ($col = 0; $col < 3; $col++) {
        echo "<li style='border: 1px solid #993599;'>".$cars[$row][$col]."</li>";
    }
    echo "</ul>";
}

?>