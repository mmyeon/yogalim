import React from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";

const StyledLongRoundButton = styled.button`
  color: ${COLORS.black};
  background: ${COLORS.white};
  border: none;
  padding: 0.6em 5em;
  border-radius: 4em;
  font-size: 1.1em;
  font-weight: ${FONT_WEIGHT.semiBold};
  font-family: ${FONT_FAMILY.korean};
  letter-spacing: 2px;
`;

const LongRoundButton = ({ title, onClick }) => {
  return (
    <StyledLongRoundButton className="long-round-btn" onClick={onClick}>
      {title}
    </StyledLongRoundButton>
  );
};

export default LongRoundButton;
