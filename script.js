var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function searchFunction() {
  let input = document.getElementById('searchinput').value;
  let items = document.getElementsByClassName('.product');

  for (let i = 0; i < items.length; i++) {
    if (!items[i].innerHTML.toLowerCase().includes(input.toLowerCase())) {
      items[i].style.display = "none";
    } else {
      items[i].style.display = "block";
    }
  }
}



function print_menulist() {
  fetch('data/products.json')
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
        buyButton.href = "productinfo.html";

        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price;
        buyButton.appendChild(productPrice);

        productCard.appendChild(image);
        productCard.appendChild(title);
        productCard.appendChild(nutrifacts);
        productCard.appendChild(buyButton);
        productContainer.appendChild(productCard);
      }
      document.body.appendChild(productContainer);
      
      
      // CHANGE PRICE TO BUY
      const productPrices = document.querySelectorAll(".product-price");
      for (let i = 0; i < productPrices.length; i++) {
        productPrices[i].addEventListener("mouseover", function ()
         {
          this.textContent = "Buy";
        });
        productPrices[i].addEventListener("mouseout", function () {
          this.textContent = products[i].price;
        });
      }
    })
    .catch(error => console.error('Error:', error));
}

