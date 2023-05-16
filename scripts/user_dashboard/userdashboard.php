<?php
// Start the session
session_start();

// Check if user is logged in, if not, redirect to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: /scripts/login_and_register_module/login.php");
  exit;
}

// Create a new MySQLi object and connect to the database
$mysqli = new mysqli("localhost", "root", "password", "coffeeplusplusdb");

// Check for any connection errors
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}

// Retrieve the address data from the table
$query = "SELECT username, name, address, dob, address_work, address_friend, address_school FROM customer_user_credentials_and_information LIMIT 1";
$result = $mysqli->query($query);


// Check if a row was returned
if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $username = $row['username'];
  $fullname = $row['name'];

  // Split the full name into first name and last name
  $nameParts = explode(", ", $fullname);
  $lastName = $nameParts[0];
  $firstName = $nameParts[1];
  // Reconstruct the full name with last name at the end
  $fullname = $firstName . ' ' . $lastName;

  $address = $row['address'];
  $dob = $row['dob'];
  $addressWork = $row['address_work'];
  $addressFriend = $row['address_friend'];
  $addressSchool = $row['address_school'];
} else {
  $address = "No address found";
  $addressWork = "No work address found";
  $addressFriend = "No friend address found";
  $addressSchool = "No school address found";
}

// Close the database connection
$mysqli->close();
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
  <link rel="stylesheet" href="/scripts/user_dashboard/user_dash.css">

</head>


<body>

  <!--Navbar Included Here-->
  <div id="navbar"></div>
  <script src="/scripts/navbar/nav.js"></script>
  <div class="dash_profile container">
    <div class="dash_panel container">
      <div class="details container-fluid ">
        <div class="fullname_and_cart">
          <div class="fullname">
            <h1 class=""><?php echo $fullname; ?></h1>
            <p>Full Name</p>
          </div>
          <div class="dash-cart ">
            <img src="/Design Elements/icons/bag.svg" alt="Cart-Icon" height="50px">
          </div>
        </div>
        <div class="username_birthday_section">
          <div class="username">
            <h1><?php echo $username; ?></h1>
            <p>Username</p>
          </div>
          <div class="birthdate">
            <h1><?php echo date('F j, Y', strtotime($dob)); ?></h1>
            <p>Birthdate</p>
          </div>
        </div>
        <div class="button_settings">

          <button>My Orders</button>
          <button>Delete Account</button>

        </div>

        <div class=" white_line_divider"></div>

        <div class="address_panel">
          <h1>
            Addresses:
          </h1>
          <div class="address_box_container container ">
            <div class="address_box ">
              <p class="name_of_address">HOME</p>
              <p class=""><?php echo $address; ?></p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address">WORKPLACE</p>
              <p class=""><?php echo $addressWork; ?></p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address">FRIEND</p>
              <p class=""><?php echo $addressFriend; ?></p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address">SCHOOL</p>
              <p class=""><?php echo $addressSchool; ?></p>
              <p class="">09925665753</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>