/**
 * Customer Purchase Model
 * --Model to store customer purchases
 * Description: This model will be implemented to provide the customers the ability to add their products to the card list and purchase the products themselves.
 *
 */

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

// Retrieve cart from localStorage
function getCartFromLocalStorage() {
  const cartString = localStorage.getItem("cart");
  if (cartString) {
    return JSON.parse(cartString); //returns the parsed JSON string as an array
  } else {
    return []; //returns an empty array
  }
}

//cart is an array of product collection picked by the customer
let cart = getCartFromLocalStorage();

// Save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
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
  cart.push(addedProduct);

  // Save cart to localStorage
  saveCartToLocalStorage();

  //Log cart on console
  console.log("Added product to cart: " + JSON.stringify(cart));
}

// Retrieve cart from localStorage when page loads
cart = getCartFromLocalStorage();

//Display Cart
console.log("Products on cart: " + JSON.stringify(cart));

function clearCart() {
  // Empty the cart array
  cart = [];

  // Save the empty cart to localStorage
  saveCartToLocalStorage();

  // Log cart on console to verify it's empty
  console.log("Cart cleared: " + JSON.stringify(cart));
}

// Get the clear-cart-button element
const clearCartButton = document.getElementById("clear-cart-button");

//Event Listener
clearCartButton.addEventListener("click", function () {
  displayCart();
  clearCartButton();
});

function displayCart() {
  // Get the cart container
  const cartContainer = document.getElementById("product-container");

  // Clear the container to avoid duplicates
  cartContainer.innerHTML = "";

  // Get the cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  // If the cart is empty, display a message
  if (!cartItems || cartItems.length === 0) {
    cartContainer.innerHTML = `<p class="empty_notif">Your cart is empty.</p>`;
    return;
  }

  // Loop through the cart items
  cartItems.forEach((item) => {
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
    descriptionContainer.classList.add("cart-product-description", "container");

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

    // Create a span for the price
    const price = document.createElement("p");
    price.classList.add("cart-product-price");
    price.textContent = `Price: ${item.price}`;

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
}
const UrlPageQueue = window.location.href;
if (UrlPageQueue.includes("cart")) {
  // Display the updated cart
  displayCart();
} else {
}
