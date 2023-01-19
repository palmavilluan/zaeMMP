<?php
echo "Benutzername";
require('config.php');
//require('autorisieren.php');


$benutzerID = $_POST["benutzerID"];

$sql = "SELECT name AND email FROM Benutzer WHERE ID = $benutzerID";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}