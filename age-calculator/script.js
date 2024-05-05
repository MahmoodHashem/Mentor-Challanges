



/*
The code initializes variables and selects DOM elements for further use.
 It then adds an event listener to the button, which triggers a
  series of functions when clicked.
*/

const inputs = document.querySelectorAll('[data-input]');
const empties = document.querySelectorAll('.empty');
const hints = document.querySelectorAll('.hint');
const yearToShow = document.getElementById('years');
const monthToShow = document.getElementById('months');
const dayToShow = document.getElementById('days');

const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

let isValid;


/*
 This code snippet [button.addEventListener] is an event listener for a button click.
 It performs several functions related to validating and calculating
 age based on user input.
*/

button.addEventListener('click', () => {
    resetStylesAndTexts();

    isValid = true;

    if (areInputsEmpty()) {
        setInvalidStylesAndTexts();
    } else {
        checkIndividualInputs();
        checkValidityOfDateValues();
    }

    if (isValid) {
        const age = calculateAge(year.value, month.value, day.value);

        updateAgeDisplay(age);
    }
});




function resetStylesAndTexts() {
    inputs.forEach((input, i) => {
        input.style.borderColor = '#dbdbdb';
        empties[i].textContent = "";
        hints[i].style.color = 'hsl(0, 1%, 44%)';
    });
}

function areInputsEmpty() {
    return inputs[0].value === '' && inputs[1].value === '' && inputs[2].value === '';
}

function setInvalidStylesAndTexts() {
    inputs.forEach((input, i) => {
        input.style.borderColor = 'red';
        empties[i].textContent = 'Empty';
        hints[i].style.color = 'red';
        isValid = false;
    });
}

function checkIndividualInputs() {
    inputs.forEach((input, i) => {
        if (input.value === '') {
            input.style.borderColor = 'red';
            empties[i].textContent = "Empty";
            hints[i].style.color = 'red';
            isValid = false;
        }
    });
}

function checkValidityOfDateValues() {
    if (day.value > 31) {
        empties[0].textContent = 'Must be a valid day';
        isValid = false;
    }

    if (month.value > 12) {
        empties[1].textContent = 'Must be a valid month';
        isValid = false;
    }

    if (year.value > 2024 || year.value < 1950) {
        empties[2].textContent = 'Must be a valid past';
        isValid = false;
    }
}

function updateAgeDisplay(age) {
    yearToShow.textContent = age.years;
    monthToShow.textContent = age.months;
    dayToShow.textContent = age.days;
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
