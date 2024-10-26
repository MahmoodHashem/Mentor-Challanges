const menu = document.querySelector(".menu");
const links = document.querySelector(".links");





window.addEventListener('load', ()=>{
    if(window.innerWidth > 870 ){
        links.classList.remove("hide");
    }
})


menu.addEventListener("click", () => {
  if (links.classList.contains("hide")) {
    links.classList.remove("hide");
    menu.className = "menu close";
  } else {
    links.classList.add("hide");
    menu.className = "menu open";
  }
});