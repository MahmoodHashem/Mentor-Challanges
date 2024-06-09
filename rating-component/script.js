

const submit = document.querySelector('.btn');
const numbers = document.querySelectorAll(".number"); 
const rate = document.querySelector("#rate"); 
const card = document.querySelectorAll('.card'); 

numbers.forEach((number,index) =>{
    number.addEventListener('click', function(){  
      number.style.backgroundColor = 'hsl(25, 97%, 53%)'; 
      rate.textContent = number.innerHTML; 
      console.log(rate.textContent)
      for (let i = 0; i < numbers.length; i++) {
        if(i === index){
            continue; 
        }
        numbers[i].style.backgroundColor = '#272E38'
      }
    })
}), 


submit.addEventListener('click', function(){
    card.forEach( e =>{
        e.classList.toggle('d-none'); 
    })
})