// ? Sample RAWG API links for reference
// Full list of games - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea
// Games list with filters - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea&dates=2019-09-01,2019-09-30&platforms=18,1,7
// Borderlands 3 game details - https://api.rawg.io/api/games/borderlands-3?key=5e68bfa8ec8141a990c74c4ebefb01ea
// how to get the rawg genres on for the chart data ->
// clear input field for more searches
// var rawgKey ='9291f496b0954cfd85fdd080b9cd538f' this is ryans api key;
// var rawgKey ='5e68bfa8ec8141a990c74c4ebefb01ea' this is shawns api key;
var modalWindow = document.getElementById("modalWindow");
function showModal() {
  modalWindow.style.display = "block";
}
function hideModal() {
  modalWindow.style.display = "none";
}
var rawgAPIKey = "9291f496b0954cfd85fdd080b9cd538f";

var input = document.getElementById("query");
function searchBar(event) {
  event.preventDefault();
  var inputVal = input.value;
  searchGame(inputVal);
  var videoGameContainerParent = document.getElementById('vgImages');
  videoGameContainerParent.innerHTML = "";
}
// List of games object on console log
function pageLoad() {
  var pageLoadURL =
    "https://api.rawg.io/api/games/modern-warfare?key=" + rawgAPIKey;

  fetch(pageLoadURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (pageLoadData) {
      console.log(pageLoadData);
      var videoGameTitle = document.querySelector("#vgTitle");
      var videoGameDesc = document.querySelector("#vgDescription");
      var videoGameDate = document.querySelector("#releaseDate");
      var videoGameRating = document.querySelector("#vgRating");
      var videoGamePlatforms = document.querySelector("#vgPlatforms");
      var videoGameContainer = document.getElementById("vgImages");
      var videoGameImage = document.createElement("img");
      videoGameContainer.appendChild(videoGameImage);
      var videoGameImageURL = pageLoadData.background_image;
      videoGameImage.setAttribute("src", videoGameImageURL);

      console.log(videoGameImageURL);

      videoGameDate.textContent = "Released: " + pageLoadData.released;
      videoGameDesc.textContent = pageLoadData.description_raw;
      videoGameTitle.textContent = pageLoadData.name;
      videoGameRating.textContent = pageLoadData.esrb_rating.name;
      var staticPlatformsString = "";
      for (j = 0; j < pageLoadData.parent_platforms.length; j++) {
        staticPlatformsString +=
          pageLoadData.parent_platforms[j].platform.name + ", ";
      }
      staticPlatformsString = staticPlatformsString.slice(0, -2);
      console.log(staticPlatformsString);
      videoGamePlatforms.textContent = staticPlatformsString;
      var genreStringOnLoad = "";
      for (i = 0; i < pageLoadData.genres.length; i++) {
        console.log(pageLoadData.genres[i].id);
        genreStringOnLoad += pageLoadData.genres[i].id + ",";
      }
      genreStringOnLoad = genreStringOnLoad.slice(0, -1);
      console.log(genreStringOnLoad);
      var pageLoadGenre =
        "https://api.rawg.io/api/games" +
        "?key=" +
        rawgAPIKey +
        "&genres=" +
        genreStringOnLoad;
      fetch(pageLoadGenre)
        .then(function (res) {
          return res.json();
        })
        .then(function (pageLoadRatingData) {
          console.log(pageLoadRatingData);

          // charts in here
        });
    });
}
// Targeting Search button element
var searchEl = document.querySelector("#SearchBtn");

