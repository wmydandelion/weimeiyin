<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 15:54
 */


//filter_var() - 通过一个指定的过滤器来过滤单一的变量
//filter_var_array() - 通过相同的或不同的过滤器来过滤多个变量
//filter_input - 获取一个输入变量，并对它进行过滤
//filter_input_array - 获取多个输入变量，并通过相同的或不同的过滤器对它们进行过滤


$int = 123;
if (!filter_var($int,FILTER_VALIDATE_INT)){
    echo "111";
}else{
    echo "22";
}

?>