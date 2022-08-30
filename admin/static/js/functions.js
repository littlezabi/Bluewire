function loading(location, action, overwrite = true) {
  let loadingElem = null;
  try {
    loadingElem = document.querySelector(".loading-content-anim");
  } catch (error) {}
  html = `<div class="loading-content-anim">
              <span class="logn"></span>
              <span class="height"></span>
              <span class="short"></span>
              <span class="logn"></span>
          </div>`;
  if (action === true) {
    if (overwrite === true) {
      location.innerHTML = html;
    } else {
      location.innerHTML += html;
    }
  } else {
    if (loadingElem !== null) {
      try {
        location.removeChild(loadingElem);
      } catch (error) {
        loadingElem.innerHTML = "";
        loadingElem.style.display = "none";
      }
    }
  }
}
function handleInfoInputs(element, title) {
  let parentNode = element.parentNode;
  let childNode = parentNode.childNodes[3];
  let div = document.createElement("div");
  div.classList.add("list-pair");
  div.innerHTML = `<input type="text" class="in-title"
                  placeholder="${title} info title here"
                />
                <input
                type="text"
                  class="in-value"
                  placeholder="${title} details value here"
                />`;
  childNode.appendChild(div);
}
function setMessage(text, type) {
  console.log("called");
  let html = `<div class="message open ${type}">
                <span class="text close" onclick="handleMessage(this)">&times;</span>
                <span class="text">${text}</span>
              </div>`;
  document.querySelector(".message-box").innerHTML += html;
}
function handleMessage(element) {
  closeMessage(element.parentNode);
}
function closeMessage(element) {
  element.classList.remove("open");
  element.classList.add("closing");
  setTimeout(() => {
    element.remove();
  }, 600);
}
function handleImageType(type) {
  const id = ".file-inputs #" + type;
  const inputs = document.querySelectorAll(".file-inputs input");
  inputs.forEach((e) => (e.style.display = "none"));
  document.querySelector(id).style.display = "block";
}
function clearInputs(self) {
  let childNodes = self.parentNode.childNodes;
  childNodes.forEach((e) => (e.nodeName === "INPUT" ? (e.value = "") : ""));
}
const handleCloseAlertModel = () =>
  (document.querySelector(".view-alert").style.display = "none");

const createAlert = (
  text,
  buttons = [{ name: "Ok", classes: "accent", function: "" }],
  modelname = "Alert",
  cancelButton = true
) => {
  const modal = document.querySelector(".view-alert");
  modal.style.display = "none";

  let elements = `
              <div class="inner-alert fading">
                <div class="head">
                    <span>${modelname == true ? "Alert" : modelname}</span>
                    <span title="Close" onclick="handleCloseAlertModel()">&times;</span>
                </div>
                <span class="msg">
                    ${text}
                </span>
                <div class="buttons">
                    ${buttons.map((e) => {
                      return `<button class="${e["classes"] ?? ""}" onclick="${
                        e["function"] ?? ""
                      }">${e["name"]}</button>`;
                    })}
                    ${
                      cancelButton &&
                      `<button onclick="handleCloseAlertModel()" class="close" title="Close">cancel</button>`
                    }
                </div>
              </div>
  `;
  modal.innerHTML = elements;
  modal.style.display = "flex";
};
