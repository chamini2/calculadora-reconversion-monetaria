import Big from "big.js";

import { BACKSPACE_BUTTON, CLEAR_BUTTON, SWITCH_BUTTON } from "../component/ButtonPanel";
import isNumber from "./isNumber";

/**
 * Given an input and rate, return the conversion.
 */
export function conversion(input, rate) {
  const result = Big(input || 0).mul(Big(rate || 1));
  return result.toString()
}

export function wayToRate(way) {
  return way ? 0.00001 : 100000;
}

/**
 * Given a button name and a calculator state, return an updated state.
 */
export function calculateNewState(state, buttonName) {
  if (buttonName === CLEAR_BUTTON) {
    return { ...state, input: null };
  }

  if (buttonName === BACKSPACE_BUTTON) {
    if (state.input) {
      if (state.input.length > 1) {
        return { ...state, input: state.input.substr(0, state.input.length - 1) };
      }
      return { ...state, input: null };
    }
  }

  if (buttonName === SWITCH_BUTTON) {
    return { input: conversion(state.input, wayToRate(state.way)), way: !state.way }
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
