require("./routes/api-routes.js")(app);

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  $(document).on("click", "#dbtn", deleteMovie);

  function deleteMovie() {
    var listItemData = $(this).parent("li");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/members/" + id
    })
      .then(window.location = "/members");
  }

  app.delete("/api/members/:id", function (req, res) {
    db.userMovies.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbuserMovies) {
      res.json(dbuserMovies);
    });
  });

});