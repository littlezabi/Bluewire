<?php ob_start("ob_gzhandler"); ?>
<div class="form-view" id="form-data">
  <span class="head-title">Add new device</span>
  <div class="button-view">
    <button class="form-btn" onclick="refreshPage()">Clear all</button>
    <button class="form-btn" onclick="Save(this)">Save</button>
  </div>
  <form action="<?php echo '/admin/modules/executer.php';  ?>" method="POST" enctype="multipart/form-data">
    <label for="name">device name</label>
    <input type="text" name="name" id="name" required placeholder="Enter here" />
    <label for="name">description</label>
    <textarea id="description" name="description" class="editable"></textarea>
    <input type="hidden" name="data" id="data-input">
    <input type="hidden" name="new-device" value="1">
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
      <input type="file" name="image-file" id="image-file">
      <input type="text" placeholder="Enter image link..." name="image-link" id="image-link">
      <span class="close" onclick="clearInputs(this)">&times;</span>
    </div>

    <div class="info">
      <span class="title"><i class="fa fa-wifi"></i> Networks</span>
      <div id="networks" class="info-x">
        <input type="hidden" name="info-title" value="Networks" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Network info title here" />
            <input type="text" class="in-value" placeholder="Network details value here" />

          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Network')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-timeline"></i> Timeline</span>
      <div class="info-x" id="timeline">
        <input type="hidden" name="info-title" value="Timeline" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Timeline info title here" />
            <input type="text" class="in-value" placeholder="Timeline details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Timeline')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-mobile"></i> Body</span>
      <div class="info-x" id="Body">
        <input type="hidden" name="info-title" value="Body" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Body info title here" />
            <input type="text" class="in-value" placeholder="Body details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Body')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-display"></i> Display</span>
      <div class="info-x" id="Display">
        <input type="hidden" name="info-title" value="Display" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Display info title here" />
            <input type="text" class="in-value" placeholder="Display details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Display')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-train"></i> Platform</span>
      <div class="info-x" id="Platform">
        <input type="hidden" name="info-title" value="Plateform" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Platform info title here" />
            <input type="text" class="in-value" placeholder="Platform details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Platform')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-memory"></i> Memory</span>
      <div class="info-x" id="Memory">
        <input type="hidden" name="info-title" value="Memory" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Memory info title here" />
            <input type="text" class="in-value" placeholder="Memory details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Memory')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-camera"></i> Main camera</span>
      <div class="info-x" id="Main camera">
        <input type="hidden" name="info-title" value="Main Camera" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Main camera info title here" />
            <input type="text" class="in-value" placeholder="Main camera details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Main camera')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-camera"></i>Front camera</span>
      <div class="info-x" id="Front camera">
        <input type="hidden" name="info-title" value="Front Camera" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Front camera info title here" />
            <input type="text" class="in-value" placeholder="Front camera details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Front camera')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-volume-high"></i>Sound</span>
      <div class="info-x" id="Sound">
        <input type="hidden" name="info-title" value="Sound" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Sound info title here" />
            <input type="text" class="in-value" placeholder="Sound details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Sound')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-comment"></i>Communicates</span>
      <div class="info-x" id="Communicates">
        <input type="hidden" name="info-title" value="Communicates" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Communicates info title here" />
            <input type="text" class="in-value" placeholder="Communicates details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Communicates')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-feather"></i> Features</span>
      <div class="info-x" id="Features">
        <input type="hidden" name="info-title" value="Features" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Features info title here" />
            <input type="text" class="in-value" placeholder="Features details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Features')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-battery"></i> Battery</span>
      <div class="info-x" id="Battery">
        <input type="hidden" name="info-title" value="Battery" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Battery info title here" />
            <input type="text" class="in-value" placeholder="Battery details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Battery')" class="fa fa-plus"></i>
      </div>
    </div>

    <div class="info">
      <span class="title"><i class="fa fa-brush"></i> Misc</span>
      <div class="info-x" id="Misc">
        <input type="hidden" name="info-title" value="Misc" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Misc info title here" />
            <input type="text" class="in-value" placeholder="Misc details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Misc')" class="fa fa-plus"></i>
      </div>
    </div>
    <div class="info">
      <span class="title"><i class="fa fa-link"></i> Downloadable Links</span>
      <div class="info-x" id="downloadableLinks">
        <input type="hidden" name="info-title" value="Downloadable Links" />
        <div class="info-list">
          <div class="list-pair">
            <input type="text" class="in-title" placeholder="Downloadable Links info title here" />
            <input type="text" class="in-value" placeholder="Downloadable Links details value here" />
          </div>
        </div>
        <i onclick="handleInfoInputs(this, 'Downloadable Links')" class="fa fa-plus"></i>
      </div>
    </div>
  </form>
</div>