import { createContext } from "react";
import { Operator } from "../types/Type";

export interface CalculatorState {
  result: number;
  display: string;
  waitingForOperand: boolean;
  pendingOperator: Operator;
}

export const initCalculatorState: CalculatorState = {
  result: 0,
  display: "0",
  waitingForOperand: true,
  pendingOperator: undefined,
};

export interface CalculatorContextModel {
  state: CalculatorState;
  dispatch: any;
}

const CalculatorContext = createContext<CalculatorContextModel>({
  state: initCalculatorState,
  dispatch: null,
});

export default CalculatorContext;
