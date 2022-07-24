<?php
$title = "View item";
require_once BACKEND . 'head.php';
require_once BACKEND . 'header.php';
require_once './lib/database.php';
if (isset($_GET['id']) && $_GET['id'] != '') {
    $id = mysqli_real_escape_string($con, $_GET['id']);
    $sql = "SELECT * FROM devices WHERE id = $id";
    $q = $con->query($sql);
    $data = [];
    if ($q->num_rows > 0) {
        $data = $q->fetch_assoc();
        $info = json_decode($data['device_data']);
    } else {
        header('location: /');
    }
} else {
    header('location: /');
}

function getItem($name)
{
    global $info;
    foreach ($info as $orange) {
        // _print($orange);
        if ($orange->name == $name && isset($orange->values)) return [$isExist = 1, $orange->name, $orange->values[0], $orange->icon];
    };
    return [$isExist = 0];
}
