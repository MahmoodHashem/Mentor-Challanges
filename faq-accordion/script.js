const collapseButtons = document.querySelectorAll('.collapse');
const paragraphs = document.querySelectorAll('p');

collapseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    /**
 * Loop through each paragraph element and toggle the 'hide' class based on the index.
 * If the index matches the current iteration, toggle the 'hide' class and update the button's src attribute.
 * Otherwise, add the 'hide' class to the paragraph and update the corresponding button's src attribute.
 */
    paragraphs.forEach((p, i) => {
      if (i === index) {
        p.classList.toggle('hide');
        button.src = p.classList.contains('hide')
          ? './assets/images/icon-plus.svg'
          : './assets/images/icon-minus.svg';
      } else {
        p.classList.add('hide');
        collapseButtons[i].src = './assets/images/icon-plus.svg';
      }
    });
  });
});