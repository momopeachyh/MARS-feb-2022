const button = document.querySelector("#button");
button.addEventListener("click", handleClick);

function handleData() {
  let name = document.querySelector("#name").value;
  let id = document.querySelector("#empId").value;
  let startDate = document.querySelector("#date").value;
  let hours = document.querySelector("#hours").value;
  let title = document.querySelector("#title").value;

  class Employee {
    #name;
    #id;
    #startDate;
    #hours;
    #title;
    constructor(name, id, startDate, hours, title) {
      this.#name = name;
      this.#id = id;
      this.#startDate = startDate;
      this.#hours = hours;
      this.#title = title;
    }
    get name() {
      return this.#name;
    }
    get id() {
      return this.#id;
    }
    get startDate() {
      return this.#startDate;
    }
    get hours() {
      return this.#hours;
    }
    get title() {
      return this.#title;
    }
  }

  let employee = new Employee(name, id, startDate, hours, title);

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

//   Confirm form submission
function confirmSubmission() {
  const formContainer = document.querySelector("#formContainer");
  formContainer.innerHTML = `The form has been submitted.`;
}

// Handle click event
function handleClick(event) {
  event.preventDefault();
  handleData();
  confirmSubmission();
}
