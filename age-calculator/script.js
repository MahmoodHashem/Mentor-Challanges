



const button = document.getElementById("button");

const inputs = document.querySelectorAll('[data-input]');

const empties = document.querySelectorAll('.empty');



button.addEventListener('click', () => {

    inputs.forEach((input) => {
        input.style.borderColor = '#dbdbdb';
    })


    empties.forEach((empty) => {
        empty.style.display = 'none';
    })



    if (inputs[0].value === '' && inputs[1].value === '' && inputs[2].value === '') {
        inputs.forEach((input) => {
            input.style.borderColor = 'red';

        })
        empties.forEach((empty) => {
            empty.style.display = 'block';
        })
    } else {
        inputs.forEach((input,i) => {
            if (input.value === '') {
                input.style.borderColor = 'red';
                empties[i].style.display = 'block'
            }
        })


    }
})
