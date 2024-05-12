


let doc = document.documentElement; 
let btn = document.getElementById('btn'); 
const inputs = document.querySelectorAll('input') 
const err = document.querySelectorAll('.error'); 

const errors = [
     '--name-error-dispay', 
    '--last-name-error-display',
    '--email-error-disply',
    '--password-error-display']; 

btn.addEventListener('click', ()=>{

    inputs.forEach((input, i) =>{
        input.style.borderColor = 'rgba(0, 0, 0, 0.309)'; 
        err[i].style.display = 'none'; 
        doc.style.setProperty(errors[i], 'none'); 
    })

    inputs[2].style.color = 'black'; 

if(inputs[0].value === '' && inputs[1].value === '' && inputs[2].value === ''){
inputs.forEach((input, i) => {
    err[i].style.display = 'block'; 
    input.style.borderColor = 'red'; 
    doc.style.setProperty(errors[i], 'block'); 
});
} else{
    inputs.forEach((input, i) => {
        if (input.value === '') {
            input.style.borderColor = 'red';
            err[i].style.display = 'block'; 
            doc.style.setProperty(errors[i], 'block');
        
            
        }
    });

    if(!((/^[^\s@]+@[^\s@]+\.[^\s@]+$/g).test(inputs[2].value))){
        inputs[2].style.color = 'red'; 
        doc.style.setProperty(errors[2], 'block'); 
        inputs[2].style.borderColor = 'red'; 
        err[2].style.display = 'block'; 
    }

}



})