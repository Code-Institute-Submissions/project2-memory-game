//Timer Functions
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
        createGameOverPage('lost'); //open Game Over page with losing content
        return;
    }

    timer();
}


function timer() {
    t = setTimeout(deduct, 1000);
}

//Stop Watch Functions
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

    if (challengeMode == 1) {
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