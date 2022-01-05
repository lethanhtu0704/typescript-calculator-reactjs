import { ReactNode, useReducer } from "react";
import CalculatorContext, {
  initCalculatorState,
} from "../Context/CalculatorContext";
import CalculatorReducer from "../Reducer/CalculatorReducer";

interface CalculatorContextProps {
  children: ReactNode;
}

const CalculatorContextProvider = ({ children }: CalculatorContextProps) => {
  const [state, dispatch] = useReducer(CalculatorReducer, initCalculatorState);
  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
