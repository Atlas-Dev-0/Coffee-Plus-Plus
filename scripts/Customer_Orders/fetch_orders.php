<?php
// fetch_orders.php
// This will connect to the SQL database to get the items from the orders table

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the customer ID from the query parameters
$customerId = $_GET['customerId'];

// Fetch the required fields from the orders table for the specific customer
$sql = "SELECT name, price, image, quantity, created_at, address FROM orders WHERE customer_id = " . $customerId;
$result = $conn->query($sql);

$orders = array();

if ($result->num_rows > 0) {
    // Fetch each row and add it to the orders array
    while ($row = $result->fetch_assoc()) {
        $order = array(
            "name" => $row["name"],
            "price" => $row["price"],
            "image" => $row["image"],
            "quantity" => $row["quantity"],
            "created_at" => $row["created_at"],
            "address" => $row["address"]
        );

        $orders[] = $order;
    }
}

// Close the connection
$conn->close();

// Encode the orders as JSON and send the response
header("Content-type: application/json");
echo json_encode($orders);
