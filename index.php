<!-- index.php -->
<!-- This is the main page -->


<?php
// Start the session
session_start();

// Check if user is logged in, if not, redirect to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: /scripts/login_module/login.php");
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
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>COFFEE PLUS-PLUS</title>

  <link rel="stylesheet" href="/Bootstrap/css/bootstrap.css" />
  <link rel="stylesheet" href="/scripts/MainCSSPage/main_page_style.css" />
  <link rel="stylesheet" href="/scripts/purchase-window/purchase_window.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,700&display=swap" rel="stylesheet">
</head>

<body>
  <script>
    // Define a global variable and assign the userInformation JSON to it
    var globalUserInformation = <?php echo $userInformationJSON; ?>;

    // Output user information in the console
    console.log("Customer ID: " + globalUserInformation.customer_id);
  </script>


  <div id="navbar"></div>


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
        <div class=" input-group">
          <input id="UsRqstX" class="form-control" type="text" placeholder="Search" />
          <button type="button" class="search btn btn-primary" id="gosearch">
            <img src="/Design Elements/icons/search.svg" class="search_icon" height="20px" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="QueryFailure container" id="QueryFailure404">
    <h1 class="false_Product_Visibility">
      NO PRODUCT FOUND! :(
    </h1>
  </div>
  <div id="popup" class="popup">
    <div class="popup-inner pop-up_window_size" style="width: 900px !important;
  height: 500px !important; border-radius: 20px"></div>
  </div>

  <!--Bootstrap JS-->
  <script src=" /Bootstrap/js/bootstrap.js">
  </script>

  <!--
  Execute TWAS
  Included Navbar
  Product List
  Add_to_Cart_Popup_window
  Customer Purchase Model
  -->

  <script src="/scripts/TypeWriterAnimationScript/TWAS.js"></script>
  <script src="/scripts/navbar/nav.js"></script>
  <script src="/scripts/generate_item_for_user/Prnt_MenuAndSearch_Function.js"></script>
  <script src="/scripts/Customer_Purchase_Model/CustomerPurchaseModel.js"></script>
  <script src="/scripts/purchase-window/purchase_window_script.js"></script>

</body>

</html>