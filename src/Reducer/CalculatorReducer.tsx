import { CalculatorAction } from "../actions/CalculatorAction";
import {
  CalculatorState,
  initCalculatorState,
} from "../Context/CalculatorContext";

export const CalculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction
) => {
  switch (action.type) {
    case "digit": {
      let newState = { ...state };
      if (state.display === "Can't divine 0") {
        newState = {
          ...initCalculatorState,
          display: action.payload.digit.toString(),
        };
      }
      let newDisplay = newState.display;
      // if (
      //   (state.display === "0" && action.payload.digit === 0) ||
      //   state.display.length > 12
      // ) {
      //   return newState;
      // }
      if (state.waitingForOperand) {
        newDisplay = "";
        newState.waitingForOperand = false;
      }
      if (state.display !== "0") {
        newDisplay = newDisplay + action.payload.digit.toString();
      } else {
        newDisplay = action.payload.digit.toString();
      }

      return { ...newState, display: newDisplay };
    }
    case "operator": {
      let newState = { ...state };
      if (state.display === "Can't divine 0") {
        newState = { ...initCalculatorState };
      } else {
        newState = { ...state };
      }
      let operand = Number(newState.display);

      if (
        typeof newState.pendingOperator !== "undefined" &&
        !newState.waitingForOperand
      ) {
        switch (newState.pendingOperator) {
          case "+":
            newState.result += operand;
            // newState.display = newState.result.toString().slice(0, 12);
            newState.display = newState.result.toString();
            break;
          case "-":
            newState.result -= operand;
            // newState.display = newState.result.toString().slice(0, 12);
            newState.display = newState.result.toString();
            break;
          case "×":
            newState.result *= operand;
            // newState.display = newState.result.toString().slice(0, 12);
            newState.display = newState.result.toString();
            break;
          case "÷":
            if (operand === 0) {
              newState.display = "Can't divine 0";
              newState.result = 0;
            } else newState.result /= operand;
        }
      } else {
        newState.result = operand;
        // newState.display = newState.result.toString().slice(0, 12);
        newState.display = newState.result.toString();
      }
      return {
        ...newState,
        pendingOperator: action.payload.operator,
        waitingForOperand: true,
      };
    }
    case "equal": {
      let newState = { ...state };
      let operand = Number(newState.display);
      if (operand === NaN) {
        operand = 0;
      }
      if (
        typeof newState.pendingOperator !== "undefined" &&
        !newState.waitingForOperand
      ) {
        switch (newState.pendingOperator) {
          case "+":
            newState.result += operand;
            // newState.display = newState.result.toString().slice(0, 12);
            newState.display = newState.result.toString();
            break;
          case "-":
            newState.result -= operand;
            // newState.display = newState.result.toString().slice(0, 12);
            newState.display = newState.result.toString();
            break;
          case "×":
            newState.result *= operand;
            // newState.display = newState.result.toString().slice(0, 12);
            newState.display = newState.result.toString();
            break;
          case "÷":
            if (operand === 0) {
              newState.result = 0;
              newState = { ...initCalculatorState, display: "Can't divine 0" };
            } else {
              newState.result /= operand;
              // newState.display = newState.result.toString().slice(0, 12);
              newState.display = newState.result.toString();
            }
        }

        newState.pendingOperator = undefined;
      } else {
        newState.display = operand.toString();
      }
      return {
        ...newState,
        waitingForOperand: true,
      };
    }
    case "sign": {
      let newState = { ...state };
      const value = Number(newState.display);

      if (value > 0) {
        newState.display = "-" + newState.display;
      } else {
        newState.display = newState.display.substring(1);
      }
      return newState;
    }
    case "point": {
      let newState = { ...state };
      let newDisplay = newState.display;
      if (newState.waitingForOperand) {
        newDisplay = "0";
      }
      if (newDisplay.indexOf(".") === -1) {
        newDisplay = newDisplay + ".";
      }
      return { ...newState, display: newDisplay, waitingForOperand: false };
    }
    case "back": {
      let newState = { ...state };

      return { ...newState, display: newState.display.slice(0, -1) };
    }
    default:
      return initCalculatorState;
  }
};

export default CalculatorReducer;
