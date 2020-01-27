// Dependencies
const axios = require("axios");

module.exports = function getMovies() {
  // User Movie request
  let movieCardData;
  let movie = $("#search")
    .val()
    .trim();
  // Get request from OMDB API
  axios
    .get(`https://www.omdbapi.com/?t=${movie}&apikey=trilogy`)
    .then(function(res) {
      // Title
      console.log(res.data.imdbID);
      console.log(res.data.Poster);
      console.log(res.data.Title);
      console.log(res.data.Plot);

      movieCardData = [
        { imdbID: res.data.imdbID },
        { poster: res.data.poster },
        { title: res.data.Title },
        { plot: res.data.Plot }
      ];
    });
  return movieCardData;
};
