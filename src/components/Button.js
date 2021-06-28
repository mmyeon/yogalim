import React from "react";
import styled from "styled-components";
import { FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";

const StyledButton = styled.button`
  color: white;
  font-family: ${FONT_FAMILY.korean};
  padding: 0.8em 0.9em;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.backgroundColor};
  font-size: 1.2em;
  cursor: pointer;
  font-weight: ${FONT_WEIGHT.bold};
  margin-right: 0.2em;
`;

const Button = ({ text, backgroundColor }) => {
  return <StyledButton backgroundColor={backgroundColor}>{text}</StyledButton>;
};

export default Button;
