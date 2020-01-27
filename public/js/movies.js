// const axios = require("axios");
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
$("#search").click(()=>{
    // ajax to hit the server side call to the route

    $.get("/api/movies", ((data)=>{
        console.log(data);
    }))
})
})