import styled, { css } from "styled-components";

interface ButtonProps {
  color?: "red" | "green" | "hightlight";
  isLarge?: boolean;
  onClick?: () => void;
  noBorder?: boolean;
}

const colorToCss = (color: ButtonProps["color"]) => {
  switch (color) {
    case "red":
      return css`
        background-color: #c04444;
        color: #fff;
        &:hover,
        &:focus {
          background-color: #af3b3b;
        }
      `;
    case "green":
      return css`
        background-color: ${(props) => props.theme.greenColor};
        color: ${(props) => props.theme.color};
        &:hover,
        &:focus {
          background-color: #016d38;
        }
      `;
    case "hightlight":
      return css`
        background-color: ${(props) => props.theme.hightlightColor};
        color: #ff8510;
        font-size: 1.2rem;
        &:hover,
        &:focus {
          background-color: ${(props) => props.theme.buttonHover};
        }
      `;
    default:
      return css`
        /* background-color: #272727;
        color: #c5830d; */

        background-color: ${(props) => props.theme.buttonColor};
        color: ${(props) => props.theme.color};
        &:hover,
        &:focus {
          background-color: ${(props) => props.theme.buttonHover};
        }
      `;
  }
};

const CaculatorButton = styled.button<ButtonProps>`
  border: 1px solid ${(props) => props.theme.buttonBorder};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transform: translate3d(20, 60, 0);
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-end: span 2;
    `}
  ${({ noBorder }) =>
    noBorder &&
    css`
      border: 0px;
    `}
  &:focus {
    outline: 0;
  }
  :after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 1s;
  }
  :active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  isLarge,
  onClick,
  noBorder,
}) => {
  return (
    <CaculatorButton
      noBorder={noBorder}
      color={color}
      isLarge={isLarge}
      onClick={onClick}
    >
      {children}
    </CaculatorButton>
  );
};
