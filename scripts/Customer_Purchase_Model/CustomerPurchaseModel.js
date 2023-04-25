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

  console.log("Added product to cart: " + JSON.stringify(cart));
}

// Retrieve cart from localStorage when page loads
cart = getCartFromLocalStorage();

//Display Cart
console.log("Products on cart: " + JSON.stringify(cart));
