// [START] ON DOCUMENT LOAD
(function () {
	console.log('...loaded main.js');

	// Global Variables
	let menu = document.querySelector('.nav-menu'); // Menu <ul>
	let menuIcon = document.querySelector('.nav-menu-icon'); // Hamburger button icon Div
	let navLinks = document.querySelectorAll('.nav-item'); // All navLinks
	let toTopTrigger = document.getElementById('sec-portfolio'); // The Portfolio section element (used to trigger to-top button show)
	let elToTop = document.getElementById('to-top-of-page'); // To Top button
	let windowHeight;

	// Global Functions

	
	function getNewWindowHeight() {
    // Get window height
		windowHeight = window.innerHeight;
		console.log('Window Height: ' + windowHeight); // DEBUG - The full height of the Windows (browser/viewport). Only changes on resize of browser
	};

	function getCurrentPosition() {
    // Get Current Scroll Position
    let curScrollPosition = window.scrollY + windowHeight; // The current scroll position + the Browser/viewport height
    console.log('Current Scroll Position:', curScrollPosition);
    
    return curScrollPosition;
  };

  getNewWindowHeight(); // Get Initial Window Height and scroll positions on load of page

	module.exports = {
		menu,
		menuIcon,
		navLinks,
		toTopTrigger,
		elToTop,
		windowHeight,
		getNewWindowHeight,
		getCurrentPosition,
	}; // End of module.exports
})();
