<?php

//IMPORT config.php
require('config.php');

/*Wir haben:
Variabeln= mit $
Spaltennamen in der Tabelle = Kleingeschrieben
Platzhalter = Grossgeschrieben
Mit Execute fügen wir die Variabeln durch die Platzhalter in den Spaltennamen ein.
*/

//INSERT Variable  $standort-----------------------------------------------------------------------------------------------------------------
// //ABSPEICHERN Variable $standort
  $standort = $_POST['standort'];
  //$standort = "testOrt";

  //EINFUEGEN in Tabelle PDF in Spalte standort Platzhalter :Standort
  $sql = "INSERT INTO PDF (standort) VALUES (:Standort)";

  //VORBEREITEN SQL-Statement auszuführen, *pdo=Datenbankverbindung, im config definiert 
  $stmt = $pdo->prepare($sql);

  //AUSFUEHREN PDO-Statement, mit welcher Variabel erfolgt Zugriff auf Platzhalter ohne Dollarzeichen

  $erfolg = $stmt->execute(array('Standort' => $standort));

  //PRUEFEN ob Zugriff auf DB erfolgreich, Meldung ausgeben
  //Könnte auch schreiben if erfolg==1
  if ($erfolg) {

      print_r('Registrierung erfolgreich.');

  } else {
  //Fehlermeldung, wenn nicht erfolgreich
      print_r($erfolg);
  };


//SELECT Infos Standort-----------------------------------------------------------------------------------------------------------------

//EINFUEGEN in Tabelle PDF in Spalte standort Platzhalter :Standort
$sql = "SELECT DISTINCT standort FROM PDF";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}



