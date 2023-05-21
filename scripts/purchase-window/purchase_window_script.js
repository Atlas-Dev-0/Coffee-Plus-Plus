/**
 * Purchase Window Popup Menu
 * --Popup Menu for users
 * Description: This is a popup menu that displays the picked item
 *
 */

// Opens the dialog popup window
function openPopup(product) {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";

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
    <p class="price" >Price: ${product.price}</p>
    <label class="quantity_text" for="product_quantity">Quantity:</label>
    <input type="number" id="product_quantity" name="product_quantity" min="1" max="10" value="1" style="width: 40px; text-align: center;"/>
    <button id="add-to-cart-popup-btn" class="add-to-cart-popup-btn">Add to Cart</button>
  </div>
  </div>
  <button id="close-popup-btn" class="close-btn" style="border-radius: 20px !important; width: 44px; background-color: red !important; color: white;">X</button>
`;

  const closeBtn = document.getElementById("close-popup-btn");
  closeBtn.addEventListener("click", closePopup);

  const addToCartBtn = document.getElementById("add-to-cart-popup-btn");
  addToCartBtn.addEventListener("click", () => {
    const quantityInput = document.getElementById("product_quantity");
    const quantity = parseInt(quantityInput.value);
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    };
    addToCart(productToAdd);
    closePopup();
  });
}

//This function closes the popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

//This function is called when the popup is clicked, it first tries to wait for the page to load (DOMContentLoaded) to get the needed content in the page.
document.addEventListener("DOMContentLoaded", function () {
  const purchaseButtons = document.querySelectorAll(".buybutton");
  for (let i = 0; i < purchaseButtons.length; i++) {
    const purchaseButton = purchaseButtons[i];
    purchaseButton.addEventListener("click", function () {
      const productId = this.parentNode.id;
      const productName = this.parentNode.getAttribute("data-name");
      const productImage =
        this.querySelector(".product-image").getAttribute("src");
      const productDescription =
        this.parentNode.querySelector(".description").textContent;
      const productPrice =
        this.parentNode.querySelector(".product-price").textContent;
      const product = {
        id: productId,
        name: productName,
        image: productImage,
        description: productDescription,
        price: productPrice,
      };
      openPopup(product);
    });
  }
});
