<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 16:02
 */
if(!filter_has_var(INPUT_POST, "url"))
{
    echo("Input type does not exist");
}
else
{
    $url = filter_input(INPUT_POST, "url", FILTER_SANITIZE_URL);
}
?>