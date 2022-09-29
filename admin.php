<?php
define('PATH', __DIR__);
require_once __DIR__ . '/admin/modules/constants.php';
require_once __DIR__ . '/admin/modules/functions.php';
require_once __DIR__ . '/lib/database.php';


$isLogged = LogginStatus();
$renderPage = getPage();
if(!$isLogged){
    $renderPage = 'login';
}
$renderBackend = BACKEND . "$renderPage.php";
$renderFrontend = FRONTEND . "$renderPage.phtml";
$t = [];
if ($renderPage != 'login') {
    require(FRONTEND . 'main-start.phtml');
}
file_exists($renderBackend) ? require($renderBackend) : 'dashboard.php';
echo '<div id="K-ckwxeer">';
file_exists($renderFrontend) ? require($renderFrontend) : 'dashboard.phtml';
if (count($t) > 0) printError($t);

//footer sections
if ($renderPage != 'login') {
    $mainEnd = FRONTEND . "main-end.phtml";
    $renderBackend = BACKEND . "footer.php";
    $renderFrontend = FRONTEND . "footer.phtml";
    file_exists($mainEnd) ? require($mainEnd) : $t[] = 'Error to load file: ' . $mainEnd;
}

setTitle($renderPage);

file_exists($renderBackend) ? require($renderBackend) : $t[] = 'Error to load file: ' . $renderBackend;
file_exists($renderFrontend) ? require($renderFrontend) : $t[] = 'Error to load file: ' . $renderFrontend;
