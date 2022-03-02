/* Addition function */
function calculateSum(event) {
  event.preventDefault();
  let addition1 = document.querySelector("#addition1");
  let addition2 = document.querySelector("#addition2");
  let additionAnswer = Number(addition1.value) + Number(addition2.value);
  let sum = document.querySelector("#sum");

  if (addition1.value.length >= 1 && addition2.value.length >= 1) {
    sum.value = additionAnswer;
  } else if (addition1.value == "" || addition2.value == "") {
    alert("Please enter the missing value.");
  }
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

  if (subtraction1.value.length >= 1 && subtraction2.value.length >= 1) {
    difference.value = subtractionAnswer;
  } else if (subtraction1.value == "" || subtraction2.value == "") {
    alert("Please enter the missing value.");
  }
}

let subtractionEquals = document.querySelector("#subtractionEquals");
subtractionEquals.addEventListener("click", calculateDifference);

/*Multiplication function */
function calculateProduct(event) {
  event.preventDefault();
  let multiplication1 = document.querySelector("#multiplication1");
  let multiplication2 = document.querySelector("#multiplication2");
  let multiplicationAnswer =
    Number(multiplication1.value) * Number(multiplication2.value);
  let product = document.querySelector("#product");

  if (multiplication1.value.length >= 1 && multiplication2.value.length >= 1) {
    product.value = multiplicationAnswer;
  } else if (multiplication1.value == "" || multiplication2.value == "") {
    alert("Please enter the missing value.");
  }
}

let multiplicationEquals = document.querySelector("#multiplicationEquals");
multiplicationEquals.addEventListener("click", calculateProduct);

/*Division function */
function calculateQuotient(event) {
  event.preventDefault();
  let division1 = document.querySelector("#division1");
  let division2 = document.querySelector("#division2");
  let divisionAnswer = Number(division1.value) / Number(division2.value);
  let quotient = document.querySelector("#quotient");

  if (division1.value.length >= 1 && division2.value.length >= 1) {
    quotient.value = divisionAnswer;
  } else if (division1.value == "" || division2.value == "") {
    alert("Please enter the missing value.");
  }
}

let divisionEquals = document.querySelector("#divisionEquals");
divisionEquals.addEventListener("click", calculateQuotient);
