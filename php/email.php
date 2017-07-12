<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 14:37
 */

    $to = "someone@example.com";
    $subject = "Test mail";
    $message = "Hello! This is a simple email message.";
    $from = "someonelse@example.com";
    $header = "FROM:$from";
    mail($to,$subject,$message,$header);
echo "MAIL SENT";
?>