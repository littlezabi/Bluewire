// let prevActiveBtn = null;
// let currentPage = null;
// let params = {};
// const renderView = document.getElementById("render-view");
// const handlePage = (page, self, params = {}) => {
//   if (self === null) self = document.querySelector("ul.left-ul li");
//   if (prevActiveBtn) prevActiveBtn.classList.remove("active");
//   self.classList.add("active");
//   prevActiveBtn = self;
//   renderPage(page, (params = params));
// };

// const renderPage = async (page, params = {}, force = false) => {
//   if (page === currentPage && force === false) return 1;
//   currentPage = page;
//   let params_ = "?";
//   for (let r in params) params_ += `${r}=${params[r]}&`;
//   loading(renderView, true, (overwrite = true));
//   await blueRex
//     .get(`/admin/view/${page}.php${params_ == "?" ? "" : params_}`)
//     .then((response) => {
//       renderView.innerHTML = response;
//       loading(renderView, false);
//     })
//     .catch((err) => {
//       loading(renderView, false);
//       renderView.innerHTML = `<span class="error error-message">${page} page not found . <br/><br/>Error: ${err.message}</span>`;
//     });
// };
// renderPage("dashboard");
// const refreshPage = () => {
//   let v = window.confirm(
//     "You are agree to refresh this will Clear all inputs."
//   );
//   if (v) renderPage(currentPage);
// };
// const reloadPage = () => renderPage(currentPage, params, (force = true));
