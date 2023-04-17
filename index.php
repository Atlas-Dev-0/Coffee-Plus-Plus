<?php
// Start the session
session_start();

// Check if user is logged in, if not, redirect to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: login.php");
  exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>COFFEE PLUS-PLUS</title>

  <link rel="stylesheet" href="Bootstrap/css/bootstrap.css" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="/scripts/purchase-window/purchase_window.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,700&display=swap" rel="stylesheet">
</head>

<body>
  <script src="Bootstrap/js/bootstrap.js"></script>
  <script src="script.js"></script>

  <!--Navbar Included Here-->
  <div id="navbar"></div>
  <script src="/scripts/navbar/nav.js"></script>
  


  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="welcome_header">
        <h1 class="Discover_your">
          Discover your <span class="taste">taste</span>
        </h1>
      </div>
      <div class="Sub_Text">
        <h2 class="typewrite" data-period="2000" data-type='[ 
              "Just pick! Trust your judgement!", 
              "Coffee for life!", "#CoffeeLife", 
              "Code and Relax!" ]'>
          <span class="wrap"></span>
        </h2>
      </div>
    </div>

    <div class="row" style="margin-top: 50px; margin-bottom: 20px">
      <div class="d-flex justify-content-center">
        <div class="input-group">
          <input id="searchinput" class="form-control" type="text" placeholder="Search" />
        </div>
        <button type="button" class="search btn btn-primary" id="gosearch">
          <img src="\Design Elements\icons\search.svg" class="search_icon" height="20px" />
        </button>
      </div>
    </div>
  </div>
  <div class="category-menu container">
    <div class="categories">
      <input type="radio" class="check btn-check" name="categories" id="category-all" autocomplete="off" checked />
      <label class="category btn btn-secondary" for="category-all">ALL</label>
      <input type="radio" class="btn-check" name="categories" id="category-basic" autocomplete="off" />
      <label class="category btn btn-secondary" for="category-basic">BASIC</label>
      <input type="radio" class="btn-check" name="categories" id="category-special" autocomplete="off" />
      <label class="category btn btn-secondary" for="category-special">SPECIALTIES</label>
      <input type="radio" class="btn-check" name="categories" id="category-iced" autocomplete="off" />
      <label class="category btn btn-secondary" for="category-iced">ICED</label>
    </div>
  </div>
  <script src="scripts/generate_item_for_user/itemlist.js"></script>


  <div id="popup" class="popup">
    <div class="popup-inner"></div>
  </div>

  <script src="/scripts/purchase-window/purchase_window_script.js"></script>

  

</body>

</html>



<?php



?>