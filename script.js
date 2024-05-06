const menu = document.querySelector("nav ul");
const openBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.add("hidden");
});
