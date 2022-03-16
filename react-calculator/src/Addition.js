import React from "react";

class Addition extends React.Component {
  constructor() {
    super();
    this.state = {
      // num1: "",
      // num2: "",
      sum: "",
    };
  }
  render() {
    return (
      <div className="Addition">
        <form>
          <input type="number" id="add1" onChange={this.getNumbers}></input>
          <button>+</button>
          <input type="number" id="add2" onChange={this.getNumbers}></input>
          <input type="submit" value="=" onClick={this.sayHi}></input>
          <input type="text" value={this.state.sum}></input>
        </form>
      </div>
    );
  }

  getNumbers = () => {
    let add1 = document.getElementById("add1").value;
    let add2 = document.getElementById("add2").value;
    let sum = Number(add1) + Number(add2);
    this.setState({ sum: sum });
  };
}

export default Addition;
