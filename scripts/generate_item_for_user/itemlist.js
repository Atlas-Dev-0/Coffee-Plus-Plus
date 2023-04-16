function print_menulist() {
  fetch('/scripts/generate_item_for_user/get_products.php')
    .then(response => response.json())
    .then(products => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("menu", "container-fluid");
      productContainer.id = "menu-list";

      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const productCard = document.createElement("div");
        productCard.classList.add("product", "card");
        productCard.id = product.id;
        productCard.setAttribute("data-name", product.dataname);


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
        buyButton.href = "#"; //Link of the Buy Button
        
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.id = "purchase";
        productPrice.textContent = product.price;
        buyButton.appendChild(productPrice);

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

print_menulist();