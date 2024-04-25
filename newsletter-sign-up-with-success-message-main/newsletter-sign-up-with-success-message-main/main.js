

let overlayLayer = document.getElementsByTagName('span')[0]; 
let box = document.querySelector('.box-modal'); 
let btn = document.querySelector('.showbtn'); 
let disbtn = document.querySelector('.dismiss'); 
let gmail = document.querySelector("#gmail"); 
let invalid = document.querySelector(".invalid"); 


// btn.addEventListener('click', showMessage()); 
function showMessage(){
     let emailInput = document.getElementById('input-email');
    if(isValidEmail(emailInput.value)){
     
    console.log("inner")
      overlayLayer.classList.add('overlay'); 
      box.style.display = 'block';  
      gmail.textContent = emailInput.value;  
      console.log(emailInput); 
      invalid.style.display = 'none'; 
      emailInput.style.border = "0.5px solid rgba(0, 0, 0, 0.305)";
      emailInput.value = ''; 
    }else{
      invalid.style.display = 'inline'; 
      emailInput.style.border = "1px solid red";
    }
}

function dismissMessage(){
  overlayLayer.classList.remove('overlay'); 
  box.style.display = 'none'; 
}


function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

