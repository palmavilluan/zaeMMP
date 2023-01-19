<?php

require_once('config.php');
require_once('autorisieren.php');

//$benutzerID = $_POST["benutzerID"];
$name = $_POST["name"];
$email = $_POST["email"];
$handyNr = $_POST["handyNr"];


$sql = "UPDATE Benutzer SET name=?, email=?, handyNr=? WHERE ID = '$benutzerID'";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$name, $email, $handyNr]);
