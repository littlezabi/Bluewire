<?php
$sql = "SELECT * FROM `side-modals` WHERE 1 ORDER BY id DESC LIMIT 25";
$query = $con->query($sql);
$data = [];
if ($query->num_rows > 0) {
    $data = $query->fetch_all(MYSQLI_ASSOC);
}
