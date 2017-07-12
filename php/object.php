
<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 14:54
 */
class Car{
    var $color;
    function Car($color = "green"){
        $this ->color = $color;
    }
    function what_color(){
        return $this->color;
    }
}
?>