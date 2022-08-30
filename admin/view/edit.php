<?php
ob_start("ob_gzhandler");
require_once '../modules/database.php';
// $_GET['edit'] = 1;
// $_GET['id'] = 19;
if (isset($_GET['edit'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM devices WHERE id = $id";
    $query = $con->query($sql);
    $data = [];
    if ($query->num_rows > 0) {
        while ($k = $query->fetch_assoc()) $data[] = $k;
    } else {
        echo '<h2 style="color: #f60054;margin: 50px 0;">There is no data with this ID: ' . $id . '!</h2>';
        exit();
    }
    if (count($data) > 0) {
        $deviceData = json_decode($data[0]['device_data']);
        $name  = $data[0]['name'];
        $desc  = $data[0]['description'];
        $image  = $data[0]['image'];
        $deviceId = $data[0]['id'];
        $ddCode = $data[0]['deviceCode'];
        $cntry = $data[0]['countries'];
    }
    function line($str)
    {
        echo '<pre>';
        print_r($str);
        echo '</pre>';
    }

?>
    <div class="form-view fading" id="form-data">
        <span class="head-title">Add new device</span>
        <div class="button-view">
            <button class="form-btn" onclick="refreshPage()">Reset</button>
            <button class="form-btn" onclick="Save(this)">Save Changes</button>
        </div>

        <form action="<?php echo '/admin/modules/executer.php';  ?>" method="POST" enctype="multipart/form-data">
            <label for="name">device name</label>
            <input type="text" value="<?php echo $name; ?>" name="name" id="name" required placeholder="Enter here" />
            <label for="name">description</label>
            <textarea name="description" id="description" class="editable"><?php echo $desc; ?></textarea>
            <label for="name">Device Code</label>
            <input type="text" value="<?php echo $ddCode; ?>" name="device-code" placeholder="Device Code here..." />
            <label for="name">Countries <small>(Seperate country name with comma).</small></label>
            <input type="text" value="<?php echo $cntry; ?>" name="countries" placeholder="PAK, TR, UAE, etc..." />
            <input type="hidden" name="device-id" value="<?php echo $deviceId; ?>">
            <input type="hidden" name="data" id="data-input">
            <input type="hidden" name="edit-device" value="1">
            <div class="flex file-inputs-radio">
                <div>
                    <span>Select a image</span>
                    <input type="radio" value="image-file" onclick="handleImageType('image-file')" name="image" checked id="#image-file">
                </div>
                <div>
                    <span>Use image link</span>
                    <input type="radio" value="image-link" onclick="handleImageType('image-link')" name="image" id="image-link">
                </div>
            </div>
            <div class="flex file-inputs">
                <input type="text" value="<?php echo $image ?>" placeholder="Enter image link..." name="image-link" id="image-link">
                <input type="file" name="image-file" id="image-file">
                <span class="close" onclick="clearInputs(this)">&times;</span>
            </div>
            <div class="flex">
                <img style="max-height: 200px;margin:10px" src="<?php echo $image; ?>" alt="">
            </div>
            <div class="info">
                <?php
                foreach ($deviceData as $info) {

                    if (isset($info->values)) {
                        $values = $info->values[0];
                ?>
                        <span class="title"><i class="<?php echo $info->icon ?>"></i><?php echo $info->name; ?></span>
                        <div id="<?php echo strtolower($info->name) ?>" class="info-x">
                            <input type="hidden" name="info-title" value="<?php echo $info->name; ?>" />
                            <div class="info-list">
                                <?php
                                foreach ($values as $buffalo) {
                                    if ($buffalo->title != '' && $buffalo->value != '') {
                                ?>
                                        <div class="list-pair">
                                            <input type="text" value="<?php echo $buffalo->title ?>" class="in-title" placeholder="<?php echo $info->name; ?> info title here" />
                                            <input type="text" value="<?php echo $buffalo->value ?>" class="in-value" placeholder="<?php echo $info->name; ?> details value here" />
                                        </div>
                                <?php
                                    }
                                } ?>
                            </div>
                            <i onclick="handleInfoInputs(this, '<?php echo $info->name; ?>')" class="fa fa-plus"></i>
                        </div>
                    <?php
                    } else { ?>
                        <div class="info">
                            <span class="title"><i class="<?php echo $info->icon ?>"></i> <?php echo $info->name; ?></span>
                            <div id="networks" class="info-x">
                                <input type="hidden" name="info-title" value="<?php echo $info->name; ?>" />
                                <div class="info-list">
                                    <div class="list-pair">
                                        <input type="text" class="in-title" placeholder="<?php echo $info->name; ?> info title here" />
                                        <input type="text" class="in-value" placeholder="<?php echo $info->name; ?> details value here" />
                                    </div>
                                </div>
                                <i onclick="handleInfoInputs(this, '<?php echo $info->name; ?>')" class="fa fa-plus"></i>
                            </div>
                        </div>
                    <?php
                    } ?>
                <?php
                }

                ?>
            </div>

        </form>
    </div>
<?php

} else {
    echo '<h2 class="empty">There is no device selected!</h2>';
}
?>