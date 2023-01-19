<?php

//IMPORT config.php
require('config.php');

//require('autorisieren.php');

/*Wir haben:
Variabeln= mit $
Spaltennamen in der Tabelle = Kleingeschrieben
Platzhalter = Grossgeschrieben
Mit Execute fügen wir die Variabeln durch die Platzhalter in den Spaltennamen ein.
*/

$standort = $_POST['standort'];
$kursName = $_POST['kursName'];
$benutzer_ID = $_POST['benutzer_ID'];
$dokumentName = $_POST['dokumentName'];

$sql = "INSERT INTO PDF (standort,kurs_ID,benutzer_ID,dokument) SELECT :Standort,ID,:Benutzer_ID,:dokumentName FROM Kurs WHERE name = :KursName";

$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute(array('Standort' => $standort, 'KursName' => $kursName,'Benutzer_ID' => $benutzer_ID,'dokumentName' => $dokumentName));

if ($erfolg) {
    print_r('Registrierung erfolgreich.');
} else {
    print_r($erfolg);
};




//INSERT Variable $standort-----------------------------------------------------------------------------------------------------------------
// //ABSPEICHERN Variable $standort
$standort = $_POST['standort'];

  //$standort = "testOrt";

  //EINFUEGEN in Tabelle PDF in Spalte standort Platzhalter :Standort
  /*$sql = "INSERT INTO PDF (standort) VALUES (:Standort) AND
    INSERT INTO PDF (kurs_ID) SELECT ID FROM Kurs WHERE name = (:kursName) ";
*/
 $sql = "INSERT INTO PDF (standort) VALUES (:Standort)";

  //VORBEREITEN SQL-Statement auszuführen, *pdo=Datenbankverbindung, im config definiert 
  $stmt = $pdo->prepare($sql);

  //AUSFUEHREN PDO-Statement, mit welcher Variabel erfolgt Zugriff auf Platzhalter ohne Dollarzeichen
  $erfolg = $stmt->execute(array('Standort' => $standort) );
  
  //$erfolg = $stmt->execute(array('Standort' => $standort) );

  //PRUEFEN ob Zugriff auf DB erfolgreich, Meldung ausgeben
  //Könnte auch schreiben if erfolg==1
  if ($erfolg) {

      print_r('Registrierung erfolgreich.');

  } else {
  //Fehlermeldung, wenn nicht erfolgreich
      print_r($erfolg);
  };



//INSERT Variable $kursName-----------------------------------------------------------------------------------------------------------------
// //ABSPEICHERN Variable $kursName
$kursName = $_POST['kursName'];

  //$standort = "testOrt";

  //EINFUEGEN in Tabelle PDF in Spalte standort Platzhalter :Standort
  /*$sql = "INSERT INTO PDF (standort) VALUES (:Standort) AND
    INSERT INTO PDF (kurs_ID) SELECT ID FROM Kurs WHERE name = (:kursName) ";
*/
 $sql = "INSERT INTO PDF (kurs_ID) SELECT ID FROM Kurs WHERE name = (:kursName)";

  //VORBEREITEN SQL-Statement auszuführen, *pdo=Datenbankverbindung, im config definiert 
  $stmt = $pdo->prepare($sql);

  //AUSFUEHREN PDO-Statement, mit welcher Variabel erfolgt Zugriff auf Platzhalter ohne Dollarzeichen
  $erfolg = $stmt->execute(array('kursName' => $kursName) );
  
  //$erfolg = $stmt->execute(array('Standort' => $standort) );

  //PRUEFEN ob Zugriff auf DB erfolgreich, Meldung ausgeben
  //Könnte auch schreiben if erfolg==1
  if ($erfolg) {

      print_r('Registrierung erfolgreich.');

  } else {
  //Fehlermeldung, wenn nicht erfolgreich
      print_r($erfolg);
  };


//INSERT Variable $benutzer_ID-----------------------------------------------------------------------------------------------------------------
// //ABSPEICHERN Variable $benutzer_ID
$benutzer_ID = $_POST['benutzer_ID'];

  //$standort = "testOrt";

  //EINFUEGEN in Tabelle PDF in Spalte standort Platzhalter :Standort
  /*$sql = "INSERT INTO PDF (standort) VALUES (:Standort) AND
    INSERT INTO PDF (kurs_ID) SELECT ID FROM Kurs WHERE name = (:kursName) ";
*/
$sql = "INSERT INTO PDF (benutzer_ID) VALUES (:Benutzer_ID)";

  //VORBEREITEN SQL-Statement auszuführen, *pdo=Datenbankverbindung, im config definiert 
  $stmt = $pdo->prepare($sql);

  //AUSFUEHREN PDO-Statement, mit welcher Variabel erfolgt Zugriff auf Platzhalter ohne Dollarzeichen
  $erfolg = $stmt->execute(array('Benutzer_ID' => $benutzer_ID) );

  //$erfolg = $stmt->execute(array('Standort' => $standort) );

  //PRUEFEN ob Zugriff auf DB erfolgreich, Meldung ausgeben
  //Könnte auch schreiben if erfolg==1
  if ($erfolg) {

      print_r('Registrierung erfolgreich.');

  } else {
  //Fehlermeldung, wenn nicht erfolgreich
      print_r($erfolg);
  };






/*  

//INSERT Variable $dokumentName-----------------------------------------------------------------------------------------------------------------
// //ABSPEICHERN Variable $dokumentName



  //$standort = "testOrt";

  //EINFUEGEN in Tabelle PDF in Spalte standort Platzhalter :Standort
  /*$sql = "INSERT INTO PDF (standort) VALUES (:Standort) AND
    INSERT INTO PDF (kurs_ID) SELECT ID FROM Kurs WHERE name = (:kursName) ";

    
*/

$dokumentName = $_POST['dokumentName'];

$sql = "INSERT INTO PDF (dokument) VALUES (:DokumentName)";

  //VORBEREITEN SQL-Statement auszuführen, *pdo=Datenbankverbindung, im config definiert 
  $stmt = $pdo->prepare($sql);

  //AUSFUEHREN PDO-Statement, mit welcher Variabel erfolgt Zugriff auf Platzhalter ohne Dollarzeichen
  $erfolg = $stmt->execute(array('DokumentName' => $dokumentName) );

  //$erfolg = $stmt->execute(array('Standort' => $standort) );

  //PRUEFEN ob Zugriff auf DB erfolgreich, Meldung ausgeben
  //Könnte auch schreiben if erfolg==1
  if ($erfolg) {

      print_r('Registrierung erfolgreich.');

  } else {
  //Fehlermeldung, wenn nicht erfolgreich
      print_r($erfolg);
  };



/*
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



*/