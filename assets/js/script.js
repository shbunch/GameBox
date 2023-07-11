var rawgAPIKey = "afe2446d033e4b5197325726cd2f5fb8";
var fullGameList = "https://api.rawg.io/api/games?key=" + rawgAPIKey;

// ? Sample RAWG API links for reference
// Full list of games - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea
// Games list with filters - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea&dates=2019-09-01,2019-09-30&platforms=18,1,7
// Borderlands 3 game details - https://api.rawg.io/api/games/borderlands-3?key=5e68bfa8ec8141a990c74c4ebefb01ea
// how to get the rawg genres on for the chart data -> 
// var rawgKey ='9291f496b0954cfd85fdd080b9cd538f' this is ryans api key;
// var rawgKey ='5e68bfa8ec8141a990c74c4ebefb01ea' this is shawns api key;
var modalWindow = document.getElementById('modalWindow');
function showModal(){
    modalWindow.style.display = 'block';
}
function hideModal(){
    modalWindow.style.display = 'none';
}
var input = document.getElementById('query');
function searchBar(event){
    event.preventDefault();
    var inputVal = input.value;
    searchGame(inputVal);
}
// List of games object on console log
       
// Targeting Search button element
var searchEl = document.querySelector("#SearchBtn")

//! Code that runs when Search button is pressed (almost all code should go here)
function searchGame(inputVal) {
    console.log(inputVal);
    var specificGameURL = "https://api.rawg.io/api/games/"+ inputVal.replace(/\s+/g, '-').toLowerCase() + "?key=" + rawgAPIKey;
    // Collect user input for the game search and store it in a variable
    fetch(specificGameURL)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);
        console.log(data.redirect);
        if(data.redirect === true){
           showModal();
        }
        var genreString ="";
        for(i = 0; i < data.genres.length; i++){
            console.log(data.genres[i].id);
            genreString+= (data.genres[i].id + ",")
        }
        genreString = genreString.slice(0, -1);
        console.log(genreString);
        var genreURL = 'https://api.rawg.io/api/games'  + '?key=' + rawgAPIKey+ '&genres='+ genreString;
        fetch(genreURL)
        .then(function(res){
            return res.json();
        })
        .then(function(ratingData){
            console.log(ratingData);
          })});
// Targeting Search button element
var searchEl = document.querySelector("#SearchBtn")

//! Code that runs when Search button is pressed (almost all code should go here)
function searchGame(event) {
    event.preventDefault();
    // Collect user input for the game search and store it in a variable
    
    
    // TODO - Loop through fullGameList object and check for match with user input
}

// Add event listener to Search button element
searchEl.addEventListener("click", searchGame);

// var input = document.getElementById("query");

// function SearchBar(event) {
//   event.preventDefault();
//   var inputVal = input.value;
//   searchGame(inputVal);
  // 
//     // List of games object on console log
    



//   // Targeting Search button element
  // var searchEl = document.querySelector("#SearchBtn");

//   // ! Code that runs when Search button is pressed (almost all code should go here)
//   function searchGame(inputVal) {
   
//     // Collect user input for the game search and store it in a variable
//     // resltus.length = new data (50000);

  
//     // resizing function for datas


//   // Add event listener to Search button element
//   searchEl.addEventListener("click", SearchBar);

  // fetch(fullGameList)
  // .then(function (res) {
  //   return res.json();
  // })
  // .then(function (data) {
  //   // if (data.redirect === true) {
  //   //   alert: "no game found";
  //   // }
  //   console.log(data);
  //   console.log(fullGameList);
  // });
// }
const ctx = document.getElementById("ratingChart");
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      borderColor: "#f0000080",
        backgroundColor: "#fff",
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

// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: [
//       "chosen game",
//       "next best thing",
//       "Yellow",
//       "Green",
//       "Purple",
//       "Orange",
//     ],
//     datasets: [
//       {
//         label: "# of votes",
//         data: [19, 14, 3, 5, 2, 3],
//         borderWidth: 2,
        
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });



const ctx1 = document.getElementById("popChart");

const chart = new Chart(ctx1, {
  type: 'line',
  data: {
        labels: [
          "chosen game",
          "next best thing",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
        ],
    datasets: [
            {
              label: "# of votes",
              data: [19, 14, 3, 5, 2, 3],
              borderWidth: 2,
              borderColor: "#f0000080",
              backgroundColor: "#fff",
            },
          ],
        },
      options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
      
      animation: {
          onProgress: function(animation) {
              progress.value = animation.currentStep / animation.numSteps;
          }
      }
  }
)}

