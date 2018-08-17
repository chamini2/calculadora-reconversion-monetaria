import Big from "big.js";

import isNumber from "./isNumber";

/**
 * Given an input and rate, return the conversion.
 */
export function conversion(input, rate) {
  const result = Big(input || 0).mul(Big(rate || 1));
  return result.toString()
}

/**
 * Given a button name and a calculator state, return an updated state.
 */
export function calculateNewState(state, buttonName) {
  if (buttonName === "LIMPIAR") {
    return { ...state, input: null };
  }

  if (buttonName === "BORRAR") {
    if (state.input) {
      if (state.input.length > 1) {
        return { ...state, input: state.input.substr(0, state.input.length - 1) };
      }
      return { ...state, input: null };
    }
  }

  if (buttonName === "CAMBIAR") {
    return { ...state, way: !state.way }
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && state.input === "0") {
      return { ...state, input: null };
    }
    if (!state.input || state.input === "0") {
      return { ...state, input: buttonName };
    }
    return { ...state, input: state.input + buttonName };
  }

  if (buttonName === ".") {
    if (state.input) {
      if (state.input.includes(".")) {
        // ignore a . if the next number already has one
        return state;
      }
      return { ...state, input: state.input + "." };
    }
    return { ...state, input: "0." };
  }

  console.warn("Invalid button", buttonName);
  return state;
}
