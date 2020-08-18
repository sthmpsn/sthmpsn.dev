let elToTop = require('./global.js').elToTop;
let toTopTrigger = require('./global.js').toTopTrigger;
let menu = require('./global.js').menu;
let windowHeight = require('./global').windowHeight;
let getNewWindowHeight = require('./global.js').getNewWindowHeight;
let getCurrentPosition = require('./global.js').getCurrentPosition;

// [START] ON DOCUMENT LOAD
(function () {
	console.log('...loaded scroll.js');
	console.log('Current Scroll Position: ' + getCurrentPosition()); // DEBUG
	console.log('Document Inner Height: ' + document.body.offsetHeight); // DEBUG - The full height of the site

	// If active Menu when adjusting width, close if viewport larger than 992px
	let closeMenuBasedOnWidth = () => {
		if (
			window.innerWidth >= 992 &&
			menu.classList.contains('nav-menu--active')
		) {
			menu.classList.remove('nav-menu--active');
			console.log('REMOVED ACTIVE CLASS MENU - 992px or greater');
		}
	};

	let headingPositionCheck = () => {
		// When scrolling gets to the top of each section's Div element, apply slide animation
		let headingEls = document.querySelectorAll('.sec-heading > i, .sec-heading > h2'); // Get the heading and heading icon elements
		
		headingEls.forEach((el) => {
			let elPosition = el.getBoundingClientRect().top; // Use the box container top of the element for position
			console.log(el.innerHTML, 'Position: ', elPosition); // Debug - Display the Icon and Section heading current position

			// If the class is not already applied AND the element containing box position is less than 700px
			if (
				!el.classList.contains('slide-in-from-right') &&
				elPosition <= 700
			) {
				el.classList.add('slide-in-from-right');
				// console.log("APPLIED SLIDE ANIMATION CLASS"); // Debug - Confirms the the styles are applied
			}
		});
	}
	
	let toTopTriggerCheck = () => {
		// Once we get to the "Portfolio" Div Section show the "to-top" icon/button
		console.log("toTopTrigger: ",toTopTrigger.getBoundingClientRect().top);
		if (!elToTop.classList.contains('to-top-of-page--trigger') && toTopTrigger.getBoundingClientRect().top < 0) {
			console.log("HIT THE to-top TRIGGER");
			elToTop.classList.add('to-top-of-page--trigger');
			menu.classList.remove('nav-menu--active'); // Also remove the active nav menu at this point
		} else if (elToTop.classList.contains('to-top-of-page--trigger') && toTopTrigger.getBoundingClientRect().top > 300) {
			elToTop.classList.remove('to-top-of-page--trigger');
		}
	}

	let atBottomTriggerCheck = () => {
		// Apply the "to-top-of-page--at-bottom" class one we reach the bottom of the site
		curScrollPosition = getCurrentPosition(); // Get the most up to date currentScrollPosition
		console.log("LATEST Scroll Position Recorded:",curScrollPosition);
		console.log("offSetHeight:",document.body.offsetHeight )
		if (curScrollPosition === document.body.offsetHeight) {
			elToTop.classList.add('to-top-of-page--at-bottom');
			console.log("HIT THE at-bottom TRIGGER");
		} else if (elToTop.classList.contains('to-top-of-page--at-bottom') &&	curScrollPosition !== document.body.offsetHeight) {
			elToTop.classList.remove('to-top-of-page--at-bottom');
			console.log('REMOVING AT BOTTOM CLASS');
		}
	}

	// *******************
	// * Event Listeners *
	// *******************

	window.addEventListener('scroll', () => {
		toTopTriggerCheck();
		headingPositionCheck();
		atBottomTriggerCheck();
	});

	// IF Viewport width >= 992px then remove the class sec-main__header-nav-menu--active
	// Use case is when a user is in mobile view and activates the hamburger menu then leaves mobile view (+992px) while menu active
	window.addEventListener('resize', () => {
		getNewWindowHeight();
		closeMenuBasedOnWidth();
	});


})();
// [END] OF DOCUMENT LOAD

