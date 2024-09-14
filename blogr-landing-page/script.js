const navLink = document.querySelectorAll(".nav-link");
const arrowIcon = document.querySelectorAll('.arrow-icon');
const menu = document.querySelector('.menu');


navLink.forEach((link, i) => {
  let ids = ["product", "company", "connect"];

  link.addEventListener("click", () => {
    ids.forEach((id) => {
      if (link.classList.contains(id)) {
        if (!link.id) {
          link.setAttribute("id", id);
          arrowIcon[i].style.transform = 'rotate(180deg)'
          console.log(link.id);
        } else {
          link.removeAttribute('id')
          arrowIcon[i].style.transform = 'rotate(0deg)'
          console.log(arrowIcon[i].style.transform)
          console.log(link.id)
        }
      }
    });
  });
});


menu.addEventListener('click', () => {

  if (menu.dataset.state === 'open') {
    menu.dataset.state = 'close'
    menu.src = './images/icon-hamburger.svg'
    

  } else {
    menu.dataset.state = 'open'
    menu.src = './images/icon-close.svg'
  }


})