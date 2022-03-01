/* Addition function */

function calculateSum(event) {
  event.preventDefault();
  let addition1 = document.querySelector("#addition1");
  let addition2 = document.querySelector("#addition2");
  let additionAnswer = Number(addition1.value) + Number(addition2.value);
  let sum = document.querySelector("#sum");
  sum.value = additionAnswer;
}

let additionEquals = document.querySelector("#additionEquals");
additionEquals.addEventListener("click", calculateSum);
