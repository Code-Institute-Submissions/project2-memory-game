//create game-over page
function createGameOverPage(result) {

    grid.innerHTML = ""; //clear grid container

    scoreBoard.style.visibility = "hidden"; //score board is hidden on game-over page
    homeButton.style.visibility = "visible"; //home button is visible on game-over page

    var gameOver = document.createElement('div');
    var newGame = document.createElement('a');

    //Creating Game Over text container including text content (game results summary)
    gameOver.setAttribute('class', 'gameOver');
    
    if (result === 'lost') {//text content  (game results summary) for lost game (only in challenge mode)
        /*jshint multistr: true */
        gameOver.innerHTML = '<h2><i class="fas fa-frown" style = "font-size: 8rem; color: rgb(0,150,0); margin: 10px;"></i></h2>\
                                <h2>GAME OVER!</h2>\
                                <br>\
                                <h3>Time expired!</h3>\
                                <br>\
                                <h3>Time elapsed: ' + timeElapsed + '</h3>\
                                <h3>Successful moves: ' + cardsWon.length + '</h3>\
                                <h3>Failed moves: ' + (attempts.length - cardsWon.length) + '</h3>\
                                <h3>Total moves:  ' + attempts.length + '</h3>';
    } else {//text content  (game results summary) for won game
        /*jshint multistr: true */
        gameOver.innerHTML = '<h2><i class="fas fa-trophy" style = "font-size: 8rem; color: rgb(0,150,0); margin: 10px;"></i></h2>\
                                <h2>CONGRATULATIONS!</h2>\
                                <br>\
                                <h3>All pairs collected.</h3>\
                                <br>\
                                <h3>Time elapsed: ' + timeElapsed + ' </h3>\
                                <h3>Successful moves: ' + cardsWon.length + ' </h3>\
                                <h3>Failed moves: ' + (attempts.length - cardsWon.length) + ' </h3>\
                                <h3>Total moves:  ' + attempts.length + ' </h3>';
    }

    grid.appendChild(gameOver);

    //Creating New Game button and defining button features
    newGame.setAttribute('class', 'newGame');
    newGame.setAttribute('href', 'index.html');
    newGame.innerHTML = '<h4>New Game</h4>';
    grid.appendChild(newGame);
}