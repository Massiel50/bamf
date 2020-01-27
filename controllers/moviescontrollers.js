// Dependencies
const axios = require("axios");

// User Movie request
let movie = $("#search").val().trim();
// Get request from OMDB API
axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=trilogy`)
    .then(function(res)
    {
        // Title
        console.log(res.data.imdbID);
        console.log(res.data.Poster);
        console.log(res.data.Title);
        console.log(res.data.Plot);

        let imdbID = res.data.imdbID;
        let poster = res.data.poster;
        let title = res.data.Title;
        let plot = res.data.Plot;

        
    });