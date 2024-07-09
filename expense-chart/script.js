const charts = document.querySelectorAll('.chart'); 

const date = new Date(); 
const today = date.getDay(); 

const daysOfweek = ['sun', 'mon','tue','wed', 'thu', 'fri', 'sat']; 

const currentDay = daysOfweek[today]; 


charts.forEach(chart =>{
  if(chart.classList.contains(currentDay)){
    chart.style.background = 'hsl(186, 34%, 60%)';
  }
})


