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
