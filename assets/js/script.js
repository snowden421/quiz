// Selectors
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start-menu");
var quizEl = document.querySelector("#quiz-menu");
var scoreEl = document.querySelector("#score-menu");

// Variables
var time = 10;
var timeInterval;
var questionNumber = 0


// This function starts the quiz
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
    // call function that puts questions and choices on screen
};

// player makes choice and clicks button, create next question function
/*
if (questionNumber === questions.length) {
    // then run endgame function
} else {
    // then run getQuestion function
}
// display if choice was right or wrong
*/

// make function that puts question and choices on screen
function getQuestion() {
    
}


function endgame() {
    clearInterval(timeInterval);
    quizEl.setAttribute("class", "hide");
    scoreEl.removeAttribute("class");
};

//Event Listeners
startBtn.addEventListener("click", start);