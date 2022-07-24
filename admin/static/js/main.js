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
    handlePage((page = "edit"), (self = element), (params = { id, edit: 1 }));
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
