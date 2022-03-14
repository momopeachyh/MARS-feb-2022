const questionList = [
  {
    questNo: 1,
    questText: "How do you say 'the horse' in German?",
    a: "die Katze",
    b: "der Hirsch",
    c: "das Pferd",
    d: "die Spinne",
    correct: "das Pferd",
  },
  {
    questNo: 2,
    questText: "How do you say 'the cat' in German?",
    a: "die Fledermaus",
    b: "die Katze",
    c: "die Spinne",
    d: "der Hirsch",
    correct: "die Katze",
  },
  {
    questNo: 3,
    questText: "How do you say 'the squirrel' in German?",
    a: "das Eichhörnchen",
    b: "der Hund",
    c: "der Vogel",
    d: "die Fledermaus",
    correct: "das Eichhörnchen",
  },
  {
    questNo: 4,
    questText: "How do you say 'the spider' in German?",
    a: "die spinne",
    b: "der Schlange",
    c: "die Fledermaus",
    d: "der Vogel",
    correct: "die Spinne",
  },
  {
    questNo: 5,
    questText: "How do you say 'the bat' in German?",
    a: "der Schlange",
    b: "der Hund",
    c: "der Vogel",
    d: "die Fledermaus",
    correct: "die Fledermaus",
  },
];

const [quest1, quest2, quest3, quest4, quest5] = questionList;

const placeholderQuest = document.querySelector("#questText");
const ansA = document.querySelector("#a");
const ansB = document.querySelector("#b");
const ansC = document.querySelector("#c");
const ansD = document.querySelector("#d");
const questContainer = document.querySelector("#questContainer");
const correctAlert = document.querySelector("#correctFeedback");
const incorrectAlert = document.querySelector("#incorrectFeedback");

let counter = 0;

function showQuestion(question) {
  placeholderQuest.innerHTML = `${question.questNo}. ${question.questText}`;
  ansA.innerHTML = question.a;
  ansB.innerHTML = question.b;
  ansC.innerHTML = question.c;
  ansD.innerHTML = question.d;

  // Add value property to answer buttons
  ansA.setAttribute("value", question.a);
  ansB.setAttribute("value", question.b);
  ansC.setAttribute("value", question.c);
  ansD.setAttribute("value", question.d);

  // Increment counter
  counter++;

  function showFeedback() {
    const ansCorrect = question.correct;
    const ansGuessed = this.value;

    // Show feedback and change styling
    if (ansGuessed == ansCorrect) {
      correctAlert.classList.remove("hidden");
      incorrectAlert.classList.add("hidden");
      questContainer.classList.remove("incorrect");
      questContainer.classList.add("correct");
    } else {
      incorrectAlert.classList.remove("hidden");
      correctAlert.classList.add("hidden");
      questContainer.classList.remove("correct");
      questContainer.classList.add("incorrect");
    }
  }

  // Hide feedback and reset styling for next question
  function resetStyling() {
    correctAlert.classList.add("hidden");
    incorrectAlert.classList.add("hidden");
    questContainer.classList.remove("incorrect");
    questContainer.classList.remove("correct");
  }

  resetStyling();

  ansA.addEventListener("click", showFeedback);
  ansB.addEventListener("click", showFeedback);
  ansC.addEventListener("click", showFeedback);
  ansD.addEventListener("click", showFeedback);
}

function startQuiz() {
  showQuestion(questionList[counter]);
}

startQuiz();
