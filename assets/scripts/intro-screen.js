//create intro page
function createIntroPage() {
    
    grid.innerHTML = "" //clear grid container

    scoreBoard.style.visibility = "hidden" //score board is invisible on intro page
    homeButton.style.visibility = "hidden" //home button is invisible on intro page

    var introduction = document.createElement('div')
    var button1 = document.createElement('div')
    var button2 = document.createElement('div')


    //Creating Game Intro text container including text content
    introduction.setAttribute('class', 'introduction')
    introduction.innerHTML = '<h2 style="font-size: 8rem; color: rgb(0,150,0)"><i class="fab fa-font-awesome"></i></h2>\
                                <h3>Welcome to Font Awesome Memory Challenge!</h3>\
                                <br>\
                                <p>This is a memory game is based on Font Awesome free icon collecion.</p>\
                                <p>The goal of the game is to find all the pairs of cards with matching icon.</p>\
                                <p>The game offers two modes:</p>\
                                <p><b>Normal Mode:</b> Player is not limited by time.</p>\
                                <p><b>Challenge Mode:</b> Player plays against a time limit.</p\
                                <p>Game also offers 4 difficulty levels defined by a number of cards.</p>\
                                <br>\
                                <p>Challenge your memory and have fun!</p>\
                                <br>\
                                <br>\
                                <p><i>Developed by Milan Stefanik as Code Institute Student Project.</i></p>'
    grid.appendChild(introduction);

    //Creating Normal Mode button and defining button features
    button1.setAttribute('class', 'button')
    button1.innerHTML = '<h4>Normal Mode</h4>'
    button1.addEventListener('click', NormalMode)
    grid.appendChild(button1);

    //Creating Challenge Mode button and defining button features
    button2.setAttribute('class', 'button')
    button2.innerHTML = '<h4>Challenge Mode</h4>'
    button2.addEventListener('click', ChallengeMode)
    grid.appendChild(button2);
}

//Normal Mode Selected
function NormalMode() {
    challengeMode = 0
    createDifficultyPage() //Open Second Page
}

//Challenge Mode Selected
function ChallengeMode() {
    challengeMode = 1
    createDifficultyPage() //Open Second Page
}