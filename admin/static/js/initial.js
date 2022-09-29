const setActiveButton = (class_) => {
  console.log("hello_____");
  try {
    c = document.querySelector(`.${class_}.active`);
    c.classList.remove("active");
  } catch (e) {}
  try {
    k = document.querySelector(`.${class_}`);
    k.classList.add("active");
  } catch (e) {}
};
