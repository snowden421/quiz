//Selectors
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start-menu");
var quizEl = document.querySelector("#quiz-menu");
var scoreEl = document.querySelector("#score-menu");
//variables
var time = 20;
var timeInterval;

//this function starts the quiz
function start() {
    timeInterval = setInterval(function() {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            endgame();
        }
    }, 1000);
    startEl.setAttribute("class", "hide");
    quizEl.removeAttribute("class");
}

function endgame() {
    clearInterval(timeInterval);
    quizEl.setAttribute("class", "hide");
    scoreEl.removeAttribute("class");
}

//Event Listeners
startBtn.addEventListener("click", start);