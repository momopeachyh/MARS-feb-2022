import React from "react";
import "./Operator.css";

class Division extends React.Component {
  constructor() {
    super();
    this.state = {
      product: "",
    };
  }
  render() {
    return (
      <div className="Division">
        <form>
          <input
            type="number"
            id="divide1"
            onChange={this.calcQuotient}
          ></input>
          <button className="button">÷</button>
          <input
            type="number"
            id="divide2"
            onChange={this.calcQuotient}
          ></input>
          <input type="submit" value="=" className="button"></input>
          <input type="text" value={this.state.quotient}></input>
        </form>
      </div>
    );
  }

  calcQuotient = () => {
    let divide1 = document.getElementById("divide1").value;
    let divide2 = document.getElementById("divide2").value;
    let quotient = Number(divide1) / Number(divide2);
    this.setState({ quotient: quotient });
  };
}

export default Division;
