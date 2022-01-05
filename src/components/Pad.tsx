import { useContext } from "react";
import styled from "styled-components";
import CalculatorContext from "../Context/CalculatorContext";
import { Digit, Operator } from "../types/Type";
import { Button } from "./Button";

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`;

const Pad = () => {
  let { state, dispatch } = useContext(CalculatorContext);
  console.log(state);
  const onDigitButtonClick = (digit: Digit) => {
    dispatch({ type: "digit", payload: { digit } });
  };

  const onOperatorButtonClick = (operator: Operator) => {
    dispatch({ type: "operator", payload: { operator } });
  };

  const onEqualButtonClick = () => {
    dispatch({ type: "equal" });
  };

  const onChangeSignButtonClick = () => {
    dispatch({ type: "sign" });
  };

  const onClearAllButtonClick = () => {
    dispatch({});
  };

  const onPointButtonClick = () => {
    dispatch({ type: "point" });
  };

  const onBackButtonClick = () => {
    dispatch({ type: "back" });
  };

  return (
    <StyledPad>
      <Button onClick={onClearAllButtonClick} color="red" noBorder={true}>
        AC
      </Button>
      <Button onClick={onBackButtonClick}>
        <i className="fas fa-backspace"></i>
      </Button>
      <Button onClick={onChangeSignButtonClick}>-/+</Button>
      <Button
        onClick={() => onOperatorButtonClick("÷")}
        noBorder={true}
        color="hightlight"
      >
        ÷
      </Button>
      <Button onClick={() => onDigitButtonClick(7)}>7</Button>
      <Button onClick={() => onDigitButtonClick(8)}>8</Button>
      <Button onClick={() => onDigitButtonClick(9)}>9</Button>
      <Button
        onClick={() => onOperatorButtonClick("×")}
        noBorder={true}
        color="hightlight"
      >
        ×
      </Button>
      <Button onClick={() => onDigitButtonClick(4)}>4</Button>
      <Button onClick={() => onDigitButtonClick(5)}>5</Button>
      <Button onClick={() => onDigitButtonClick(6)}>6</Button>
      <Button
        onClick={() => onOperatorButtonClick("-")}
        noBorder={true}
        color="hightlight"
      >
        -
      </Button>
      <Button onClick={() => onDigitButtonClick(1)}>1</Button>
      <Button onClick={() => onDigitButtonClick(2)}>2</Button>
      <Button onClick={() => onDigitButtonClick(3)}>3</Button>
      <Button
        onClick={() => onOperatorButtonClick("+")}
        noBorder={true}
        color="hightlight"
      >
        +
      </Button>
      <Button onClick={() => onDigitButtonClick(0)}>0</Button>
      <Button onClick={onPointButtonClick}>.</Button>
      <Button
        onClick={onEqualButtonClick}
        noBorder={true}
        color="green"
        isLarge={true}
      >
        =
      </Button>
    </StyledPad>
  );
};

export default Pad;
