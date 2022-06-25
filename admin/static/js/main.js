const particlesWrap = document.querySelector(".mid-particles");
let particlesLimit = 25;
let maxHeight = document.querySelector(".mid-xzewx").clientHeight;
let maxWidth = window.innerWidth;
for (let i = 0; i < particlesLimit; i++) {
  let randomTop = Math.ceil(Math.random() * maxHeight);
  let randomLeft = Math.ceil(Math.random() * maxWidth);
  let p = `<p style="top:${randomTop}px;left:${randomLeft}px;animation-delay:${
    i * 500
  }ms"></p>`;
  particlesWrap.innerHTML += p;
}

const handleClose = (e) => {
  e.parentNode.style.display = "none";
};

const Save = (element) => {
  const pairs = document.querySelectorAll("#form-data .info-x");
  let data = [];
  pairs.forEach((kilo) => {
    let childrens = kilo.childNodes;
    var dataPair = {};
    for (let i = 0; i < childrens.length; i++) {
      let childNode = childrens[i];
      var pairName = "";
      if (childNode.nodeName === "INPUT") {
        pairName = childNode.value;
        dataPair = { name: pairName };
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
  console.log(data);
};

// window.onbeforeunload = function (event) {
//   return confirm("Confirm refresh");
// };
