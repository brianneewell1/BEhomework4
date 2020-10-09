let questions = [
    question1 = {
        Question: "What is my name?",
        choiceA: "correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
        }
    question2 = {
        Question: "What is my name?",
        choiceA: "wrong",
        choiceB : "Wrong",
        choiceC : "correct",
        correct : "C"
    }
    question3 = {
        Question: "What is my name?",
        choiceA: "wrong",
        choiceB : "Wrong",
        choiceC : "correct",
        correct : "C"
]

const lastQuestion = questions.length -1;
let runningQuestion = 0;

/***Render a Question */
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

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
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", runTime);

/***Hide Pages */
function hidePages(pageArray: []) {
    var x = document.getElementById("highscorePage");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/***Timer */
function runTime() {
    hidePages();
    quizPage.classList.remove('hide');
}

var timeEl = document.getElementById("time");
var secondsLeft = 180;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage("Time is up");
    }

  }, 1000);
}