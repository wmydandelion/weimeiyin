<html>
<body>

<?php


function spamcheck($file){
    $field = filter_var($field,FILTER_SANITIZE_EMAIL);
    if (filter_var($field,FILTER_VALIDATE_EMAIL))
    {
        return true;
    }
    else{
        return false;
    }
}
if (isset($_REQUEST['email'])){
    $mailcheck = spamcheck($_REQUEST['email']);
    if ($mailcheck==FALSE)
    {
        echo "Invalid input";
    }
    else
    {//send email
        $email = $_REQUEST['email'] ;
        $subject = $_REQUEST['subject'] ;
        $message = $_REQUEST['message'] ;
        mail("someone@example.com", "Subject: $subject",
            $message, "From: $email" );
        echo "Thank you for using our mail form";
    }
}
    else
    {//if "email" is not filled out, display the form
        echo "<form method='post' action='mailform.php'>
      Email: <input name='email' type='text' /><br />
      Subject: <input name='subject' type='text' /><br />
      Message:<br />
      <textarea name='message' rows='15' cols='40'>
      </textarea><br />
      <input type='submit' />
      </form>";
}
//
//FILTER_SANITIZE_EMAIL 从字符串中删除电子邮件的非法字符
//FILTER_VALIDATE_EMAIL 验证电子邮件地址

?>



</body>
</html>
<?php
/**
 * Created by PhpStorm.
 * User: wmy
 * Date: 2017/6/13
 * Time: 14:46
 */
?>