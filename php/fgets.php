<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/12
 * Time: 21:20
 */

$myfile = fopen("webdictionary.txt","r") or die("unable to open file");
echo fgets($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>