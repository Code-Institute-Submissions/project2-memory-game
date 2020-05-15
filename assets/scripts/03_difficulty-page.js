//create difficulty-page
function createDifficultyPage() {

    grid.innerHTML = ""; //clear grid container

    scoreBoard.style.visibility = "hidden"; //score board is hidden on difficulty page
    homeButton.style.visibility = "visible"; //homebutton is visible on difficulty page

    var difficulty1 = document.createElement('div');
    var difficulty2 = document.createElement('div');
    var difficulty3 = document.createElement('div');
    var difficulty4 = document.createElement('div');

    //Creating '16 cards' button and defining button features
    difficulty1.setAttribute('class', 'difficulty1');
    difficulty1.innerHTML = '<h2>16 cards</h2>';
    difficulty1.addEventListener('click', function() {
        grid.innerHTML = "";
        createGamePage(16);

        //set timer for challenge mode
        if (challengeMode === 1) {
            secondsToGo = 0;
            minutesToGo = 1;
            hoursToGo = 0;
            totalTimeToGo = hoursToGo * 3600 + minutesToGo * 60 + secondsToGo;
            timeDisplay.textContent = '00:01:00';
        }
    });
    grid.appendChild(difficulty1);

    //Creating '36 cards' button and defining button features
    difficulty2.setAttribute('class', 'difficulty2');
    difficulty2.innerHTML = '<h2>36 cards</h2>';
    difficulty2.addEventListener('click', function() {
        grid.innerHTML = "";
        createGamePage(36);

        //set timer for challenge mode
        if (challengeMode === 1) {
            secondsToGo = 0;
            minutesToGo = 2;
            hoursToGo = 0;
            totalTimeToGo = hoursToGo * 3600 + minutesToGo * 60 + secondsToGo;
            timeDisplay.textContent = '00:02:00';
        }
    });
    grid.appendChild(difficulty2);


    //Creating '64 cards' button and defining button features
    difficulty3.setAttribute('class', 'difficulty3');
    difficulty3.innerHTML = '<h2>64 cards</h2>';
    difficulty3.addEventListener('click', function() {
        grid.innerHTML = "";
        createGamePage(64);

        //set timer for challenge mode
        if (challengeMode === 1) {
            secondsToGo = 0;
            minutesToGo = 4;
            hoursToGo = 0;
            totalTimeToGo = hoursToGo * 3600 + minutesToGo * 60 + secondsToGo;
            timeDisplay.textContent = '00:04:00';
        }
    });
    grid.appendChild(difficulty3);

    //Creating '100 cards' button and defining button features
    difficulty4.setAttribute('class', 'difficulty4');
    difficulty4.innerHTML = '<h2>100 cards</h2>';
    difficulty4.addEventListener('click', function() {
        grid.innerHTML = "";
        createGamePage(100);

        //set timer for challenge mode
        if (challengeMode === 1) {
            secondsToGo = 0;
            minutesToGo = 7;
            hoursToGo = 0;
            totalTimeToGo = hoursToGo * 3600 + minutesToGo * 60 + secondsToGo;
            timeDisplay.textContent = '00:07:00';
        }
    });
    grid.appendChild(difficulty4);
}