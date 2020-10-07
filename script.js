let questionArray = [
    question1 = {
        Question: "What is my name?",
        CorrectAnswer: "correct answer",
        AllAnswer: [
            "randomAnswer",
            "wrongAnswer",
            "anotherAnswer",
            "correct answer"
        ]
    }
]

/************ Global Variables */

var highScore = [];

var viewScore = document.getElementById("viewScore");
var time = document.getElementById("time");
var quizPage = document.getElementById("quizPage");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var startButton = document.getElementById("startButton");
var finalScore = document.getElementById("finalScore");
var initialInput = document.getElementById("initialInput");
var submitInitials = document.getElementById("initialInput");
var goBack = document.getElementById("goBack");
var clearScore = document.getElementById("clearScore");

var highscorePage = document.getElementById("highScorePage");
var wrapPage = document.getElementById("wrapPage");
var initialsPage = document.getElementById("initialsPage");
var quizPage = document.getElementById("quizPage");

let pageArray = [highScore, wrapPage, initialsPage, quizPage];

/****Timer Start */
startButton.addEventListener("click", runTime)


/***Hide Pages */
function hidePages() {
    for (let i = 0; i < pageArray.length; i++) {
        if (!pageArray[i].classList.contains('hide')) {
            pageArray[i].classList.add('hide');
        }
    }
}


function runTime() {
    hidePages();
    quizPage.classList.remove('hide');
}