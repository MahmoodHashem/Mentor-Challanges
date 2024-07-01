const btn = document.querySelector('button');
const input = document.querySelector('input');
const container = document.querySelector('.input-container'); 

function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

// Event listener for a button click that validates an email input field.
btn.addEventListener('click', function () {
    
//  If the input is empty, adds 'empty-error' class to the container and sets 'error' id on the input.
  if (input.value === '') {
        container.classList.add('empty-error'); 
        container.classList.remove('error-text')
        input.setAttribute('id', 'error'); 
// * If the input is not a valid email, adds 'error-text' class to the container and sets 'error' id on the input.  
  }else if(!validateEmail(input.value)){
    container.classList.add('error-text'); 
    container.classList.remove('empty-error')
    input.setAttribute('id', 'error'); 
// * If the input is a valid email, removes 'error-text' class from the container and removes 'error' id from the input.

  }else{
    container.classList.remove('error-text'); 
    input.removeAttribute('id'); 
  }
})
