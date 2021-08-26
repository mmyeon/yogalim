import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

const StyledButton = styled(Link)`
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

const SquareButton = ({ to, text, backgroundColor }) => {
  return (
    <StyledButton to={to} backgroundColor={backgroundColor}>
      {text}
    </StyledButton>
  );
};

export default SquareButton;
