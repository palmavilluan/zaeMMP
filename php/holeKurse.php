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
$sql = "SELECT * FROM Kurs";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}



