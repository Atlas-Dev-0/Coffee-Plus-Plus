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
// Function to add the product to the cart
function addToCart($product)
{
    global $conn;

    echo "Product ID: " . $product['product_id'] . PHP_EOL;
    echo "Name: " . $product['name'] . PHP_EOL;
    echo "Price: " . $product['price'] . PHP_EOL;
    echo "Quantity: " . $product['quantity'] . PHP_EOL;
    echo "Image: " . $product['image'] . PHP_EOL;

    // Check if the product ID is empty or null
    if (empty($product['product_id'])) {
        echo "Invalid product ID.";
        echo $product['product_id'];
        return;
    }

    try {
        // Prepare the SQL statement
        $stmt = $conn->prepare("INSERT INTO cart (customer_id, product_id, name, price, quantity, image, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");

        // Bind the parameters
        $stmt->bind_param("iisdis", $product['customer_id'], $product['product_id'], $product['name'], $product['price'], $product['quantity'], $product['image']);

        // Execute the statement
        $stmt->execute();

        // Close the statement
        $stmt->close();
    } catch (mysqli_sql_exception $e) {
        echo "Error adding product to cart: " . $e->getMessage();
    }
}


// Retrieve the product data from the request body
$productToAdd = json_decode(file_get_contents('php://input'), true);

// Call the addToCart function
addToCart($productToAdd);

// Close the database connection
$conn->close();
