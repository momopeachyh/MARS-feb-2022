let button = document.querySelector("#button");
// button.addEventListener("click", handleClick);

let question = document.querySelector("#questionCard");
const card = document.querySelector("#card");

function showFeedback() {
  const questionGuess = document.querySelector("#formSelect").value;
  const correctAlert = document.querySelector("#correctFeedback");
  const incorrectAlert = document.querySelector("#incorrectFeedback");
  if (questionGuess === "correct") {
    card.classList.remove("incorrect");
    card.classList.add("correct");
    correctAlert.classList.remove("hidden");
    incorrectAlert.classList.add("hidden");
  } else if (questionGuess === "incorrect") {
    card.classList.remove("correct");
    card.classList.add("incorrect");
    incorrectAlert.classList.remove("hidden");
    correctAlert.classList.add("hidden");
  }
}

function handleClick(event) {
  // event.preventDefault();
  // questionCard.classList.add("hidden");
  showFeedback();
}
