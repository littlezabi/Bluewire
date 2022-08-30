let prevActiveBtn = null;
let currentPage = null;
const renderView = document.getElementById("render-view");
const handlePage = (page, self, params = {}) => {
  if (self === null) self = document.querySelector("ul.left-ul li");
  if (prevActiveBtn) prevActiveBtn.classList.remove("active");
  self.classList.add("active");
  prevActiveBtn = self;
  renderPage(page, (params = params));
};

const renderPage = async (page, params = {}) => {
  if (page === currentPage) return 1;
  currentPage = page;
  let params_ = "?";
  for (let r in params) params_ += `${r}=${params[r]}&`;
  loading(renderView, true, (overwrite = true));
  await axios
    .get(`/admin/view/${page}.php${params_ == "?" ? "" : params_}`)
    .then((response) => {
      renderView.innerHTML = response.data;
      loading(renderView, false);
    })
    .catch((err) => {
      loading(renderView, false);
      renderView.innerHTML = `<span class="error error-message">${page} page not found . <br/><br/>Error: ${err.message}</span>`;
    });
};
renderPage("modals-list");
const refreshPage = () => {
  let v = window.confirm(
    "You are agree to refresh this will Clear all inputs."
  );
  if (v) renderPage(currentPage);
};
const reloadPage = () => renderPage(currentPage);
