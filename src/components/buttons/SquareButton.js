import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

const StyledLink = styled(Link)`
  color: ${COLORS.white};
  padding: 0.8em 0.9em;
  border-radius: 8px;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  font-weight: ${FONT_WEIGHT.bold};
`;

const SquareButton = ({ to, text, backgroundColor }) => {
  return (
    <StyledLink to={to} style={{ backgroundColor }}>
      {text}
    </StyledLink>
  );
};

export default SquareButton;
