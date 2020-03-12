// [START] ON DOCUMENT LOAD
(function() {
  console.log("...loaded main.js");

  // Get and display current year for copyright
  document.getElementById("currentYear").innerHTML = new Date().getFullYear();
  // End Get Copyright year

  // [START] NAV MENU RELATED

  // ANIMATE OPEN AND CLOSE OF UL NAV LIST
  function AnimateMenuOpenClose() {
    if (menu.classList.contains("sec-main__header-nav-menu--active")) {
      // Add animation to close the menu then remove the animation
      menu.classList.add("sec-main__header-nav-menu--deactivated");
      setTimeout(e => {
        menu.classList.remove("sec-main__header-nav-menu--deactivated");
        menu.classList.toggle("sec-main__header-nav-menu--active");
      }, 500);
    } else {
      // toggle "active" class from nav ul
      menu.classList.toggle("sec-main__header-nav-menu--active");
    }
  }

  // menu - Grab the Nav "ul" node which wraps all the "li" navlinks
  // menulink - Grab the element with class "nav-menu-ico" (hamburger button)
  let menu = document.querySelector(".sec-main__header-nav-menu"),
    menulink = document.querySelector(".sec-main__header-nav-menu-icon"),
    navLinks = document.getElementsByClassName("sec-main__header-nav-item");

  // Add Event Handler on click of Menu Icon
  menulink.addEventListener("click", function(event) {
    AnimateMenuOpenClose();
    event.preventDefault(); // Don't refresh browser
  });

  // Auto close the Menu if open (menu-active) and user clicks any of the nav-item links
  // 300 ms delay given to remove the menu-active class so that it navigates to link first
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(event) {
      // Once clicked a nav item close the menu
      setTimeout(e => {
        if (menu.classList.contains("sec-main__header-nav-menu--active")) {
          AnimateMenuOpenClose();

          event.preventDefault();
        }
      }, 300);
    });
  }

  // IF Viewport width >= 992px then remove the class sec-main__header-nav-menu--active
  // Use case is when a user is in mobile view and activates the hamburger menu then leaves mobile view (+992px) while menu active
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && menu.classList.contains("sec-main__header-nav-menu--active")) {
      menu.classList.remove("sec-main__header-nav-menu--active");
      console.log("REMOVED ACTIVE CLASS MENU - 992px or greater");
    }
  });
  // [END] NAV MENU RELATED

  // [START] Scroll position Related Animations
  // Grab all Section Header Icons and H2 Elements for slide-in-right animation
  let windowHeight, curScrollPosition;
  
  function getNewWindowHeight() {
    windowHeight = window.innerHeight;
    
    console.log("Window Height: " + windowHeight); // DEBUG - The full height of the Windows (browser/viewport). Only changes on resize of browser
  } // [END] initScrollPositions()

  function checkPosition() {
    let headingEls = document.querySelectorAll(".sec-heading > i, .sec-heading > h2"); // Get the heading and heading icon elements 
    let curScrollPosition = (window.scrollY + windowHeight);  // The current scroll position + the Browser/viewport height

    headingEls.forEach(el => {
      let elPosition = el.getBoundingClientRect().top;  // Use the box container top of the element for position
      console.log(el.innerHTML + " Position: " + elPosition); // Debug - Display the Icon and Section heading current position

      // If the class is not already applied AND the element containing box position is less than 700px
      if (!el.classList.contains('slide-in-from-right') && elPosition <= 700){
          el.classList.add('slide-in-from-right');
          // console.log("APPLIED SLIDE ANIMATION CLASS"); // Debug - Confirms the the styles are applied
      }
    });
    //[END] HeadingEls For Each Slide in animation

    // [START] To Top button logic
    let toTopTrigger = document.getElementById('sec-portfolio'); // The Portfolio section triggers this this from applying
    let elToTop = document.getElementById('to-top-of-page'); 

    console.log ("Current Scroll Position: " + curScrollPosition); // DEBUG
    console.log ("Document Inner Height: " + document.body.offsetHeight);  // DEBUG - The full height of the site
    console.log ("Window ScrollY: " + window.scrollY);  // DEBUG - Current Scroll positon on the site (not window position)


    if (!elToTop.classList.contains('to-top-of-page--trigger') && toTopTrigger.getBoundingClientRect().top < 0) {
      elToTop.classList.add('to-top-of-page--trigger');
      menu.classList.remove("sec-main__header-nav-menu--active");  // Also remove the active nav menu at this point
    }
    else if (elToTop.classList.contains('to-top-of-page--trigger') && toTopTrigger.getBoundingClientRect().top > 300){
      elToTop.classList.remove('to-top-of-page--trigger');
    }

    // Apply the "to-top-of-page--at-bottom" class one we reach the bottom of the site
    if (curScrollPosition == document.body.offsetHeight){
      elToTop.classList.add('to-top-of-page--at-bottom');
    }
    else if (elToTop.classList.contains('to-top-of-page--at-bottom') && curScrollPosition !== document.body.offsetHeight){
      elToTop.classList.remove('to-top-of-page--at-bottom');
      console.log("REMOVING AT BOTTOM CLASS");
    } 
    // [END] To Top button logic
  } // [END] checkPosition()

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", getNewWindowHeight); 

  getNewWindowHeight();  // Initial the Window Height and scroll positions on load of page

  // [END] Scroll position Related Animations

  

})();
// [END] OF DOCUMENT LOAD
