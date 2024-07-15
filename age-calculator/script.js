const inputs = document.querySelectorAll('[data-input]');
const labels = document.querySelectorAll('.column');
const hints = document.querySelectorAll('.hint');
const yearToShow = document.getElementById('years');
const monthToShow = document.getElementById('months');
const dayToShow = document.getElementById('days');

const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const form = document.querySelector('form');

form.noValidate = true;


form.addEventListener('submit', function () {
    event.preventDefault();

    let isValid = true;

    isValid = checkInput(inputs[0], labels[0], hints[0], 'day') && isValid;
    isValid = checkInput(inputs[1], labels[1], hints[1], 'month') && isValid;
    isValid = checkInput(inputs[2], labels[2], hints[2], 'year')  && isValid;

    inputs.forEach((input, i) =>{
        const fieldType = ['day', 'month', 'year']; 
        isValid = checkInput(input, labels[i], hints[i], fieldType) && isValid;
    })

    console.log(isValid)
    if (isValid) {
        let result = calculateAge(year.value, month.value, day.value);
        yearToShow.textContent = result.years;
        monthToShow.textContent = result.months;
        dayToShow.textContent = result.days;
    }

})


function checkInput(input, label, hint, type){
    if(input.validity.valueMissing){
        label.classList.add('empty-error');
        hint.style.color = 'red';
        input.style.borderColor = 'red';
        return false; 
    }else if(input.validity.rangeUnderflow || input.validity.rangeOverflow){
        label.classList.remove('empty-error');
            type === 'day' ? label.classList.add('valid-day') : type === 'month' ? label.classList.add('valid-month') : type === 'year' ? label.classList.add('valid-year') : '' ;
            hint.style.color = 'red';
            input.style.borderColor = 'red';
            return false; 
    }else{
            label.classList.remove('empty-error', 'valid-day', 'valid-month', 'valid-year');
            hint.style.color = 'hsl(0, 1%, 44%)';
            input.style.borderColor = '#dbdbdb';
            return true; 
    }
}



//Function for calculating age
function calculateAge(year, month, day) {
    const birthDate = new Date(year, month - 1, day);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}
