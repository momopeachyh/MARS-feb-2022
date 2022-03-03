let luckyNumber = 1;
let guessInput = document.querySelector("#guessInput");
let guessCount = 0;

function guessResponse(event) {
  event.preventDefault();
  guessCount++;
  if (guessInput.value == "") {
    alert("Please enter a value.");
    guessCount = 0;
  }
  if (guessInput.value == luckyNumber && guessCount == 1) {
    alert(`Correct! You guessed the lucky number on your first try.`);
    guessCount = 0;
  } else if (guessInput.value == luckyNumber && guessCount !== 1) {
    alert(`Correct! You guessed the lucky number in ${guessCount} tries.`);
    guessCount = 0;
  } else if (guessInput.value > 10) {
    alert("Please guess between 1 and 10.");
  } else if (guessInput.value !== "") {
    alert("Incorrect. Please guess again.");
  }
  guessInput.value = "";
}

let checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", guessResponse);
