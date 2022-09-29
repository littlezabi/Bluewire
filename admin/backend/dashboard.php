<?php
$d = "SELECT COUNT(*) as total_devices FROM devices WHERE 1";
$q = $con->query($d);
$total_dev = [];
if ($q->num_rows > 0) {
    $total_dev = $q->fetch_assoc();
    $total_dev = $total_dev['total_devices'];
}
?>