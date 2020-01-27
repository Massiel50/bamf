// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("home")
  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("members");
    }
    res.render("signUp");
  });
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.render("members",{user:req.user})
  });
 // shows the movies page for searching for movies
  app.get("/movies", function(req,res){
    res.render("movies");
  })

  app.get("/api/movies/search/:movie", function(req,res){
     // get movie from parameters
    let movie = req.params.movie
    console.log("movie", movie);
    
      // moviesController.getMovies(movie,(data) => {
    
      //   //update the object
      //   console.log("the data is ",  data);
      //   console.log("Title", data.title);
      //   console.log("Image",data.poster);
      //   console.log("Plot",data.plot);
      //   return data;
      // });
    res.render("home");
  })

};