var timeEl = document.querySelector("badge badge-light");

var secondsLeft = 180;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage("Game is over");
    }

  }, 1000);
}
setTime();