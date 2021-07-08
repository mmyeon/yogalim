import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constant";

const StyledCard = styled.section`
  margin-top: 1em;
  margin-bottom: 1.5em;
  background: ${COLORS.white};
  border-radius: 10px;
  padding: 1em 0;
`;

const Card = ({ children }) => {
  // TODO: card 타이틀 추가
  return <StyledCard className="card">{children}</StyledCard>;
};

export default Card;
