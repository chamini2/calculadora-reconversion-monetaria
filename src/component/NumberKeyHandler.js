import React from "react";
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import isNumber from "../logic/isNumber";
import { BACKSPACE_BUTTON, SWITCH_BUTTON } from "./ButtonPanel";

class NumberKeyHandler extends React.Component {
    handleKey = ({ key }) => {
        console.log(key);
        if (isNumber(key)) {
            this.props.keyHandler(key);
        } else if (key === "Backspace") {
            this.props.keyHandler(BACKSPACE_BUTTON);
        } else if (key === "." || key === ",") {
            this.props.keyHandler(".");
        } else if (key === "Tab") {
           this.props.keyHandler(SWITCH_BUTTON);
        }
    };

    render() {
        return (
            <span style={{display: "none"}}>
                <KeyHandler keyEventName={KEYPRESS} keyValue="0" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="1" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="2" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="3" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="4" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="5" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="6" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="7" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="8" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="9" onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="." onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="," onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyCode={8} onKeyHandle={this.handleKey} />
                <KeyHandler keyEventName={KEYPRESS} keyCode={9} onKeyHandle={this.handleKey} />
            </span>
        );
    }
}

export default NumberKeyHandler;