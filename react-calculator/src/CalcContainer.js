import React from "react";
import "./CalcContainer.css";
import Addition from "./Addition.js";
import Subtraction from "./Subtraction.js";
import Multiplication from "./Multiplication.js";
import Division from "./Division.js";

class CalcContainer extends React.Component {
  render() {
    return (
      <div className="CalcContainer">
        <Addition />
        <Subtraction />
        <Multiplication />
        <Division />
      </div>
    );
  }
}

export default CalcContainer;
