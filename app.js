const header = document.querySelector("header");
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
const wave3 = document.querySelector(".wave3");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", scrollY > 0);
  wave1.style.backgroundPositionX = 3 * scrollY + "px";
  wave2.style.backgroundPositionX = 6 * scrollY + "px";
  wave3.style.backgroundPositionX = 9 * scrollY + "px";
});

const expBtn = document.querySelector("#expBtn");
const info = document.querySelector(".info");
const about = document.querySelector("#about");
const exp = document.querySelector(".exp");
expBtn.addEventListener("click", function () {
  info.classList.toggle("active");
  about.classList.toggle("active");
  exp.classList.toggle("active");
});
