// Declare variables
const button = document.querySelector("#button");
button.addEventListener("click", handleClick);

let name = document.querySelector("#name");
let id = document.querySelector("#empId");
let startDate = document.querySelector("#date");
let hours = document.querySelector("#hours");
let title = document.querySelector("#title");

// Set max date to today's date
setMaxDate();

function setMaxDate() {
  const now = new Date();
  let year = String(now.getFullYear());
  let month = String(now.getMonth() + 1);
  if (month < 10) {
    month = `0${month}`;
  }
  let date = String(now.getDate());
  if (date < 10) {
    date = `0${date}`;
  }
  let maxDate = `${year}-${month}-${date}`;
  startDate.setAttribute("max", maxDate);
}

function handleData() {
  // Create class from form input data
  class Employee {
    #name;
    #id;
    #startDate;
    #hours;
    #title;
    constructor(name, id, startDate, hours, title) {
      this.#name = name.value;
      this.#id = id.value;
      this.#startDate = startDate.value;
      this.#hours = hours.value;
      this.#title = title.value;
    }
    get name() {
      return this.#name;
    }
    // set name(name) {
    //   if (name.value == "") {
    //     throw new Error("Name field cannot be empty.");
    //   }
    // }
    get id() {
      return this.#id;
    }
    //   set id(id) {
    // if (name.value == "") {
    //   throw new Error("ID field cannot be empty.");
    // }
    //   }
    get startDate() {
      return this.#startDate;
    }
    //     set startDate(startDate) {
    //   if (startDate.value == "") {
    //     throw new Error("Start date field cannot be empty.");
    //   }
    // }
    get hours() {
      return this.#hours;
    }
    //     set hours(hours) {
    //   if (hours.value == "") {
    //     throw new Error("Hours field cannot be empty.");
    //   }
    // }
    get title() {
      return this.#title;
    }
  }
  //       set title(title) {
  //     if (title.value == "") {
  //       throw new Error("Title field cannot be empty.");
  //     }
  // }

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

// Confirm form submission
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
