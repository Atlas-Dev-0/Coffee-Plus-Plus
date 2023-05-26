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

function clearCart() {
  // Make an AJAX request to clear the cart items for the customer ID
  fetch("/scripts/Customer_Purchase_Model/clear_cart_items.php", {
    method: "POST",
    body: JSON.stringify({ customerID: CustomerId }), // Replace <customerID> with the actual customer ID
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Cart cleared successfully");
      // Call the displayCart() function to update the cart display
      displayCart();
    })
    .catch((error) => {
      console.error("Error clearing cart:", error);
    });
}

function displayCart() {
  console.log("Customer Id: " + CustomerId);
  const cartContainer = document.getElementById("product-container");
  const totalItemsElement = document.querySelector(".total_items"); // Select the total_items element

  cartContainer.innerHTML = "";
  let totalItems = 0; // Variable to keep track of the total items

  // Make an AJAX request to retrieve the cart items from the PHP script
  fetch("/scripts/Customer_Purchase_Model/fetch_cart_items.php")
    .then((response) => response.json())
    .then((cartItems) => {
      if (!cartItems || cartItems.length === 0) {
        cartContainer.innerHTML = `<p class="empty_notif">Your cart is empty.</p>`;
        return;
      }

      cartItems.forEach((item) => {
        const cartProduct = document.createElement("div");
        cartProduct.classList.add("cart-product", "container");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("cart-image-container");

        const image = document.createElement("img");
        image.classList.add("cart-prod-img");
        image.src = `/${item.image}`;
        image.alt = item.name;

        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add(
          "cart-product-description",
          "container"
        );

        const name = document.createElement("h2");
        name.textContent = item.name;

        const subDescription = document.createElement("div");
        subDescription.classList.add("cart-sub-description", "container");

        const quantity = document.createElement("p");
        quantity.classList.add("cart-product-quantity");
        quantity.textContent = `Quantity: ${item.quantity}`;

        const totalOrderPrice =
          parseFloat(item.price) * parseFloat(item.quantity);

        const price = document.createElement("p");
        price.classList.add("cart-product-price");
        price.textContent = `Total Price: ${totalOrderPrice}`;

        if (isNaN(totalOrderPrice)) {
          price.textContent = "Invalid price or quantity";
        } else {
          price.textContent = `Total Price: Php ${totalOrderPrice}`;
        }

        subDescription.appendChild(quantity);
        subDescription.appendChild(price);
        descriptionContainer.appendChild(name);
        descriptionContainer.appendChild(subDescription);
        imageContainer.appendChild(image);
        cartProduct.appendChild(imageContainer);
        cartProduct.appendChild(descriptionContainer);

        cartContainer.appendChild(cartProduct);
        totalItems += parseInt(item.quantity); // Increment the total items by the quantity of each item
      });
      totalItemsElement.textContent = totalItems.toString(); // Set the total items in the HTML element
    })
    .catch((error) => {
      console.error("Error fetching cart items:", error);
      cartContainer.innerHTML = `<p class="empty_notif">Error fetching cart items.</p>`;
    });
}

const UrlPageQueue = window.location.href;
if (UrlPageQueue.includes("cart")) {
  displayCart();
}

function updateAddress() {
  var select = document.getElementById("addressPicker");
  var selectedAddress = select.options[select.selectedIndex].text;

  // Update the address in the desired location
  var locationElement = document.querySelector(".location");
  addressElement.innerHTML = selectedAddress;
}
