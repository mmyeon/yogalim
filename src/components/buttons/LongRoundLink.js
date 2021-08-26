import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../../styles/constant";

const StyledLink = styled(Link)`
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

const LongRoundLink = ({ to, title, onClick }) => {
  return (
    <StyledLink to={to} onClick={onClick}>
      {title}
    </StyledLink>
  );
};

export default LongRoundLink;
