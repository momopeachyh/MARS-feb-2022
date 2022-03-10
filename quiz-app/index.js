let button = document.querySelector("#button");
button.addEventListener("click", handleClick);

let question = document.querySelector("#questionCard");

function handleClick(event) {
  event.preventDefault();
  questionCard.classList.add("hidden");
}
