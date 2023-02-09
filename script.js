var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

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

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
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


$(document).ready(function() {
    var items = $('.menu').children();
    $(items[items.length - 1]).addClass('last-item');
  });

//filter array

let filterarray = [];


let galleryarray = [
  {
    id: 11,
    name: "Americano Coffee",
    scr : "Design Elements/Coffee Models/Basic/Americano Coffee.png",
    cal : "10 cal",
    mins : "5 mins",
    price : "Php 120.00",

  },
  {
    id: 12,
    name: "Chocolate Coffee",
    scr : "Design Elements/Coffee Models/Basic/Chocolate Coffee.png",
    cal : "190 cal",
    mins :"8 mins",
    price : "Php 150.00",

  },
  {
    id: 13,
    name: "Espresso Coffee",
    scr : "Design Elements/Coffee Models/Basic/Espresso Coffee.png",
    cal : "20 cal",
    mins : "5 mins",
    price : "Php 190.00",
  },
  {
    id: 14,
    name: "Latte Coffee",
    scr : "Design Elements/Coffee Models/Basic/Latte Coffee.png",
    cal : "150 cal",
    mins : "10 mins",
    price : "Php 170.00",
  },

]



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