<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 15:38
 */
function checkNum($number){
    if ($number>1){
        throw new Exception("value must be 1 or below");
    }
    return true;
}
try{
    checkNum(2);
    echo "If you see this, the number is 1 or below";
}catch(exception $e){
    echo 'Message:'.$e->getMessage();
}
?>