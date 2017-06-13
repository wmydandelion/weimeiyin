<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 14:23
 */

session_start();
$_SESSION['view'] = 1;
?>

<html>
<body>
<?php

echo "pageviews=".$_SESSION['views'];
?>
</body>
</html>
