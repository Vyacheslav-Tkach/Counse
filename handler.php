<?php

require_once __DIR__ . '/mailer/Validator.php';
require_once __DIR__ . '/mailer/ContactMailer.php';

if (!Validator::isAjax() || !Validator::isPost()) {
	echo 'Access is denied!';
	exit;
}

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : null;
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : null;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : null;
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : null;

if (empty($name) || empty($email) || empty($phone) || empty($message)) {
	echo 'All fields are required.';
	exit;
}

if (!Validator::isValidEmail($email)) {
	echo 'Email does not match the format';
	exit;
}

if (!Validator::isValidPhone($phone)) {
	echo 'The phone does not match the format.';
	exit;
}

if (ContactMailer::send($name, $email, $phone, $message)) {
	echo htmlspecialchars($name) . ', Your message has been successfully sent.';
} else {
	echo 'An error has occurred! Failed to send message.';
}
exit;