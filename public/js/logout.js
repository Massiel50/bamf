$(document).ready(function () {
    // Getting references to our form and inputs
    var logoutForm = $("#logoutBtn");

    // When the form is submitted, we validate there's an email and password entered
    logoutForm.on("click", function (event) {
        logoutUser()

    })

    function logoutUser() {
        $.get("/logout")

         .then(function () {
            window.location.replace("/");
             console.log("succesfully logged out");
             
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});