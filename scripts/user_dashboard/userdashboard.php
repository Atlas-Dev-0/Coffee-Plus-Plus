<?php
// Start the session
session_start();

// Check if user is logged in, if not, redirect to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: /scripts/login_and_register_module/login.php");
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
  <link rel="stylesheet" href="/Bootstrap/css/bootstrap.css">
  <!---CSS Stylesheet-->
  <link rel="stylesheet" href="/css and js/main_page_style.css">
  <link rel="stylesheet" href="/scripts/user_dashboard/user_dash.css">

</head>


<body>

  <!--Navbar Included Here-->
  <div id="navbar"></div>
  <script src="/scripts/navbar/nav.js"></script>

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
            <img src="/Design Elements/icons/bag.svg" alt="Cart-Icon" height="50px">
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