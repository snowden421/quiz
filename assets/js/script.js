// Selectors
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit-score");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start-menu");
var quizEl = document.querySelector("#quiz-menu");
var scoreEl = document.querySelector("#score-menu");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var questionEl = document.querySelector("#question");
var validation = document.querySelector("#validation");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

// Variables
var time = 0;
var score = 0;
var timeInterval;
var questionNumber = 0;
var currentQuestion = 0;

// Questions
var questions = [
    {title: "Arrays in JavaScript can be used to store _______",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    answer: "D" },

    {title: "Commonly used data types do NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    answer: "C" },
    
    {title: "The condition in an if/then statement is enclosed with _____",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "square brackets",
    choiceD: "parenthesis",
    answer: "D" },
    
    {title: "String values must be enclosed within ______ when being assigned to variables",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    answer: "C" },
    
    {title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/Bash",
    choiceC: "for loop",
    choiceD: "console.log",
    answer: "D" }
];

// This function starts the quiz
function start() {
    time = 60;
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
    if (choicePicked === questions[currentQuestion].answer) {
        validation.innerHTML = "Correct";
        score++;
    }
    else {
        validation.innerHTML = "WRONG!";
    }
    currentQuestion++;
    getQuestion(currentQuestion);
};

function endgame() {
    clearInterval(timeInterval);
    quizEl.setAttribute("class", "hide");
    scoreEl.removeAttribute("class");
    finalScore.textContent = score;
};

function addHighScore() {
    var init = initials.value
    var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
        init,
        score
    }
    highScores.push(newScore)
    localStorage.setItem("highscores", JSON.stringify(highScores));

    window.location.reload();
};

//Event Listeners
startBtn.addEventListener("click", start);
submitBtn.addEventListener("click", addHighScore);