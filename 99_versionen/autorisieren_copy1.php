<?php

require('config.php');

loescheSessions();

$benutzerID = $_SERVER["PHP_AUTH_USER"];
$token = $_SERVER["PHP_AUTH_PW"];


$sql = "SELECT * FROM Session WHERE benutzer_ID = '$benutzerID' AND token = '$token' AND timestamp > (NOW() - INTERVAL 2 hour)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $resultate = $stmt->fetchAll();

    $sitzungsID = $resultate[0]['ID'];

    $anzahlResultate = count($resultate);

    if ($anzahlResultate == 1) {

        //Sitzung verlängern
       updateSession($sitzungsID);

    } else {

        //schicke eine Antwort ans Script «nicht eingeloggt», direkt an Login seite weiter
        exit(http_response_code(401));

    }
    
}
function updateSession($sitzungsID)
{
    require('config.php');

        //setze den Timpstamp auf jetzt, wo die ID eine ID ist
    $sql = "UPDATE Session SET timestamp = now() WHERE ID=?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$sitzungsID]);
}

function loescheSessions()
{
    require('config.php');


    //Bei Delete braucht es kein Stern für all
    $sql = "DELETE FROM Session WHERE timestamp < (NOW() - INTERVAL 2 HOUR)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();

}