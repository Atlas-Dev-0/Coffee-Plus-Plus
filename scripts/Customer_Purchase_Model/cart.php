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
    <div class="cart_page_container container border">
        <div class="cart-title-container container ">
            <h1 class="cart-title" style="margin-right: 20px">Order</h1>
            <button class="clear-cart-button" id="clear-cart-button">Clear</button>
        </div>

        <div class="cart_bottom_section container ">

            <div class="product-box container " id="product-container">
                <!-- Include here the added products in cart -->
            </div>
            <div class="buy_section ">

            </div>
        </div>
    </div>

    <!-- Import Cart from CPM -->
    <script src="/scripts/Customer_Purchase_Model/CustomerPurchaseModel.js"></script>

    <!-- Bootstrap JavaScript -->
    <script src="/Bootstrap/js/bootstrap.js"></script>
</body>

</html>