// [START] ON DOCUMENT LOAD
(function() {
    console.log("...loaded portfolio.js");

    // [START] Carousel Controls
    let carousel = document.querySelector('.sec-portfolio__carousel');
    let projCount = 8;
    var curProjIndex = 0;
    console.log("curProjectIndexed:" + curProjIndex);


    function rotateCarousel(){
        let viewAngle = curProjIndex / projCount * -360;  // negative 360 since we want previous ctrl btn to turn right and vice versa
        carousel.style.transform = 'rotateY(' + viewAngle + 'deg)';
    }

    /* Detect browser resizing (shrink) in order to remove the "carousel.style.transform" style which 
    can cause issues when carousel not displayed (smaller than 992px width screens) */
    window.addEventListener('resize', function(){
        var screenWidth = window.innerWidth;  // Get the screen width
        // console.log("Starting Screen Width: " + screenWidth);
        if (screenWidth < 992){
            carousel.style.transform = '';
            curProjIndex = 0;
            screenWidth = window.innerWidth;  // Get the NEW screen width
            // console.log("New Screen Width: " + screenWidth);
        }
    });


    let prevButton = document.querySelector('.sec-portfolio__carousel-ctrl-prev-button');
    prevButton.addEventListener('click', function(){
        console.log("Previous Button Clicked!");
        curProjIndex--;
        console.log("New curProjectIndexed:" + curProjIndex);
        rotateCarousel();
    });

    let nextButton = document.querySelector('.sec-portfolio__carousel-ctrl-next-button');
    nextButton.addEventListener('click', function(){
        console.log("Previous Button Clicked!");
        curProjIndex++;
        console.log("New curProjectIndexed:" + curProjIndex);
        rotateCarousel();
    });
    // [END] Carousel Controls


})();
// [END] OF DOCUMENT LOAD