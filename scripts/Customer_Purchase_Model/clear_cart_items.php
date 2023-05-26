<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

// Get the customer ID from the request body
$requestPayload = file_get_contents('php://input');
$data = json_decode($requestPayload, true);
$customerID = $data['customerID'];

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Clear cart items for the specific customer ID
$sql = "DELETE FROM cart WHERE customer_id = '$customerID'";
$result = $conn->query($sql);

if ($result) {
    // Cart items cleared successfully
    $response = array("status" => "success", "message" => "Cart cleared successfully");
    echo json_encode($response);
} else {
    // Error occurred while clearing cart items
    $response = array("status" => "error", "message" => "Error clearing cart");
    echo json_encode($response);
}

// Close the database connection
$conn->close();
