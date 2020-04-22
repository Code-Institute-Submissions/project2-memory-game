document.addEventListener('DOMContentLoaded', () => {
    
    //shuffle array function
    function shuffleArray(array){
        let posX; //new position in array
        let posY; //current position in array
        
        //loop starts from the end of an array and goes to the beginning and switches value on position 'i' with value on randomly generated position between '0' and 'i - 1'
        for (let i = array.length - 1; i > 0; i--) {
            posX = Math.floor(Math.random()) * (i + 1); //new position - randomly generated
            posY = array[i]; //old position recorded
            array[i] = array[posX]; //value from randomly generated position goes to position 'i'
            array[posX] = posY; //value from position 'i' goes to randomly generated position
        }
        return array;
    }

    //generate array with randomly generated icons, each icon to be twice, array length corresponding to number of cards
    function cardsArray(numberOfCards) {
        let randomIconsArray = shuffleArray(iconsArray); //create randomly shuffled array of all font awesome icons
        var cardsArray = []; //array of randomly selected icons for new game
        
        //loop selects number of cards needed for the game from the beginning of randomly shuffled icons array
        for (var i = 0; i < numberOfCards / 2; i++) {
            //each card needs to be repeated twice in the array
            cardsArray.push(randomIconsArray[i]);
            cardsArray.push(randomIconsArray[i]);
        }
        //selected cards array needs to be randomly shuffled
        return shuffleArray(cardsArray);
    }


    
    
    


    

    

    //create play-board
    function createBoard(numberOfCards) {  
        
        grid.innerHTML=""
        
        scoreBoard.style.visibility = "visible"
        homeButton.style.visibility = "visible"

        Cards = cardsArray(numberOfCards)

        for (let i = 0; i < Cards.length; i++) {
            var card = document.createElement('div');
            card.setAttribute('class', 'flipCardContainer card icon-size' + numberOfCards);
            card.style.width = Math.floor((1 / Math.sqrt(Cards.length))*100) - 1 + '%'
            card.style.height = Math.floor((1 / Math.sqrt(Cards.length))*100) - 1 + '%'
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
            cards[optionOneId].style.visibility = "hidden"
            cards[optionTwoId].style.visibility = "hidden"
            cardsWon.push(cardsChosen)
            attempts.push(cardsChosen)
        } else {
            cards[optionOneId].classList.remove('flip')
            cards[optionTwoId].classList.remove('flip')
            attempts.push(cardsChosen)
            console.log(attempts)
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
            gameOver('won')
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

    

    
    
    


     

    
    

    

})
