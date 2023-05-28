// Prnt_MenuAndSearch_Function.js
// This js will print the items in the index.php and it has other functions such as search function

function Load_Prnt_MenuAndSearch_Function() {
  fetch("/scripts/generate_item_for_user/get_products.php")
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.createElement("div");
      productContainer.id = "ProdLst_Container";
      productContainer.classList.add("menu", "container-fluid");

      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const productCard = document.createElement("div");
        productCard.classList.add("product", "card");

        productCard.id = product.id;
        productCard.setAttribute("data-name", product.name);

        const image = document.createElement("div");
        image.classList.add("image");

        const productImage = document.createElement("img");
        productImage.classList.add("product-image");
        productImage.src = product.image;
        productImage.alt = product.name;
        image.appendChild(productImage);

        const title = document.createElement("div");
        title.classList.add("title");

        const productName = document.createElement("h2");
        productName.classList.add("product-name");
        productName.textContent = product.name;
        title.appendChild(productName);

        const nutrifacts = document.createElement("div");
        nutrifacts.classList.add("nutrifacts");

        const calories = document.createElement("div");
        calories.classList.add("calories");
        calories.textContent = product.calories;
        nutrifacts.appendChild(calories);

        const time = document.createElement("div");
        time.classList.add("time");
        time.textContent = product.time;
        nutrifacts.appendChild(time);

        const buyButton = document.createElement("a");
        buyButton.classList.add("buybutton");
        buyButton.id = "purchase-window"; // set id attribute
        buyButton.addEventListener("click", function () {
          openPopup(product);
        });
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price;
        buyButton.appendChild(productPrice);

        productCard.appendChild(image);
        productCard.appendChild(title);
        productCard.appendChild(nutrifacts);
        productCard.appendChild(buyButton);
        productContainer.appendChild(productCard);
        document.body.appendChild(productContainer);
      }

      //----------------------------------------------------------------------
      //Search for products Function
      const searchInput = document.getElementById("UsRqstX");
      const productList = document.getElementById("ProdLst_Container");

      if (productList) {
        console.log("%cPrntMenu is Loaded: ProdLst Found!", "color:green");
        const products = productList.getElementsByClassName("product");

        searchInput.addEventListener("input", () => {
          const searchValue = searchInput.value.toLowerCase();
          for (let i = 0; i < products.length; i++) {
            const productName = products[i]
              .getAttribute("data-name")
              .toLowerCase();
            if (productName.includes(searchValue)) {
              products[i].classList.remove("remove");
            } else {
              products[i].classList.add("remove");
            }
          }

          // Check if all products have the "remove" class after filtering
          const allProductsRemovedAfterFilter = Array.from(products).every(
            (product) => product.classList.contains("remove")
          );

          // Execute your code or action if all products have the "remove" class
          if (allProductsRemovedAfterFilter) {
            console.log("All products have been removed from the list");
            const ErrorThrown = document.getElementById("QueryFailure404");
            ErrorThrown.classList.add("showQueryErrorThrow");
          } else if (!allProductsRemovedAfterFilter) {
            console.log("Some products have been removed from the list");
            console.log("User search Query == " + searchValue);
            const ErrorThrown = document.getElementById("QueryFailure404");
            ErrorThrown.classList.remove("showQueryErrorThrow");
          }
        });
      } else {
        console.log("%cProduct not found :(", "color: red");
      }

      //----------------------------------------------------------------------

      // CHANGE PRICE TO BUY
      const productPrices = document.querySelectorAll(".product-price");
      for (let i = 0; i < productPrices.length; i++) {
        productPrices[i].addEventListener("mouseover", function () {
          this.textContent = "Buy";
        });
        productPrices[i].addEventListener("mouseout", function () {
          this.textContent = products[i].price;
        });
      }
    })
    .catch((error) => console.error("Error:", error));
}

addEventListener("DOMContentLoaded", () => {
  Load_Prnt_MenuAndSearch_Function();
});
