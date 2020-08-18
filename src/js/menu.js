let navLinks = require('./global.js').navLinks;
let menuIcon = require('./global.js').menuIcon;
let menu = require('./global.js').menu;

// [START] ON DOCUMENT LOAD
(function () {
	console.log('...loaded main.js');


	function animateMenuOpenClose() {
		// ANIMATE OPEN AND CLOSE OF UL NAV LIST
		if (menu.classList.contains('nav-menu--active')) {
			// Add animation to close the menu then remove the animation
			menu.classList.add('nav-menu--deactivated');
			setTimeout(function () {
				menu.classList.remove('nav-menu--deactivated');
				menu.classList.remove('nav-menu--active');
			}, 500);
		} else if (window.innerWidth < 992) {
			// If smaller than 992px viewports (when the hamburger menu is shown)
			// toggle "active" class from nav ul
			menu.classList.add('nav-menu--active');
			// This else if statement is needed so that on larger than 992px screen it doesn't try to animate when a navLink is clicked
		}
	}

	let closeMenuBasedOnWidth = () => {
		if (
			window.innerWidth >= 992 &&
			menu.classList.contains('nav-menu--active')
		) {
			menu.classList.remove('nav-menu--active');
			console.log('REMOVED ACTIVE CLASS MENU - 992px or greater');
		}
	};

	
	// *******************
	// * Event Listeners *
	// *******************

	// Add an Event Listenster for ALL navLinks that when clicked will close the Nav Menu
	for (var i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener('click', animateMenuOpenClose);
	}

	// Add Event Handler on click of Menu Icon
	menuIcon.addEventListener('click', function (event) {
		animateMenuOpenClose();
		event.preventDefault(); // Don't refresh browser
	});
})();
// [END] OF DOCUMENT LOAD
