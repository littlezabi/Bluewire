<?php
$HOST = 'localhost';
$USER = 'root';
$DB = 'bluewire';
$PASSWORD = '';

$con = mysqli_connect($HOST, $USER, $PASSWORD, $DB);
session_start();
if ($con->connect_errno) {
    echo 'Failed to connect to MySQL: ' . $con->connect_errno;
    exit();
}
