var APIKey = "afe2446d033e4b5197325726cd2f5fb8";


// fetch('https://api.rawg.io/api/games?key=afe2446d033e4b5197325726cd2f5fb8', {
//     cache: 'reload',
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['chosen game', 'next best thing', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of votes',
      data: [13, 19, 3, 5, 2, 3],
      borderWidth: 2,
      borderColor: '#ff6384',
      backgroundColor:'rgb(116, 2, 2)',
    }]
    
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

