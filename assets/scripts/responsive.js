const square = document.querySelector('.square');
var squareWidth = 0;

//calculating size properties on web page load
document.addEventListener('DOMContentLoaded', () => {
    let winWidth = $(window).width(); //setting window width variable
    let winHeight = $(window).height(); //setting window height variable
    
    square.style.width = Math.min(winWidth, (winHeight - 100)) / winWidth * 100 + '%'; 
    squareWidth = Math.min(winWidth, (winHeight - 100)) / winWidth;
    jQuery('html').css('font-size', ((Math.min(winWidth, (winHeight - 100)) / winWidth * 2) + 'vw'));
})

//calculating size propertis on window resize
window.addEventListener('resize', function () {
    let winWidth = $(window).width(); //setting window width variable
    let winHeight = $(window).height(); //setting window height variable
    
    square.style.width = Math.min(winWidth, (winHeight - 100)) / winWidth * 100 + '%'; 
    squareWidth = Math.min(winWidth, (winHeight - 100)) / winWidth;
    jQuery('html').css('font-size', ((Math.min(winWidth, (winHeight - 100)) / winWidth * 2) + 'vw'));

})