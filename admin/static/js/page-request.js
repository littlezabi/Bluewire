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
renderPage("add-new");
