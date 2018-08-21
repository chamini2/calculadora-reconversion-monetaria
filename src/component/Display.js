import React from "react";
import PropTypes from "prop-types";

import "./Display.css";
import { SWITCH_BUTTON } from "./ButtonPanel";

function thousandsSeparators(numberStr) {
  var x = numberStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1,$2');
  }
  return x1 + x2;
}

class Display extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.cursor ? "" : SWITCH_BUTTON)
  };

  render() {
    return (
      <div onClick={this.handleClick} className="component-display">
        <div className="message">{this.props.message}</div>
        <div className={"cursor " + (this.props.cursor ? "active" : "")}></div>
        <div className="value">{thousandsSeparators(this.props.value)}</div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
  message: PropTypes.string,
  cursor: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default Display;
