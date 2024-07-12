const charts = document.querySelectorAll('.chart');

// Fetch the data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Extract the 'amount' values from the JSON data
    let amounts = data.map(item => item.amount);
    let days = data.map(item => item.day); 

    const date = new Date();
    const today = date.getDay();

    const currentDay = days[today];

    charts.forEach((chart, i) => {
      if (chart.classList.contains(currentDay)) {
        chart.style.background = 'hsl(186, 34%, 60%)';
      }

      // Use the 'amounts' array from the JSON data
      chart.style.height = `${amounts[i]}%`;
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });