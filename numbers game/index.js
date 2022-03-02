// let luckyNumber = 1;
// let guessInput = document.querySelector("#guessInput");
let guessCount = 12;

// function guessResponse(event) {
//   event.preventDefault();
//   guessCount++;
//   if (guessInput.value == luckyNumber) {
//     alert(`Correct! You guessed the lucky number in ${guessCount} tries.`);
//     guessCount = 0;
//   } else if (guessInput.value > 10) {
//     alert("Please guess between 1 and 10.");
//   } else {
//     alert("Incorrect. Please guess again.");
//   }
//   guessInput.value = "";
// }

// let checkButton = document.querySelector("#checkButton");
// checkButton.addEventListener("click", guessResponse);

for (let i = 0; i < 10; i++) {
  guessCount++;
  console.log(guessCount);
}

// function howMany(selectObject) {
//   let numberSelected = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }
