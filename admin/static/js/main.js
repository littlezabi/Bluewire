// const particlesWrap = document.querySelector(".mid-particles");
// let particlesLimit = 25;
// let maxHeight = document.querySelector(".mid-xzewx").clientHeight;
// let maxWidth = window.innerWidth;
// for (let i = 0; i < particlesLimit; i++) {
//   let randomTop = Math.ceil(Math.random() * maxHeight);
//   let randomLeft = Math.ceil(Math.random() * maxWidth);
//   let p = `<p style="top:${randomTop}px;left:${randomLeft}px;animation-delay:${
//     i * 500
//   }ms"></p>`;
//   particlesWrap.innerHTML += p;
// }

const handleClose = (e) => {
  e.parentNode.style.display = "none";
};

const Save = (element) => {
  const pairs = document.querySelectorAll("#form-data .info-x");
  let data = [];
  let icon = "fa fa-feather";
  pairs.forEach((kilo) => {
    let childrens = kilo.childNodes;
    var dataPair = {};
    try {
      icon = kilo.parentNode.childNodes[1].childNodes[0].className;
    } catch {
      icon = "fa fa-feather";
    }
    for (let i = 0; i < childrens.length; i++) {
      let childNode = childrens[i];
      var pairName = "";
      if (childNode.nodeName === "INPUT") {
        pairName = childNode.value;
        dataPair = { name: pairName, icon };
      }
      if (childNode.hasChildNodes()) {
        let pairsList = childNode.childNodes;
        let dataValues = [];
        let g = [];
        for (let k = 0; k < pairsList.length; k++) {
          if (pairsList[k].nodeName === "DIV") {
            let finalList = pairsList[k].childNodes;
            let c = {};
            for (let t = 0; t < finalList.length; t++) {
              if (finalList[t].nodeName === "INPUT") {
                if (finalList[t].className === "in-title") {
                  let title = finalList[t].value;
                  if (title != "") c = { ...c, title };
                }
                if (finalList[t].className === "in-value") {
                  let value = finalList[t].value;
                  if (value != "") c = { ...c, value };
                }
              }
              if (c["title"] && c["value"]) {
                g = [...g, c];
                c = {};
              }
            }
          }
        }

        if (g.length > 0) {
          dataValues = [...dataValues, g];
          g = [];
        }
        if (dataValues.length > 0) {
          dataPair = { ...dataPair, values: dataValues };
        }
      }
    }
    data = [...data, dataPair];
  });
  const name = document.querySelector("#form-data #name");
  document.querySelector("#form-data #data-input").value = JSON.stringify(data);
  console.log(data);
  if (name.value != "") document.querySelector("#form-data form").submit();
};

const handleDelete = (id, confirm = false, device = "") => {
  console.log(id, confirm);
  if (confirm) {
    axios
      .get(`${BACKEND_MODULES}executer.php?delete=1&id=${id}`)
      .then((e) => {
        if (e.data === "success") {
          setMessage("Deleted Successfully.", "success");
          reloadPage();
        }
      })
      .catch((e) => {
        console.error(e);
      });
    handleCloseAlertModel();
  } else
    createAlert(
      (text = "You want to Delete this Device! <br/> " + device),
      (buttons = [
        {
          name: "Ok",
          classes: "accent",
          function: `handleDelete(${id}, confirm=${true})`,
        },
      ]),
      (cancelButton = true),
      (modelname = "Confirm Delete")
    );
};
const handleModalStatus = (id, status = 1, confirm = false, device = "") => {
  if (confirm) {
    axios
      .get(
        `${BACKEND_MODULES}executer.php?modal-status=1&id=${id}&current=${status}`
      )
      .then((e) => {
        if (e.data.trim() == "success") {
          setMessage(
            `${status ? "Disabled" : "Enabled"} Successfully.`,
            "success"
          );
          reloadPage();
        }
      })
      .catch((e) => {
        console.error(e);
      });
    handleCloseAlertModel();
  } else
    createAlert(
      (text = `You want to change status of the device! <br/> ${device}`),
      (buttons = [
        {
          name: "Yes",
          classes: "accent",
          function: `handleModalStatus(${id}, status=${status}, confirm=${true})`,
        },
      ]),
      (cancelButton = true),
      (modelname = "Confirm Delete")
    );
};
const handleStatus = (id, status = 1, confirm = false, device = "") => {
  if (confirm) {
    axios
      .get(`${BACKEND_MODULES}executer.php?status=1&id=${id}&current=${status}`)
      .then((e) => {
        if (e.data === "success") {
          setMessage(
            `${status ? "Disabled" : "Enabled"} Successfully.`,
            "success"
          );
          reloadPage();
        }
      })
      .catch((e) => {
        console.error(e);
      });
    handleCloseAlertModel();
  } else
    createAlert(
      (text = `You want to change status of the device! <br/> ${device}`),
      (buttons = [
        {
          name: "Yes",
          classes: "accent",
          function: `handleStatus(${id}, status=${status}, confirm=${true})`,
        },
      ]),
      (cancelButton = true),
      (modelname = "Confirm Delete")
    );
};
const handleEdit = (id, confirm = false, device = "") => {
  element = null;
  try {
    element = document.querySelector("#edit-li");
  } catch {}
  if (confirm) {
    window.location.href = "/admin.php?page=edit-device&xr=" + id;
    handleCloseAlertModel();
  } else
    createAlert(
      (text = `You want to Edit Device! <br/> ${device}`),
      (buttons = [
        {
          name: "Yes",
          classes: "accent",
          function: `handleEdit(${id}, confirm=${true})`,
        },
      ]),
      (cancelButton = true),
      (modelname = "Confirm Delete")
    );
};
async function addNewModal(e) {
  let title = document.getElementById("modal-title");
  let body = document.getElementById("new-modal-body");
  if (title.value == "" || body.value === "") {
    alert("Fill all the fields!");
    return 0;
  }
  await blueRex
    .post(`${BACKEND_MODULES}executer.php`, {
      title: title.value,
      body: body.value,
      newModal: 1,
    })
    .then((res) => {
      console.log("res: ", res);
      if (res.trim() === "success") {
        setMessage(`Modal added Successfully.`, "success");
        reloadPage();
        closeModal();
      }
    })
    .catch((e) => console.log(e));
}
const handleDeleteModal = async (id, title) => {
  let c = confirm(`Do you want to delete ${title} Modal?`);
  if (c) {
    await blueRex
      .get(`${BACKEND_MODULES}executer.php?delete-modal=${id}`)
      .then((e) => {
        if (e.trim() === "success") {
          setMessage(`Modal Deleted Successfully.`, "success");
          reloadPage();
          closeModal();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
};
async function saveEditModal(e, id) {
  let title = document.getElementById("modal-title");
  let body = document.getElementById("new-modal-body");
  if (title.value == "" || body.value === "") {
    alert("Fill all the fields!");
    return 0;
  }
  await blueRex
    .post(`${BACKEND_MODULES}executer.php`, {
      title: title.value,
      body: body.value,
      id,
      updateModal: 1,
    })
    .then((res) => {
      if (res.trim() === "success") {
        setMessage(`Modal Updated Successfully.`, "success");
        reloadPage();
        closeModal();
      }
    })
    .catch((e) => console.log(e));
}
function closeModal() {
  try {
    document.querySelector("#heavy-modal").innerHTML = "";
  } catch (error) {
    console.error(error.message);
  }
}
const handleModalsEdit = (id, title, body) => {
  createModal({
    title: "Edit Modal",
    legend: "Edit title and body",
    inputs: [
      {
        name: "title",
        type: "text",
        value: title,
        id: "modal-title",
        label: "Enter Modal Title",
        placeholder: "Enter title here...",
        required: true,
      },
      {
        name: "body",
        type: "textarea",
        id: "new-modal-body",
        value: body,
        label:
          "Enter Modal full text here <small>(You can use HTML tags to format your content).</small>",
        placeholder: "Enter body here...",
        required: true,
      },
    ],
    buttons: [
      {
        name: "save-modal",
        value: "Save Modal",
        type: "submit",
        id: "save",
        callback: "saveEditModal",
        args: id,
        eventListener: "onclick",
      },
    ],
  });
};
const newModal = () => {
  createModal({
    title: "Add new modal",
    legend: "Enter title and body",
    inputs: [
      {
        name: "title",
        type: "text",
        id: "modal-title",
        label: "Enter Modal Title",
        placeholder: "Enter title here...",
      },
      {
        name: "body",
        type: "textarea",
        id: "new-modal-body",
        label: "Edit Modal text",
        placeholder: "Enter body here...",
      },
    ],
    buttons: [
      {
        name: "save-modal",
        value: "Save Modal",
        type: "submit",
        id: "save",
        callback: "addNewModal",
        eventListener: "onclick",
      },
    ],
  });
};
function createModal(idol) {
  const main = document.querySelector("#heavy-modal");
  let inputs = "";
  idol.inputs
    ? idol.inputs.map((e) => {
        let c = `<label for="${e.name}">${
          e.label ? e.label : "Enter " + e.name
        }</label>`;
        if (e.type == "textarea") {
          c += `<textarea required='${e.required ? e.required : false}' id="${
            e.id ? e.id : e.name
          }" placeholder="Enter modal body...">${
            e.value ? e.value : ""
          }</textarea>`;
        } else if (e.type == "submit") {
          c += `<input required='${
            e.required ? e.required : false
          }' type='submit' value="${e.value ? e.value : ""}" name='${
            e.name
          }' id='${e.id ? e.id : e.name}' ${
            e.callback
              ? `${e.eventListener} = "${e.callback}(this, ${
                  e.args ? e.args : ""
                })"`
              : ""
          } />`;
        } else {
          c += `<input required='${e.required ? e.required : false}' value="${
            e.value ? e.value : ""
          }" type="${e.type ? e.type : "text"}" id="${
            e.id ? e.id : e.name
          }" placeholder="${
            e.placeholder ? e.placeholder : "Enter here..."
          }" />`;
        }
        inputs += c;
      })
    : "";
  let buttons = "";
  idol.buttons
    ? idol.buttons.map((e) => {
        buttons += `<button name='${e.name ? e.name : e.value}' id='${
          e.id ? e.id : e.name
        }' ${
          e.callback
            ? `${e.eventListener} = "${e.callback}(this, ${
                e.args ? e.args : ""
              })"`
            : ""
        } >${e.value}</button>`;
      })
    : "";
  const k = `
      <div class="form-modal active">
      <div class="form-inner-modal">
      <div class="flex jc-sb">
          <span class="modal-title">${
            idol.title ? idol.title : "Form Modal"
          }</span> <span class='close-modal' onclick="closeModal()">&times;</span></div>
          <fieldset>
              <legend>${
                idol.legend ? idol.legend : "Fill all the fields"
              }</legend>
              <div id="inputs">
                ${inputs}
              </div>
              <div id="button">
              ${buttons}
              </div>
          </fieldset>
      </div>
    </div>
  `;
  main.innerHTML = k;
}

function setFlag(cntr) {
  s = `flag-${cntr.value}`.toLowerCase();
  f = document.querySelector("#flags");
  f.className = "";
  f.classList.add("flag");
  f.classList.add(s);
  f.classList.add("flag-normal");
}

async function submitFirmware(e) {
  let device_id = document.querySelector("#device-id").value;
  let device_name = document.querySelector("#device-name").value;
  let version = document.querySelector("#version").value;
  let csc = document.querySelector("#csc").value;
  let country = document.querySelector("#country").value;
  let os = document.querySelector("#os").value;
  let level = document.querySelector("#level").value;
  let bsDate = document.querySelector("#BS-date").value;
  let fileStatus = document.querySelector("#file-status").value;
  let buildDate = document.querySelector("#build-date").value;
  let downFileLink = document.querySelector("#dwn-file-link").value;
  let confirm =
    device_id != "" &&
    device_name != "" &&
    version != "" &&
    csc != "" &&
    country != "" &&
    os != "" &&
    buildDate != "";
  if (confirm) {
    console.log("hello__xxxs_");
    e.innerHTML = "Saving...";
    await blueRex
      .post(`${BACKEND_MODULES}executer.php`, {
        new_firmware: 1,
        device_id,
        device_name,
        version,
        csc,
        country,
        os,
        binary: `
          ${level},
          ${bsDate},
          ${fileStatus},
        `,
        buildDate,
        downloadable_link: downFileLink,
      })
      .then((res) => {
        if (res.trim() === "success") {
          setMessage(`New firmware added successfully!`, "success");
        }
        if (res.trim() === "error") {
          setMessage("Error happend on adding firmware!", "error");
        }
      })
      .catch((e) => console.log(e));
  }
}
