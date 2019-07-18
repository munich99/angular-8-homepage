<?php
// session_start();
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {

  $name         = $_POST['name'];
  $email        = $_POST['email']; 
  $phone        = $_POST['phone'];
  $betreff      = $_POST['subject']; 
  $mailmessage  = $_POST['mailmessage'];

  $empfaenger = "kohlrappa@gmail.com";

  if($betreff) {

    $from = "From:" . $email;
    $text = "Herr oder Frau " . $name . " hat geschrieben: \n" .
             $mailmessage . "\n \n seine Telefonnummer ist: \n" . $phone;
    
    mail($empfaenger, $betreff, $text, $from);
  }

}
?>
