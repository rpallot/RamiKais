<?php
	
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$subject = "ramikais.org Email Enquiry"
	$text = $_POST['text'];
	
	$to = "test@ramikais.org";
	$message = "Mail received from ".$mail;
	$message .= "\nMessage reads: ".$text;
	if (mail($to, $subject, $message)) {
		echo "Thank you for contacting ramikais.org.";
	} else {
		echo "An error has occurred. Please check your information before resubmitting. \nIf this error persists, please try emailing via the link below.";
	}
?>