
<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 15:19
 */

if (!file_exists("welcome.txt")){
    die("file not found@");
}else{
    $file = fopen("welcome.txt");
}

?>