document.addEventListener("DOMContentLoaded", function () {
  const navbarElement = document.getElementById("navbar");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/scripts/navbar/navbar.html", true);
  xhr.onload = function () {
    navbarElement.innerHTML = xhr.responseText;

    // Call the function to add the "active" class after the navbar HTML has been loaded
    HighlightPageFunction();
  };
  xhr.send();
});

function HighlightPageFunction() {
  // Get the current page URL
  const currentUrl = window.location.href;
  console.log("current page: " + currentUrl);

  // Get the navbar links
  const homeLink = document.getElementById("navbar-home");
  const aboutLink = document.getElementById("navbar-about");
  const contactLink = document.getElementById("navbar-contact");
  const DashboardUserLink = document.getElementById("user-dash");
  const SendLogoutRequestCommand = document.getElementById("LogoutREquest");

  // Add the "active" class to the home link by default
  homeLink.classList.add("active");

  // Get the current page URL
  console.log("home_link_Url " + homeLink);
  console.log("about_link_Url " + aboutLink);
  console.log("contact_link_Url " + contactLink);
  console.log("user-dash" + DashboardUserLink);
  console.log("LogoutREquest" + SendLogoutRequestCommand);

  if (!currentUrl.includes("index.php")) {
    homeLink.classList.remove("active");
  }

  // Add the "active" class to the current link
  if (currentUrl.includes("index.php")) {
    homeLink.classList.add("active");
  } else if (currentUrl.includes("aboutpage.php")) {
    aboutLink.classList.add("active");
  } else if (currentUrl.includes("contactpage.php")) {
    contactLink.classList.add("active");
  }

  // Change the user logo when the user picked the dashboard page
  if (currentUrl.includes("userdashboard.php")) {
    const IconSrc = document.querySelector(".User_Logo");
    IconSrc.src = "/Design Elements/icons/person-circle-selected.svg";
  } else {
    const IconSrc = document.querySelector(".User_Logo");
    IconSrc.src = "/Design Elements/icons/person-circle.svg";
  }
}