//! Code that runs when Search button is pressed (almost all code should go here)
function searchGame(inputVal) {
  console.log(inputVal);
  var specificGameURL =
    "https://api.rawg.io/api/games/" +
    inputVal.replace(/\s+/g, "-").toLowerCase() +
    "?key=" +
    rawgAPIKey;
  // Collect user input for the game search and store it in a variable
  fetch(specificGameURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.redirect);
      if (data.redirect === true) {
        showModal();
      }
      // make website content here
      // game title/ release/ description
      var videoGameTitle = document.querySelector("#vgTitle");
      videoGameTitle.textContent = data.name;
      var videoGameRelease = document.querySelector("#releaseDate");
      videoGameRelease.textContent = 'Released:' +  data.released;
      var videoGameDescription = document.querySelector("#vgDescription");
      videoGameDescription.textContent = data.description_raw;
      // rating
      var videoGameRating = document.querySelector("#vgRating");
      videoGameRating.textContent = data.esrb_rating.name;
      if(data.esrb_rating.name === null){
        videoGameRating.textContent = '';
      }
      // platforms
      var videoGamePlatforms = document.querySelector("#vgPlatforms");
      var platformsString = "";
      for (j = 0; j < data.parent_platforms.length; j++) {
        platformsString += data.parent_platforms[j].platform.name + ", ";
      }
      platformsString = platformsString.slice(0, -2);
      console.log(platformsString);
      videoGamePlatforms.textContent = platformsString;
      // image
      
      var videoGameContainer = document.getElementById("vgImages");
      var videoGameImage = document.createElement("img");
      videoGameContainer.appendChild(videoGameImage);
      var videoGameImageURLDynamic = data.background_image;
      videoGameImage.setAttribute("src", videoGameImageURLDynamic);
      // end

      var genreString = "";
      for (i = 0; i < data.genres.length; i++) {
        console.log(data.genres[i].id);
        genreString += data.genres[i].id + ",";
      }
      genreString = genreString.slice(0, -1);
      console.log(genreString);
      var genreURL =
        "https://api.rawg.io/api/games" +
        "?key=" +
        rawgAPIKey +
        "&genres=" +
        genreString;
      fetch(genreURL)
        .then(function (res) {
          return res.json();
        })
        .then(function (ratingData) {
          console.log(ratingData);

          var game1 = data.name;
          var game2 = ratingData.results[1].name;
          var game3 = ratingData.results[2].name;
          var game4 = ratingData.results[3].name;
          var game5 = ratingData.results[4].name;

          var gameRating1 =data.rating;
          var gameRating2 =ratingData.results[0].rating;
          var gameRating3 =ratingData.results[1].rating;
          var gameRating4 =ratingData.results[2].rating;
          var gameRating5 =ratingData.results[3].rating;

          const ctx = document.getElementById("ratingChart");
// destroy chart code
var chartStatus = Chart.getChart("ratingChart"); // <canvas> id
if (chartStatus != undefined) {
chartStatus.destroy();
}





new Chart(ctx, {
type: "bar",
data: {
  labels: [
    game1,
    game2,
    game3,
    game4,
    game5,
  ],
  datasets: [
    {
      label: 'Rating',

      
      data: [gameRating1, gameRating2, gameRating3, gameRating4, gameRating5],
      borderWidth: 2,
      backgroundColor:'rgb(250, 6, 6)',
    },
  ],
},
options: {
  animation:{
    borderWidth: {
      duration:1000,
      easing:'linear',
      to:1,
      from:5,
      loop:true,
    }
  },
  animations:{
    backgroundColor: {
      type: 'color',
      duration:1000,
      easing:'linear',
      to:'blue',
      from:'red',
      loop:true
    }
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
 
},
});



const ctx1 = document.getElementById("popChart");

// destroy chart code
var chartStatus = Chart.getChart("popChart"); // <canvas> id
if (chartStatus != undefined) {
chartStatus.destroy();
}

new Chart(ctx1, {

type: 'line',
data: {
  labels: [
    game1,
    game2,
    game3,
    game4,
    game5,
  ],
  datasets: [
    {
      
      label: 'Rating',
      data: [gameRating1, gameRating2, gameRating3, gameRating4, gameRating5],
      borderWidth: 5,
      backgroundColor: 'rgb(250, 6, 6)',
    },
    
  ],
},
options: {
  animation: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 2,
      loop: true
    },
    backgroundColor: {
      type: 'color',
      duration:1000,
      easing:'linear',
      to:'blue',
      from:'red',
      loop:true
    }
  },
 
  scales: {
    y: { // defining min and max so hiding the dataset does not change scale range
      min: 0,
      max: 5
    }
  }
}
});
        });
    }); // TODO - Loop through fullGameList object and check for match with user input
}
// Add event listener to Search button element
searchEl.addEventListener("click", searchBar);

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




