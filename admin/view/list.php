<?php ob_start("ob_gzhandler"); ?>
<?php
// if(isset($_GET['']))
require_once('../modules/database.php');
$sql = "SELECT * FROM devices WHERE 1 ORDER BY id DESC LIMIT 25";
$query = $con->query($sql);
$data = [];
if ($query->num_rows > 0) {
    $data = $query->fetch_all(MYSQLI_ASSOC);
}

?>

<div class="list-view">
    <h3>Devices List</h3>
    <?php
    if (count($data) > 0) {
    ?>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Device</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Added At</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 0;
                foreach ($data as $item) {
                    $i++;

                ?>
                    <tr style="background: <?php echo $item['status'] == 1 ? '#25ff003d' : '#e91e6338' ?>">
                        <td><?php echo $i; ?></td>
                        <td><?php echo $item['id']; ?></td>
                        <td><?php echo $item['name']; ?></td>
                        <td><?php

                            echo strlen($item['description']) > 100 ?  substr($item['description'], 0, 100) . '...' : $item['description'];
                            ?></td>
                        <td>
                            <button class="status" onclick="handleStatus(<?php echo $item['id'] ?>,status=<?php echo $item['status']; ?>,confirm=false, device='<?php echo $item['name']; ?>')"><?php echo $item['status'] == 1 ? 'Disable' : 'Active' ?></button>
                            <button class="edit" onclick="handleEdit(<?php echo $item['id'] ?>, confirm=false, device='<?php echo $item['name']; ?>' )">Edit</button>
                            <button onclick="handleDelete(<?php echo $item['id'] ?>,confirm=false, device='<?php echo $item['name']; ?>')">Delete</button>
                        </td>
                        <td><?php echo date_format(date_create($item['createdAt']), 'd M Y') ?></td>
                    </tr>
                <?php
                }
                ?>

            </tbody>
        </table>
    <?php
    } else {
    ?>

        <h2 style="display:block;text-align:center;margin:50px auto;">
            There is no data found!
        </h2>
    <?php
    }
    ?>
</div>