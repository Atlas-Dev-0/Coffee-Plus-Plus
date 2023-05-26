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
    // Encode the userInformation as JSON
    $userInformationJSON = json_encode($userInformation);
} else {
    // Set userInformation to an empty array if not set
    $userInformation = [];
    $userInformationJSON = json_encode($userInformation);
}

// Set the global session variable for userInformation
$_SESSION['globalUserInformation'] = $userInformation;

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COFFEE PLUS-PLUS</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/Bootstrap/css/bootstrap.css">
    <!---CSS Stylesheet-->
    <link rel="stylesheet" href="/scripts/MainCSSPage/main_page_style.css">
    <link rel="stylesheet" href="/scripts/Customer_Purchase_Model/cart-style.css">
</head>

<body>

    <!--Navbar Included Here-->
    <div id="navbar"></div>
    <script src="/scripts/navbar/nav.js"></script>

    <!-- This container will contain the list of products inside the cart -->
    <div class="cart_page_container container">
        <div class="cart-title-container container ">
            <h1 class="cart-title" style="margin-right: 20px">Order</h1>
        </div>

        <div class="cart_bottom_section container ">

            <div class="product-box container " id="product-container">
                <!-- Include here the added products in cart -->
            </div>

            <div class="buy_section ">
                <div class="title">
                    <h2>Order Summary</h2>
                </div>
                <div class="location">
                    <p>Location:</p>
                    <select id="addressPicker" onchange="updateAddress()">
                        <option value="address1">
                            Home: <?php echo $userInformation['address'] ?>
                        </option>
                        <option value="address2">Work: <?php echo $userInformation['address_work'] ?></option>
                        <option value="address3">Friend: <?php echo $userInformation['address_friend'] ?></option>
                        <option value="address4">School: <?php echo $userInformation['address_school'] ?></option>
                    </select>
                </div>

                <div class="total_items_container">
                    <p>Total Items: </p>
                    <p class="total_items"></p>
                </div>


                <div class="subtotaldisplay">
                    <p class="subtotal_title">SubTotal: </p>
                    <input type="number" class="subtotal" readonly>
                </div>
                <div class="cart_buttons container">
                    <button id="buy-cart" onclick="">Buy</button>
                    <button id="clear-cart-button" onclick="clearCart()">Clear Cart</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Define a global variable and assign the userInformation JSON to it
        var globalUserInformation = <?php echo $userInformationJSON; ?>;
        var CustomerId = globalUserInformation.customer_id;
    </script>

    <!-- Import Cart from CPM -->
    <script src="/scripts/Customer_Purchase_Model/CustomerPurchaseModel.js"></script>

    <!-- Bootstrap JavaScript -->
    <script src="/Bootstrap/js/bootstrap.js"></script>
</body>

</html>