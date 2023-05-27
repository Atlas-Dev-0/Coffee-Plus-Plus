function clearCart() {
  return new Promise((resolve, reject) => {
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
        resolve(); // Resolve the promise when the cart is cleared
      } else {
        reject("Error clearing cart: " + xhr.statusText);
      }
    };

    xhr.onerror = function () {
      reject("Error clearing cart: Request failed");
    };

    var requestData = JSON.stringify({ customerId: CustomerId });
    xhr.send(requestData);
  });
}

function displayCart() {
  const cartContainer = document.getElementById("product-container");
  const totalItemsElement = document.querySelector(".total_items");
  const subtotalInput = document.querySelector(".subtotal");
  const buyButton = document.getElementById("buy-cart");

  cartContainer.innerHTML = "";
  let totalItems = 0;
  let totalPrice = 0;

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "/scripts/Customer_Purchase_Model/fetch_cart_items.php",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      var cartItems = JSON.parse(xhr.responseText);

      if (!cartItems || cartItems.length === 0) {
        cartContainer.innerHTML = `<p class="empty_notif">Your cart is empty.</p>`;
        subtotalInput.value = "";
        buyButton.disabled = true; // Disable the "Buy" button
        buyButton.classList.add("btn-disabled"); // Add a CSS class to style the disabled button
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

        const price = document.createElement("p");
        price.classList.add("cart-product-price");
        if (isNaN(item.price)) {
          price.textContent = "Invalid price or quantity";
        } else {
          price.textContent = `Total Price: Php ${item.price}`;
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
        totalPrice += parseFloat(item.price);
      });

      totalItemsElement.textContent =
        "Total Items: " + totalItems.toString() + "x";
      subtotalInput.value = "Php " + totalPrice.toFixed(2);

      buyButton.disabled = false; // Enable the "Buy" button
      buyButton.classList.remove("btn-disabled"); // Remove the disabled button styling
    } else {
      console.error("Error fetching cart items:", xhr.statusText);
      cartContainer.innerHTML = `<p class="empty_notif">Error fetching cart items.</p>`;
    }
  };

  xhr.onerror = function () {
    console.error("Error fetching cart items: Request failed");
    cartContainer.innerHTML = `<p class="empty_notif">Error fetching cart items.</p>`;
  };

  xhr.send();
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

document.getElementById("buy-cart").addEventListener("click", add_to_orders);

// Function to add the order
function add_to_orders() {
  console.log("Add to Orders button clicked");

  const buyButton = document.getElementById("buy-cart");

  // Disable the "Buy" button to prevent multiple clicks
  buyButton.disabled = true;
  buyButton.classList.add("btn-disabled"); // Add a CSS class to style the disabled button

  const addressPicker = document.getElementById("addressPicker");
  const selectedIndex = addressPicker.selectedIndex;
  const selectedOption = addressPicker.options[selectedIndex];
  const address = selectedOption.textContent.trim();

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/scripts/Customer_Purchase_Model/add_to_orders.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    console.log("Add to Orders response received");
    console.log("xhr.status:", xhr.status);

    buyButton.disabled = true; // Disable the "Buy" button
    buyButton.classList.add("btn-disabled"); // Add a CSS class to style the disabled button

    if (xhr.status === 200) {
      console.log(xhr.responseText); // Handle the result as per your requirements

      clearCart()
        .then(() => {
          console.log("Cart cleared successfully");
          displayCart(); // Call the displayCart() function after the cart is cleared
          // Show the purchase modal using Bootstrap's modal API
          var purchaseModal = new bootstrap.Modal(
            document.getElementById("purchaseModal")
          );
          purchaseModal.show();
        })
        .catch((error) => {
          console.error("Error clearing cart:", error);
        });
    } else {
      console.error("Error adding to orders:", xhr.statusText); // Show an error message or handle the error condition accordingly
    }
  };

  xhr.onerror = function () {
    console.error("Error adding to orders: Request failed");

    // Re-enable the "Buy" button in case of an error
    buyButton.disabled = false;
    buyButton.classList.remove("btn-disabled"); // Remove the disabled button styling
  };

  var requestData = JSON.stringify({
    address: address,
    customerId: CustomerId,
  });
  xhr.send(requestData);
}
