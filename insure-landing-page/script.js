const menu = document.querySelector(".menu");
const links = document.querySelector(".nav__links-navigations");



menu.addEventListener("click", () => {
  if (links.classList.contains("hide")) {
    links.classList.remove("hide");
    menu.className = 'menu close'
  } else {
    links.classList.add("hide");
    menu.className = 'menu open'
  }
});