import './util.js';
import './collapse.js';

"use strict";

// Hides menu when clicked
document.addEventListener("DOMContentLoaded", () => {
	const nav_items = document.getElementsByClassName("nav-item");
	const navbarButton = document.getElementsByClassName("navbar-toggler")[0];
	const navbarToggler = document.getElementById("navbarToggler");
	const main = document.getElementById("main");

	Array.from(nav_items).forEach((nav_item) => {
		nav_item.addEventListener("click", () => {
			if (navbarToggler.classList.contains("show")) {
				navbarButton.click();
			}
		});
	});

	// Hides the menu if anywhere other than the menu is clicked
	main.addEventListener("click", () => {
		if (navbarToggler.classList.contains("show")) {
			navbarButton.click();
		}
	});
});

// On page load, if there's a hash in the URL then scroll up to offset the sticky header
document.addEventListener("DOMContentLoaded", () => {
	if (window.location.hash) {
		const navbarHeight = document.getElementById("navbar-row").offsetHeight + 10;
		scrollBy(0, -navbarHeight);
	}
});

// Scroll up if a new hash is clicked to offset the sticky header
window.addEventListener("hashchange", () => {
	const navbarHeight = document.getElementById("navbar-row").offsetHeight + 10;
	scrollBy(0, -navbarHeight);
});
