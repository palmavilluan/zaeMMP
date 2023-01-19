<?php

require('config.php');

$email = $_POST["email"];
$passwort = $_POST["passwort"];

//PDO – Hier holen wir alles aus der Datenbank. 
$sql = "SELECT * FROM Benutzer WHERE email = '$email'";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

//Wenn Statement erfolgreich…
if ($erfolg) {

    //gehe in Datenbank und hole alle Resultate
    $array = $stmt->fetchAll();

    //Hier werden die Resultate gezählt, welche übereinstimmen. Das ist eine Php Funktion
    $anzahlResultate = count($array);


    if ($anzahlResultate == 1){

        //Wenn Resultat == 1, nimm was in der Tabelle bei Passwort steht und gebe den Wert an die Variabel Passwort
        $dbPasswort = $array[0]['passwort'];
        //Das gleiche mit der ID
        $benutzerID = $array[0]['ID'];
        //diese Parameter geben wir der Funktion prüfe PAsswort weiter
        pruefepasswort($passwort, $dbPasswort, $benutzerID);


    } else {
        //Fehlermeldung wenn Email nicht korrekt. ID und Token als 0, weil undefind = nicht eingeloggt. Wird im localstorage als 0/0 ausgegeben.
        sendeAntwort('Diese E-Mail existiert nicht.', 0, 0);



    }


}

function pruefepasswort($benutzerPasswort, $dbPasswort, $benutzerID){

    //Püft, ob das Benutzer Passwort mit dem Datenbankpasswort überein stimmt. Prüfen öb beide den gleichen Hash zurück geben. 
    if (password_verify($benutzerPasswort, $dbPasswort)) {
        
        //erstelle einen Token, wenn Email und Passwort korrekt. BenutzerID schicken wir gleich weiter an die Funktion erstelleToken
        erstelleToken($benutzerID);


        
    } else {

        sendeAntwort('Ungültiges Passwort', 0, 0);


    }

}

//Eintrag in Sessiontabelle
function erstelleToken($benutzerID){

    require('config.php');

    //Rufe  die Funktion generate… mit dem Parameter 42 auf, und speichere den Return in die Variable 'Token', dieser wird in die Tabelle eingefügt.

    $token = generateRandomString(42);

 //Infos werden in die Session Tabelle eingefügt. Passende Benutzer ID und Token Nummer, Timestamp erfolgt automatisch
    $sql = "INSERT INTO Session (benutzer_ID, token) VALUES (:benutzer_ID, :token)";
   
    /*pdo=Datenbankverbindung die wir im config definiert haben. bereite dich vor, dieses SQL Statement auszuführen*/
    $stmt = $pdo->prepare($sql);

    $erfolg = $stmt->execute(array('benutzer_ID' => $benutzerID, 'token' => $token));
    if ($erfolg) {
        //wenn alles geklappt hat
        // print_r('Session erfolgreich erstellt.');
        sendeAntwort('Session erfolgreich erstellt.', $benutzerID, $token);
    
    } else {
    //Fehlermeldung, wenn nicht erfolgreich
        print_r($erfolg);

        sendeAntwort('Datenbankfehlerw: ' . $erfolg, 0, 0);

    };


}


//Funktion zum einem Random String erstellen
function generateRandomString($length) {
    //alle Characters, aus den ein Hash generiert werden soll
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    //Return heisst es gibt was zurück, dort wo man es angefragt hat.
    return $randomString;
}

function sendeAntwort($nachricht, $benutzerID, $token){

    $antwort = [$nachricht, $benutzerID, $token];

    $antwort = json_encode($antwort);

    print($antwort);

}
