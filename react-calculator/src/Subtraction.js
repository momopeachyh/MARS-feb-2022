import React from "react";
import "./Operator.css";

class Subtraction extends React.Component {
  constructor() {
    super();
    this.state = {
      difference: "",
    };
  }
  render() {
    return (
      <div className="Subtraction">
        <form>
          <input
            type="number"
            id="subtract1"
            onChange={this.calcDifference}
          ></input>
          <button className="button">-</button>
          <input
            type="number"
            id="subtract2"
            onChange={this.calcDifference}
          ></input>
          <input type="submit" value="=" className="button"></input>
          <input type="text" value={this.state.difference}></input>
        </form>
      </div>
    );
  }

  calcDifference = () => {
    let subtract1 = document.getElementById("subtract1").value;
    let subtract2 = document.getElementById("subtract2").value;
    let difference = Number(subtract1) - Number(subtract2);
    this.setState({ difference: difference });
  };
}

export default Subtraction;
