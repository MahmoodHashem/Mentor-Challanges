const nameInput = document.querySelector('#name');
const lastnameInput = document.querySelector("#l-name");
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const checkboxInput = document.querySelector("#consent");


const nameLabel = document.querySelector('.name-label');
const lastNamelabel = document.querySelector('.last-name-label');
const emailLabel = document.querySelector('.email-label');
const messageLabel = document.querySelector('.message-label')
const checkboxLabel = document.querySelector('.checkbox-container');

const popup = document.querySelector('.popup');

const form = document.querySelector('form');

form.noValidate = true;


form.addEventListener('submit', function () {

  event.preventDefault()

  let isValid = true;

  isValid = checkInput(nameInput, nameLabel, 'name') && isValid;
  isValid = checkInput(lastnameInput, lastNamelabel, 'last') && isValid;
  isValid = checkInput(emailInput, emailLabel, 'email') && isValid;
  isValid = checkInput(messageInput, messageLabel, 'message') && isValid;
  isValid = checkInput(checkboxInput, checkboxLabel, 'check') && isValid;


  if (isValid) {
    showMessage()
  } 

})


function checkInput(input, label, type) {
  if (input.validity.valueMissing) {
    type === 'check' ? label.classList.add('checkbox-container-error') : label.classList.add('empty-error');
    input.classList.add('empty-error');
    return false;
  } else if (input.validity.typeMismatch || input.validity.tooShort) {
    console.log(`Enter a valid ${type === 'name' ? "name" : type === 'last' ? 'Last name' : type === 'email' ? "Email" : 'value'}`);
    label.classList.remove('empty-error');
    type === 'email' ? label.classList.add('email-error') : type === 'check' ? label.classList.add('checkbox-container-error') : type === 'message' ? label.classList.add('message-error') : '';
    input.classList.add('empty-error');
    return false;
  } else {
    console.log("Ok")
    label.classList.remove('empty-error');
    input.classList.remove('empty-error');
    label.classList.remove('email-error');
    label.classList.remove('checkbox-container-error');
    return true;
  }
}

async function showMessage() {
  popup.style.top = '5%'; 
  popup.style.opacity = '1'; 
  await new Promise(resolve => setTimeout(resolve, 4000));
  window.location.reload();
}