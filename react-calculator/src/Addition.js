import React from "react";

class Addition extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: "",
      num2: "",
      answer: "",
    };
  }
  render() {
    return (
      <div className="Addition">
        <form>
          <input
            type="number"
            onChange={(event) => this.updateInputValue1(event)}
          ></input>
          <button>+</button>
          <input
            type="number"
            onChange={(event) => this.updateInputValue2(event)}
          ></input>
          <input type="submit" value="=" onClick={this.sayHi}></input>
          <input type="text" value={this.state.answer}></input>
        </form>
      </div>
    );
  }

  // getNumber = (event) => {
  //   // event.preventDefault();
  //   this.setState({ num1: event.target.value });
  // };

  updateInputValue1(event) {
    const updatedNum1 = event.target.value;
    this.setState({ num1: updatedNum1 });
  }

  updateInputValue2(event) {
    const updatedNum2 = event.target.value;
    this.setState({ num2: updatedNum2 });
  }

  sayHi = (event) => {
    event.preventDefault();
    console.log(this.num1, this.num2);
    this.setState({ answer: "hi" });
  };
}

export default Addition;

//   render() {
//     return (
//       // ...
//       <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
//       // ...
//     );
//   },

//   updateInputValue(evt) {
//     const val = evt.target.value;
//     // ...
//     this.setState({
//       inputValue: updatedInputValue
//     });
//   }
// });
