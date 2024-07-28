const inputs = document.querySelectorAll('[data-input]');
const labels = document.querySelectorAll('.column');
const hints = document.querySelectorAll('.hint');


const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const form = document.querySelector('form');

form.noValidate = true;


form.addEventListener('submit', function (event) {
    const yearToShow = document.getElementById('years');
    const monthToShow = document.getElementById('months');
    const dayToShow = document.getElementById('days');
    event.preventDefault();

    let isValid = true;

    inputs.forEach((input, i) => {
        const fieldType = ['day', 'month', 'year'];
        isValid = checkInput(input, labels[i], hints[i], fieldType[i]) && isValid;
    })


    if (isValid) {
       
        let result = calculateAge(year.value, month.value, day.value);
        
        
    // Trigger the animation
        if(result.years.toString() !== yearToShow.textContent){
            yearToShow.classList.add('animate'); 
        }
        if(result.months.toString() !== monthToShow.textContent){
            monthToShow.classList.add('animate'); 
        }

        if(result.days.toString() !== dayToShow.textContent){
            dayToShow.classList.add('animate')
        }


        yearToShow.textContent = result.years;
        monthToShow.textContent = result.months;
        dayToShow.textContent = result.days;


 // Remove the animate class after the animation has completed 
        yearToShow.addEventListener('animationend', ()=>{
            yearToShow.classList.remove('animate');
        })

        monthToShow.addEventListener("animationend", ()=>{
            monthToShow.classList.remove("animate"); 
        })

        dayToShow.addEventListener("animationend", ()=>{
            dayToShow.classList.remove("animate"); 
        })

    }

})


function checkInput(input, label, hint, type) {
    if (input.validity.valueMissing) {
        label.classList.add('empty-error');
        hint.style.color = 'red';
        input.style.borderColor = 'red';
        return false;
    } else if (input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        label.classList.remove('empty-error');
        type === 'day' ? label.classList.add('valid-day') : type === 'month' ? label.classList.add('valid-month') : type === 'year' ? label.classList.add('valid-year') : '';
        hint.style.color = 'red';
        input.style.borderColor = 'red';
        return false;
    } else {
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
