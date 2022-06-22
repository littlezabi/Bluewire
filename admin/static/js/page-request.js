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

const renderPage = async (page) => {
  renderView.innerHTML = page;
  loading(renderView, true, (overwrite = true));
  await axios
    .get("/admin/view/" + page + ".phtml")
    .then((response) => {
      console.log(response.data);
      renderView.innerHTML = response.data;
      loading(renderView, false);
    })
    .catch((err) => {
      loading(renderView, false);
      renderView.innerHTML = `<span class="error error-message">${page} page not found . <br/><br/>Error: ${err.message}</span>`;
    });
};

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
