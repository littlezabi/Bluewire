<?php
define('PATH', __DIR__);
require_once __DIR__ . '/lib/constants.php';
require_once __DIR__ . '/lib/functions.php';

$renderPage = getPage();
$renderBackend = BACKEND . "$renderPage.php";
$renderFrontend = FRONTEND . "$renderPage.phtml";
$t = [];
file_exists($renderBackend) ? require($renderBackend) : require(BACKEND . "home.php");
echo '<div id="K-ckwxeer">';

file_exists($renderFrontend) ? require($renderFrontend) : require(FRONTEND . "home.phtml");
if (count($t) > 0) printError($t);

//footer sections
$renderBackend = BACKEND . "footer.php";
$renderFrontend = FRONTEND . "footer.phtml";
file_exists($renderBackend) ? require($renderBackend) : $t[] = 'Error to load file: ' . $renderBackend;
file_exists($renderFrontend) ? require($renderFrontend) : $t[] = 'Error to load file: ' . $renderFrontend;
