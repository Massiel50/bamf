$(document).ready(function() {

const axios = require("axios");
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
    connection.query("SELECT * FROM user_movies", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
          console.log(res[i].imdb_ID + " | " + res[i].title + " | " + res[i].plot + " | " + res[i].poster);
      }
    
    });
  }
});