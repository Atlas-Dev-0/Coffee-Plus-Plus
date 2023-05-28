<?php
// Start the session
session_start();

// Check if user is logged in, if not, redirect to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: /scripts/login_and_register_module/login.php");
  exit;
}


// Check if the userInformation session variable is set
if (isset($_SESSION['userInformation'])) {
  // Retrieve the userInformation from the session
  $userInformation = $_SESSION['userInformation'];
  // Convert userInformation to JSON
  $userInformationJSON = json_encode($userInformation);
} else {
  // Set userInformation to an empty array if not set
  $userInformationJSON = '[]';
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
            <h1 class="dynamic-font-size" id="fullname"><?php echo $userInformation['name'] ?></h1>
            <p>Full Name</p>
          </div>

          <script>
            function adjustFontSize() {
              const fullnameElement = document.getElementById('fullname');
              const containerWidth = fullnameElement.offsetWidth;
              const containerHeight = fullnameElement.offsetHeight;
              const textWidth = fullnameElement.scrollWidth;
              const textHeight = fullnameElement.scrollHeight;
              const widthRatio = containerWidth / textWidth;
              const heightRatio = containerHeight / textHeight;
              const ratio = Math.min(widthRatio, heightRatio);

              const maxFontSize = 50;
              const minFontSize = 34;
              const fontSize = Math.min(maxFontSize, maxFontSize * ratio, minFontSize);

              fullnameElement.style.fontSize = fontSize + 'px';
            }

            window.addEventListener('resize', adjustFontSize);
            adjustFontSize();
          </script>

          <div class="dash-cart ">
            <img src="/Design Elements/icons/bag.svg" alt="Cart-Icon" height="50px">
          </div>
        </div>
        <div class="username_birthday_section">
          <div class="username">
            <h1><?php echo $userInformation['username'] ?></h1>
            <p>Username</p>
          </div>
          <div class="birthdate">
            <h1><?php echo date('M d, Y', strtotime($userInformation['dob'])); ?></h1>

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
              <p class=""><?php echo $userInformation['address'] ?></p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address">WORKPLACE</p>
              <p class=""><?php echo $userInformation['address_work'] ?></p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address">FRIEND</p>
              <p class=""><?php echo $userInformation['address_friend'] ?></p>
              <p class="">09925665753</p>
            </div>
            <div class="address_box ">
              <p class="name_of_address">SCHOOL</p>
              <p class=""><?php echo $userInformation['address_school'] ?></p>
              <p class="">09925665753</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>