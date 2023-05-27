<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

// Create a new PDO instance
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Retrieve the POST data
    $requestData = json_decode(file_get_contents('php://input'), true);
    $address = $requestData['address'];
    $customerId = $requestData['customerId'];

    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO orders (customer_id, product_id, name, price, quantity, image, created_at, address)
        SELECT customer_id, product_id, name, price, quantity, image, created_at, :address
        FROM cart
        WHERE customer_id = :customerId");

    // Bind the parameters
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':customerId', $customerId);

    // Execute the statement
    $stmt->execute();

    // Check if any rows were affected
    $rowCount = $stmt->rowCount();
    if ($rowCount > 0) {
        echo $rowCount . " ordered item(s) added to orders table.";
    } else {
        echo "No items added to orders table.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Close the database connection
$conn = null;
