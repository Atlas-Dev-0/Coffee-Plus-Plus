const popupContainer = document.getElementById("popup-container");

function print_menulist() {
  fetch('/scripts/generate_item_for_user/get_products.php')
    .then(response => response.json())
    .then(products => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("menu", "container-fluid");
      productContainer.id = "menu-list";

      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        // code for creating product card ...

        const buyButton = document.createElement("a");
        buyButton.classList.add("buybutton");
        buyButton.href = "#";
        buyButton.addEventListener("click", () => {
          // create the pop-up window
          const popup = document.createElement("div");
          popup.classList.add("popup");

          const popupContent = document.createElement("div");
          popupContent.classList.add("popup-content");

          const closeButton = document.createElement("span");
          closeButton.classList.add("close-button");
          closeButton.innerHTML = "&times;";
          closeButton.addEventListener("click", () => {
            popup.remove();
          });

          const productName = document.createElement("h2");
          productName.classList.add("product-name");
          productName.textContent = product.name;

          const productImage = document.createElement("img");
          productImage.classList.add("product-image");
          productImage.src = product.image;
          productImage.alt = product.name;

          const productPrice = document.createElement("p");
          productPrice.classList.add("product-price");
          productPrice.textContent = product.price;

          const buyNowButton = document.createElement("button");
          buyNowButton.classList.add("buy-now-button");
          buyNowButton.textContent = "Buy Now";
          buyNowButton.addEventListener("click", () => {
            // handle buy now button click ...
          });

          popupContent.appendChild(closeButton);
          popupContent.appendChild(productName);
          popupContent.appendChild(productImage);
          popupContent.appendChild(productPrice);
          popupContent.appendChild(buyNowButton);
          popup.appendChild(popupContent);
          popupContainer.appendChild(popup);
        });

        productCard.appendChild(image);
        productCard.appendChild(title);
        productCard.appendChild(nutrifacts);
        productCard.appendChild(buyButton);
        productContainer.appendChild(productCard);
        document.body.appendChild(productContainer);
      }

      // CHANGE PRICE TO BUY
      const productPrices = document.querySelectorAll(".product-price");
      for (let i = 0; i < productPrices.length; i++) {
        productPrices[i].addEventListener("mouseover", function() {
          this.textContent = "Buy";
        });
        productPrices[i].addEventListener("mouseout", function() {
          this.textContent = products[i].price;
        });
      }
    })
    .catch(error => console.error('Error:', error));
}
