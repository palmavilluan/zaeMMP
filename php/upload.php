<?php

//IMPORT config.php
require('config.php');

require('autorisieren.php');

$standort = $_POST['standort'];
$kursName = $_POST['kursName'];
$benutzer_ID = $_POST['benutzer_ID'];
$dokumentName = $_POST['dokumentName'];

$sql = "INSERT INTO PDF (standort,kurs_ID,benutzer_ID,dokument) SELECT :Standort,ID,:Benutzer_ID,:dokumentName FROM Kurs WHERE name = :KursName";

$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute(array('Standort' => $standort, 'KursName' => $kursName,'Benutzer_ID' => $benutzer_ID,'dokumentName' => $dokumentName));

if ($erfolg) {
    print_r('Upload erfolgreich.');
} else {
    print_r($erfolg);
};

