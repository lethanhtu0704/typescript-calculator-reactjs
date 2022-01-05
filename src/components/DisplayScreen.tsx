import { useContext } from "react";
import styled from "styled-components";
import CalculatorContext from "../Context/CalculatorContext";

// interface DisplayProps {
//   expression: string;
//   value: string;
// }

const StyleScreen = styled.div`
  font-size: clamp(2rem, 2.5vw, 3rem);
  min-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

const StyledDisplay = styled.div`
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`;

const StyledExpression = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.75em;
  line-height: 1;
  opacity: 0.4;
  min-height: 1em;
`;

export const Screen = () => {
  let { state } = useContext(CalculatorContext);

  return (
    <StyledDisplay>
      <StyledExpression>
        {/* {typeof state.pendingOperator !== "undefined"
          ? `${state.result}${state.pendingOperator}${
              state.waitingForOperand ? "" : state.display
            }`
          : ""} */}

        {`${
          state.result != 0 || typeof state.pendingOperator !== "undefined"
            ? state.result
            : ""
        }${
          typeof state.pendingOperator !== "undefined"
            ? state.pendingOperator
            : ""
        }${state.waitingForOperand ? "" : state.display}`}
      </StyledExpression>
      <StyleScreen>{state.display}</StyleScreen>
    </StyledDisplay>
  );
};

export default Screen;
