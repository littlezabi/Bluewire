<?php
$title = "BlueWire Firmwares";
require_once BACKEND . 'head.php';
require_once BACKEND . 'header.php';
require_once BACKEND . '../../lib/database.php';
$sql = "SELECT `id`, `name`, `countries`, `deviceCode`, `image` FROM `devices` WHERE status = 1 ORDER BY id DESC";
$data = [];
$query = $con->query($sql);
$colors = ['#ffaec9', '#f8ff5382', '#c6aeff', '#aed8ff', '#ff9a5382', '#53b9ff82', '#4caf5075', '#7565a475', '#6565655c'];
$colorsLen = 8;
