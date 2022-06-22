let prevActiveBtn = null;
const renderView = document.getElementById("render-view");
const handlePage = (page, self) => {
  if (prevActiveBtn) {
    prevActiveBtn.classList.remove("active");
  }
  self.classList.add("active");
  prevActiveBtn = self;

  renderPage(page);
};

const renderPage = (page) => {
  loading(renderView, true);
  renderView.innerHTML = page;
  console.log("adding");
  setTimeout(() => {
    console.log("fasting");
    loading(renderView, false);
  }, 2000);
};

function loading(location, action, overwrite = true) {
  console.log(location, action);
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
