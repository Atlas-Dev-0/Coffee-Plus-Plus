function clearCart() {
  var xhr = new XMLHttpRequest();

  xhr.open(
    "POST",
    "/scripts/Customer_Purchase_Model/clear_cart_items.php",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Cart cleared successfully");
      console.log("Customer Id in Query: " + CustomerId);
      displayCart(); // Call the displayCart() function to update the cart display
    } else {
      console.error("Error clearing cart:", xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Error clearing cart: Request failed");
  };

  var requestData = JSON.stringify({ customerId: CustomerId });
  xhr.send(requestData);
}

function displayCart() {
  const cartContainer = document.getElementById("product-container");
  const totalItemsElement = document.querySelector(".total_items");
  const subtotalInput = document.querySelector(".subtotal"); // Select the subtotal input element

  cartContainer.innerHTML = "";
  let totalItems = 0;
  let totalPrice = 0; // Variable to keep track of the total price

  fetch("/scripts/Customer_Purchase_Model/fetch_cart_items.php")
    .then((response) => response.json())
    .then((cartItems) => {
      if (!cartItems || cartItems.length === 0) {
        cartContainer.innerHTML = `<p class="empty_notif">Your cart is empty.</p>`;
        subtotalInput.value = ""; // Set the subtotal input value to empty if the cart is empty
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
        if (isNaN(item.price)) {
          price.textContent = "Invalid price or quantity";
        } else {
          price.textContent = `Total Price: Php ` + item.price;
        }

        subDescription.appendChild(quantity);
        subDescription.appendChild(price);
        descriptionContainer.appendChild(name);
        descriptionContainer.appendChild(subDescription);
        imageContainer.appendChild(image);
        cartProduct.appendChild(imageContainer);
        cartProduct.appendChild(descriptionContainer);

        cartContainer.appendChild(cartProduct);

        totalItems += parseInt(item.quantity);
        totalPrice += totalOrderPrice; // Add the total price of each item to the totalPrice variable
      });

      totalItemsElement.textContent =
        "Total Items: " + totalItems.toString() + "x";
      subtotalInput.value = "Php " + totalPrice.toFixed(2); // Set the subtotal input value with "Php" prefix and 2 decimal places
    })
    .catch((error) => {
      console.error("Error fetching cart items:", error);
      cartContainer.innerHTML = `<p class="empty_notif">Error fetching cart items.</p>`;
    });
}

const UrlPageQueue = window.location.href;
if (UrlPageQueue.includes("cart")) {
  console.log("Customer ID present: " + CustomerId); // Update the variable name to 'CustomerId'
  displayCart();
}

// Event listener for the dropdown menu change event
document.addEventListener("change", function (event) {
  if (event.target && event.target.id === "addressDropdown") {
    // Clear the selected option in the dropdown menu
    event.target.selectedIndex = -1;
  }
});

// Update the address in the desired location
function updateAddress(event) {
  var selectedAddress;

  // Check if the address picker was used
  if (event.target && event.target.id === "addressPicker") {
    selectedAddress = event.target.options[event.target.selectedIndex].text;
  } else if (event.target && event.target.id === "addressDropdown") {
    // Check if the dropdown menu was used
    selectedAddress = event.target.value;
  }

  var locationElement = document.querySelector(".location");
  locationElement.innerHTML = selectedAddress;
}
