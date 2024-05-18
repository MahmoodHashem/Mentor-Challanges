



const work = {
    day: 5,
    lastDay: 7,
    week: 32,
    lastWeek: 36,
    month: 103,
    lastMonth: 128,

}

const play = {
    day: 1,
    lastDay: 2,
    week: 10,
    lastWeek: 8,
    month: 23,
    lastMonth: 29,
}


const study = {
    day: 0,
    lastDay: 1,
    week: 4,
    lastWeek: 7,
    month: 13,
    lastMonth: 19,
}

const exercise = {

    day: 1,
    lastDay: 1,
    week: 4,
    lastWeek: 5,
    month: 11,
    lastMonth: 18,
}

const social = {

    day: 1,
    lastDay: 3,
    week: 5,
    lastWeek: 10,
    month: 21,
    lastMonth: 23,
}

const selfCare = {

    day: 0,
    lastDay: 1,
    week: 2,
    lastWeek: 2,
    month: 7,
    lastMonth: 11
}



const presentHour = document.querySelectorAll(".hour");
const lastHour = document.querySelectorAll('.last-week');

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');



daily.addEventListener('click', function () {
    presentHour[0].textContent = `${work.day}hrs`
    presentHour[1].textContent = `${play.day}hrs`
    presentHour[2].textContent = `${study.day}hrs`
    presentHour[3].textContent = `${exercise.day}hrs`
    presentHour[4].textContent = `${social.day}hrs`
    presentHour[5].textContent = `${selfCare.day}hrs`


    lastHour[0].textContent = `Last Day - ${work.lastDay}hrs`
    lastHour[1].textContent = `Last Day - ${play.lastDay}hrs`
    lastHour[2].textContent = `Last Day - ${study.lastDay}hrs`
    lastHour[3].textContent = `Last Day - ${exercise.lastDay}hrs`
    lastHour[4].textContent = `Last Day - ${social.lastDay}hrs`
    lastHour[5].textContent = `Last Day - ${selfCare.lastDay}hrs`

    this.style.opacity = '1'; 
    weekly.style.opacity = '0.5'; 
    monthly.style.opacity = '0.5'; 
}); 

weekly.addEventListener('click', function(){
    presentHour[0].textContent = `${work.week}hrs`
    presentHour[1].textContent = `${play.week}hrs`
    presentHour[2].textContent = `${study.week}hrs`
    presentHour[3].textContent = `${exercise.week}hrs`
    presentHour[4].textContent = `${social.week}hrs`
    presentHour[5].textContent = `${selfCare.week}hrs`

    lastHour[0].textContent = `Last Week - ${work.lastWeek}hrs`
    lastHour[1].textContent = `Last Week - ${play.lastWeek}hrs`
    lastHour[2].textContent = `Last Week - ${study.lastWeek}hrs`
    lastHour[3].textContent = `Last Week - ${exercise.lastWeek}hrs`
    lastHour[4].textContent = `Last Week - ${social.lastWeek}hrs`
    lastHour[5].textContent = `Last Week - ${selfCare.lastWeek}hrs`

    this.style.opacity = '1'; 
    daily.style.opacity = '0.5'; 
    monthly.style.opacity = '0.5'; 
})

monthly.addEventListener('click', function(){


    presentHour[0].textContent = `${work.month}hrs`
    presentHour[1].textContent = `${play.month}hrs`
    presentHour[2].textContent = `${study.month}hrs`
    presentHour[3].textContent = `${exercise.month}hrs`
    presentHour[4].textContent = `${social.month}hrs`
    presentHour[5].textContent = `${selfCare.month}hrs`

    lastHour[0].textContent = `Last Month - ${work.lastMonth}hrs`
    lastHour[1].textContent = `Last Month - ${play.lastMonth}hrs`
    lastHour[2].textContent = `Last Month - ${study.lastMonth}hrs`
    lastHour[3].textContent = `Last Month - ${exercise.lastMonth}hrs`
    lastHour[4].textContent = `Last Month - ${social.lastMonth}hrs`
    lastHour[5].textContent = `Last Month - ${selfCare.lastMonth}hrs`


    this.style.opacity = '1'; 
    daily.style.opacity = '0.5'; 
    weekly.style.opacity = '0.5'; 

})