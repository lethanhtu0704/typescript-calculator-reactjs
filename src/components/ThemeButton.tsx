import styled from "styled-components";

// export const ThemeButton = styled.button<ButtonProps>`

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  padding: 10px 25px;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.color};
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5px 0.5px 4px 0.2px ${(props) => props.theme.buttonColor};
  transition: all 1.5s ease 0s ${(props) => props.theme.buttonColor};
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${(props) => props.theme.greenColor};
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

// export type ButtonProps = {
//   onClick?: () => void; // to handle onClick functions
//   children?: React.ReactNode; // make the component able to receive children elements

//   //disabled?: boolean; // make the button disabled or not
// };

// export const TestButton = ({ onClick, children }: ButtonProps) => {
//   return <ThemeButton onClick={onClick}>{children}</ThemeButton>;
// };
