// Function to load orders when the page is loaded
window.addEventListener("load", function () {
  // XHR to fetch data from fetch_orders.php
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var orders = JSON.parse(xhr.responseText);
      populateOrderTable(orders);
    }
  };

  // Get the customer ID from the globalUserInformation variable
  var customerId = globalUserInformation.customer_id;

  // Append the customer ID as a query parameter in the URL
  var url =
    "/scripts/Customer_Orders/fetch_orders.php?customerId=" + customerId;

  xhr.open("GET", url, true);
  xhr.send();
});

// Function to populate the order table with fetched data
function populateOrderTable(orders) {
  var tableBody = document.getElementById("orderTableBody");
  var totalPrice = 0;

  orders.forEach(function (order, index) {
    var row = document.createElement("tr");
    var imageCell = document.createElement("td");
    var productCell = document.createElement("td");
    var quantityCell = document.createElement("td");
    var addressCell = document.createElement("td");
    var createdAtCell = document.createElement("td");
    var priceCell = document.createElement("td"); // Move the price cell creation here

    var imageElement = document.createElement("img");
    imageElement.src = "/" + order.image; // Add a "/" at the beginning
    imageElement.alt = order.name;
    imageElement.classList.add("order-image");

    imageCell.appendChild(imageElement);
    productCell.textContent = order.name;
    quantityCell.textContent = order.quantity;
    addressCell.textContent = order.address;
    createdAtCell.textContent = order.created_at;
    priceCell.textContent = "Php " + Number(order.price).toFixed(2); // Set the price cell content

    row.appendChild(imageCell);
    row.appendChild(productCell);
    row.appendChild(quantityCell);
    row.appendChild(addressCell);
    row.appendChild(createdAtCell);
    row.appendChild(priceCell); // Append the price cell as the last cell in the row
    tableBody.appendChild(row);

    totalPrice += Number(order.price);
  });

  document.getElementById("totalPrice").textContent =
    "Php" + totalPrice.toFixed(2);
}