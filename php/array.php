<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 16:06
 */

$cars=array("Volvo","BMW","SAAB");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
echo "<hr>";
echo count($cars);
echo "<hr>";
for($x=0;$x<count($cars);$x++){
    echo $cars[$x];
    echo "<HR>";
}





$age = array("peter"=>"35","ben"=>"56");
echo "Peter is " . $age['peter'] . " years old.";
echo "<HR>";


foreach ($age as $x=>$x_value){
    echo "key=".$x.",value=".$x_value;
    echo "<HR>";
}
?>