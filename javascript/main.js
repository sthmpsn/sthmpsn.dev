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

  // [END] NAV MENU RELATED

  // [START] Scroll position Slide in Animations
  // Grab all Section Header Icons and H2 Elements for slide-in-right animation
  
  let headingEls, windowHeight;
  
  function initScrollSlide() {
    headingEls = document.querySelectorAll("section > div > i, section > div > h2");
    windowHeight = window.innerHeight; 

    console.log("Heading Elements: " + headingEls);
    console.log("Window Height: " + windowHeight);
  }

  function checkPosition() {
    headingEls.forEach(el => {
      let elPosition = el.getBoundingClientRect().top;  // Use the box container top of the element for position
      console.log("Window Height: " + windowHeight);
      console.log(el.innerHTML + " Position: " + elPosition);

      // If the class is not already applied AND the element containing box position is less than 700px
      if (!el.classList.contains('slide-in-from-right') && elPosition <= 700){
          el.classList.add('slide-in-from-right');
          console.log("APPLIED SLIDE ANIMATION CLASS");
      }
    });
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", initScrollSlide); 

  initScrollSlide();
  checkPosition();

  // [END] Scroll Slide in Animations
})();
// [END] OF DOCUMENT LOAD
