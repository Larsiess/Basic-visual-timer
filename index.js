const timeDisplay = document.createElement("p");
document.body.insertAdjacentElement("beforeend", timeDisplay);
let timeElapsed = 0;
const timeLimit = 1800; //half uur in seconden
let toggle = false; //true == green (timer counting)
let startButton = document.getElementById("fckndfndout");
startButton.addEventListener("click", startTimer);
let inti;

function startTimer() {
    timeElapsed = 0;
    toggle = true;
    inti = setInterval(timerFunction, 1000);
    trigger();
}

function timerFunction() {
    const d = new Date();
    let min = Math.floor(timeElapsed / 60);
    let sec = timeElapsed % 60;
    timeDisplay.innerHTML = `${min < 10 ? 0 : ""}${min} : ${sec < 10 ? 0 : ""}${sec}`;
    timeElapsed += 1;
    if (timeElapsed > timeLimit) {
        timeElapsed = 0;
        trigger();
    }
}

function trigger() {
    startButton.hidden = toggle;
    if (toggle) {
        document.body.style = "background-color: green";
        toggle = !toggle;
    } else {
        document.body.style = "background-color: red";
        toggle = !toggle;
        clearInterval(inti);
    }
}
