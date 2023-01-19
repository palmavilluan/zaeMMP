<?php
/*
// EINBINDEN/ EINFUEGEN von config.php File oberhalb
require('config.php');


// INSERT
// INSERT
// INSERT
// INSERT



// Variabeln aus dem Frontend
//$dokument = $_POST['dokument'];
//$kurs = $_POST['kurs'];
$standort = $_POST['standort'];


*/


/*
// VERSCHLUESSELN von $password, einfache PHP Methode
$password = password_hash($password, PASSWORD_DEFAULT);
*/

/*
// //Testing Variabeln
// $email = "luan.palma@outlook.com";
// $username = "Luan";
// $password = "Palma";

//$sql = "INSERT INTO PDF (kurs, standort) VALUES (:Kurs, :Standort)";
$sql = "INSERT INTO PDF (standort) VALUES (:standort)";

$stmt = $pdo->prepare($sql);

//$erfolg = $stmt->execute(array('kurs' => $kurs, 'standort' => $standort ));
$erfolg = $stmt->execute(array('standort' => $standort ));

//PRÜFEN ob $erfolg ==1 / ==true

if ($erfolg) {

    print_r('Registrierung erfolgreich.');
} else {

    print_r($erfolg);

}
;

// Variabeln zB. $email, $username $password
// Spalten Namen zB. name, email, password
// Platzhalter zB. :Name, :Email, :Password


//ÜBERPRÜFEN ob Datei hochgeladen
if (isset($_FILES["file"]) && $_FILES["file"]["error"] === UPLOAD_ERR_OK) {
  // Get the file
  $file = $_FILES["file"];
  $file_name = $file['name'];
  $file_tmp_name = $file['tmp_name'];

  //ABSPEICHERN der Datei
  move_uploaded_file($file_tmp_name, "path/to/upload/$file_name");
} else {
  echo "There was an error uploading the file.";
}


-----------------
------------------------------
*/

//importieren wir das config.php in dieses File
require('config.php');

/*Wir haben:
Variabeln= mit $
Spaltennamen in der Tabelle = Kleingeschrieben
Platzhalter = Grossgeschrieben
Mit Execute fügen wir die Variabeln durch die Platzhalter in den Spaltennamen ein.
*/

$standort = $_POST['standort'];



/* Was wollen wir einfügen?, Tabelle Benutzer mit folgenden Spaltennamen(email in kleinbuchstaben), Name der Variabeln */
$sql = "INSERT INTO PDF (standort) VALUES (:Standort)";
/*pdo=Datenbankverbindung die wir im config definiert haben. bereite dich vor, dieses SQL Statement auszuführen*/
$stmt = $pdo->prepare($sql);
/*definiert nochmals, was wir ausführen möchten, mit welchen Namen, also Variabel Email greiffen wir auf Email zu, 
Platzhalter ohne Dollarzeichen, Wir definieren Variabeln und nutzen sie im execute
Wenn alles geklappt hat, wir erfolg = 1 = true */ 
$erfolg = $stmt->execute(array('Standort' => $standort));
//Könnte auch schreiben if erfolg==1
if ($erfolg) {

    print_r('Registrierung erfolgreich.');

} else {
//Fehlermeldung, wenn nicht erfolgreich
    print_r($erfolg);
};