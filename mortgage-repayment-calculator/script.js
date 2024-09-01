

const inputs = document.querySelectorAll('[data-input]'); 

const resultPlaceholder = document.querySelector(".result-toshow"); 
const result = document.querySelector('.result'); 


const monthlyCalculated = document.querySelector('.result__monthly-calculated'); 
const termCalculated = document.querySelector(".result__monthly-term"); 

const repayment = document.querySelector('#repayment'); 
const interest = document.querySelector("#interest"); 


console.log(repayment.checked); 
console.log(interest.checked); 


const clear = document.querySelector("[ data-clear-all]"); 


const form = document.querySelector('form'); 

form.noValidate = true; 




clear.addEventListener('click', ()=>{
  inputs.forEach(input =>{
    input.value = ''
  })
  resultPlaceholder.classList.remove('hide'); 
      result.classList.add('hide'); 
})


form.addEventListener('submit', function(){

    event.preventDefault(); 

    inputs.forEach(input =>{
        if(input.validity.valueMissing){
            input.parentElement.parentElement.classList.add('error-text'); 
            input.classList.add('error-border'); 
            input.nextElementSibling.classList.add('error-label'); 
            console.log("Empty")
        } 
        else{
            input.parentElement.parentElement.classList.remove('error-text'); 
            input.classList.remove('error-border'); 
            input.nextElementSibling.classList.remove('error-label'); 
        }

    })

    let isValid = [...inputs].every(input => input.checkValidity()); 

    console.log(isValid)

    if(isValid){
        let [loanAmount, loanTermYears, interestRate] = [...inputs]; 
      resultPlaceholder.classList.add('hide'); 
      result.classList.remove('hide'); 
        
     let mortgage = calculateMonthlyPayment(loanAmount.value, interestRate.value,  loanTermYears.value, interest.checked ? 'interest-only': 'repayment'); 

     console.log(mortgage.monthly)

     monthlyCalculated.innerHTML = `&pound; ${mortgage.monthly}`; 
     termCalculated.innerHTML = `&pound; ${mortgage.year}`



      }
})

function calculateMonthlyPayment(P, annualInterestRate, termYears, type = 'repayment') {
  const r = annualInterestRate / 100 / 12; // Monthly interest rate
  const n = termYears * 12; // Total number of payments

  // Monthly payment formula

  let M; 

  if(type === 'repayment'){
     M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }else{
     M = P * r; 
  }

  


  console.log(M.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}))


  return {monthly: M.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}), year: (M*n).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ;
}