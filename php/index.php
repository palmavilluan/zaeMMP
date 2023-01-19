<?php

//IMPORT config.php
require('config.php');

/*Wir haben:
Variabeln= mit $
Spaltennamen in der Tabelle = Kleingeschrieben
Platzhalter = Grossgeschrieben
Mit Execute fügen wir die Variabeln durch die Platzhalter in den Spaltennamen ein.
*/

//SELECT Infos Standort-----------------------------------------------------------------------------------------------------------------

//EINFUEGEN in Tabelle PDF in Spalte standort Platzhalter :Standort
$sql = "SELECT  Kurs.name as Kurs, Kurs.semester as Semester, PDF.standort as Studienort, PDF.dokument as Dokument,  Benutzer.name as Author, Benutzer.handyNr as Handynummer FROM PDF JOIN Benutzer ON PDF.benutzer_ID = Benutzer.ID JOIN Kurs ON PDF.kurs_ID = Kurs.ID ";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}



