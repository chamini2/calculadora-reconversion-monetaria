import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import { calculateNewState, conversion, wayToRate } from "../logic/calculate";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      way: true
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculateNewState(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <div className={"inputs " + (this.state.way ? "" : "reverse")}>
          <Display message={this.state.way ? "Bs" : "BsS"} value={this.state.input || "0"} cursor />
          <Display message={this.state.way ? "BsS" : "Bs"} value={conversion(this.state.input, wayToRate(this.state.way))} />
        </div>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
