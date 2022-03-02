let luckyNumber = 15;
let guessInput = document.querySelector("#guessInput");

function guessResponse(event) {
  if (guessInput.value == luckyNumber) {
    alert("Correct! You guessed the lucky number!");
  } else {
    alert("Incorrect. Please guess again.");
  }
}

let checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", guessResponse);
