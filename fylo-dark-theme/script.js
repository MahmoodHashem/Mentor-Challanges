// DOM elements
const emailInput = document.querySelector('#email-input');
const errorEmailMessage = document.getElementById('email-error-message');
const form = document.querySelector('.form')


form.noValidate = true


form.addEventListener('submit', ()=>{
    event.preventDefault();

    if (emailInput.validity.valueMissing) {
        showMessage('Please enter an email address', 'text-LightRed');
    } else if (emailInput.validity.typeMismatch) {
        showMessage('Please provide a valid email address', 'text-LightRed');
    } else {
        showMessage('Email sent!', 'text-Cyan');
        emailInput.value = '';
    }
})

// Function to display message
const showMessage = (message, color) => {
    errorEmailMessage.textContent = message;
    errorEmailMessage.classList.remove('hidden', 'text-LightRed', 'text-Cyan');
    errorEmailMessage.classList.add(color);
};
