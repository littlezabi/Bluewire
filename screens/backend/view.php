<?php
$title = "View item";
require_once BACKEND . 'head.php';
require_once BACKEND . 'header.php';
if (isset($_GET['id']) && $_GET['id'] != '') {
    $id = mysqli_real_escape_string($con, $_GET['id']);
    $sql = "SELECT * FROM devices WHERE id = $id";
    $q = $con->query($sql);
    $data = [];
    $info = [];
    if ($q->num_rows > 0) {
        $data = $q->fetch_assoc();
        $info = json_decode($data['device_data']);
    } else {
        header('location: /');
    }

    $sql = "SELECT id, name, countries, description, image, createdAt, deviceCode FROM  `devices` WHERE `status` = 1 ORDER BY id DESC LIMIT 20;";
    $q = $con->query($sql);
    $latest = [];
    if ($q->num_rows > 0) {
        $latest = $q->fetch_all(MYSQLI_ASSOC);
        $latest = json_encode($latest);
    }
} else {
    header('location: /');
}
