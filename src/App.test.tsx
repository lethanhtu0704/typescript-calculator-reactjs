import React, { useReducer } from "react";

import * as Context from "./Context/CalculatorContext";
import * as Reducer from "./Reducer/CalculatorReducer";
import { render, fireEvent, cleanup, getByText } from "@testing-library/react";
import { CalculatorAction } from "./actions/CalculatorAction";
import App from "./App";
import Screen from "./components/DisplayScreen";

//import CalculatorReducer from "./Reducer/CalculatorReducer";

afterEach(cleanup);

describe("test the calculator reducer and actions", () => {
  it("should return the initial state", () => {
    expect(Context.initCalculatorState).toEqual({
      result: 0,
      display: "0",
      waitingForOperand: true,
      pendingOperator: undefined,
    });
  });

  it("should change display into 1, waitingForOperand into false ", () => {
    expect(
      Reducer.CalculatorReducer(Context.initCalculatorState, {
        type: "digit",
        payload: { digit: 1 },
      })
    ).toEqual({
      ...Context.initCalculatorState,
      display: "1",
      waitingForOperand: false,
    });
  });

  it("should change pendingOperator into +, waitingForOperand into false ", () => {
    expect(
      Reducer.CalculatorReducer(Context.initCalculatorState, {
        type: "operator",
        payload: { operator: "+" },
      })
    ).toEqual({
      ...Context.initCalculatorState,
      pendingOperator: "+",
    });
  });

  it("should change result && display to 2 when calculate 1+1 =  ", () => {
    expect(
      Reducer.CalculatorReducer(
        {
          display: "1",
          pendingOperator: "+",
          result: 1,
          waitingForOperand: false,
        },
        {
          type: "equal",
        }
      )
    ).toEqual({
      ...Context.initCalculatorState,
      display: "2",
      result: 2,
    });
  });

  it("should change result && display to 0 when calculate 1-1 =  ", () => {
    expect(
      Reducer.CalculatorReducer(
        {
          display: "1",
          pendingOperator: "-",
          result: 1,
          waitingForOperand: false,
        },
        {
          type: "equal",
        }
      )
    ).toEqual({
      ...Context.initCalculatorState,
      display: "0",
      result: 0,
    });
  });

  it("should change result && display to 6 when calculate 3x2 = ", () => {
    expect(
      Reducer.CalculatorReducer(
        {
          display: "2",
          pendingOperator: "×",
          result: 3,
          waitingForOperand: false,
        },
        {
          type: "equal",
        }
      )
    ).toEqual({
      ...Context.initCalculatorState,
      display: "6",
      result: 6,
    });
  });

  it("should change result && display to 3 when calculate 9÷3 = ", () => {
    expect(
      Reducer.CalculatorReducer(
        {
          display: "3",
          pendingOperator: "÷",
          result: 9,
          waitingForOperand: false,
        },
        {
          type: "equal",
        }
      )
    ).toEqual({
      ...Context.initCalculatorState,
      display: "3",
      result: 3,
    });
  });

  it("should change display into Can't divine 0 when divine 0 ", () => {
    expect(
      Reducer.CalculatorReducer(
        {
          display: "0",
          pendingOperator: "÷",
          result: 0,
          waitingForOperand: false,
        },
        {
          type: "equal",
        }
      )
    ).toEqual({
      ...Context.initCalculatorState,
      display: "Can't divine 0",
    });
  });

  it("Reducer changes stateprop1 from false to true", () => {
    const { getByText } = render(<App />);

    expect(getByText(/0/i).textContent).toBe("0");
  });
});
