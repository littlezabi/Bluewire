<?php ob_start("ob_gzhandler"); ?>
<?php
// if(isset($_GET['']))
require_once('../modules/database.php');
$sql = "SELECT * FROM `side-modals` WHERE 1 ORDER BY id DESC LIMIT 25";
$query = $con->query($sql);
$data = [];
if ($query->num_rows > 0) {
    $data = $query->fetch_all(MYSQLI_ASSOC);
}

?>

<div class="list-view">
    <div class="title-and-btn">
        <h3>Modals List</h3>
        <button onclick="newModal()" title="add new modal">Add new Modal</button>
    </div>

    <?php
    if (count($data) > 0) {
    ?>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Added At</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach ($data as $item) {
                ?>
                    <tr style="background: <?php echo $item['status'] == 1 ? '#25ff003d' : '#e91e6338' ?>">
                        <td><?php echo $item['id']; ?></td>
                        <td><?php echo $item['title']; ?></td>
                        <td><?php echo $item['body'] ?></td>
                        <td><?php echo $item['status'] ? 'Active' : 'Disabled' ?></td>
                        <td>
                            <button class="status" onclick="handleModalStatus(<?php echo $item['id'] ?>,status=<?php echo $item['status']; ?>,confirm=false, device='<?php echo $item['title']; ?>')"><?php echo $item['status'] == 1 ? 'Disable' : 'Active' ?></button>
                            <button class="edit" onclick="handleModalsEdit(<?php echo $item['id'] ?>, confirm=false, device='<?php echo $item['title']; ?>' )">Edit</button>
                            <button onclick="handleDelete(<?php echo $item['id'] ?>,confirm=false, device='<?php echo $item['title']; ?>')">Delete</button>
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