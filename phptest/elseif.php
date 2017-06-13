<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 15:38
 */
$t = date("H");
if ($t<"10"){
    echo '11';
}elseif ($t <'20'){
    echo '222';
}else{
    echo '3333';
}
?>
