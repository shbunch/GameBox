
// ? Sample RAWG API links for reference
// Full list of games - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea 
// Games list with filters - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea&dates=2019-09-01,2019-09-30&platforms=18,1,7
// Borderlands 3 game details - https://api.rawg.io/api/games/borderlands-3?key=5e68bfa8ec8141a990c74c4ebefb01ea
// how to get the rawg genres on for the chart data -> 
// var rawgKey ='9291f496b0954cfd85fdd080b9cd538f' this is ryans api key;
// var rawgKey ='5e68bfa8ec8141a990c74c4ebefb01ea' this is shawns api key;
var modalWindow = document.getElementById('modalWindow');
function showModal() {
    modalWindow.style.display = 'block';
}
function hideModal() {
    modalWindow.style.display = 'none';
}
var rawgAPIKey = "9291f496b0954cfd85fdd080b9cd538f";

var input = document.getElementById('query');
function searchBar(event) {
    event.preventDefault();
    var inputVal = input.value;
    searchGame(inputVal);
}
// List of games object on console log

// Targeting Search button element
var searchEl = document.querySelector("#SearchBtn")
// Targeting Save to Wishlist button element
var saveEl = document.querySelector("#SaveBtn")
var wishlistArray = [];
var wishlist = document.querySelector("#wishlist-id");
var wishlistCount = document.querySelector("#wishlist-count");

//! Code that runs when Search button is pressed (almost all code should go here)
function searchGame(inputVal) {
    console.log(inputVal);
    // localStorage.setItem("wishlist", JSON.stringify(wishlistArray));
    var specificGameURL = "https://api.rawg.io/api/games/" + inputVal.replace(/\s+/g, '-').toLowerCase() + "?key=" + rawgAPIKey;
    // Collect user input for the game search and store it in a variable

    // TODO - Loop through fullGameList object and check for match with user input
    fetch(specificGameURL)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data);
            console.log(data.redirect);
            if (data.redirect === true) {
                showModal();
                return;
            }
            saveEl.dataset.game = data.name
            var genreString = "";
            for (i = 0; i < data.genres.length; i++) {
                console.log(data.genres[i].id);
                genreString += (data.genres[i].id + ",")
            }
            genreString = genreString.slice(0, -1);
            console.log(genreString);
            var genreURL = 'https://api.rawg.io/api/games' + '?key=' + rawgAPIKey + '&genres=' + genreString;
            fetch(genreURL)
                .then(function (res) {
                    return res.json();
                })
                .then(function (ratingData) {
                    console.log(ratingData);


                })
        });

}


// The following function renders items in a todo list as <li> elements
function renderWishlist() {
    // Clear wishlist element and update wishlist count
    wishlist.innerHTML = "";
    var wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || []
    wishlistCount.textContent = wishlistArray.length;

    // Render a new li for each wishlist item
    for (var i = 0; i < wishlistArray.length; i++) {
        var wishlistGame = wishlistArray[i];

        var li = document.createElement("li");
        li.textContent = wishlistGame;
        li.setAttribute("data-index", i);

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        // .class.add bulma css class here
        removeButton.dataset.game = wishlistGame;
        removeButton.addEventListener("click", function(event) {
            var gameTitle = event.target.getAttribute("data-game")
            var wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || []
            var updatedWishlist = wishlistArray.filter(function (game) {
                return game !== gameTitle
            })
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
            renderWishlist();
        }) 

        li.appendChild(removeButton);
        wishlist.appendChild(li);
    }
}

// This function is being called below and will run when the page loads.
function init() {
    // Get stored wishlist items from localStorage
    var wishlistItems = JSON.parse(localStorage.getItem("wishlist"));

    // If wishlist were retrieved from localStorage, update the wishlist array to it
    if (wishlistItems !== null) {
        wishlistArray = wishlistItems;
    }

    // This is a helper function that will render wishlist to the DOM
    renderWishlist();
}

function storeWishlist(game) {
    // Stringify and set key in localStorage to wishlist array
    var wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || []
    if (!wishlistItems.includes(game)) {
        wishlistItems.push(game)
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
        renderWishlist()
    }
}




//* Move save to wishlist button over to the image section
// Have the button only show up when the search is run
//* Create wishlist array

// Add event listener to Search button element
searchEl.addEventListener("click", searchBar);
saveEl.addEventListener("click", function(event) {
    event.preventDefault();

    var wishlistText = event.target.getAttribute("data-game")
    storeWishlist(wishlistText)
});



// Calls init to retrieve data and render it to the page on load
renderWishlist();