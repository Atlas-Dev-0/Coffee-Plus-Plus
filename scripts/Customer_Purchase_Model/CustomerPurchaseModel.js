/**
 * Customer Purchase Model
 * --Model to store customer purchases
 * Description: This model will be implemented to provide the customers the ability to add their products to the card list and purchase the products themselves.
 *
 */

//cart is an array of product collection picked by the customer
const cart = [];

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
  console.log("Added product to cart: " + JSON.stringify(cart));
}
