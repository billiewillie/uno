<?php 

require 'phpmailer/class.phpmailer.php';
require 'phpmailer/class.smtp.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$url = $_POST['user_url'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.com';  					  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'noreply@uno-agency.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'mB8hAMj'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('noreply@uno-agency.ru'); // от кого будет уходить письмо?
$mail->addAddress('citomedinfo@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';

$mail->Body = "<table><tr style='background-color: #f8f8f8;'><td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя</b></td><td style='padding: 10px; border: #e9e9e9 1px solid;'>" . $name . "</td></tr>
<tr style='background-color: #f8f8f8;'><td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td><td style='padding: 10px; border: #e9e9e9 1px solid;'>" . $phone . "</td></tr>
<tr style='background-color: #f8f8f8;'><td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Почта</b></td><td style='padding: 10px; border: #e9e9e9 1px solid;'>" . $email . "</td></tr></table>";

$mail->AltBody = '';

if($name === '' || $phone === '' || $email === '' || $url != '') {
    echo 'Error';
} elseif($mail->send()) {
    echo 'ok';
}

?>