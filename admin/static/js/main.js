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

const handleClose = (e) => {
  e.parentNode.style.display = "none";
};
