const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;


const app = express();

// Static content
app.use(express.static("public"));

// Parsing application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our models for syncing
const db = require("./models");

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
