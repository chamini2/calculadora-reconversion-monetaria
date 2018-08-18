import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

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
  render() {
    return (
      <div className="component-display">
        <p>{this.props.message}</p>
        <div>
          {thousandsSeparators(this.props.value)}
          <div className={this.props.cursor ? "cursor" : ""}></div>
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
  message: PropTypes.string,
  cursor: PropTypes.bool
};
export default Display;
