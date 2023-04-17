function openPopup(product) {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  // Fill the popup with product information
  const popupContent = document.querySelector(".popup-inner");
  popupContent.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p>${product.description}</p>
    <p>${product.price}</p>
    <button id="add-to-cart-popup-btn" class="add-to-cart-popup-btn">Add to Cart</button>
    <button id="close-popup-btn" class="close-btn">Close</button>
  `;

  const closeBtn = document.getElementById("close-popup-btn");
  closeBtn.addEventListener("click", closePopup);
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

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
