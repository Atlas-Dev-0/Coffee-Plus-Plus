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
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>COFFEE PLUS-PLUS</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="Bootstrap/css/bootstrap.css">
  <!---CSS Stylesheet-->
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="user_dash.css">

</head>


<body>
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
              <a class="nav-link" href="index.php" style="padding-bottom: 1px; padding-top: 2px;">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="padding-bottom: 1px; padding-top: 2px;" href="aboutpage.php">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="padding-bottom: 1px; padding-top: 2px;" href="#">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="cart" href="#" style="margin-left: 15px; margin-right: 15px; padding-bottom: 1px; padding-top: 2px; margin-right: 10px;">
                <img src="Design Elements\icons\cart_empty.svg" alt="Cart-Icon" height="30px">
              </a>
            </li>
            <li class="nav-item">
              <a class="account" href="userdashboard.php" style="margin-left: 15px; margin-right: 15px; padding-bottom: 1px; padding-top: 2px;">
                <img src="Design Elements\icons\person-circle-selected.svg" alt="account-Icon" height="30px">
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

  <div class="dash_profile container">
    <div class="dash_panel container">

      <div class="user_card">
        <div class="profilepicture">
        </div>
        <p class="bio">Bio:</p>
        <h1>
          Kenneth Gonzales
        </h1>
        <div class="bio_desc">
          <p class="bio_data">
            "I am Kenneth, the founder and head barista of this charming little coffee shop. “
          </p>
        </div>
        <div class="setting_buttons">
          <label>
            <input type="radio" name="setting" value="account">
            <span>Account</span>
          </label>
          <label>
            <input type="radio" name="setting" value="settings">
            <span>Settings</span>
          </label>
          <label>
            <input type="radio" name="setting" value="orders">
            <span>Orders</span>
          </label>
          <label>
            <input type="radio" name="setting" value="payment">
            <span>Payment</span>
          </label>
        </div>

      </div>
      <div class="details container-fluid ">
        <div class="fullname_and_cart">
          <div class="fullname">
            <h1 class="">Kenneth Gonzales</h1>
            <p>Full Name</p>
          </div>
          <div class="cart ">
            <img src="Design Elements\icons\cart_empty.svg" alt="Cart-Icon" height="50px">
          </div>
        </div>
        <div class="username_birthday_section">
          <div class="username">
            <h1>gonzales777</h1>
            <p>Username</p>
          </div>
          <div class="birthdate">
            <h1>Jan. 7, 2003</h1>
            <p>Birthdate</p>
          </div>
        </div>
        <div class="edit_button ">
          <button class="edit">EDIT</button>
        </div>

        <div class="white_line_divider"></div>

        <div class="address_panel">
          <h1>
            Addresses:
          </h1>
          <div class="address_box_container container ">

            <div class="address_box ">
              <p class="name_of_address ">HOME</p>
              <p class="">Regidor Street, Market site, Daraga, Albay</p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address ">SCHOOL</p>
              <p class="">Feliziedad Subd, Sugcad, Polangui, Albay</p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address ">WORKPLACE</p>
              <p class="">Em's, Albay, Legazpi</p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address ">FRIEND</p>
              <p class="">Balaguer, Daraga, Albay</p>
              <p class="">09925665753</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>

</html>