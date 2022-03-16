import React from "react";
import "./CalcContainer.css";
import Addition from "./Addition.js";
import Subtraction from "./Subtraction.js";

class CalcContainer extends React.Component {
  render() {
    return (
      <div className="CalcContainer">
        <Addition />
        <Subtraction />
      </div>
    );
  }
}

export default CalcContainer;
