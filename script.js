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


$(document).ready(function () {
  var items = $('.menu').children();
  $(items[items.length - 1]).addClass('last-item');
});


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



//CHANGE PRICE TO BUY
const productPrices = document.querySelectorAll(".product-price");
for (let i = 0; i < productPrices.length; i++) {
  productPrices[i].addEventListener("mouseover", function () {
    this.innerHTML = "Buy";
  });
  productPrices[i].addEventListener("mouseout", function () {
    this.innerHTML = products[i].price;
  });
}


//INFORMATION OF PRODUCT VIA ARRAY
let products = [
  {
    id: "0101",
    name: "Americano Coffee",
    image: "Design Elements/Coffee Models/Basic/Americano Coffee.png",
    calories: "10 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0102",
    name: "Chocolate Coffee",
    image: "Design Elements/Coffee Models/Basic/Chocolate Coffee.png",
    calories: "20 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0103",
    name: "Espresso Coffee",
    image: "Design Elements/Coffee Models/Basic/Espresso Coffee.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0104",
    name: "Latte Coffee",
    image: "Design Elements/Coffee Models/Basic/Latte Coffee.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0201",
    name: "Cappuccino Coffee",
    image: "Design Elements/Coffee Models/Specialties/Cappuccino Coffee.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0202",
    name: "Macchiato Coffee",
    image: "Design Elements/Coffee Models/Specialties/Macchiato Coffee.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0203",
    name: "Ristretto Coffee",
    image: "Design Elements/Coffee Models/Specialties/Ristretto Coffee.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0301",
    name: "Iced Frappe",
    image: "Design Elements/Coffee Models/Iced/Iced Frappe.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0302",
    name: "Iced Latte",
    image: "Design Elements/Coffee Models/Iced/Iced Latte.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0303",
    name: "Iced Mocha",
    image: "Design Elements/Coffee Models/Iced/Iced Mocha.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  },
  {
    id: "0304",
    name: "Iced Tea",
    image: "Design Elements/Coffee Models/Iced/Iced Tea.png",
    calories: "2 cal",
    time: "5 mins",
    price: "Php 120.00"
  }
];