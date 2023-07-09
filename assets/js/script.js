// ? Sample RAWG API links for reference
// Full list of games - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea 
// Games list with filters - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea&dates=2019-09-01,2019-09-30&platforms=18,1,7
// Borderlands 3 game details - https://api.rawg.io/api/games/borderlands-3?key=5e68bfa8ec8141a990c74c4ebefb01ea

var rawgAPIKey = "5e68bfa8ec8141a990c74c4ebefb01ea";
var fullGameList = "https://api.rawg.io/api/games?key=" + rawgAPIKey;

// List of games object on console log
fetch(fullGameList)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);
    })

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