<?php
require_once './functions.php';
require_once './database.php';
function RedirectTo($msg = '', $type = '', $location = '/')
{
    $_SESSION['message']['text']  = $msg;
    $_SESSION['message']['type']  = $type;
    header('Location:' . $location);
    exit();
}
if (isset($_POST['edit-device'])) {
    $name = cleanString($con, $_POST['name']);
    $id = cleanString($con, $_POST['device-id']);
    $cntry = cleanString($con, $_POST['countries']);
    $ddCode = cleanString($con, $_POST['device-code']);
    $desc = cleanString($con, $_POST['description']);
    $data = cleanString($con, $_POST['data']);
    $imageLink = cleanString($con, $_POST['image-link']);
    if ($name == '') {
        RedirectTo($msg = 'Give a name to your device.', $type = "alert", $location = '/admin.php');
    }
    $imagePath = $imageLink;
    $imageFile = $_FILES['image-file'];

    if ($imageLink == '') {
        if (isset($imageFile['name']) && $imageFile['name'] != '') {

            $newName = rand(999999, 99999999) . $imageFile['name'];
            $imageFolder = '../../assets/images/' . $newName;
            $imagePath = '/assets/images/' . $newName;
            if (move_uploaded_file($imageFile['tmp_name'], $imageFolder)) {
            }
        }
    }
    $sql = "UPDATE devices SET `name` ='$name', `description` = '$desc',`image` = '$imagePath', `device_data` = '$data', `countries` = '$cntry', `deviceCode` = '$ddCode' WHERE `id` = $id";
    $query = $con->query($sql);
    if ($query) {
        RedirectTo($msg = $name . ' Updated Successfully.', $type = "success", $location = '/admin.php');
    } else {
        RedirectTo($msg = 'Error occured.', $type = "error", $location = '/admin.php');
    }
}
if (isset($_POST['new-device'])) {
    $name = cleanString($con, $_POST['name']);
    $cntry = cleanString($con, $_POST['countries']);
    $ddCode = cleanString($con, $_POST['device-code']);
    $desc = cleanString($con, $_POST['description']);
    // $desc = base64_decode($desc);
    $data = cleanString($con, $_POST['data']);
    $imageLink = cleanString($con, $_POST['image-link']);
    if ($name == '') {
        RedirectTo($msg = 'Give a name to your device.', $type = "alert", $location = '/admin.php');
    }
    $imagePath = $imageLink;
    $imageFile = $_FILES['image-file'];

    if ($imageLink == '') {
        if (isset($imageFile['name']) && $imageFile['name'] != '') {

            $newName = rand(999999, 99999999) . $imageFile['name'];
            $imageFolder = '../../assets/images/' . $newName;
            $imagePath = '/assets/images/' . $newName;
            if (move_uploaded_file($imageFile['tmp_name'], $imageFolder)) {
            }
        }
    }
    $sql = "INSERT INTO devices (`name`, `description`,`image`, `device_data`, `countries`, `deviceCode`)
    VALUES('$name', '$desc','$imagePath', '$data', '$cntry', '$ddCode')";
    $query = $con->query($sql);
    if ($query) {
        RedirectTo($msg = $name . ' device added successfully.', $type = "success", $location = '/admin.php');
    } else {
        RedirectTo($msg = 'Error occured.', $type = "error", $location = '/admin.php');
    }
}
if (isset($_GET['delete'])) {

    $id = cleanString($con, $_GET['id']);
    $sql = "DELETE FROM  devices WHERE id = $id";
    $q = $con->query(($sql));
    exit('success');
}
if (isset($_GET['status'])) {
    $id = cleanString($con, $_GET['id']);
    $status = cleanString($con, $_GET['current']);
    $status = $status ? 0 : 1;
    $sql = "UPDATE devices SET status = $status WHERE id = $id";
    $q = $con->query(($sql));
    exit('success');
}
