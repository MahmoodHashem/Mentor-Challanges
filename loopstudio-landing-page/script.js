const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  if (links.classList.contains("hide")) {
    links.classList.remove("hide");
    links.parentElement.parentElement.style.backgroundColor = "black";
    event.target.src = "./images/icon-close.svg";
  } else {
    links.classList.add("hide");
    links.parentElement.parentElement.style.backgroundColor = "";
    event.target.src = "./images/icon-hamburger.svg";
  }
});