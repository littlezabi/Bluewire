<?php
require_once './lib/database.php';
$sql = "SELECT * FROM  `side-modals` WHERE `status` = 1";
$q = $con->query($sql);
$modals = [];
if ($q->num_rows > 0) {
    $modals = $q->fetch_all(MYSQLI_ASSOC);
    $modals = json_encode($modals);
}
