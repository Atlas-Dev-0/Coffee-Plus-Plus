<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

// Retrieve the cart items from the request body
$cartItems = json_decode(file_get_contents('php://input'), true)['cartItems'];

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare a SQL statement to insert the cart items into the orders data table
$stmt = $conn->prepare("INSERT INTO orders (customer_id, product_id, name, price, quantity, image, address, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

// Check if the statement preparation was successful
if (!$stmt) {
    die("Statement preparation failed: " . $conn->error);
}

// Bind parameters and execute the statement for each cart item
foreach ($cartItems as $item) {
    $stmt->bind_param("iisdissd", $item["customer_id"], $item["product_id"], $item["name"], $item["price"], $item["quantity"], $item["image"], $item["address"], $item["created_at"]);
    $stmt->execute();
}

// Check if the execution was successful
if ($stmt->affected_rows > 0) {
    // Close the statement and the database connection
    $stmt->close();
    $conn->close();

    // Send a response indicating successful transfer
    header("Content-Type: application/json");
    echo json_encode(["success" => true]);
} else {
    // Close the statement and the database connection
    $stmt->close();
    $conn->close();

    // Send a response indicating transfer failure
    header("Content-Type: application/json");
    echo json_encode(["success" => false]);
}
