const button = document.querySelector("#submitButton");
const name = document.querySelector("#name");
const id = document.querySelector("#empId");
const startDate = document.querySelector("#date");
const hours = document.querySelector("#hours");
const title = document.querySelector("#title");

button.addEventListener("click", handleClick);

// Create new object from form data
function createObject(object) {
  const employee = new Object();
  employee.name = name.value;
  employee.id = id.value;
  employee.startDate = startDate.value;
  employee.hours = hours.value;
  employee.title = title.value;
  console.log(employee);
}

// Alert for form submission
function handleClick(event) {
  event.preventDefault();
  alert("Thank you. The form has been submitted.");
  createObject();
}
