// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var axios = require("axios");
var moviesController = require("../controllers/moviescontrollers")

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
      })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/moviedata", function (req,res){
    axios.get("https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
    .then(function(data){
      console.log(data);
      
    })
  })

  
  app.get("/api/movies/search/:movie", function(req,res){
    // get movie from parameters
   let movie = req.params.movie
   console.log("movie", movie);
   
     moviesController.getMovies(movie,(data) => {
   
       //update the object
       console.log("the data is ",  data);
       console.log("Title", data.title);
       console.log("Image",data.poster);
       console.log("Plot",data.plot);
       res.json(data);
     });
 })

//route to save movies
 app.post("/api/savemovie", function(req, res) {
   console.log("Save movie route...");
   console.log("with this data ", req.body);
   
  db.userMovies.create({
    UserId:1,
    imdbID:req.body.imdbID,
    poster: req.body.poster,
    title: req.body.title,
    plot: req.body.plot,
    watched:0
  })
    .then(function() {
      res.redirect(307, "/search");
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
});

// get data from db to plop on members page

app.post("/api/movies", function(req, res) {
  console.log("show movie route...");
  console.log("with this data ", req.body);
  
 db.userMovies.findAll({})
   .then(function() {
     res.render("/members", userMovies);
   })
   .catch(function(err) {
     res.status(500).json(err);
   });
});
};
