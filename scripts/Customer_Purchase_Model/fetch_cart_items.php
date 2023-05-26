<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

// Start the session
session_start();

// Check if the userInformation session variable is set
if (isset($_SESSION['userInformation'])) {
    // Retrieve the userInformation from the session
    $userInformation = $_SESSION['userInformation'];
    // Get the customer ID from the userInformation
    $customerID = $userInformation['customer_id'];

    // Create a connection to the database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Fetch cart items for the specific customer ID from the database
    $sql = "SELECT * FROM cart WHERE customer_id = $customerID";
    $result = $conn->query($sql);

    $cartItems = array();

    if ($result->num_rows > 0) {
        // Iterate over the rows and add each item to the cartItems array
        while ($row = $result->fetch_assoc()) {
            $cartItems[] = array(
                "id" => $row["id"],
                "customer_id" => $row["customer_id"],
                "product_id" => $row["product_id"],
                "name" => $row["name"],
                "price" => $row["price"],
                "quantity" => $row["quantity"],
                "image" => $row["image"],
                "created_at" => $row["created_at"]
            );
        }
    }

    // Close the database connection
    $conn->close();

    // Send the cart items as a JSON response
    header("Content-Type: application/json");
    echo json_encode($cartItems);
} else {
    // Set userInformation to an empty array if not set
    $userInformation = [];
    $userInformationJSON = json_encode($userInformation);

    // Send an empty response
    header("Content-Type: application/json");
    echo json_encode([]);
}
