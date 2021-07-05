import React from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";

const StyledSquareButton = styled.button`
  width: 1.8em;
  height: 1.8em;
  color: ${COLORS.white};
  font-family: ${FONT_FAMILY.korean};
  font-weight: ${FONT_WEIGHT.bold};
  background: #4fe8aa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const SquareButton = ({ number, onClick, value }) => {
  return (
    <StyledSquareButton onClick={onClick} value={value}>
      {number}
    </StyledSquareButton>
  );
};

export default SquareButton;
