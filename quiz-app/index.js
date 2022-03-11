// Question 1
const card1 = document.querySelector("#card1");

function showFeedback1() {
  const questionGuess = document.querySelector("#formSelect1").value;
  const correctAlert = document.querySelector("#correctFeedback1");
  const incorrectAlert = document.querySelector("#incorrectFeedback1");

  // Display "correct" feedback and change border color to green
  if (questionGuess === "correct") {
    card1.classList.remove("incorrect");
    card1.classList.add("correct");
    correctAlert.classList.remove("hidden");
    incorrectAlert.classList.add("hidden");

    // Display "incorrect" feedback and change border color to red
  } else if (questionGuess === "incorrect") {
    card1.classList.remove("correct");
    card1.classList.add("incorrect");
    incorrectAlert.classList.remove("hidden");
    correctAlert.classList.add("hidden");
  }
}

function handleClick1() {
  // questionCard.classList.add("hidden");
  showFeedback1();
}

// Question 2
const card2 = document.querySelector("#card2");

function showFeedback2() {
  const questionGuess = document.querySelector("#formSelect2").value;
  const correctAlert = document.querySelector("#correctFeedback2");
  const incorrectAlert = document.querySelector("#incorrectFeedback2");

  // Display "correct" feedback and change border color to green
  if (questionGuess === "correct") {
    card2.classList.remove("incorrect");
    card2.classList.add("correct");
    correctAlert.classList.remove("hidden");
    incorrectAlert.classList.add("hidden");

    // Display "incorrect" feedback and change border color to red
  } else if (questionGuess === "incorrect") {
    card2.classList.remove("correct");
    card2.classList.add("incorrect");
    incorrectAlert.classList.remove("hidden");
    correctAlert.classList.add("hidden");
  }
}

function handleClick2() {
  showFeedback2();
}
