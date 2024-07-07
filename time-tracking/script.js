

const presentHour = document.querySelectorAll(".hour");
const lastHour = document.querySelectorAll('.last-week');

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

/**
 * Updates the display of time tracking data based on the provided state.
 * 
 * @param {Array} data - The array of time tracking data objects.
 * @param {string} state - The state for which the data should be displayed (daily, weekly, monthly).
 * @returns {void}
 */
function displayData(data, state) {
    data.forEach((title, i) => {
      presentHour[i].textContent = `${title.timeframes[state].current}hrs`;
      lastHour[i].textContent = `Last ${state === 'daily' ? 'Day' : state === 'weekly' ? 'Week' : 'Month'} - ${title.timeframes[state].previous}hrs`;
    });
  }
  

  /**
 * Update the active state of the time tracking options based on the provided active state.
 * @param {string} activeState - The active state to be set ('daily', 'weekly', or 'monthly').
 * @returns {void}
 */
  function updateActiveState(activeState) {
    daily.style.opacity = activeState === 'daily' ? '1' : '0.5';
    weekly.style.opacity = activeState === 'weekly' ? '1' : '0.5';
    monthly.style.opacity = activeState === 'monthly' ? '1' : '0.5';
  }
  
  daily.addEventListener('click', () => {
    fetchAndDisplayData('daily');
  });
  
  weekly.addEventListener('click', () => {
    fetchAndDisplayData('weekly');
  });
  
  monthly.addEventListener('click', () => {
    fetchAndDisplayData('monthly');
  });
  

  /**
 * Fetches data from 'data.json' based on the provided state and displays it on the webpage.
 * 
 * @param {string} state - The state for which data needs to be fetched and displayed ('daily', 'weekly', or 'monthly').
 * @returns {void}
 */
  function fetchAndDisplayData(state) {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        displayData(data, state);
        updateActiveState(state);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }