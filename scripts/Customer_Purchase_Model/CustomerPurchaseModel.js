/**
 * Customer Purchase Model
 * --Model to store customer purchases
 * Description: This model will be implemented to provide the customers the ability to add their products to the cart list and purchase the products themselves.
 */

// Create a connection to the database
const connection = require("mysql").createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "coffeeplusplusdb",
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

function generateOrderID() {
  // Generate date string in format YYMMDD
  const date = new Date();
  const dateString = `${date.getFullYear().toString().slice(-2)}${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;

  // Generate random 4-letter string
  const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();

  // Get current number of orders placed on this date and increment
  let orderNumber = localStorage.getItem(dateString);
  if (!orderNumber) {
    orderNumber = 1;
  } else {
    orderNumber = parseInt(orderNumber) + 1;
  }
  localStorage.setItem(dateString, orderNumber);

  // Combine parts to create order ID
  const orderID = `${dateString}-${randomString}-${orderNumber
    .toString()
    .padStart(3, "0")}`;

  return orderID;
}

function addToCart(product, customer_id) {
  const product_quantity = document.getElementById("product_quantity");
  const quantity = product_quantity.value;

  // Add product to cart
  const addedProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
    image: product.image,
  };

  // Insert product into the database
  const sql =
    "INSERT INTO cart (customer_id, product_id, quantity, price) VALUES (?, ?, ?, ?)";
  const values = [
    customer_id,
    addedProduct.id,
    addedProduct.quantity,
    addedProduct.price,
  ];

  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log("Product added to the cart");
  });

  // Log cart on console
  console.log("Added product to cart: " + JSON.stringify(addedProduct));
}

function displayCart() {
  // Get the cart container
  const cartContainer = document.getElementById("product-container");

  // Clear the container to avoid duplicates
  cartContainer.innerHTML = "";

  // Fetch the cart items from the database
  const sql = "SELECT * FROM cart";
  connection.query(sql, (err, results) => {
    if (err) throw err;

    // If the cart is empty, display a message
    if (results.length === 0) {
      cartContainer.innerHTML = `<p class="empty_notif">Your cart is empty.</p>`;
      return;
    }

    // Loop through the cart items
    results.forEach((item) => {
      // Create a new container for each item
      const cartProduct = document.createElement("div");
      cartProduct.classList.add("cart-product", "container");

      // Create a container for the product image
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("cart-image-container");

      // Create an image element for the product
      const image = document.createElement("img");
      image.classList.add("cart-prod-img");
      image.src = `/${item.image}`;
      image.alt = item.name;

      // Create a container for the product description
      const descriptionContainer = document.createElement("div");
      descriptionContainer.classList.add(
        "cart-product-description",
        "container"
      );

      // Create a heading for the product name
      const name = document.createElement("h2");
      name.textContent = item.name;

      // Create a container for the quantity and price
      const subDescription = document.createElement("div");
      subDescription.classList.add("cart-sub-description", "container");

      // Create a span for the quantity
      const quantity = document.createElement("p");
      quantity.classList.add("cart-product-quantity");
      quantity.textContent = `Quantity: ${item.quantity}`;

      // Extract the numeric value from the price string
      const priceValue = parseFloat(item.price.replace(/[^\d.-]/g, ""));

      // Calculate the total price by multiplying the quantity with the numeric price value
      const totalOrderPrice = parseFloat(item.quantity) * priceValue;

      // Create a span for the price
      const price = document.createElement("p");
      price.classList.add("cart-product-price");

      // Handle invalid price or quantity
      if (isNaN(totalOrderPrice)) {
        price.textContent = "Invalid price or quantity";
      } else {
        price.textContent = `Total Price: ${totalOrderPrice}`;
      }

      // Append the elements to their respective containers
      subDescription.appendChild(quantity);
      subDescription.appendChild(price);
      descriptionContainer.appendChild(name);
      descriptionContainer.appendChild(subDescription);
      imageContainer.appendChild(image);
      cartProduct.appendChild(imageContainer);
      cartProduct.appendChild(descriptionContainer);

      // Append the item container to the cart container
      cartContainer.appendChild(cartProduct);
    });
  });
}

const UrlPageQueue = window.location.href;
if (UrlPageQueue.includes("cart")) {
  // Fetch customer ID from the other JavaScript file
  const customer_id = globalUserInformation.customer_id;

  // Display the updated cart
  displayCart();
} else {
  // ...your code for other pages
}
