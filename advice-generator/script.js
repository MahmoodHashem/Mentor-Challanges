


const advice = document.getElementById('qoute'); 
const adviceNumber = document.getElementById('advice'); 
const generator = document.querySelector('.dice'); 

window.onload = generateQuote; 

generator.addEventListener('click', generateQuote); 


function generateQuote(){
    fetch('https://api.adviceslip.com/advice').then((response)=>{
        return response.json()
    }).then(data =>{
        adviceNumber.textContent = `Adive #${data.slip.id}`
        advice.textContent = data.slip.advice; 
    }).catch(e =>{
        alert(e); 
    })
}



