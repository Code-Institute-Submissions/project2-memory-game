//Timer Functions
function deduct() {
    totalTimeToGo--; //deduct 1 second from actual value of totalTimeToGo; initial value set in createDifficultyPage() function
    var h = Math.floor(totalTimeToGo / (60 * 60));
    var m = Math.floor((totalTimeToGo % (60 * 60)) / (60));
    var s = Math.floor((totalTimeToGo % (60)));

    timeDisplay.textContent = (h ? (h > 9 ? h : "0" + h) : "00") + ":" + (m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s > 9 ? s : "0" + s);

    //if time limit expires, timer and stopwatch is stopped, timeDisplay.textContent is set to "EXPIRED", which will disable 'flipCard()' function and start 'createGameOverPage('lost')' function
    if (totalTimeToGo <= 0) {
        clearTimeout(t);
        clearTimeout(sw);
        timeDisplay.textContent = "EXPIRED";
        createGameOverPage('lost'); //open Game Over page with losing content
        return;
    }

    timer();
}

//Starts deduct() function every second; This function needs to be called for starting timer
function timer() {
    t = setTimeout(deduct, 1000);
}

//Stop Watch Functions
function add() {
    secondsElapsed++;
    
    //converting seconds to hours and minutes
    if (secondsElapsed >= 60) {
        secondsElapsed = 0;
        minutesElapsed++;
        if (minutesElapsed >= 60) {
            minutesElapsed = 0;
            hoursElapsed++;
        }
    }

    //If game is in challenge mode, time elapsed is only saved to variable for the game over summary. Otherwise, time elapsed is both saved and presented on the score-board
    if (challengeMode == 1) {
        timeElapsed = (hoursElapsed ? (hoursElapsed > 9 ? hoursElapsed : "0" + hoursElapsed) : "00") + ":" + (minutesElapsed ? (minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed) : "00") + ":" + (secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed);
    } else {
        timeDisplay.textContent = (hoursElapsed ? (hoursElapsed > 9 ? hoursElapsed : "0" + hoursElapsed) : "00") + ":" + (minutesElapsed ? (minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed) : "00") + ":" + (secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed);
        timeElapsed = (hoursElapsed ? (hoursElapsed > 9 ? hoursElapsed : "0" + hoursElapsed) : "00") + ":" + (minutesElapsed ? (minutesElapsed > 9 ? minutesElapsed : "0" + minutesElapsed) : "00") + ":" + (secondsElapsed > 9 ? secondsElapsed : "0" + secondsElapsed);
    }

    stopWatch();
}

//Starts add() function every second; This function needs to be called for starting stopwatch
function stopWatch() {
    sw = setTimeout(add, 1000);
}