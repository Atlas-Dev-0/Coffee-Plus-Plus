/**
 * Purchase Window Popup Menu
 * --Popup Menu for users
 * Description: This is a popup menu that displays the picked item
 *
 */

// JavaScript code in purchase-window-popup.js

// Opens the dialog popup window

function openPopup(product) {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  console.log("Product opened: " + JSON.stringify(product));

  // Fill the popup with product information
  const popupContent = document.querySelector(".popup-inner");
  popupContent.innerHTML = `
    <div class="product_image_container container">
      <img class="product_image_display" src="${product.image}" alt="${product.name}">
    </div>
    <div class="product_full_description">
      <h2>${product.name}</h2>
      <div class="product_minimal_desc" style="display: flex;"> 
        <p style="margin-right: 10px;">Calories: ${product.calories}</p> 
        <p style="margin-right: 10px;">Wait for: ${product.time}</p>
      </div>
      <div class="lower_desc_section">
        <p class="price">Price: ${product.price}</p>
        <label class="quantity_text" for="product_quantity">Quantity:</label>
        <input type="number" id="product_quantity" name="product_quantity" min="1" max="10" value="1" style="width: 40px; text-align: center;"/>
        <button id="add-to-cart-popup-btn" class="add-to-cart-popup-btn">Add to Cart</button>
      </div>
    </div>
    <button id="close-popup-btn" class="close-btn" style="border-radius: 20px !important; width: 44px; background-color: red !important; color: white;">X</button>
  `;

  const closePopupBtn = document.getElementById("close-popup-btn");
  closePopupBtn.addEventListener("click", closePopup);

  const quantityInput = document.getElementById("product_quantity");
  quantityInput.addEventListener("input", updatePrice);

  function updatePrice() {
    const quantity = parseInt(quantityInput.value);

    if (Number.isNaN(quantity) || quantity < 1 || quantity > 10) {
      // Display an error message to the user
      console.error("Invalid quantity");
      return;
    }

    const totalPrice = (
      parseFloat(product.price.replace(/[^\d.]/g, "")) * quantity
    ).toFixed(2);

    const priceElement = document.querySelector(".price");
    priceElement.textContent = `Price: Php ${totalPrice}`;
  }

  const addToCartBtn = document.getElementById("add-to-cart-popup-btn");
  addToCartBtn.addEventListener("click", () => {
    const quantityInput = document.getElementById("product_quantity");
    const quantity = parseInt(quantityInput.value);

    if (Number.isNaN(quantity) || quantity < 1 || quantity > 10) {
      // Display an error message to the user
      console.error("Invalid quantity");
      return;
    }

    const totalPrice = (
      parseFloat(product.price.replace(/[^\d.]/g, "")) * quantity
    ).toFixed(2);

    const productToAdd = {
      customer_id: globalUserInformation.customer_id,
      id: product.id,
      name: product.name,
      price: totalPrice,
      quantity: quantity,
      image: product.image,
    };

    addToCart(productToAdd);
    closePopup();
  });
}

// This function closes the popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Function to add the product to the cart
function addToCart(product) {
  // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Prepare the request URL
  const url = "/scripts/purchase-window/addToCart.php";

  // Prepare the request data
  const data = JSON.stringify(product);

  // Set up the request
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Handle the request response
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      // Optionally, perform additional actions after adding to cart
    } else {
      console.error("Error adding product to cart.");
    }
  };

  // Send the request
  xhr.send(data);
}

document.addEventListener("DOMContentLoaded", function () {
  // Event listener to handle clicks within the purchase container
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("buybutton")) {
      const productElement = target.closest(".product");
      const productId = productElement.id;
      const productName = productElement.getAttribute("data-name");
      const productImage = productElement
        .querySelector(".product-image")
        .getAttribute("src");
      const productDescription =
        productElement.querySelector(".description").textContent;
      const productPrice =
        productElement.querySelector(".product-price").textContent;
      const product = {
        id: productId,
        name: productName,
        image: productImage,
        description: productDescription,
        price: productPrice,
      };
      openPopup(product);
    }
  });
});
