<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 14:29
 */

session_start();
if(isset($_SESSION['views'])){
    $_SESSION['views'] = $_SESSION['views']+1;
}else{
    $_SESSION['view'] = 1;

}
echo "VIEWS=".$_SESSION['views'];
?>