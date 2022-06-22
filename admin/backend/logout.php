<?php
if(isset($_SESSION['admin'])){
    unset($_SESSION['admin']);
    header('location: /admin.php?view=login');
}else{
    header('location: /admin.php?view=login');

}
