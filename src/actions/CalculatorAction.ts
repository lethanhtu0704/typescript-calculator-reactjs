import { Digit, Operator } from "../types/Type";

export type CalculatorAction =
  | { type: "operator"; payload: { operator: Operator } }
  | { type: "digit" ; payload: { digit: Digit } }
  | { type: "equal"}
  | { type: "sign"}
  | {type:"point"}
  | {type:"back"}
