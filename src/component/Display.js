import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        <p>{this.props.message}</p>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
  message: PropTypes.string
};
export default Display;
