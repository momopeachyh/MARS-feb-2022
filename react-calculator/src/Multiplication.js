import React from "react";
import "./Operator.css";

class Multiplication extends React.Component {
  constructor() {
    super();
    this.state = {
      product: "",
    };
  }
  render() {
    return (
      <div className="Multiplication">
        <form>
          <input
            type="number"
            id="multiply1"
            onChange={this.calcProduct}
          ></input>
          <button className="button">x</button>
          <input
            type="number"
            id="multiply2"
            onChange={this.calcProduct}
          ></input>
          <input type="submit" value="=" className="button"></input>
          <input type="text" value={this.state.product}></input>
        </form>
      </div>
    );
  }

  calcProduct = () => {
    let multiply1 = document.getElementById("multiply1").value;
    let multiply2 = document.getElementById("multiply2").value;
    let product = Number(multiply1) * Number(multiply2);
    this.setState({ product: product });
  };
}

export default Multiplication;
