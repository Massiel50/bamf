// Dependencies
const axios = require("axios");

module.exports.getMovies = function(movie) {
  // User Movie request
  let movieCardData = {};
 
  // Get request from OMDB API
 axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=trilogy`)
    .then(function(res) {

      movieCardData.imdbID = res.data.imdbID;
      movieCardData.poster = res.data.Poster;
      movieCardData.title = res.data.Title;
      movieCardData.plot = res.data.Plot; 
      
    });

    return movieCardData;
};
