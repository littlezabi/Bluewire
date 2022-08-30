export const exlinks = (e) => {
  console.log(e);
  return `
        <a target="_blank" href="${e.value}">
            <i class="fa fa-rss"></i>
            ${e.title}
            <i class="fa fa-external-link"></i>
        </a>
        <button onclick="handleClose(this)">&times;</button>
    `;
};

export const tline = (e) =>
  e.title.toLowerCase() == "released" ? `${e.title} ${e.value} <br>` : "";
export const xbody = (e, ind, len) =>
  ind < 2 ? `${e.title} ${e.value}${ind == 0 ? " / " : ""}` : "";

export const pform = (e, ind) => (ind < 1 ? `${e.title} ${e.value} <br>` : "");

export const memory = (e, ind, len) =>
  ind < 2 ? `${e.title} ${e.value}${ind == 0 ? " / " : ""}` : "";

export const renderListItems = (list) => {
  let html = "";
  list &&
    list.map((e) => {
      e.map((k) => {
        html += `<tr>
                    <th>${k.title}</th>
                    <td>${k.value}</td>
                </tr>`;
      });
    });
  return html;
};
export const renderButton = (list) => {
  let b = "";
  list &&
    list.map((e) => {
      e.map((k) => {
        b += `
        <a class="download-btn" href="${k.value}">${k.title}</a>
      `;
      });
    });
  return b;
};
export const renderAllItem = (name, list) => {
  if (name == "Downloadable Links") {
    return ` <section>
        <span class="title">Buy Now On <i class="fa fa-shopping-cart shopping-cart"></i></span>
        ${renderButton(list)}
    </section>`;
  } else
    return `
        <section>
            <span class="title">${name}</span>
            <table>
                ${renderListItems(list)}
            </table>
        </section>
    `;
};

export const xmodal = (modal) => `
    <div>
        <span class="x-modal-title">${modal.title}</span>
        <span class="x-modal-body">${modal.body}</span>
    </div>
`;

export const tableElement = (element) => {
  let tags = "";
  element.countries
    .split(",")
    .map((e) => (tags += `<span class="tag-2 cxkk-tag">${e}</span>`));
  console.log(element);
  return `
    
    <tr>
      <td class="img-td"><a href="${"/?page=view&id=" + element.id}" title="${
    element.name
  }"><img src="${element.image}" alt="${element.name}" /></a></td>
  <td><a href="${"/?page=view&id=" + element.id}" title="${element.name}">${
    element.name
  }</a></td>
      ${window.innerWidth > 992 ? `<td>${element.description}</td>` : ""}
      <td>${element.deviceCode}</td>
      <td>${tags}</td>
      <td>${new Date(element.createdAt).toDateString()}</td>
    </tr>
`;
};
