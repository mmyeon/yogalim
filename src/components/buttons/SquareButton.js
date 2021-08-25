import React from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

const StyledButton = styled.button`
  color: ${COLORS.white};
  padding: 0.8em 0.9em;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.backgroundColor};
  font-size: 1.2em;
  cursor: pointer;
  font-weight: ${FONT_WEIGHT.bold};
  margin-right: 0.2em;
`;

const SquareButton = ({ text, backgroundColor }) => {
  return <StyledButton backgroundColor={backgroundColor}>{text}</StyledButton>;
};

export default SquareButton;
