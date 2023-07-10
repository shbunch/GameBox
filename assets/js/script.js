var rawgAPIKey = "afe2446d033e4b5197325726cd2f5fb8";
var fullGameList = "https://api.rawg.io/api/games?key=" + rawgAPIKey;

// ? Sample RAWG API links for reference
// Full list of games - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea
// Games list with filters - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea&dates=2019-09-01,2019-09-30&platforms=18,1,7
// Borderlands 3 game details - https://api.rawg.io/api/games/borderlands-3?key=5e68bfa8ec8141a990c74c4ebefb01ea

// List of games object on console log
// fetch(fullGameList)
//     .then(function (res) {
//         return res.json()
//     })
//     .then(function (data) {
//         console.log(data.results);
       
//     });


// Targeting Search button element
var searchEl = document.querySelector("#SearchBtn")

//! Code that runs when Search button is pressed (almost all code should go here)
function searchGame(event) {
    event.preventDefault();
    // Collect user input for the game search and store it in a variable
    var game = document.querySelector("#query").value
    
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
  type: "bar",
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
});
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
);