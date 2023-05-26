cartItems.forEach((item) => {
  // Create a new container for each item
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart-product", "container");

  // Create a container for the product image
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("cart-image-container");

  // Create an image element for the product
  const image = document.createElement("img");
  image.classList.add("cart-prod-img");
  image.src = `/${item.image}`;
  image.alt = item.name;

  // Create a container for the product description
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("cart-product-description", "container");

  // Create a heading for the product name
  const name = document.createElement("h2");
  name.textContent = item.name;

  // Create a container for the quantity and price
  const subDescription = document.createElement("div");
  subDescription.classList.add("cart-sub-description", "container");

  // Create a span for the quantity
  const quantity = document.createElement("p");
  quantity.classList.add("cart-product-quantity");
  quantity.textContent = `Quantity: ${item.quantity}`;

  // Extract the numeric value from the price string
  const priceValue = parseFloat(item.price.replace(/[^\d.-]/g, ""));

  // Calculate the total price by multiplying the quantity with the numeric price value
  const totalOrderPrice = parseFloat(item.quantity) * priceValue;

  // Create a span for the price
  const price = document.createElement("p");
  price.classList.add("cart-product-price");
  price.textContent = `Total Price: ${totalOrderPrice}`;

  //Error Catch
  if (isNaN(totalOrderPrice)) {
    price.textContent = "Invalid price or quantity";
  } else {
    price.textContent = `Total Price: ${totalOrderPrice}`;
  }

  // Append the elements to their respective containers
  subDescription.appendChild(quantity);
  subDescription.appendChild(price);
  descriptionContainer.appendChild(name);
  descriptionContainer.appendChild(subDescription);
  imageContainer.appendChild(image);
  cartProduct.appendChild(imageContainer);
  cartProduct.appendChild(descriptionContainer);

  // Append the item container to the cart container
  cartContainer.appendChild(cartProduct);
});
