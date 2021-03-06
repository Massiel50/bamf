
`
function renderMovieData(${data}){

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="./styles/css/style.css" />
      <title>BAMF</title>
  </head>

  <body  class="row movieBackground">
    <header>
      <!-- Nav bar -->
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper black lighten-2">
            <a href="#!" class="brand-logo">BaMF</a>
            <ul class="right hide-on-med-and-down">
              <li><a class="center" href="home.html">HOME</a></li>
              <li><a class="center" href="movies.html">TOP PICKS</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <body>
      <div class="container">
        {{!-- search bar --}}
        <div class="container" <!-- search bar-->
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">search</i>
              <input type="text" id="search autocomplete-input" class="autocomplete searchMovie">
              <label for="autocomplete-input">SEARCH MOVIES</label>
            </div>
            <button id="searchBtn" rel="noopener noreferrer"class="waves-effect waves-light btn">Search</button>
          </div>
          
         
          <!-- <h1>Movie title: {{data}}</h1>
          <p>Movie image:{{poster}}</p>
          <p>Movie plot:{{plot}}</p> -->
      
 
          <!-- cards for movies -->
          <div class="row movieCard">
            <div class="col s3">
              <div class="card">
                <div class="card-image">
                  <img src=${data.poster}>
      
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class=" moviePoster card-content">
                  <span class="card-title">${data.title}</span>
                </div>
              </div>
            </div>
      
          </div>
    
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script> type="text/javascript" src="testing.js"</script>
  </body>
</html>
}`