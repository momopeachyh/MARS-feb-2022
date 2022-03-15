import React from "react";
import "./CalcContainer.css";
import Addition from "./Addition.js";

class CalcContainer extends React.Component {
  render() {
    return (
      <div className="CalcContainer">
        <Addition />
      </div>
    );
  }
}

export default CalcContainer;
