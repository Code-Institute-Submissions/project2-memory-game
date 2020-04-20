document.addEventListener('DOMContentLoaded', () => {


    //generate array with randomly generated icons, each icon to be twice, array length corresponding to number of cards
    function cardsArray(numberOfCards) {
        iconsArray.sort(() => 0.5 - Math.random());
        var cardsArray = [];
        var tempCard;
        for (var i = 0; i < numberOfCards / 2; i++) {
            tempCard = iconsArray[i];
            cardsArray.push(tempCard);
            cardsArray.push(tempCard);
        }
        cardsArray.sort(() => 0.5 - Math.random());
        return cardsArray;
    }


    const grid = document.querySelector('.grid');
    const wonDisplay = document.querySelector('#won');
    const failDisplay = document.querySelector('#failed');
    const timeDisplay = document.querySelector('#time');
    
    var timeElapsed
    
    var challengeMode = 0;
    var numberOfCards = 0;
    var Cards = [];
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var attempts = [];
    var firstMove = 0;


    //create first-page
    function createFirstPage() {
        grid.innerHTML=""

        var introduction = document.createElement('div')
        var button1 = document.createElement('div')
        var button2 = document.createElement('div')

        introduction.setAttribute('class','introduction')
        introduction.innerHTML='<h3>Game Intro</h3>'
        grid.appendChild(introduction);

        button1.setAttribute('class', 'button')
        button1.innerHTML = '<h4>Normal Mode</h4>'
        button1.addEventListener('click', NormalMode)
        grid.appendChild(button1);
        
        button2.setAttribute('class', 'button')
        button2.innerHTML = '<h4>Challenge Mode</h4>'
        button2.addEventListener('click', ChallengeMode)
        grid.appendChild(button2);
    }

    function NormalMode() {
        challengeMode = 0
        createSecondPage()
    }

    function ChallengeMode() {
        challengeMode = 1
        createSecondPage()
    }

    //create second-page
    function createSecondPage() {       
        
        grid.innerHTML=""
        
        var difficulty1 = document.createElement('div')
        var difficulty2 = document.createElement('div')
        var difficulty3 = document.createElement('div')
        var difficulty4 = document.createElement('div')


        difficulty1.setAttribute('class','difficulty')
        difficulty1.innerHTML='<h2>16 cards</h2>'
        difficulty1.addEventListener('click', () => {
            grid.innerHTML="";
            createBoard(16);
        })
        grid.appendChild(difficulty1);

        difficulty2.setAttribute('class','difficulty')
        difficulty2.innerHTML='<h2>36 cards</h2>'
        difficulty2.addEventListener('click', () => {
            grid.innerHTML="";
            createBoard(36);
        })
        grid.appendChild(difficulty2);

        difficulty3.setAttribute('class','difficulty')
        difficulty3.innerHTML='<h2>64 cards</h2>'
        difficulty3.addEventListener('click', () => {
            grid.innerHTML="";
            createBoard(64);
        })
        grid.appendChild(difficulty3);

        difficulty4.setAttribute('class','difficulty')
        difficulty4.innerHTML='<h2>100 cards</h2>'
        difficulty4.addEventListener('click', () => {
            grid.innerHTML="";
            createBoard(100);
        })
        grid.appendChild(difficulty4);
    }

    //create play-board
    function createBoard(numberOfCards) {  
        
        grid.innerHTML=""

        let winWidth = $(window).width();
        let winHeight = $(window).height();
        
        if(winWidth > winHeight) {
            square.style.width = Math.floor(((winHeight-150)/winWidth)*100) + '%'
            squareWidth = (winHeight-150)/winWidth
        } else {
            //square.style.width = '95%'
            //squareWidth = 0.95
        }
        
        Cards = cardsArray(numberOfCards)

        for (let i = 0; i < Cards.length; i++) {
            var card = document.createElement('div');
            card.setAttribute('class', 'flipCardContainer card');
            card.style.width = Math.floor((1 / Math.sqrt(Cards.length))*100) - 1 + '%'
            card.style.height = Math.floor((1 / Math.sqrt(Cards.length))*100) - 1 + '%'
            card.style.fontSize = (squareWidth / Math.sqrt(Cards.length)) * 40 + 'rem'
            card.innerHTML = '<div class= "flipCard"><div class="frontSide">' + Cards[i] + '</div><div class="backSide"><i class="fab fa-font-awesome-flag"></i></div></div>';
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('.flipCardContainer')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            //alert('You found a match')
            //cards[optionOneId].innerHTML = '<div class= "flipCard"><div class="frontSide"></div><div class="backSide"></i></div></div>';
            //cards[optionTwoId].innerHTML = '<div class= "flipCard"><div class="frontSide"></div><div class="backSide"></i></div></div>';
            cards[optionOneId].style.visibility = "hidden"
            cards[optionTwoId].style.visibility = "hidden"
            cardsWon.push(cardsChosen)
            attempts.push(cardsChosen)
        } else {
            cards[optionOneId].classList.remove('flip')
            cards[optionTwoId].classList.remove('flip')
            //alert('Sorry, try again')
            attempts.push(cardsChosen)
        }
        cardsChosen = []
        cardsChosenId = []
        wonDisplay.textContent = cardsWon.length
        failDisplay.textContent = attempts.length - cardsWon.length
        if (cardsWon.length === Cards.length / 2) {
            if(challengeMode == 1) {
                clearTimeout(t);
            }
            clearTimeout(sw);
        }
    }


    //flip your card
    function flipCard() {

        if (cardsChosen.length === 2) {
            return;
        }

        if (cardsChosenId[0] === this.getAttribute('data-id')) {
            return;
        }

        if (timeDisplay.textContent === "EXPIRED") {
            return;
        }

        if (firstMove === 0) {
            firstMove = 1;
            stopWatch();
            if(challengeMode == 1) {
                timer();
            }
        }

        var cardId = this.getAttribute('data-id');
        cardsChosen.push(Cards[cardId]);
        cardsChosenId.push(cardId)
        this.classList.add('flip');
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 1000)
        };

    }

    createFirstPage()

    //timer
    var secondsToGo = 5;
    var minutesToGo = 0;
    var hoursToGo =0;
    
    var totalTimeToGo = hoursToGo * 3600 + minutesToGo * 60 + secondsToGo

    

    function deduct() {
        totalTimeToGo--;
        var h = Math.floor((totalTimeToGo % (60 * 60 * 24)) / (60 * 60));
        var m = Math.floor((totalTimeToGo % (60 * 60)) / (60));
        var s = Math.floor((totalTimeToGo % (60)));

        timeDisplay.textContent = (h ? (h > 9 ? h : "0" + h) : "00") + ":" + (m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s > 9 ? s : "0" + s);

        if (totalTimeToGo <= 0) {
            clearTimeout(t);
            clearTimeout(sw);
            timeDisplay.textContent = "EXPIRED";
            gameOver();
        }

        timer();
    }


    function timer() {
        t = setTimeout(deduct, 1000);
    }


     //stopwatch
    var secondsElapsed = 0;
    var minutesElapsed = 0;
    var hoursElapsed = 0;

    function add() {
        secondsElapsed++;
        if (secondsElapsed >= 60) {
            secondsElapsed = 0;
            minutesElapsed++;
            if (minutesElapsed >= 60) {
                minutesElapsed = 0;
                hoursElapsed++;
            }
        }

        //timeElapsedDisplay.textContent = (hoursElapsed ? (hoursElapsed > 9 ? hoursElapsed : "0" + hoursElapsed) : "00") + ":" + (minutesElapsed ? (minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed) : "00") + ":" + (secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed);
        if(challengeMode == 1) {
            timeElapsed = (hoursElapsed ? (hoursElapsed > 9 ? hoursElapsed : "0" + hoursElapsed) : "00") + ":" + (minutesElapsed ? (minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed) : "00") + ":" + (secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed)
        } else {
            timeDisplay.textContent = (hoursElapsed ? (hoursElapsed > 9 ? hoursElapsed : "0" + hoursElapsed) : "00") + ":" + (minutesElapsed ? (minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed) : "00") + ":" + (secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed)
            timeElapsed = (hoursElapsed ? (hoursElapsed > 9 ? hoursElapsed : "0" + hoursElapsed) : "00") + ":" + (minutesElapsed ? (minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed) : "00") + ":" + (secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed)
        }

        stopWatch();
    }
    function stopWatch() {
        sw = setTimeout(add, 1000);
    }
    //stopWatch();

    //gameOverPage
    function gameOver() {
        
        grid.innerHTML=""

        var gameOver = document.createElement('div')
        var newGame = document.createElement('a')

        gameOver.setAttribute('class','gameOver')
        gameOver.innerHTML='<h2>Game Over</h2>'
        grid.appendChild(gameOver);

        newGame.setAttribute('class','newGame')
        newGame.setAttribute('href', 'index.html')
        newGame.innerHTML='<h4>New Game</h4>'
        grid.appendChild(newGame);
    }

})
