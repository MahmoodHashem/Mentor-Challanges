const dayfront = document.querySelector('div[ data-timer-card="days"] .timer__card-part--front');
const dayback = document.querySelector('div[ data-timer-card="days"] .timer__card-part--back');
const daycard = document.querySelector('div[ data-timer-card="days"]');

const hourfront = document.querySelector('div[ data-timer-card="hours"] .timer__card-part--front');
const hourback = document.querySelector('div[ data-timer-card="hours"] .timer__card-part--back');
const hourcard = document.querySelector('div[ data-timer-card="hours"]');

const minfront = document.querySelector('div[ data-timer-card="minutes"] .timer__card-part--front');
const minback = document.querySelector('div[ data-timer-card="minutes"] .timer__card-part--back');
const mincard = document.querySelector('div[ data-timer-card="minutes"]');

const secfront = document.querySelector('div[ data-timer-card="seconds"] .timer__card-part--front');
const secback = document.querySelector('div[ data-timer-card="seconds"] .timer__card-part--back');
const seccard = document.querySelector('div[ data-timer-card="seconds"]');

const newYearTime = new Date("July 30, 2024 00:00:00").getTime();

function updateCountDown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const secondInMill = 1000;
    const minuteInMill = secondInMill * 60;
    const hourInMill = minuteInMill * 60;
    const dayInMill = hourInMill * 24;

    const d = Math.floor(gap / dayInMill);
    const h = Math.floor((gap % dayInMill) / hourInMill);
    const m = Math.floor((gap % hourInMill) / minuteInMill);
    const s = Math.floor((gap % minuteInMill) / secondInMill);

    seccard.classList.add('running');
    setTimeout(function () {
        secfront.setAttribute("data-timer-front", `${s}`);
        secback.setAttribute("data-timer-back", `${s}`);
        seccard.classList.remove('running');
    }, 600);


    if(s === 0){
        mincard.classList.add('running')
        setTimeout(() => {
            mincard.classList.remove('running')
        }, 800);
    }

    minfront.setAttribute("data-timer-front", `${m}`);
    minback.setAttribute("data-timer-back", `${m}`);


    if(m === 0 && s === 0){
        hourcard.classList.add('running'); 

        setTimeout(() => {
            hourcard.classList.remove('running')
        }, 800);
    }

    hourfront.setAttribute("data-timer-front", `${h}`);
    hourback.setAttribute("data-timer-back", `${h}`);


    if(m === 0 && s === 0 && h === 0){
        daycard.classList.add('running'); 

        setTimeout(() => {
            daycard.classList.remove('running')
        }, 800);
    }

    dayfront.setAttribute("data-timer-front", `${d}`);
    dayback.setAttribute("data-timer-back", `${d}`);


}


window.onload = setInterval(updateCountDown, 1000)
