const express = require("express");

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

// Import routes and give the server access to them.
const routes = require("./controllers/moviescontrollers.js");

app.use(routes);
// Routes
// =============================================================
require("./routes/api-routes.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
