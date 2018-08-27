import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import { calculateNewState, conversion, wayToRate } from "../logic/calculate";
import "./App.css";
import NumberKeyHandler from './NumberKeyHandler';

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
      <div className="app">
        <div className="calculator-app">
          <NumberKeyHandler keyHandler={this.handleClick} />
          <div className={"inputs " + (this.state.way ? "" : "reverse")}>
            <Display clickHandler={this.handleClick} message={this.state.way ? "Bs" : "BsS"} value={this.state.input || "0"} cursor />
            <Display clickHandler={this.handleClick} message={this.state.way ? "BsS" : "Bs"} value={conversion(this.state.input, wayToRate(this.state.way))} />
          </div>
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
