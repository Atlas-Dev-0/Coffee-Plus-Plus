<!-- OrderPage.php -->
<!-- This is where the user will view their orders -->

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
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>COFFEE PLUS-PLUS</title>

    <link rel="stylesheet" href="/Bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="/scripts/MainCSSPage/main_page_style.css" />
    <link rel="stylesheet" href="/scripts/purchase-window/purchase_window.css" />
    <link rel="stylesheet" href="/scripts/Customer_Orders/order_table_style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,700&display=swap" rel="stylesheet">
</head>

<body>
    <div id="navbar"></div>

    <div class="order-table-container container">
        <h1>Order Summary</h1>
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Address</th>
                    <th>Order Date</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody id="orderTableBody">
                <!-- Order rows will be dynamically generated here -->
            </tbody>
            <tfoot>
                <tr id="totalRow">
                    <td colspan="5">Total:</td>
                    <td id="totalPrice">$0.00</td>
                </tr>
            </tfoot>
        </table>
    </div>

    <script>
        // Define a global variable and assign the userInformation JSON to it
        var globalUserInformation = <?php echo $userInformationJSON; ?>;
        var CustomerId = globalUserInformation.customer_id;
    </script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/Bootstrap/js/bootstrap.js"></script>
    <script src="/scripts/navbar/nav.js"></script>
    <script src="/scripts/Customer_Orders/DisplayOrders.js"></script>

</body>

</html>