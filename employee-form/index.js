const button = document.querySelector("button");
const name = document.querySelector("#name");
const id = document.querySelector("#empId");
const startDate = document.querySelector("#date");
const hours = document.querySelector("#hours");
const title = document.querySelector("#title");

button.addEventListener("click", handleClick);

function handleData() {
  // Create new object from form data
  let employee = new Object();
  employee.name = name.value;
  employee.id = id.value;
  employee.startDate = startDate.value;
  employee.hours = hours.value;
  employee.title = title.value;
  console.log(employee);

  // Calculate salary
  let rate = null;
  if (employee.title === "manager") {
    rate = 90;
  } else if (employee.title === "consultant") {
    rate = 70;
  } else if (employee.title === "trainee") {
    rate = 45;
  }
  const salary = employee.hours * rate;

  // Display salary
  const salaryAlert = document.querySelector("#salaryAlert");
  salaryAlert.innerHTML = `${employee.name}, who is a ${employee.title}, will earn $${salary}.`;
  salaryAlert.classList.add("display");

  // Clear data after submission
  employee = {};
}

// Confirm form submission
function confirmSubmission() {
  const formContainer = document.querySelector("#formContainer");
  formContainer.innerHTML = `The form has been submitted.`;
}

// Handle click event
function handleClick(event) {
  event.preventDefault();
  confirmSubmission();
  handleData();
}
