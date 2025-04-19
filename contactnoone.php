<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'electromagnetbrains@gmail.com';
    $mail->Password = 'fuccrsbgmayfqqtl';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom('electromagnetbrains@gmail.com', 'Home E-Studies');
    $mail->addAddress('electromagnetbrains@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = $_POST['subject'];
    $mail->Body = "You have received a message from " . $_POST['name'] . " (" . $_POST['email'] . "):<br><br>" . nl2br(htmlspecialchars($_POST['message']));
    $mail->send();

    $userMail = new PHPMailer(true);
    $userMail->isSMTP();
    $userMail->Host = 'smtp.gmail.com';
    $userMail->SMTPAuth = true;
    $userMail->Username = 'electromagnetbrains@gmail.com';
    $userMail->Password = 'fuccrsbgmayfqqtl';
    $userMail->SMTPSecure = 'tls';
    $userMail->Port = 587;
    $userMail->setFrom('electromagnetbrains@gmail.com', 'Home E-Studies');
    $userMail->addAddress($_POST['email']);
    $userMail->isHTML(true);
    $userMail->Subject = "We received your message: " . $_POST['subject'];
    $userMail->Body = "Hi " . $_POST['name'] . ",<br><br>Thank you for contacting us. Here's a copy of your message:<br><br><b>Subject:</b> " . htmlspecialchars($_POST['subject']) . "<br><b>Message:</b><br>" . nl2br(htmlspecialchars($_POST['message'])) . "<br><br>We'll get back to you soon.<br><br>— Home E-Studies Team";
    $userMail->send();

    echo "<script>alert('Message sent successfully! A confirmation has been sent to your email.'); window.location.href='index.html';</script>";
} catch (Exception $e) {
    echo "<script>alert('Mailer Error: {$mail->ErrorInfo}'); window.location.href='index.html';</script>";
}
