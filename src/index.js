import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-69937814-2');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));
