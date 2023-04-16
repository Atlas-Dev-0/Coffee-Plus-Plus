// Load the navbar HTML file into the navbar <div> element
const navbarElement = document.getElementById("navbar");
const xhr = new XMLHttpRequest();
xhr.open("GET", "/scripts/navbar/navbar.html", true);
xhr.onload = function () {
  navbarElement.innerHTML = xhr.responseText;

  // Call the function to add the "active" class after the navbar HTML has been loaded
  HighlightPageFunction();
};
xhr.send();


function HighlightPageFunction() {
  // Get the current page URL
  const currentUrl = window.location.href;

  console.log("current page: " + currentUrl);

  // Get the navbar links
  const homeLink = document.getElementById('navbar-home');
  const aboutLink = document.getElementById('navbar-about');
  const contactLink = document.getElementById('navbar-contact');

  //check 
  console.log("home_link_Url " + homeLink);
  console.log("about_link_Url " + aboutLink);
  console.log("contact_link_Url " + contactLink);

  // Add the "active" class to the current link
  if (currentUrl.includes('index.php')) {
    homeLink.classList.add('active');
  } else if (currentUrl.includes('aboutpage.php')) {
    aboutLink.classList.add('active');
  } else if (currentUrl.includes('contactpage.php')) {
    contactLink.classList.add('active');
  }
}
