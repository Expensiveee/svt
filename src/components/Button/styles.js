import styled, { keyframes } from "styled-components";
import { v } from "../../styles/variables";

const rippleEffect = keyframes`
 0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

export const ButtonContent = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (!width ? "100%" : width)};
  min-height: ${({ height }) => (!height ? "auto" : height)};
  max-height: ${({ height }) => (!height ? "auto" : height)};
  padding: ${({ padding }) => (!padding ? "" : padding)};
  margin: ${({ margin }) => (!margin ? "" : margin)};
  border-radius: ${({ radius }) => (!radius ? "4px" : radius)};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  position: relative;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  transition: box-shadow 200ms ease-in-out;
  text-align: center;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }
`;

export const Ripple = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: rgba(255, 255, 255, 0.8);
    animation-name: ripple;
    animation-duration: 700ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;