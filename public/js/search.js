$(document).ready(function () {
    // Getting references to our form and inputs
    var searchform = $("#searchbtn");

    // When the form is submitted, we validate there's an email and password entered
    searchform.on("click", function (event) {
        searchMovies()

    })
    function searchMovies() {
        $.get("/")

         .then(function () {
             console.log("");
             
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});