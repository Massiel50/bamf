
// let cardImage = document.querySelector(".card-image");

// axios({
//     "method":"GET",
//     "url":"https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes",
//     "header":{
//         "content-type":"application/octect-stream",
//         "x-rapidapi-host":"juanroldan1989-moviequotes-v1.p.rapidapi.com",
//         "x-rapidapi-key":"rdw1rEkwysmshxHD384ywGeVEPV1p1fxYpYjsnlu1TQJLXkJQP",
//         "authorization":"Token token=vQiwoJllNeJZPjMH7XeooAtt"
//     }, "params":{
//         "movie":"star wars"
//     }
// })
// .then((response)=>{
//     // console.log(response.data)
//     let res = response.data;

//     movieCards(res);
// })

// function movieCards(){
    
// }
$(document).ready(function () {
// click handler for the movie search
$("#searchBtn").click((e)=>{
    console.log("search button clicked, searching for movies")
    // ajax to hit the server side call to the route
    let movie = $(".searchMovie").val().trim();

    console.log("The value of the movie" + movie);

    $.ajax("/api/movies/search/"+ movie , ((data)=>{
        console.log(data);
    }))
})
})

$(document).ready(function() {


// let cardImage = document.querySelector(".card-image");

// axios({
//     "method":"GET",
//     "url":"https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes",
//     "header":{
//         "content-type":"application/octect-stream",
//         "x-rapidapi-host":"juanroldan1989-moviequotes-v1.p.rapidapi.com",
//         "x-rapidapi-key":"rdw1rEkwysmshxHD384ywGeVEPV1p1fxYpYjsnlu1TQJLXkJQP",
//         "authorization":"Token token=vQiwoJllNeJZPjMH7XeooAtt"
//     }, "params":{
//         "movie":"star wars"
//     }
// })
// .then((response)=>{
//     // console.log(response.data)
//     let res = response.data;

//     movieCards(res);
// })

// function movieCards(){
    
// }
function getUserName() {
    connection.get("SELECT * FROM users", function(err, res) {
        if (err) throw err;
        
    })
}

function queryAllMovies() {
    connection.get("SELECT * FROM user_movies", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
          console.log(res[i].imdb_ID + " | " + res[i].title + " | " + res[i].plot + " | " + res[i].poster);
      }
    
    });
  }
});
