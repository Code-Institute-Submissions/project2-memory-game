//adjust elements and font sizes on web page load
document.addEventListener('DOMContentLoaded', () => {
    fitScreen()
    createIntroPage() //load intro-screen

})

//adjust elements and font sizes on window resize
window.addEventListener('resize', function () {
    fitScreen()
})

function fitScreen() {
    let winWidth = $(window).width(); //setting window width variable
    let winHeight = $(window).height(); //setting window height variable
    
    square.style.width = Math.min(winWidth, (winHeight - 100)) / winWidth * 100 + '%'; //setting the size of square used as play-board to fit the screen, 100 represents header height 
    jQuery('html').css('font-size', ((Math.min(winWidth, (winHeight - 100)) / winWidth * 2) + 'vw')); //setting the root font size to fit elements depending on the screen size
}