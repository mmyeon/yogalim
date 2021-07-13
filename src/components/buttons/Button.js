import React from "react";
import styled from "styled-components";
import { FONT_FAMILY, FONT_WEIGHT } from "../../styles/constant";

const StyledButton = styled.button`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: ${FONT_WEIGHT.semiBold};
  letter-spacing: 2px;
  padding: 0.75em 1.75em;
  font-family: ${FONT_FAMILY.korean};
`;

const Button = ({ text, backgroundColor, color }) => {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor}>
      {text}
    </StyledButton>
  );
};

export default Button;
