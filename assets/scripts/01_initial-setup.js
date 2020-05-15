//adjust elements and font sizes on web page load
function onLoad() {
    square.style.width = fitToScreen($(window).width(),$(window).height()); //setting the size of square used as play-board to fit the screen, 100 represents header height
    jQuery('html').css('font-size', adjustFontSize($(window).width(),$(window).height())); //setting the root font size to fit elements depending on the screen size
    createIntroPage();
}


//adjust elements and font sizes on window resize
window.addEventListener('resize', function () {
    square.style.width = fitToScreen($(window).width(),$(window).height()); //setting the size of square used as play-board to fit the screen, 100 represents header height
    jQuery('html').css('font-size', adjustFontSize($(window).width(),$(window).height())); //setting the root font size to fit elements depending on the screen size
});

//calculating the size of square for play-board depending on the screen size
function fitToScreen(winWidth, winHeight) {
    return Math.min(winWidth, (winHeight - 100)) / winWidth * 100 + '%';
}

//calculating the root font size depending on the screen size
function adjustFontSize (winWidth, winHeight) {
    return Math.min(winWidth, (winHeight - 100)) / winWidth * 2 + 'vw';
}