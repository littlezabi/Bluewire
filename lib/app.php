<?php

require_once './database.php';

if (isset($_GET['search'])) {
    $k = $con->real_escape_string($_GET['search']);
    $sql = "SELECT `id`, `name`, `countries`, `deviceCode`, `image` FROM `devices` WHERE `name` LIKE '%$k%' OR `countries` LIKE '%$k%' AND `status` = 1 LIMIT 20";
    $data = [];
    $q = $con->query($sql);
    if ($q->num_rows > 0) {
        $data = $q->fetch_all(MYSQLI_ASSOC);
    }
    exit(json_encode($data));
}
