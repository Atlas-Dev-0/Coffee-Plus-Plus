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
    var deliveryTimeCell = document.createElement("td"); // Add a cell for delivery time
    var priceCell = document.createElement("td");

    var imageElement = document.createElement("img");
    imageElement.src = "/" + order.image;
    imageElement.alt = order.name;
    imageElement.classList.add("order-image");

    imageCell.appendChild(imageElement);
    productCell.textContent = order.name;
    quantityCell.textContent = order.quantity;
    addressCell.textContent = order.address;
    createdAtCell.textContent = order.created_at;

    var orderDate = new Date(order.created_at); // Assuming order.created_at is a valid date string or object
    var deliveryTime = new Date(orderDate.getTime() + 2 * 60000); // Adding 2 minutes (2 * 60 * 1000 milliseconds) to the order date

    var deliveryTimeString = `${deliveryTime.getHours()}:${deliveryTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}:00`;
    deliveryTimeCell.textContent = deliveryTimeString; // Display the delivery time (hours:minutes:00)

    priceCell.textContent = "Php " + Number(order.price).toFixed(2);

    row.appendChild(imageCell);
    row.appendChild(productCell);
    row.appendChild(quantityCell);
    row.appendChild(addressCell);
    row.appendChild(createdAtCell);
    row.appendChild(deliveryTimeCell); // Append the delivery time cell
    row.appendChild(priceCell);
    tableBody.appendChild(row);

    totalPrice += Number(order.price);

    // Check if the delivery time has already passed or due
    var currentTime = new Date();
    if (deliveryTime <= currentTime) {
      // Remove the item from the user's order table using customer_id and createdAt
      var customerId = globalUserInformation.customer_id;
      var createdAt = order.created_at;
      removeItemFromOrderTable(customerId, order.name, createdAt);
    }
  });

  document.getElementById("totalPrice").textContent =
    "Php " + totalPrice.toFixed(2);
}

// Function to remove an item from the user's order table
function removeItemFromOrderTable(customerId, itemName, createdAt) {
  // Make an AJAX request to remove the item from the order table
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Item removed from order table");
    }
  };

  var url = "/scripts/Customer_Orders/remove_item.php";
  var params =
    "customerId=" +
    customerId +
    "&itemName=" +
    encodeURIComponent(itemName) +
    "&createdAt=" +
    encodeURIComponent(createdAt); // Add createdAt parameter
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(params);
}
