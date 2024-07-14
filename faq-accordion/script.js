const details = document.querySelectorAll('details');

details.forEach((detail) => {
  detail.querySelector('summary').addEventListener('click', () => {
    details.forEach((d) => {
      if (d !== detail) {
        d.removeAttribute('open');
      }
    });
  });
});