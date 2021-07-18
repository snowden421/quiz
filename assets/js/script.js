// Selectors
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start-menu");
var quizEl = document.querySelector("#quiz-menu");
var scoreEl = document.querySelector("#score-menu");
var questionEl = document.querySelector("#question");
var validation = document.querySelector("#validation");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

// Variables
var time = 0;
var timeInterval;
var questionNumber = 0;
var currentQuestion = 0;

// Questions
var questions = [
    {title: "Arrays in JavaScript can be used to store _______",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above" },

    {title: "Commonly used data types do NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts" },
    
    {title: "The condition in an if/then statement is enclosed with _____",
    choices: ["quotes", "curly brackets", "square brackets", "parenthesis"],
    answer: "parenthesis" },
    
    {title: "String values must be enclosed within ______ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes" },
    
    {title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/Bash", "for loop", "console.log"],
    answer: "console.log" }
];

// This function starts the quiz
function start() {
    time = 10;
    score = 0;
    currentQuestion = 0;
    timeInterval = setInterval(function() {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            endgame();
        }
    }, 1000);
    startEl.setAttribute("class", "hide");
    quizEl.removeAttribute("class");
    getQuestion(currentQuestion);
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
function getQuestion(questionNumber) {
    if (questionNumber < questions.length) {
        questionEl.innerHTML = questions[questionNumber].title;
        choiceA.innerHTML = questions[questionNumber].choiceA;
        choiceB.innerHTML = questions[questionNumber].choiceB;
        choiceC.innerHTML = questions[questionNumber].choiceC;
        choiceD.innerHTML = questions[questionNumber].choiceD;
    }
    else {
        endgame();
    }
}

function checkAnswer(choicePicked) {
    if (choicePicked === questions[currentQuestion].correct) {
        score++;
        validation.innerHTML = "Correct";
    }
    else {
        validation.innerHTML = "WRONG!";
        score--;
    }
    currentQuestion++;
    getQuestion(currentQuestion);
}

function endgame() {
    clearInterval(timeInterval);
    quizEl.setAttribute("class", "hide");
    scoreEl.removeAttribute("class");
};

//Event Listeners
startBtn.addEventListener("click", start);