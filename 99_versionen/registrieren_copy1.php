<?php

//importieren wir das config.php in dieses File
require('config.php');

/*Wir haben:
Variabeln= mit $
Spaltennamen in der Tabelle = Kleingeschrieben
Platzhalter = Grossgeschrieben
Mit Execute fügen wir die Variabeln durch die Platzhalter in den Spaltennamen ein.
*/

$email = $_POST["email"];
$benutzername = $_POST["benutzername"];
$handyNr = $_POST["handyNr"];
$passwort = $_POST["passwort"];

//hash funktion von php. Verschluesselt Passwörter in der Datenbank. Steht nicht mehr 1234 sonder ein Genusch.
$passwort = password_hash($passwort, PASSWORD_DEFAULT);


/* Was wollen wir einfügen?, Tabelle Benutzer mit folgenden Spaltennamen(email in kleinbuchstaben), Name der Variabeln */
$sql = "INSERT INTO Benutzer (name, handyNr, email, passwort) VALUES (:Name, :HandyNr, :Email, :Passwort)";
/*pdo=Datenbankverbindung die wir im config definiert haben. bereite dich vor, dieses SQL Statement auszuführen*/
$stmt = $pdo->prepare($sql);
/*definiert nochmals, was wir ausführen möchten, mit welchen Namen, also Variabel Email greiffen wir auf Email zu, 
Platzhalter ohne Dollarzeichen, Wir definieren Variabeln und nutzen sie im execute
Wenn alles geklappt hat, wir erfolg = 1 = true */ 
$erfolg = $stmt->execute(array('Name' => $benutzername, 'HandyNr' => $handyNr, 'Email' => $email, 'Passwort' => $passwort));
//Könnte auch schreiben if erfolg==1
if ($erfolg) {

    print_r('Registrierung erfolgreich.');

} else {
//Fehlermeldung, wenn nicht erfolgreich
    print_r($erfolg);
};