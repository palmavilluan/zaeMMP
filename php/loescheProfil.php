<?php

require_once('config.php');
require_once('autorisieren.php');

$benutzerID = $_POST["benutzerID"];
$profilID = $_POST["profilID"];


$sql = "DELETE FROM Session WHERE benutzer_ID = ?";
$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute([$benutzerID]);


$sql = "DELETE FROM Benutzer WHERE ID = ?";
$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute([$benutzerID]);


if ($erfolg) {

    print_r('Erfolgreich gelöscht');

} else {

    print_r($erfolg);

};

// falls erfolg true bzw. 1 ist
// lösche ebenfalls die Hashtags zur WG
/*
if ($erfolg) {

    loescheHashtags($wgID);

} else {

    print_r($erfolg);
};


function loescheHashtags($wgID){

    require('config.php');

    // lösche die alten hashtags
    $sql = "DELETE FROM wg_hat_hashtag WHERE wg_id = ?";
    $stmt = $pdo->prepare($sql);

    $erfolg = $stmt->execute([$wgID]);

    if ($erfolg){

        echo 'WG und Hashtags wurden gelöscht.';
    } else {

        $erfolg;

    }

}
*/