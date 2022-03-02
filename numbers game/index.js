let luckyNumber = 15;
let guessInput = document.querySelector("#guessInput");
let guessCount = 0;

function guessResponse(event) {
  event.preventDefault();
  guessCount++;
  if (guessInput.value == luckyNumber) {
    alert(`Correct! You guessed the lucky number in ${guessCount} tries!`);
    guessCount = 0;
  } else if (guessInput.value > 20) {
    alert("Please guess between 0 and 20.");
  } else {
    alert("Incorrect. Please guess again.");
  }
  guessInput.value = "";
}

let checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", guessResponse);
