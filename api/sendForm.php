<?php
header("Access-Control-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

if(
  isset($_POST['nombre']) && 
  $_POST['nombre'] != '' &&
  isset($_POST['tel']) && 
  $_POST['tel'] != '' && 
  isset($_POST['email']) && 
  $_POST['email'] != '' && 
  isset($_POST['local']) && 
  $_POST['local'] != '' && 
  isset($_POST['mensaje']) && 
  $_POST['mensaje'] != '' && 
  isset($_POST['plan']) && 
  $_POST['plan'] != '') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $local = $_POST['local'];
    $plan = $_POST['plan'];
    $mensaje = $_POST['mensaje'];
} else {
    echo json_encode('error_campos');
	die();
}

try {
    //Server settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'c1860371.ferozo.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@qr-food.com';
    $mail->Password = 'we5F4E@5lL';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('info@qr-food.com', 'QR Food Web');
	  $mail->addAddress('qrfoodarg@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Consulta - Plan $plan";
    $mail->Body = "
      <p><strong>Nombre: </strong> $nombre</p>
      <p><strong>E-mail: </strong> $email</p>
      <p><strong>Telefono: </strong> $tel</p>
      <p><strong>Local: </strong> $local</p>
      <p><strong>Plan: </strong> $plan</p>
      <p><strong>Mensaje: </strong> $mensaje</p>
    ";

    $mail->send();
    echo json_encode('ok');
} catch (Exception $e) {
    echo json_encode([$e, 'error']);
    // echo json_encode('error');
    die();
}