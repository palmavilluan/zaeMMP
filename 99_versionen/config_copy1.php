<?php

$host = "localhost";
$user = "450731_3_1";
$dbpassword = "XPY1uLHeCx0z";
$dbname = "450731_3_1";

$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $dbpassword);
$pdo->exec("set names utf8");
