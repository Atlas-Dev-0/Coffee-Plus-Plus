<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to add the product to the cart
function addToCart($product)
{
    global $conn;

    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO cart (customer_id, product_id, name, price, quantity, image, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");

    // Bind the parameters
    $stmt->bind_param("iisdis", $product['customer_id'], $product['id'], $product['name'], $product['price'], $product['quantity'], $product['image']);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Product added to cart successfully.";
    } else {
        echo "Error adding product to cart: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Retrieve the product data from the request body
$productToAdd = json_decode(file_get_contents('php://input'), true);

// Call the addToCart function
addToCart($productToAdd);

// Close the database connection
$conn->close();
