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
console.log(APIKey);
const ctx = document.getElementById('ratingChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['chosen game', 'next best thing', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of votes',
      data: [19, 14, 3, 5, 2, 3],
      borderWidth: 2,
      borderColor: '#f0000080',
      backgroundColor:'#fff580',
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
 

