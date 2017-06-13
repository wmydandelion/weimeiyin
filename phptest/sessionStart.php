<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 14:20
 */

session_start();
?>
<html>
<body>
session_start() 函数必须位于 html 标签之前：<br>
上面的代码会向服务器注册用户的会话，以便您可以开始保存用户信息，同时会为用户会话分配一个 UID。
</body>
</html>
