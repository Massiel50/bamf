// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  // host: "localhost",
  // port: 3306,
  // user: "root",
  // password: "",
  // database: "bamfmovies_db"
  "use_env_variables": "JAWSDB_URL",
  "dialect": "mysql"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

