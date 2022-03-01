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

/*Subtraction function */
function calculateDifference(event) {
  event.preventDefault();
  let subtraction1 = document.querySelector("#subtraction1");
  let subtraction2 = document.querySelector("#subtraction2");
  let subtractionAnswer =
    Number(subtraction1.value) - Number(subtraction2.value);
  let difference = document.querySelector("#difference");
  difference.value = subtractionAnswer;
}

let subtractionEquals = document.querySelector("#subtractionEquals");
subtractionEquals.addEventListener("click", calculateDifference);
