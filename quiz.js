// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const initialsButton = document.getElementById("initialsButton");
const goBack = document.getElementById("goBack");

// create our questions
let questions = [
    {
        question: "How old was Nicholas Flamel when he decided to destroy the Sorcerer's Stone?",
        choiceA: "665",
        choiceB: "682",
        choiceC: "865",
        correct: "A"
    }, {
        question: "Dumbledore has a scar above his left knee that is a perfect map of what?",
        choiceA: "Diagon Alley",
        choiceB: "The London Underground",
        choiceC: "King's Cross Station",
        correct: "B"
    }, {
        question: "Where does Vernon Dursley work?",
        choiceA: "Mason Drilling Company",
        choiceB: "Droonings",
        choiceC: "Grunnings",
        correct: "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 45;
const quizTime = 45; // 45s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / quizTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    title.style.display = "none";
    subtitle.style.display = "none";
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= quizTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--;
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            answerIsWrong();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }
    if
        // answer is wrong
        // change progress color to red
        //subtract time
        (answer != questions[runningQuestion].correct) {
        count--;

        answerIsWrong();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";
    initialsButton.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";

    localStorage.setItem("scorePerCent", scorePerCent);
}

//enter initials
function showInput() {
    initialInput.style.display = "block";
}

function container() {
    container.style.display = "none";
}
initialsButton.addEventListener("click", showInput);

var initialInput = document.querySelector("#initialInput");
var nameInput = document.querySelector("#nameInput");
var enter = document.querySelector("#enter");
var userScore = document.querySelector("#savedScores");
var highScore = document.querySelector("#highScore");
var savedScores = document.querySelector("#savedScores");
var msgDiv = document.querySelector("#msg");

enter.addEventListener("click", function (event) {
    event.preventDefault();

    var nameInput = document.querySelector("#nameInput").value;

    function displayMessage(type, message) {
        msgDiv.textContent = message;
        msgDiv.setAttribute("class", type);
    }

    if (nameInput === "") {
        displayMessage("error", "Field cannot be blank");
    } else {
        displayMessage("success", "Your score has been saved");

        localStorage.setItem("nameInput", nameInput);
    }
});

//high score click, hide other pages, show high scores

viewScore.addEventListener("click", openScore);

function openScore() {
    var userInitials = localStorage.getItem("nameInput");
    var userScore = localStorage.getItem("scorePerCent");
    document.getElementById("savedScores").textContent= userInitials + userScore;
    console.log("userScore",userScore )
    console.log("userInitials", userInitials)
    start.style.display = "none";
    title.style.display = "none";
    subtitle.style.display = "none";
    highScore.style.display = "block";
    initialInput.style.display = "none";
    enter.style.display = "none";
    quiz.style.display = "none";
    question.style.display = "none";
    choices.style.display = "none";
    timer.style.display = "none";
    progress.style.display = "none";
}

//go back button
goBack.addEventListener("click", goBackButton);

function goBackButton() {
    history.go(0);
}
    
