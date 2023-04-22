/**
 * We have to add the products in a json file and only add the product's id into the html
 * This will give us more flexibility and security inside the code itself and the functions
 *
 */

//cart is an array/collection of products that the user added or picked from the product list
const cart = [];

//The cart will be stored in the array "to_Purchase"
const to_Purchase = [];

//This is the user information
const UserName = document.getElementById("UserNAME");
const UserID = document.getElementById("userID");

//Random Code Generator
function generateCode(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//Adds prodcut to the cart
function addToCart(product) {
  const Product_Name = document.querySelector(
    "div." + product + " h2.name_of_product"
  );
  const Product_price = document.querySelector(
    "div." + product + " p.Product_price"
  );
  const product_quantity = parseInt(
    document.querySelector("div." + product + " input").value
  );

  //Information Collecting Process of the product
  const Order = {
    Customer: UserName.textContent,
    CustomerID: UserID.textContent,
    name: Product_Name.textContent,
    price: Product_price.textContent,
    quantity: product_quantity,
    orderID: generateCode(10),
  };

  cart.push(Order);
  console.log("Cart:", cart);
  updateCart();
}

//Function to update the cart with the new order

function updateCart() {
  const cartDiv = document.querySelector(".cart");
  if (Array.isArray(cart) && cart.length === 0) {
    cartDiv.innerHTML = `
    
    <h2>Cart</h2>
        <ul>
        
        </ul>
    
    `;
    console.log("Empty Cart:", cart);
  } else {
    cartDiv.innerHTML = `
    <h2>Cart</h2>
    <ul>
    ${cart
      .map(
        (item) =>
          `<li>
            ${item.name} - Php ${item.price} x ${item.quantity} || Order_ID: ${item.orderID}
            </li>`
      )
      .join("")}
            </ul>
            `;
  }
}

function update_Customer_Purchases() {
  if (cart.length === 0) {
    console.log("Cart is empty. Cannot update purchases.");
    alert("Cart is empty. Cannot update purchases.");
    return;
  }

  const Products_On_Cart = [
    ...cart.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        orderID: item.orderID,
      };
    }),
  ];

  const purchased = {
    Customer: UserName.textContent,
    CustomerID: UserID.textContent,
    Purchased_Order_ID: generateCode(12),
    Products: Products_On_Cart,
    purchasedOn: new Date().toISOString(), // add purchase timestamp
  };
  to_Purchase.push(purchased);
  console.log("to_Purchase:", to_Purchase);
  clearCart(); // clear the cart after purchases are complete

  Display_Orders();
}

function Display_Orders() {
  //Display the orders as list in the html page
  if (to_Purchase.Products === 0) {
    console.alert("NO PRODUCT PICKED");
  } else {
    document.querySelector(".Orders").innerHTML = `
    <h2>Your Orders</h2>
    <ul>
    ${to_Purchase
      .map(
        (item) =>
          `<li>
          <h2>${item.Customer}</h2>
          <p>${item.CustomerID}</p> 
        <h3>
        Purchase ID: ${item.Purchased_Order_ID}
        </h3>
        <h3> Time of purchase: ${item.purchasedOn}</h3>
        <ul>
             ${item.Products.map(
               (product) => `
        <li>
          ${product.name} - Php ${product.price} x ${product.quantity} || Order_ID: ${product.orderID}
        </li>
      `
             ).join("")}
        </ul>
            </li>`
      )
      .join("")}
            </ul>
            `;
  }
}

//Clears the CartItems
function clearCart() {
  cart.splice(0);
  updateCart();
}
