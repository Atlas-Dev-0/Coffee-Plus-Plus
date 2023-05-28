<?php
// remove_item.php
// This script removes the specified item from the user's order table based on customer ID and creation time

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

// Retrieve the customer ID, item name, and creation time from the request parameters
$customerId = $_POST['customerId'];
$itemName = $_POST['itemName'];
$createdAt = $_POST['createdAt'];

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the SQL statement to delete the item from the order table based on customer ID and creation time
$stmt = $conn->prepare("DELETE FROM orders WHERE customer_id = ? AND name = ? AND created_at = ?");
$stmt->bind_param("iss", $customerId, $itemName, $createdAt);

// Execute the SQL statement
if ($stmt->execute()) {
    // Item successfully removed
    echo "Item removed from order table";
} else {
    // Error occurred while removing the item
    echo "Failed to remove item from order table";
}

// Close the statement and connection
$stmt->close();
$conn->close();
