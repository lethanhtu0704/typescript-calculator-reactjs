 import { Digit, Operator } from "../types/Type";

export type CalculatorAction =
  | { type: 'operator'; payload: { operator: Operator } }
  | { type: "digit" ; payload: { digit: Digit } }
  | { type: "equal"}
  | { type: "sign"}
  | {type:"point"}
  | {type:"back"}



// export enum ActionKind {
//   operator = 'operator',
//   digit = 'digit',
//   equal = 'equal',
//   sign = 'sign',
//   point = 'point',
//   back = 'back',
// }


// export type CalculatorAction =
//   | { type: ActionKind.operator; payload: { operator: Operator } }
//   | { type: ActionKind.digit ; payload: { digit: Digit } }
//   | { type: ActionKind.equal}
//   | { type: ActionKind.sign}
//   | {type:ActionKind.point}
//   | {type:ActionKind.back}

