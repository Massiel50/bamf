$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("#signupBtn");
  var emailInput = $("#email");
  var passwordInput = $("#password");
  var firstNameInput = $("#first_name");
  var lastNameInput = $("#last_name");



  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function(event) {
    event.preventDefault();
    
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstname: firstNameInput.val().trim(),
      lastname: lastNameInput.val().trim()
        
      
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.firstname, userData.lastname);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");

  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, firstname, lastname) {
    console.log("yes");

    $.post("/api/signup", {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
