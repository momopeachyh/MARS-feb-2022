let luckyNumber = 15;
let guessInput = document.querySelector("#guessInput");
let guessCount = 0;

function guessResponse(event) {
  event.preventDefault();
  guessCount++;
  if (guessInput.value == luckyNumber) {
    alert(`Correct! You guessed the lucky number in ${guessCount} tries!`);
  } else {
    alert("Incorrect. Please guess again.");
  }
}

let checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", guessResponse);
