import React from "react";
import styled from "styled-components";
import { FONT_FAMILY, FONT_WEIGHT } from "../styles/constant";

const StyledLongRoundButton = styled.button`
  background: white;
  border: none;
  padding: 0.8em 6em;
  border-radius: 4em;
  position: absolute;
  bottom: 3.5em;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.1em;
  font-weight: ${FONT_WEIGHT.semiBold};
  font-family: ${FONT_FAMILY.korean};
  letter-spacing: 2px;
`;

const LongRoundButton = ({ title }) => {
  return <StyledLongRoundButton>{title}</StyledLongRoundButton>;
};

export default LongRoundButton;
