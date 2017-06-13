<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 13:54
 */

$myfile = fopen("webdictionary.txt","w") or die("unable to open file!");

$txt = "Bill Gates \n";
fwrite($myfile,$txt);
$txt = "RRRill IIIIates \n";
fwrite($myfile,$txt);

fclose($myfile);
?>