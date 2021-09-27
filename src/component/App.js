import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";
import NumberKeyHandler from './NumberKeyHandler';
import { calculateNewState, conversion, wayToRate } from "../logic/calculate";

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
            {/* NOTE We always receive input in the first Display and just flip them and every calculation when "switching" inputs */}
            <Display clickHandler={this.handleClick} message={this.state.way ? "BsD" : "BsS"} value={this.state.input || "0"} cursor small={!this.state.way} />
            <Display clickHandler={this.handleClick} message={this.state.way ? "BsS" : "BsD"} value={conversion(this.state.input, wayToRate(this.state.way))} small={this.state.way} />
          </div>
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
        {/* <Menu></Menu> */}
      </div>
    );
  }
}

export default App;
