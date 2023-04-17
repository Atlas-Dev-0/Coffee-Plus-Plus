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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,700&display=swap"
    rel="stylesheet">
</head>

<body>
  <script src="Bootstrap/js/bootstrap.js"></script>
  <script src="script.js"></script>

  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="Logo\SVG_LOGO_HORIZONTAL.svg" alt="Brand Logo" style="height: 60px;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="index.php" style="color:white; background-color:rgb(128, 98, 61); border-radius: 20px; padding-bottom: 1px; padding-top: 2px;">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="padding-bottom: 1px; padding-top: 2px;" href="aboutpage.php">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="padding-bottom: 1px; padding-top: 2px;" href="#">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="cart" href="#" style="margin-left: 15px; margin-right: 15px; padding-bottom: 1px; padding-top: 2px; margin-right: 10px;">
                <img src="Design Elements\icons\bag.svg" alt="Cart-Icon" height="30px">
              </a>
            </li>
            <li class="nav-item">
              <a class="account" href="userdashboard.php" style="margin-left: 15px; margin-right: 15px; padding-bottom: 1px; padding-top: 2px;">
                <img src="Design Elements\icons\person-circle.svg" alt="account-Icon" height="30px">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="logout.php" style="padding-bottom: 1px; padding-top: 2px;">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

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
</body>

</html>



<?php



?>