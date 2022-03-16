import React from "react";
import "./Operator.css";

class Addition extends React.Component {
  constructor() {
    super();
    this.state = {
      sum: "",
    };
  }
  render() {
    return (
      <div className="Addition">
        <form>
          <input type="number" id="add1" onChange={this.calcSum}></input>
          <button className="button">+</button>
          <input type="number" id="add2" onChange={this.calcSum}></input>
          <input type="submit" value="=" className="button"></input>
          <input type="text" value={this.state.sum}></input>
        </form>
      </div>
    );
  }

  calcSum = () => {
    let add1 = document.getElementById("add1").value;
    let add2 = document.getElementById("add2").value;
    let sum = Number(add1) + Number(add2);
    this.setState({ sum: sum });
  };
}

export default Addition;
