<?php
require_once 'vendor/autoload.php';
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use \Symfony\Component\Mime\Email;

var_dump($_POST);

$transport = Transport::fromDsn('gmail+smtp://duhameltonysmtp@gmail.com:mrstkfbsvgbaimmd@default');
$mailer = new Mailer($transport);

$email = (new Email())
  ->from($_POST['email'])
  ->to('duhameltonyeyzo@gmail.com')
  ->subject('Message site CV')
  ->text($_POST['message']);

$mailer->send($email);
