

const $ = document;


const form = $.querySelector('form');
const id = id => $.getElementById(id);

const nameE = $.querySelector('[data-name]');
const date = $.querySelector('[data-date]');
const number = $.querySelector('[data-number]'); 
const cvc = $.querySelector('[data-code]'); 


const successPop = $.querySelector('.success'); 
const refresh = $.querySelector('.continue'); 


form.noValidate = true;


let inputs = [id('name'), id('number'), id('month'), id('year'), id('cvc')];

/**
 * Adds event listener to the form for form submission handling.
 * Prevents the default form submission behavior.
 * Validates each input field in the form and displays error messages if needed.
 * Hides the form and displays a success message upon successful form submission.
 */
form.addEventListener('submit', event => {
    event.preventDefault();

    inputs.forEach(input => {
        if (input.validity.valueMissing) {
            showError(input, 'error-text');
        } else if (input.validity.patternMismatch) {
            showError(input, 'error-mismatch');
        } else {
            clearError(input);
        }
    });
    let isValid = inputs.every(input => input.checkValidity()); 

    if(isValid){
        form.classList.add('hide');
        successPop.classList.remove('hide');
    }
    
});




/**
 * Adds event listeners to the input fields to update corresponding  values on the cards based on the input field's ID.
 * If the input field ID is 'name', updates the 'name'  value of the front card'.
 * If the input field ID is 'number', updates the 'number'  value of the front card.
 * If the input field ID is 'month' or 'year', triggers the 'updateDate' function to update the date dataset value.
 *  If the input field ID is 'cvc', update the cvc code on the back card
 
 */
inputs.forEach(input => {
    input.addEventListener('input', () => {
        switch (input.id) {
            case 'name':
                nameE.dataset.name = input.value;
                break;
            case 'number':
                number.dataset.number = input.value;
                break;
            case 'month':
            case 'year':
                updateDate();
                break;
            case 'cvc': 
                cvc.dataset.code = input.value;
        }
    });
});


refresh.addEventListener('click', ()=>{
    location.reload(); 
})

function updateDate() {
    const month = inputs.find(input => input.id === 'month').value.padStart(2, '0');
    const year = inputs.find(input => input.id === 'year').value;
    const dateString = `${month}/${year}`;
    date.dataset.date = dateString;
}

function showError(input, errorClass) {
    input.classList.add('error-border');
    input.parentElement.classList.add(errorClass);
}

function clearError(input) {
    input.classList.remove('error-border');
    input.parentElement.classList.remove('error-text', 'error-mismatch');
}




