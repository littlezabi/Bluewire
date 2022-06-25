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
  console.log(childNode);
  let html = `<div class="list-pair">
                <input type="text" class="in-title"
                  placeholder="${title} info title here"
                />
                <input
                type="text"
                  class="in-value"
                  placeholder="${title} details value here"
                />
              </div>`;
  childNode.innerHTML += html;
}
function setMessage(text, type) {
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
