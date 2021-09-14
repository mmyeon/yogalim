import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FONT_FAMILY, FONT_WEIGHT } from "../../styles/constant";

const StyledButton = styled(Link)`
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: ${FONT_WEIGHT.semiBold};
  letter-spacing: 2px;
  padding: 0.75em 1.5em;
  font-family: ${FONT_FAMILY.korean};
  display: inline-block;
`;

const Button = ({ to, text, backgroundColor, color, onClick }) => {
  return (
    <StyledButton
      className="button"
      to={to}
      onClick={onClick}
      style={{
        color,
        backgroundColor,
      }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
