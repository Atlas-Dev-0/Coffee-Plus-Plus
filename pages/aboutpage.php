<?php
session_start();
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
  // Redirect the user to the login page
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
  <link rel="stylesheet" href="/scripts/MainCSSPage/main_page_style.css">
</head>

<body>
  <div class="aboutpage">

    <!--Navbar Included Here-->
    <div id="navbar"></div>
    <script src="/scripts/navbar/nav.js"></script>

    <div class="face container d-flex justify-content-center">
      <div class="kenneth">
        <div class="aboutus-card border container">
          <img src="/Design Elements/about_us_image/kenneth.png" alt="">
        </div>
      </div>
      <div class="maricon">
        <div class="aboutus-card border container">
          <img src="/Design Elements/about_us_image/maricon.png" alt="">
        </div>

      </div>
      <div class="roseann">
        <div class="aboutus-card border container">
          <img src="/Design Elements/about_us_image/roseann.png" alt="">
        </div>

      </div>
      <div class="maryjoyce">
        <div class="aboutus-card border container">
          <img src="/Design Elements/about_us_image/joyce.png" alt="">
        </div>

      </div>
    </div>
  </div>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="/Bootstrap/js/bootstrap.js"></script>
</body>
</<html>