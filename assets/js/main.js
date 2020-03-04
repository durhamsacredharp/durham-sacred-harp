"use strict";

// Hides menu when clicked

document.addEventListener("DOMContentLoaded", function() {
  var nav_items = Array.from(document.getElementsByClassName("nav-item"));
  var navbarButton = document.getElementsByClassName("navbar-toggler")[0];
  var navbarToggler = document.getElementById("navbarToggler");
  var main = document.getElementById("main");
  nav_items.forEach(function(nav_item) {
    nav_item.addEventListener("click", function() {
      if (navbarToggler.classList.contains("show")) {
        navbarButton.click();
      }
    });
  });

  // Hides the menu if anywhere other than the menu is clicked

  main.addEventListener("click", function() {
    if (navbarToggler.classList.contains("show")) {
      navbarButton.click();
    }
  });
});

// On page load, if there's a hash in the URL then scroll up to offset the sticky header
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash) {
    var navbarHeight = document.getElementById("navbar-row").offsetHeight + 10;
    scrollBy(0, -navbarHeight);
  }
});
// Scroll up if a new hash is clicked to offset the sticky header
window.addEventListener("hashchange", function() {
  var navbarHeight = document.getElementById("navbar-row").offsetHeight + 10;
  scrollBy(0, -navbarHeight);
});
