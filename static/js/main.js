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

const shareData = {
  title: "BLUEWIRE",
  text: "Get firmwares :)",
  url: "http://localhost",
};
const handleShare = async () => {
  try {
    await navigator.share(shareData);
    console.log("MDN shared successfully");
  } catch (err) {
    console.error("Error: " + err);
  }
};

const handleClose = (e) => {
  e.parentNode.style.display = "none";
};

try {
  const v = document.querySelectorAll("#search-wrap .srch-results");
  const search = document.querySelectorAll("#search-input");
  search.forEach((e, i) => {
    e.addEventListener("keyup", async (e) => {
      let value = e.target.value;
      if (value.length > 0) {
        v[i].style.display = "block";
        v[i].innerHTML = `
        <div class="loading w7 h50" style="margin-top: 5px;"></div>
        <div class="loading w4 h20" style="margin-top: 5px;"></div>
        <div class="loading w6 h10" style="margin-top: 5px;"></div>
        <div class="loading w2 h20" style="margin-top: 5px;"></div>
      `;
        await axios
          .get("/lib/app.php?search=" + value)
          .then((e) => {
            let data = e.data;
            console.log(data);
            let r = "";
            if (data.length > 0)
              data.map((e) => {
                r += `
                <a href="/?page=view&id=${e.id}">
                      <span>${e.name}</span>
                </a>
            `;
              });
            else {
              v[i].innerHTML = "";
              v[i].style.display = "none";
            }
            v[i].innerHTML = r;
          })
          .catch((e) => console.log(e.message));
      } else {
        v[i].innerHTML = "";
        v[i].style.display = "none";
      }
    });
  });
} catch (error) {}
